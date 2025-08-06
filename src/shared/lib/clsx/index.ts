export type MODS_CLSX = Record<string, boolean>;

export function clsx(classNames: string[] = [], mods: MODS_CLSX = {}): string {
  return [
    ...classNames.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, val]) => Boolean(val))
      .map(([key]) => key),
  ]
    .join(" ")
    .trim();
}
