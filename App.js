import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { PostContextProvider } from "./context/PostContext";
import Home from "./screens/Home";
import Message from "./screens/Message";
import MessageRequests from "./screens/MessageRequests";
import UserPage from "./screens/UserPage";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
        <PostContextProvider>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              presentation: "card",
            }}
          >
            <Stack.Screen
              name="Home"
              options={{ headerShown: false }}
              component={Home}
            />
            <Stack.Screen name="User Page" component={UserPage} />
            <Stack.Screen
              name="Message"
              options={{
                headerShown: false,
              }}
              component={Message}
            />
            <Stack.Screen name="Message requests" component={MessageRequests} />
          </Stack.Navigator>
          <StatusBar
            animated
            backgroundColor="white"
            barStyle={"dark-content"}
          />
        </PostContextProvider>
      </TailwindProvider>
    </NavigationContainer>
  );
}
