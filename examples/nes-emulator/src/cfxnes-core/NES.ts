import {log, Region} from './common';
import {CPUMemory, PPUMemory, DMA, createMapper} from './memory';
import {PPU, packColor, BLACK_COLOR, VIDEO_HEIGHT, VIDEO_WIDTH} from './video';
import {CPU, Interrupt} from './proc';
import {APU} from './audio';
import Mapper from './memory/mappers/Mapper';
import { Cartridge } from './cartridge/create';
import display from 'display';

export default class NES {
  cpu: CPU;
  ppu: PPU;
  apu: APU;
  dma: DMA;
  cpuMemory: CPUMemory;
  ppuMemory: PPUMemory;
  cartridge: Cartridge | null;
  mapper: Mapper | null;
  region: null;

  constructor(units: {
    cpu?: CPU;
    ppu?: PPU;
    apu?: APU;
    dma?: DMA;
    cpuMemory?: CPUMemory;
    ppuMemory?: PPUMemory;
  } = {}) {
    log.info('Initializing NES');

    this.cpu = units.cpu || new CPU;
    this.ppu = units.ppu || new PPU;
    this.apu = units.apu || new APU;
    this.dma = units.dma || new DMA;
    this.cpuMemory = units.cpuMemory || new CPUMemory;
    this.ppuMemory = units.ppuMemory || new PPUMemory;

    this.cartridge = null;
    this.mapper = null;
    this.region = null;

    this.connectUnits();
    this.applyRegion();
  }

  //=========================================================
  // Units
  //=========================================================

  connectUnits() {
    this.cpu.connect(this);
    this.ppu.connect(this);
    this.apu.connect(this);
    this.dma.connect(this);
    this.cpuMemory.connect(this);
  }

  resetUnits() {
    this.cpuMemory.reset();
    this.ppuMemory.reset();
    this.mapper.reset(); // Must be done after memory
    this.ppu.reset();
    this.apu.reset();
    this.dma.reset();
    this.cpu.reset(); // Must be done last
  }

  //=========================================================
  // Region
  //=========================================================

  setRegion(region) {
    this.region = region;
    this.applyRegion();
  }

  getRegion() {
    return this.region;
  }

  getUsedRegion() {
    return this.region || (this.cartridge && this.cartridge.region) || Region.NTSC;
  }

  applyRegion() {
    log.info('Updating region parameters');
    const region = this.getUsedRegion();
    const params = Region.getParams(region);

    log.info(`Detected region: "${region}"`);
    this.ppu.setRegionParams(params);
    this.apu.setRegionParams(params);
  }

  //=========================================================
  // Cartridge
  //=========================================================

  setCartridge(cartridge) {
    if (this.cartridge) {
      log.info('Removing current cartridge');
      if (this.mapper) { // Does not have to be present in case of error during mapper creation.
        this.mapper.disconnect();
        this.mapper = null;
      }
      this.cartridge = null;
    }
    if (cartridge) {
      log.info('Inserting cartridge');
      this.cartridge = cartridge;
      this.mapper = createMapper(cartridge);
      this.mapper.connect(this);
      this.applyRegion();
      this.power();
    }
  }

  getCartridge() {
    return this.cartridge;
  }

  //=========================================================
  // Reset
  //=========================================================

  power() {
    if (this.cartridge) {
      this.resetUnits();
    }
  }

  reset() {
    this.cpu.activateInterrupt(Interrupt.RESET);
  }

  //=========================================================
  // Input devices
  //=========================================================

  setInputDevice(port, device) {
    const oldDevice = this.cpuMemory.getInputDevice(port);
    if (oldDevice) {
      oldDevice.disconnect();
    }
    this.cpuMemory.setInputDevice(port, device);
    if (device) {
      device.connect(this);
    }
  }

  getInputDevice(port) {
    return this.cpuMemory.getInputDevice(port);
  }

  //=========================================================
  // Video output
  //=========================================================

  setPalette(palette) {
    this.ppu.setBasePalette(palette);
  }

  getPalette() {
    return this.ppu.getBasePalette();
  }

  renderFrame(buffer) {
    if (this.cartridge) {
      this.ppu.setFrameBuffer(buffer);
      while (!this.ppu.isFrameAvailable()) {
        this.cpu.step();
      }
    } else {
      this.renderWhiteNoise(buffer);
    }
  }

  renderDebugFrame(buffer) {
    if (this.cartridge) {
      this.ppu.setFrameBuffer(buffer);
      this.ppu.renderDebugFrame();
    } else {
      this.renderEmptyFrame(buffer);
    }
  }

  renderWhiteNoise(buffer) {
    for (let y = 0; y < 135; y++) {
      for (let x = 0; x < 240; x++) {
        // Calculate the index in the original buffer
        let i = y * VIDEO_WIDTH + x; // Skip the extra width pixels
        const singleColor = (random(0, 256));
        let color = ((singleColor & 0xF8) << 8) | ((singleColor & 0xFC) << 3) | (singleColor >> 3);
        display.drawPixel(x, y, color);
      }
    }
  }

  renderEmptyFrame(buffer) {
    buffer.fill(BLACK_COLOR);
  }

  //=========================================================
  // Audio output
  //=========================================================

  setAudioSampleRate(rate) {
    this.apu.setSampleRate(rate);
  }

  getAudioSampleRate() {
    return this.apu.getSampleRate();
  }

  setAudioCallback(callback) {
    this.apu.setCallback(callback);
  }

  getAudioCallback() {
    return this.apu.getCallback();
  }

  setAudioVolume(channel, volume) {
    this.apu.setVolume(channel, volume);
  }

  getAudioVolume(channel) {
    return this.apu.getVolume(channel);
  }

  //=========================================================
  // Non-volatile RAM
  //=========================================================

  getNVRAM() {
    return this.mapper ? this.mapper.getNVRAM() : null;
  }

}
