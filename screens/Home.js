import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faChevronDown, faPlus } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";
import { TouchableOpacity } from "react-native";
import { Messenger, PlusSquare, UserGroup } from "../icons";
import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const navigation = useNavigation();

  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <View className="flex-row justify-between bg-white px-4 relative">
        <View className="flex-row items-center">
          <Image
            source={require("../assets/Instagram_text_logo.svg.png")}
            className="w-[120px] h-[60px]"
            resizeMode="contain"
          />
          <TouchableOpacity onPress={() => setModalOpen(!modalOpen)}>
            <FontAwesomeIcon icon={faChevronDown} size={14} />
          </TouchableOpacity>
        </View>
        <View className="flex-row items-center gap-6">
          <TouchableOpacity>
            <PlusSquare width={24} height={24} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate("Message")}>
            <Messenger width={24} height={24} />
          </TouchableOpacity>
        </View>
        {modalOpen && <ClickedModal />}
      </View>
    </>
  );
};

export default Home;

const ClickedModal = () => {
  return (
    <View className="absolute top-[100%] left-4 bg-white rounded-md w-[150px] border-gray-200 border">
      <TouchableOpacity className="flex-row justify-between p-2 border-b border-gray-200">
        <Text>Following</Text>
        <UserGroup width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row p-2 justify-between">
        <Text>Favorites</Text>
        <FontAwesomeIcon icon={faStar} size={20} />
      </TouchableOpacity>
    </View>
  );
};
