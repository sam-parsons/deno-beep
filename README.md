# deno-beep

> Make Deno modules beep

## Usage

```js
import beep from "https://github.com/sam-parsons/deno-beep/blob/1a6cbe610a7706e67f1fd920a1af82436fd74f9f/mod.ts"

// single beep, 500ms delay default
await beeper();

// beep 4 times w. 1000ms delay
await beeper(4, 1000);

//play a pattern of beeps
await beeper('####-#-#');
```

## API

It will not beep if the user supplies the `--no-beep` flag.

### beeper(count?)
### beeper(pattern?)

Returns a `Promise<void>` that is resolved after beeping has ended.

#### count

Type: `number`\
Default: `1`

How many times you want it to beep.

#### pattern

Type: `string`

Construct your own pattern by supplying a string of `#` for beep `-` for pause.