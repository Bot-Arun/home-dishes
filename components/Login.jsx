import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, NativeModules, TextInput, Pressable, TouchableOpacity, TouchableNativeFeedback, TouchableOpacityComponent, Touchable, Platform } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import Screen from './Screen';
const {StatusBarManager} = NativeModules;
var statusbar_from_os = 0 ;
if(Platform.OS != 'web') {
  var statusbar_from_os = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
} 
const STATUSBAR_HEIGHT =  statusbar_from_os;

const Home = ({navigation}) => {
    return(<TailwindProvider>
      <Screen>
      {Platform.OS=='android'&& <StatusBar
        animated={true}
        backgroundColor="#1E293B"
         />}
        <View className="flex -translate-y-2  h-full  bg-slate-800 " style={{marginTop:STATUSBAR_HEIGHT}} >  
          <View className="mt-5 p-10">
            <Text className="text-center font-semibold text-white"  style={{fontSize:35}}> Login </Text>
          </View>
          <View className="p-10 ">
            <Text className="text-white" style={{fontSize:20}}>
              User Name
            </Text>
            <TextInput className="border mt-5 p-3 bg-gray-300 rounded-full" placeholder='username' /> 
            <Text className="mt-10 text-white" style={{fontSize:20}}>
              Password
            </Text>
            <TextInput className="border mt-5  p-3 bg-gray-300 rounded-full" placeholder='password' secureTextEntry={true} />
            <Text className="mt-1 text-right text-white" style={{fontSize:15}}>
              Forget password ? 
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Pages")} className="mt-16 mx-4">
              <Text className="text-center p-3 text-white rounded-full  bg-blue-700" style={{fontSize:20}}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            
          </View>
          
        </View>
        </Screen>
      </TailwindProvider>)
}

export default Home ;