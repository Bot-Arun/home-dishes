import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons, MaterialIcons, FontAwesome } from "@expo/vector-icons";
import "react-native-gesture-handler";
import Home from "./components/Home";
import History from "./components/History";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Profile from "./components/Profile";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { View,Text } from "react-native";
import Cart from "./components/Cart"
import {STATUSBAR_HEIGHT} from './components/Screen'



const Stack =() => {
  const StackNavigatior = createStackNavigator();
  return (
    
    <StackNavigatior.Navigator initialRouteName="Home"   >
      <StackNavigatior.Screen name="Home"  options={{headerStyle:{height:0} }}  component={Home}   />
      <StackNavigatior.Screen  name="Cart" options={{headerStatusBarHeight:STATUSBAR_HEIGHT,presentation:'card',headerStyle:{height:0}}} component={Cart} />
  </StackNavigatior.Navigator>
    )
}

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
        tabBarActiveTintColor:'#ef4f5f',
        tabBarItemStyle:{height:60,padding:5},
        tabBarStyle:{height:60,backgroundColor:'white'}
      }}
        initialRouteName="Login"
      >
        <BottomNavigator.Screen
          name="omePage"
          options={{
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={30} color={color} />
            ),
            tabBarColor: "red",
          }}
          component={Stack}
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
