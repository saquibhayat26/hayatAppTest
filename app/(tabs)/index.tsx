import { Image, StyleSheet, Platform } from "react-native";
import ParallaxScrollView from "@/components/ParallaxScrollView";

import { ThemedView } from "@/components/ThemedView";
import { CustomMenu } from "@/components/custom_menu/CustomMenu";
import { router } from "expo-router";

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={
        <Image
          source={require("@/assets/images/partial-react-logo.png")}
          style={styles.reactLogo}
        />
      }
    >
      <ThemedView style={styles.cardContainer}>
        <CustomMenu
          type="default"
          title="FireBase"
          subtitle="let's get started with firebase"
          onPress={() => {
            router.push("/screens/learn_firebase/LearnFirebase.home");
          }}
        />
        <CustomMenu
          type="default"
          title="App 2"
          subtitle="let's get started with App 2"
          onPress={() => {
            router.push("/screens/learn_redux/LearnRedux.home");
          }}
        />
        <CustomMenu
          type="default"
          title="App 3"
          subtitle="let's get started with App 3"
        />
        <CustomMenu
          type="default"
          title="App 4"
          subtitle="let's get started with App 4"
        />
        <CustomMenu
          type="default"
          title="App 5"
          subtitle="let's get started with App 5"
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  cardContainer: {
    gap: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
