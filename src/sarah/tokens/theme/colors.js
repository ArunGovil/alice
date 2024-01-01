import { colors as globalColors } from "../global";

export const colors = {
  brand: {
    primary: globalColors.vibrant.blue[500],
    secondary: globalColors.vibrant.blue[200],
    grey: globalColors.neutral.grey[200],
  },
  surface: {
    solid: {
      white: globalColors.solid.white,
      black: globalColors.solid.black,
    },
    text: {
      normal: globalColors.neutral.grey[500],
      disabled: globalColors.neutral.grey[300],
    },
  },
  feedback: {
    error: globalColors.vibrant.red[400],
    success: globalColors.vibrant.green[400],
  },
};
