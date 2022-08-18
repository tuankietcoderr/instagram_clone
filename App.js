import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Home from "./screens/Home";
import Message from "./screens/Message";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <TailwindProvider>
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
          <Stack.Screen name="Message" component={Message} />
        </Stack.Navigator>
        <StatusBar animated backgroundColor="white" barStyle={"dark-content"} />
      </TailwindProvider>
    </NavigationContainer>
  );
}
