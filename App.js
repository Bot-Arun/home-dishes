import  {createStackNavigator} from '@react-navigation/stack'
import  {NavigationContainer} from '@react-navigation/native'
import { Ionicons ,MaterialIcons,FontAwesome} from '@expo/vector-icons';
import 'react-native-gesture-handler';
import Home from './components/Home'
import History from './components/History'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Login from './components/Login'
import Profile from './components/Profile'
const Pages = ({navigation}) => {
  const BottomNavigator = createMaterialBottomTabNavigator();
  return (
    <BottomNavigator.Navigator screenOptions={{gestureEnabled:false, presentation:'modal'}}   initialRouteName='Login' >
        <BottomNavigator.Screen  name="Home" options={{tabBarIcon:({color})=>(<Ionicons name="home" size={24} color={color} />)}} component={Home} />
        <BottomNavigator.Screen name="History" options={{tabBarIcon:({color})=>(<MaterialIcons name="history" size={27} color={color} />)}} component={History} />
    </BottomNavigator.Navigator>
    )
}

export default function App() {
  const BottomNavigator = createMaterialBottomTabNavigator();
  return (
  <NavigationContainer>
    <BottomNavigator.Navigator screenOptions={{gestureEnabled:false, presentation:'modal'}}   initialRouteName='Login' >
        <BottomNavigator.Screen  name="Home" options={{tabBarIcon:({color})=>(<Ionicons name="home" size={24} color={color} />)}} component={Home} />
        <BottomNavigator.Screen name="History" options={{tabBarIcon:({color})=>(<MaterialIcons name="history" size={27} color={color} />)}} component={History} />
        <BottomNavigator.Screen name="Profile" options={{tabBarIcon:({color})=>(<FontAwesome name="user" size={24} color={color} />)}} component={Profile} />
    </BottomNavigator.Navigator>
  </NavigationContainer>
    )
}


