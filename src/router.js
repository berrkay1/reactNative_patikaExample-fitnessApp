import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./components/Home";
import Welcome from "./pages/Welcome";
import MemberSing from "./pages/MemberSing";

export default function App() {
  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false
      }}>
        <Stack.Screen 
        name="Home" 
        component={Welcome}
          />
        <Stack.Screen 
        name="MemberSing" 
        component={MemberSing}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
