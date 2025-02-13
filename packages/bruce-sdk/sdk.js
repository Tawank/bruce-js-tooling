// @ts-check
import { ReadlineParser, SerialPort } from 'serialport';
import { readFile } from 'node:fs/promises';
import prompts from 'prompts';
import esbuild from 'esbuild';
import googleClosure from 'google-closure-compiler';
import json5 from 'json5';

/** @type {(ms: number) => Promise<void>} */
const delay = async (ms) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  });

let serialReady = false;

/**
 * @type {(config: { output: string, minify: boolean, optimise: boolean }) => Promise<void>}
 * */
async function build(config) {
  await esbuild.build({
    entryPoints: ['./dist/index.js'],
    outfile: config.output,
    tsconfig: './tsconfig.json',
    format: 'cjs',
    bundle: true,
    treeShaking: true,
    lineLimit: config.minify ? 250 : undefined,
    minifyWhitespace: config.minify,
    minifyIdentifiers: config.minify,
    minifySyntax: false,
    target: 'es5',
    external: [
      'audio',
      'badusb',
      'device',
      'dialog',
      'display',
      'gpio',
      'ir',
      'keyboard',
      'notification',
      'serial',
      'storage',
      'subghz',
      'wifi',
    ],
    supported: {
      'array-spread': false,
      arrow: false,
      'async-await': false,
      'async-generator': false,
      bigint: false,
      class: false,
      'const-and-let': false,
      decorators: false,
      'default-argument': false,
      destructuring: false,
      'dynamic-import': false,
      'exponent-operator': false,
      'export-star-as': false,
      'for-await': false,
      'for-of': false,
      'function-name-configurable': false,
      'function-or-class-property-access': false,
      generator: false,
      hashbang: false,
      'import-assertions': false,
      'import-meta': false,
      'inline-script': false,
      'logical-assignment': false,
      'nested-rest-binding': false,
      'new-target': false,
      'node-colon-prefix-import': false,
      'node-colon-prefix-require': false,
      'nullish-coalescing': false,
      'object-accessors': false,
      'object-extensions': false,
      'object-rest-spread': false,
      'optional-catch-binding': false,
      'optional-chain': false,
      'regexp-dot-all-flag': false,
      'regexp-lookbehind-assertions': false,
      'regexp-match-indices': false,
      'regexp-named-capture-groups': false,
      'regexp-set-notation': false,
      'regexp-sticky-and-unicode-flags': false,
      'regexp-unicode-property-escapes': false,
      'rest-argument': false,
      'template-literal': false,
      'top-level-await': false,
      'typeof-exotic-object-is-object': false,
      'unicode-escapes': false,
      using: false,
    },
  });

  if (config.optimise) {
    await new Promise((resolve) => {
      new googleClosure.compiler({
        js: config.output,
        compilation_level: 'ADVANCED',
      }).run(() => resolve(null));
    });
  }
}

/**
 * @type {(config: { input: string, output: string }) => Promise<void>}
 * */
async function start(config) {
  /**
   * @type {Array<{
   *   path: string;
   *   manufacturer?: string;
   *   serialNumber?: string;
   *   pnpId?: string;
   *   locationId?: string;
   *   productId?: string;
   *   vendorId?: string;
   *   friendlyName?: string;
   * }>}
   * */
  const SerialPortDevices = await SerialPort.list(),
    m5Sticks = SerialPortDevices.filter(
      (device) =>
        device.friendlyName?.includes('CH9102') ||
        (device?.vendorId === '1A86' && device?.productId === '55D4'),
    );

  if (!m5Sticks.length) {
    console.log('Bruce devices not found');
    return;
  }

  let { path } = m5Sticks[0];
  if (m5Sticks.length > 1) {
    path = (
      await prompts([
        {
          type: 'select',
          name: 'port',
          message: 'Select Bruce device to run the app on',
          choices: m5Sticks.map((x) => ({ title: x.path, value: x.path })),
        },
      ])
    ).port;
  }

  const serialport = new SerialPort({
      path: path,
      baudRate: 115200,
    }),
    parser = serialport.pipe(new ReadlineParser());

  parser.on('data', (/** @type {string} */ data) => {
    console.log(data);
    if (data.includes('Serial connection ready to receive file data')) {
      serialReady = true;
    }
  });

  const script = await readFile(config.input, { encoding: 'utf8' });

  serialReady = false;
  serialport.write(`js run_from_buffer ${script.length}`);
  console.log('Waiting for connection');
  while (!serialReady) {
    await delay(10);
  }
  serialport.write(`${script}\nEOF`);
  console.log('JS file sent');
  serialport.read();
}

(async () => {
  const commands = {
      build,
      start,
      // Upload,
    },
    configFile = await readFile('./bruce-sdk.config.jsonc', 'utf8'),
    config = json5.parse(configFile),
    command = process.argv[2];

  if (!Object.keys(commands).includes(command)) {
    console.error(
      `Unknown command ${command}. Supported: ${Object.keys(commands).join(', ')}`,
    );
    process.exit(1);
  }

  await commands.build(config.build);
  if (command !== 'build') {
    await commands[command](config[command === 'start' ? 'upload' : command]);
  }
})();
