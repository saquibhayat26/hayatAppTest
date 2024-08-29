import { Dimensions, StyleSheet, View } from "react-native";
import Animated from "react-native-reanimated";
import { ThemedText } from "../ThemedText";
import { ThemedView } from "../ThemedView";
import {
  GestureHandlerRootView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import { useThemeColor } from "@/hooks/useThemeColor";

const { height, width } = Dimensions.get("window");

export type CustomMenuProps = {
  icon?: any;
  type?: "default" | "dynamic";
  style?: any;
  title: string;
  subtitle?: string;
  lightColor?: string;
  darkColor?: string;
  onPress?: () => void;
};

const CARD_WIDTH = width * 0.84;
const CARD_ASPECT_RATIO = 40 / 38;
const CARD_HEIGHT = CARD_WIDTH * CARD_ASPECT_RATIO;
const CARD_BORDER_RADIUS = 16;

export function CustomMenu({
  icon,
  style,
  title,
  type,
  lightColor,
  darkColor,
  subtitle,
  onPress,
}: CustomMenuProps) {
  const borderColor = useThemeColor(
    {
      light: lightColor,
      dark: darkColor,
    },
    "borderColor"
  );
  return (
    <GestureHandlerRootView>
      <TouchableOpacity onPress={onPress}>
        <View
          style={[
            style,
            type === "default" ? styles.container : undefined,
            { borderColor: borderColor },
          ]}
        >
          <ThemedText type="title">{title}</ThemedText>
          <ThemedText type="subtitle">{subtitle}</ThemedText>
        </View>
      </TouchableOpacity>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT / 2,
    borderRadius: CARD_BORDER_RADIUS,
    borderWidth: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
