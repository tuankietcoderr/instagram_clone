import {
  faArrowLeft,
  faChevronDown,
  faPlus,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React, { useCallback, useRef } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { UserMessageCard } from "../components";
import { VideoCall } from "../icons";

const Message = () => {
  const navigation = useNavigation();
  const ref = useRef(null);
  const onPress = useCallback(() => {
    const isActive = ref?.current?.isActive();
    if (isActive) {
      ref?.current?.scrollTo(0);
    } else {
      ref?.current?.scrollTo(-200);
    }
  }, []);

  return (
    <>
      <ScrollView className="bg-white">
        {/* Header */}
        <View className="p-4 flex-row justify-between bg-white">
          <View className="flex-row gap-4 items-center">
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <FontAwesomeIcon icon={faArrowLeft} size={24} />
            </TouchableOpacity>
            <TouchableOpacity className="flex-row items-center gap-2">
              <Text className="font-bold text-lg">username</Text>
              <FontAwesomeIcon icon={faChevronDown} size={10} />
            </TouchableOpacity>
          </View>
          <View className="flex-row gap-4 items-center">
            <TouchableOpacity>
              <VideoCall width={26} height={26} />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesomeIcon icon={faPlus} size={24} />
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-white p-6">
          <TouchableOpacity className="flex-row items-center gap-4 px-2 bg-[#EFEFEF] rounded-xl">
            <FontAwesomeIcon icon={faSearch} color="#7D7D7D" />
            <Text className="text-[#7D7D7D] text-[16px]">Seach</Text>
          </TouchableOpacity>
        </View>
        <View className="bg-white p-4">
          <View className="flex-row items-center justify-between mb-3">
            <Text className="font-bold text-md">Messages</Text>
            <TouchableOpacity
              onPress={() => navigation.navigate("Message requests")}
            >
              <Text className="text-sky-400 text-md">Requests</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
          <UserMessageCard />
        </View>
      </ScrollView>
    </>
  );
};

export default Message;
