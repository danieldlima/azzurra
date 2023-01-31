export function addClassName(className: string[] | string = '') {
  const classes = Array.isArray(className) ? className : [className];

  return ` ${classes.join(' ')} `;
}
