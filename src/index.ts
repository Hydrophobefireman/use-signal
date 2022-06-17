import {random} from "./util";

export interface Signal {
  name: string;
}

export function createSignal(name?: string) {
  name = name || random();
  return {name};
}

export function dispatchSignal(signal: Signal, detail?: any) {
  window.dispatchEvent(new CustomEvent(signal.name, {detail}));
}
