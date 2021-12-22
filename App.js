import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import { Text } from "react-native";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";
import { Asset } from "expo-asset";
import Tabs from "./navigation/Tabs";
import { NavigationContainer } from "@react-navigation/native";
import Root from "./navigation/Root";

const loadFonts = (fonts) => fonts.map((font) => Font.loadAsync(font));
const loadImages = (images) =>
  images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return image.loadAsync(image);
    }
  });

export default function App() {
  const [ready, setReady] = useState(false);
  const onFinish = () => {
    setReady(true);
  };
  const startLoading = async () => {
    const fonts = loadFonts([Ionicons.font]);
    const images = loadImages([]);
    console.log(fonts, images);
    await Promise.all([...fonts, ...images]);
  };
  if (!ready) {
    return (
      <AppLoading
        startAsync={startLoading}
        onFinish={onFinish}
        onError={console.log}
      />
    );
  }
  return (
    <NavigationContainer>
      <Root />
    </NavigationContainer>
  );
}
