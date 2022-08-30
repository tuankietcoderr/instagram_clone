import { faStar } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Text, TouchableOpacity, View } from "react-native";
import { UserGroup } from "../../icons";

const ClickedModal = () => {
  return (
    <View
      className="absolute top-[100%] left-4 bg-white rounded-md w-[130px] border-gray-200 border z-1"
      style={{ elevation: 30 }}
    >
      <TouchableOpacity className="flex-row justify-between p-3 border-b border-gray-200">
        <Text>Following</Text>
        <UserGroup width={20} height={20} />
      </TouchableOpacity>
      <TouchableOpacity className="flex-row p-3 justify-between">
        <Text>Favorites</Text>
        <FontAwesomeIcon icon={faStar} size={20} />
      </TouchableOpacity>
    </View>
  );
};

export default ClickedModal;
