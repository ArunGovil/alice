export type Font = {
  family: FontFamily;
  weight: FontWeight;
  size: FontSize;
  lineHeight: LineHeight;
};

export type FontFamily = Readonly<{
  text: string;
  mono: string;
}>;

export type FontWeight = Readonly<{
  regular: number;
  medium: number;
  bold: number;
}>;

export type FontSize = Readonly<{
  10: number;
  12: number;
  14: number;
  16: number;
  20: number;
  24: number;
  28: number;
  32: number;
}>;

export type LineHeight = Readonly<{
  12: number;
  16: number;
  20: number;
  24: number;
  30: number;
  36: number;
  40: number;
  48: number;
}>;

// Font Tokens

export const font: Font = {
  family: {
    text: "'Times New Roman', serif",
    mono: "'Roboto Mono', monospace",
  },
  weight: {
    regular: 400,
    medium: 600,
    bold: 800,
  },
  size: {
    10: 10,
    12: 12,
    14: 14,
    16: 16,
    20: 20,
    24: 24,
    28: 28,
    32: 32,
  },
  lineHeight: {
    12: 12,
    16: 16,
    20: 20,
    24: 24,
    30: 30,
    36: 36,
    40: 40,
    48: 48,
  },
} as const;
