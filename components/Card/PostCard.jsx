import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useNavigation } from "@react-navigation/native";
import React, { memo, useEffect, useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { Bookmark, Comment, Send } from "../../icons";
import { SCREEN_WIDTH } from "../../util/screen-size";

const PostCard = ({ post }) => {
  const avatar =
    "https://scontent.fsgn2-5.fna.fbcdn.net/v/t39.30808-1/273555902_673753753972764_1065950778147878224_n.jpg?stp=cp0_dst-jpg_p60x60&_nc_cat=1&ccb=1-7&_nc_sid=1eb0c7&_nc_ohc=UT8l2ClF6K4AX9FZePM&_nc_ht=scontent.fsgn2-5.fna&oh=00_AT_1UQzg-odku25rEKDJqEB43HYQi-LCY9AevYLhI8MuRA&oe=630C03CB";
  const postImg = post.src.large;
  const navigation = useNavigation();
  const [imgHeight, setImgHeight] = useState(400);
  const [percent, setPercent] = useState(1);
  const [line, setLine] = useState(1);
  useEffect(() => {
    Image.getSize(
      postImg,
      (width, height) => {
        const percent = width / SCREEN_WIDTH;
        setPercent(percent);
        setImgHeight(height);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  return (
    <View>
      <View className="flex-row justify-between items-center p-4">
        <View className="flex-row items-center gap-3">
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("User Page", { id: post.photographer_id })
            }
          >
            <Image
              source={{
                uri: avatar,
              }}
              className="w-9 h-9 rounded-full"
            />
          </TouchableOpacity>
          <Text
            className="font-semibold"
            onPress={() =>
              navigation.navigate("User Page", { id: post.photographer_id })
            }
          >
            {post.photographer}
          </Text>
        </View>
        <View>
          <FontAwesomeIcon
            icon={faEllipsisVertical}
            size={20}
            color="black"
            style={{ opacity: 0.8 }}
          />
        </View>
      </View>
      <View className="border-b border-gray-400" />
      <Image
        source={{ uri: postImg }}
        style={{
          width: SCREEN_WIDTH,
          minHeight: imgHeight / percent,
          maxHeight: 600,
          backgroundColor: post.avg_color,
        }}
        resizeMode={"contain"}
      />
      <View className="items-center justify-between flex-row px-4 py-2">
        <View className="flex-row gap-4 items-center">
          <FontAwesomeIcon icon={faHeart} size={24} />
          <Comment />
          <Send />
        </View>
        <View>
          <Bookmark />
        </View>
      </View>
      <View className="px-4">
        <Text>
          Liked by <Text className="font-semibold">username </Text>
          and <Text className="font-semibold">others</Text>
        </Text>
        <Text
          numberOfLines={line}
          lineBreakMode="tail"
          onPress={() => setLine(100)}
        >
          <Text className="font-semibold">{post.photographer}</Text>{" "}
          {post.alt || ""}
        </Text>
        <Text className="opacity-50 py-1">Show all number comment...</Text>
        <View className="flex-row justify-between items-center py-1">
          <View className="flex-row gap-2 items-center">
            <Image
              source={require("../../assets/Instagram_logo_2016.svg.webp")}
              className="w-8 h-8 rounded-full"
            />
            <Text className="opacity-50">Add a comment...</Text>
          </View>
        </View>
        {/* <Text className="text-[10px] opacity-50">
          {moment(post.created_at).fromNow()}
        </Text> */}
      </View>
    </View>
  );
};

export default memo(PostCard);
