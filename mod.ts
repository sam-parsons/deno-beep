import { delay } from './deps.ts';

function beep() {
  Deno.stdout.write(new TextEncoder().encode('\u0007'));
}

export default async function beeper(
  numberPattern?: number | string,
  delayTime: number = 500
): Promise<any> {
  // handle user supplied flags
  if (Deno.args.includes('--no-beep')) {
    return;
  }

  // handle if first arg is number
  if (typeof numberPattern === 'number') {
    for (let i = 0; i < numberPattern; i++) {
      await delay(delayTime);
      beep();
    }
    return;
  } else if (typeof numberPattern === 'string') {
    const patternArray = numberPattern.split('');
    if (patternArray[0] === '#') {
      beep();
    }
    delay(delayTime);
    patternArray.shift();
    if (patternArray[0]) {
      return beeper(patternArray.join(''), delayTime);
    } else {
      return;
    }
  } else {
    beep();
  }
}
