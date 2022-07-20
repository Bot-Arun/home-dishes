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
        <View className={"flex  h-full mt-10 "} style={{marginTop:STATUSBAR_HEIGHT}} >  
          <View className="mt-5 p-10">
            <Text className="text-center font-semibold"  style={{fontSize:35}}> Login </Text>
          </View>
          <View className="p-10 ">
            <Text className="" style={{fontSize:20}}>
              User Name
            </Text>
            <TextInput className="border mt-5 p-3" placeholder='username' /> 
            <Text className="mt-10" style={{fontSize:20}}>
              Password
            </Text>
            <TextInput className="border mt-5  p-3" placeholder='password' secureTextEntry={true} />
            <Text className="mt-1 text-right" style={{fontSize:15}}>
              Forget password ? 
            </Text>
            <TouchableOpacity onPress={()=>navigation.navigate("Pages")} className="mt-16">
              <Text className="text-center p-3 text-white  bg-blue-700" style={{fontSize:20}}>Login</Text>
            </TouchableOpacity>
          </View>
          <View>
            
          </View>
          
        </View>
        </Screen>
      </TailwindProvider>)
}

export default Home ;