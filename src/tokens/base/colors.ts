export type ColorScale = Readonly<{
  25: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}>;

export type NeutralScale = Readonly<{
  0: string;
  1000: string;
}>;

export type ColorPalette = Readonly<{
  blue: ColorScale;
  red: ColorScale;
  green: ColorScale;
  grey: ColorScale;
  neutral: NeutralScale;
}>;

// Global Color Palette

const blue: ColorScale = {
  25: "#F3F8FF",
  50: "#DCEAFF",
  100: "#C4DCFF",
  200: "#ADCEFF",
  300: "#96C0FF",
  400: "#7FB2FF",
  500: "#458FFF",
  600: "#0B6DFF",
  700: "#0858CE",
  800: "#06439D",
  900: "#042E6D",
};

const red: ColorScale = {
  25: "#FFFBFA",
  50: "#FEF3F2",
  100: "#FEE4E2",
  200: "#FECDCA",
  300: "#FDA29B",
  400: "#F97066",
  500: "#F04438",
  600: "#D92D20",
  700: "#B42318",
  800: "#912018",
  900: "#7A271A",
};

const green: ColorScale = {
  25: "#F6FEF9",
  50: "#ECFDF3",
  100: "#D1FADF",
  200: "#A6F4C5",
  300: "#6CE9A6",
  400: "#32D583",
  500: "#12B76A",
  600: "#039855",
  700: "#027A48",
  800: "#05603A",
  900: "#054F31",
};

const grey: ColorScale = {
  25: "#FCFCFD",
  50: "#F9FAFB",
  100: "#F2F4F7",
  200: "#EAECF0",
  300: "#D0D5DD",
  400: "#98A2B3",
  500: "#667085",
  600: "#475467",
  700: "#344054",
  800: "#1D2939",
  900: "#101828",
};

const neutral: NeutralScale = {
  0: "#FFFFFF",
  1000: "#000000",
};

export const colors: ColorPalette = {
  red,
  green,
  blue,
  grey,
  neutral,
};
