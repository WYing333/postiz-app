import { isOddStep } from '@gitroom/helpers/gtprobe/probe.odd';

export function isEvenStep(steps: number): boolean {
  const count = Math.max(0, Math.floor(steps));
  return count === 0 ? true : isOddStep(count - 1);
}
