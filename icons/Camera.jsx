import { View, Text, Image } from "react-native";
import React from "react";

const Camera = (props) => {
  return (
    <Image
      source={{
        uri: "https://img.icons8.com/fluency-systems-regular/344/camera.png",
      }}
      style={{
        ...props,
      }}
    />
  );
};

export default Camera;
