import {Signal} from "use-signal";

import {useEffect, useRef} from "@hydrophobefireman/ui-lib";

export function useSignal<T = any>(
  signal: Signal,
  listener: (e: CustomEvent<T>) => void
) {
  const ref = useRef(listener);
  ref.current = listener;
  useEffect(() => {
    function cb(e: CustomEvent<T>) {
      ref.current?.(e);
    }
    window.addEventListener(signal.name, cb);
    return () => window.removeEventListener(signal.name, cb);
  }, []);
}
