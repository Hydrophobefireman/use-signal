# use-signal

simple hook to create and dispatch events across a react like app

# Usage

```ts
// signal.ts
import {createSignal} from "use-signal";

export const signal = createSignal(); // or createSignal("name");

// App.ts

import {signal} from "./signal";
import {useSignal} from "use-signal/react";
function App() {
  useSignal(signal, callback);
  //...
}
// somewhere else

import {dispatchSignal} from "use-signal";
import {signal} from "./signal";

dispatchSignal(signal); // callback is called in App.ts
```
