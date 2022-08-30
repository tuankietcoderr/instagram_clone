import { View, Text, ScrollView, Image } from "react-native";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";

const StoryBar = () => {
  const data = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="gap-4 py-2 px-4"
      >
        <View>
          <View className="relative">
            <Image
              source={require("../../assets/Instagram_logo_2016.svg.webp")}
              className="w-[60px] h-[60px] rounded-full"
              style={{ borderWidth: 1, borderColor: "gray" }}
            />
            <View className="absolute bottom-0 right-0 bg-white rounded-full p-[1px]">
              <FontAwesomeIcon icon={faPlusCircle} color="#0095F6" size={18} />
            </View>
          </View>
          <Text className="text-center mt-1">Your story</Text>
        </View>
        {data.map((test) => (
          <View key={test}>
            <Image
              source={require("../../assets/Instagram_logo_2016.svg.webp")}
              className="w-[60px] h-[60px] rounded-full p-4 bg-white"
              style={{
                borderColor: "red",
                borderWidth: 2,
              }}
            />
            <Text className="text-center mt-1">{test}</Text>
          </View>
        ))}
      </ScrollView>
      <View className="border-b border-gray-400" />
    </>
  );
};

export default StoryBar;
