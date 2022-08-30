import React from "react";
import { Image } from "react-native";

const VideoCall = (props) => {
  return (
    <Image
      source={{
        uri: "https://img.icons8.com/fluency-systems-regular/344/video-call.png",
      }}
      style={{
        ...props,
      }}
    />
  );
};

export default VideoCall;
