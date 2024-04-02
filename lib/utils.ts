import type { Color } from "../types/colors";

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function generateColors<T extends Color.Palettes, V extends Color.Variant>(
  palettes: T,
  variant: V
): Color.GeneratedColors<T, V> {
  const variantName = variant === "text" ? "text" : variant === "background" ? "bg" : "border";
  let generatedColors = {} as Color.GeneratedColors<T, V>;

  for (const paletteKey in palettes) {
    const palette = palettes[paletteKey];

    for (const shadeKey in palette) {
      const paletteName = capitalizeFirstLetter(paletteKey);
      const shadeName = capitalizeFirstLetter(shadeKey);
      const colorKey = `${variantName}${paletteName}${shadeName}` as keyof Color.GeneratedColors<
        T,
        V
      >;

      const propertyName =
        variant === "text" ? "color" : variant === "background" ? "backgroundColor" : "borderColor";

      generatedColors[colorKey] = {
        [propertyName]: palette[shadeKey],
      } as Color.GeneratedColors<T, V>[keyof Color.GeneratedColors<T, V>];
    }
  }

  return generatedColors;
}
