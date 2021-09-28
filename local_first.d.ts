/* tslint:disable */
/* eslint-disable */
/**
*/
export function start(): void;
/**
* @returns {string}
*/
export function helloWorld(): string;
/**
*/
export class LocalFirst {
  free(): void;
/**
* @returns {Promise<LocalFirst>}
*/
  static init(): Promise<LocalFirst>;
/**
* @returns {Promise<void>}
*/
  doSomething(): Promise<void>;
/**
* @returns {Promise<any>}
*/
  doSomethingElse(): Promise<any>;
/**
* @param {string} addr
* @returns {Promise<any>}
*/
  dial(addr: string): Promise<any>;
}

export type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

export interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly start: () => void;
  readonly helloWorld: (a: number) => void;
  readonly __wbg_localfirst_free: (a: number) => void;
  readonly localfirst_init: () => number;
  readonly localfirst_doSomething: (a: number) => number;
  readonly localfirst_doSomethingElse: (a: number) => number;
  readonly localfirst_dial: (a: number, b: number, c: number) => number;
  readonly __wbindgen_malloc: (a: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number) => number;
  readonly __wbindgen_export_2: WebAssembly.Table;
  readonly _dyn_core__ops__function__FnMut__A____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__h44fda599ff0efef1: (a: number, b: number, c: number) => void;
  readonly _dyn_core__ops__function__FnMut_____Output___R_as_wasm_bindgen__closure__WasmClosure___describe__invoke__he856b03d0c3c4011: (a: number, b: number) => void;
  readonly __wbindgen_free: (a: number, b: number) => void;
  readonly __wbindgen_exn_store: (a: number) => void;
  readonly wasm_bindgen__convert__closures__invoke2_mut__h79892c56d3ed0fde: (a: number, b: number, c: number, d: number) => void;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_start: () => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {InitInput | Promise<InitInput>} module_or_path
*
* @returns {Promise<InitOutput>}
*/
export default function init (module_or_path?: InitInput | Promise<InitInput>): Promise<InitOutput>;
