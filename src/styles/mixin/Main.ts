import { StyleSheet, ViewStyle } from "react-native";

import * as theme from "styles/colors";

interface MainStylesType {
  container: ViewStyle;
}

export default StyleSheet.create<MainStylesType>({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.BACKGROUND_COLOR
  }
});
