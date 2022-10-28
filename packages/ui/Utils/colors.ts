import Color from "color"

export type UiColor = {
  text: string
  background: string
  main: string
}

export const getUiColors = (base: string): UiColor => {
  const c = Color(base)

  const text = (c.hsl().color[2] > 63) ? c.darken(0.35).desaturate(0.5).saturate(0.1) : "#FFF"
  const background =  c.lightness(60).desaturate(0.3).lighten(0.5)

  return {
    main: base,
    text,
    background
  }
}