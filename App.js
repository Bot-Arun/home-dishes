import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import "react-native-gesture-handler";
import Home from "./components/Home";
import History from "./components/History";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from "./components/Login";
import Profile from "./components/Profile";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { View,Text } from "react-native";
const Pages = ({ navigation }) => {
  const BottomNavigator = createMaterialBottomTabNavigator();
  return (
    <BottomNavigator.Navigator
      screenOptions={{ gestureEnabled: false, presentation: "modal" }}
      initialRouteName="Login"
    >
      <BottomNavigator.Screen
        name="Home"
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="home" size={24} color={color} />
          ),
        }}
        component={Home}
      />
      <BottomNavigator.Screen
        name="History"
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="history" size={27} color={color} />
          ),
        }}
        component={History}
      />
    </BottomNavigator.Navigator>
  );
};

export default function App() {
  const BottomNavigator = createBottomTabNavigator ();
  return (
    <NavigationContainer>
      <BottomNavigator.Navigator
        barStyle={{
          height:64,
          backgroundColor: "white",
          borderColor: "black",
        }}
        screenOptions={{ gestureEnabled: false, presentation: "modal",headerStyle: {
          height: 0, // Specify the height of your custom header
        } ,
        tabBarActiveTintColor:'red',
        tabBarItemStyle:{height:60,padding:5},
        tabBarStyle:{height:60,backgroundColor:'white'}
      }}
        initialRouteName="Login"
      >
        <BottomNavigator.Screen
          name="Home"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={30} color={color} />
            ),
            tabBarColor: "red",
          }}
          component={Home}
        />
        <BottomNavigator.Screen
          name="History"
          options={{
            tabBarColor:'pink',
            tabBarIcon: ({ color }) => (
              <MaterialIcons name="history" size={36} color={color} />
            ),
          }}
          component={History}
        />
        <BottomNavigator.Screen 
          name="Profile"
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesome name="user" size={30} color={color} />
            ),
            tabBArButton:<Pressable className="bg-slate-500"><Text>dsklfjsdf</Text></Pressable>
          }}
          component={Profile}
        />
      </BottomNavigator.Navigator>
    </NavigationContainer>
  );
}
