import { View, Text } from "react-native";
import React from "react";
import { useRoute } from "@react-navigation/native";

const UserPage = () => {
  const {
    params: { id },
  } = useRoute();
  console.log(id);
  return (
    <View>
      <Text>UserPage</Text>
    </View>
  );
};

export default UserPage;
