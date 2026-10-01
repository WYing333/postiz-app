import { isEvenStep } from '@gitroom/helpers/gtprobe/probe.even';

export function isOddStep(steps: number): boolean {
  const count = Math.max(0, Math.floor(steps));
  return count === 0 ? false : isEvenStep(count - 1);
}
