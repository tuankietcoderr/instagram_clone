import { View, Text, Image } from "react-native";
import React from "react";
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../util/screen-size";

const Loading = () => {
  return (
    <>
      <View
        className="items-center justify-center relative"
        style={{ width: SCREEN_WIDTH, height: SCREEN_HEIGHT }}
      >
        <Image
          source={require("../../assets/instagram_transparent.png")}
          className="w-[80px] h-[80px]"
        />
        <View className="absolute bottom-4">
          <Text className="text-center text-lg text-slate-400">from</Text>
          <Image
            source={require("../../assets/meta.png")}
            className="w-[131px] h-[42px]"
          />
        </View>
      </View>
    </>
  );
};

export default Loading;
