import React from "react";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

function cacheImages(images) {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}
function cacheFonts(fonts) {
  return fonts.map((font) => Font.loadAsync(font));
}

export { cacheFonts, cacheImages };
