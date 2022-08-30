import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Camera } from "../../icons";
import BottomSheet from "../Modal/BottomSheet";

const UserMessageCard = () => {
  const [userHold, setUserHold] = useState(false);

  const [openModal, setOpenModal] = useState(false);
  const handleLongPress = () => {
    setOpenModal(true);
  };

  return (
    <>
      <TouchableOpacity
        onPressIn={() => setUserHold(true)}
        onLongPress={handleLongPress}
        onPressOut={() => setUserHold(false)}
        className={`px-4 py-2 ${
          userHold ? "bg-gray-200" : "bg-white"
        } flex-row justify-between items-center`}
      >
        <View className="flex-row gap-4 items-center">
          <Image
            source={require("../../assets/Instagram_logo_2016.svg.webp")}
            className="w-[45px] h-[45px] rounded-full"
          />
          <View>
            <Text>username</Text>
            <Text className="opacity-50">active status</Text>
          </View>
        </View>
        <Camera width={24} height={24} opacity={0.5} />
      </TouchableOpacity>
      {openModal && <BottomSheet />}
    </>
  );
};

export default UserMessageCard;
