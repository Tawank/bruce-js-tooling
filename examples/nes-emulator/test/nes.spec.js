// @ts-check
import { describe, it, expect, beforeAll, vi } from "vitest";
import fs from "fs";
import NES from "../src/jsnes/nes";

describe("NES", () => {
  it("can be initialized", () => {
    const nes = new NES();
    expect(nes).toBeInstanceOf(NES);
  });

  it("loads a ROM and runs a frame", async () => {
    const onFrame = vi.fn();
    const nes = new NES({ onFrame });

    const data = await fs.promises.readFile("./test/croom.nes");
    nes.loadROM(data.toString("binary"));
    nes.frame();

    expect(onFrame).toHaveBeenCalledOnce();
    expect(Array.isArray(onFrame.mock.calls[0][0])).toBe(true);
    expect(onFrame.mock.calls[0][0]).toHaveLength(256 * 240);
  });

  it("generates the correct frame buffer", async () => {
    const onFrame = vi.fn();
    const nes = new NES({ onFrame });

    const data = await fs.promises.readFile("./test/croom.nes");
    nes.loadROM(data.toString("binary"));

    const expectedIndexes = [-1, -1, -1, 2056, 4104, 4104];
    for (let i = 0; i < 6; i++) {
      nes.frame();
      expect(onFrame.mock.lastCall?.[0].indexOf(0xFFFFFF)).toBe(expectedIndexes[i]);
    }
  });

  describe("#loadROM()", () => {
    it("throws an error given an invalid ROM", () => {
      const nes = new NES();
      expect(() => nes.loadROM("foo")).toThrowError("Not a valid NES ROM.");
    });
  });

  describe("#getFPS()", () => {
    const nes = new NES();

    beforeAll(async () => {
      const data = await fs.promises.readFile("./test/croom.nes");
      nes.loadROM(data.toString("binary"));
    });

    it("returns an FPS count when frames have been run", () => {
      expect(nes.getFPS()).toBeNull();
      nes.frame();
      nes.frame();
      const fps = nes.getFPS();
      expect(fps).toBeGreaterThan(0);
    });
  });
});