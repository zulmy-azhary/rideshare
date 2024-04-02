export namespace Color {
  type Palettes = {
    [key: string]: {
      [key: number | string]: string;
    };
  };

  type Variant = "text" | "background" | "border";

  type FirstWord<V extends Variant> = V extends "text"
    ? "text"
    : V extends "background"
    ? "bg"
    : V extends "border"
    ? "border"
    : never;

  type LastWord<T extends Palettes, K extends keyof T> = keyof T[K] extends string
    ? Capitalize<string & keyof T[K]>
    : keyof T[K] extends number
    ? keyof T[K]
    : never;

  type Property<V extends Variant> = V extends "text"
    ? "color"
    : V extends "background"
    ? "backgroundColor"
    : V extends "border"
    ? "borderColor"
    : never;

  type GeneratedColors<T extends Palettes, V extends Variant> = {
    [K in keyof T as `${FirstWord<V>}${Capitalize<string & K>}${LastWord<T, K>}`]: {
      readonly [P in Property<V>]: T[K][keyof T[K]];
    };
  };
}
