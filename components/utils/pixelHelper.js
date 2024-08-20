import { PixelRatio } from "react-native";

export function px(x) {
  return PixelRatio.getPixelSizeForLayoutSize(x);
}
