import {log, formatSize, describe} from '../common';
import parsers from './parsers';
import sha1 from './sha1';

export interface Cartridge {
  version: number;
  mirroring: string;
  region: string;
  mapper: any;
  submapper: string;
  prgROMSize: number;
  prgROM: any;
  prgRAMSize: number;
  prgRAMSizeBattery: number;
  chrROMSize: number;
  chrROM: any;
  chrRAMSize: number;
  chrRAMSizeBattery: number;
}

export default function createCartridge(data: string | any[] | Uint8Array) {
  log.info('Creating cartridge from ROM image');
  if (!(data instanceof Uint8Array)) {
    throw new Error('Invalid ROM image: ' + describe(data));
  }
  log.info(`Parsing ${formatSize(data.length)} of data`);
  for (const parser of parsers) {
    if (parser.supports(data)) {
      log.info(`Using "${parser.name}" parser`);
      const cartridge = parser.parse(data);
      computeSHA1(cartridge);
      printInfo(cartridge);
      return cartridge;
    }
  }
  throw new Error('Unknown ROM image format');
}

function computeSHA1(cartridge: { version?: number; mirroring?: string; region?: string; mapper?: any; submapper?: string; prgROMSize: any; prgROM: any; prgRAMSize?: number; prgRAMSizeBattery?: number; chrROMSize: any; chrROM: any; chrRAMSize?: number; chrRAMSizeBattery?: number; sha1?: any; }) {
  log.info('Computing SHA-1');
  const buffer = new Uint8Array(cartridge.prgROMSize + cartridge.chrROMSize);
  buffer.set(cartridge.prgROM);
  if (cartridge.chrROM) {
    buffer.set(cartridge.chrROM, cartridge.prgROMSize);
  }
  cartridge.sha1 = sha1(buffer);
}

function printInfo(cartridge: { version?: number; mirroring: any; region: any; mapper: any; submapper: any; prgROMSize: any; prgROM?: any; prgRAMSize: any; prgRAMSizeBattery: any; chrROMSize: any; chrROM?: any; chrRAMSize: any; chrRAMSizeBattery: any; sha1?: any; }) {
  log.info('==========[Cartridge Info - Start]==========');
  log.info('SHA-1                 : ' + cartridge.sha1);
  log.info('Mapper                : ' + cartridge.mapper);
  log.info('Submapper             : ' + cartridge.submapper);
  log.info('Region                : ' + cartridge.region);
  log.info('Mirroring             : ' + cartridge.mirroring);
  log.info('PRG ROM size          : ' + formatSize(cartridge.prgROMSize));
  log.info('PRG RAM size          : ' + formatSize(cartridge.prgRAMSize));
  log.info('PRG RAM size (battery): ' + formatSize(cartridge.prgRAMSizeBattery));
  log.info('CHR ROM size          : ' + formatSize(cartridge.chrROMSize));
  log.info('CHR RAM size          : ' + formatSize(cartridge.chrRAMSize));
  log.info('CHR RAM size (battery): ' + formatSize(cartridge.chrRAMSizeBattery));
  log.info('==========[Cartridge Info - End]==========');
}
