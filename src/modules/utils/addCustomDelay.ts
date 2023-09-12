export function addCustomDelay(
  name: string,
  delay = 0,
  unit: 's' | 'ms' = 's'
) {
  // wiggle_1s_ease-in-out_infinite
  return `${name}_${delay}${unit}_ease_0s_1_normal_forwards`;
}
