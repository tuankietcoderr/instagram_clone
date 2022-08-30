import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React, { useContext, useState } from "react";
import {
  FlatList,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { ClickedModal, PostCard, StoryBar } from "../components";
import { PostContext } from "../context/PostContext";
import { Messenger, PlusSquare } from "../icons";

const Home = () => {
  const navigation = useNavigation();
  const { posts, setPage } = useContext(PostContext);
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <>
      <View className="flex-row justify-between bg-white px-4 relative z-10">
        <View className="flex-row items-center">
          <TouchableWithoutFeedback onPress={() => setModalOpen(!modalOpen)}>
            <Image
              source={require("../assets/Instagram_text_logo.svg.png")}
              className="w-[120px] h-[60px]"
              resizeMode="contain"
            />
          </TouchableWithoutFeedback>
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
      <FlatList
        className="bg-white"
        data={posts}
        renderItem={({ item, index }) => (
          <PostCard
            key={item.id + index.toString() + item.src.original}
            post={item}
            index={index}
          />
        )}
        keyExtractor={(item, index) =>
          item.id + index.toString() + item.src.original
        }
        initialNumToRender={10}
        ListHeaderComponent={<StoryBar />}
        onEndReached={() => {
          setPage((prev) => prev + 1);
          console.log("Reached");
        }}
        onEndReachedThreshold={1}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

export default Home;
