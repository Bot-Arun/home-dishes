import { NativeModules,View } from "react-native";
const {StatusBarManager} = NativeModules;

var statusbar_from_os = 0 ;
if(Platform.OS != 'web') {
  var statusbar_from_os = Platform.OS === 'ios' ? 20 : StatusBarManager.HEIGHT;
} 
const STATUSBAR_HEIGHT =  statusbar_from_os;

const Screen = (props) => {
    return (
        <View style={{paddingTop:STATUSBAR_HEIGHT ,backgroundColor:'#1E293B'}}>
            {props.children}
        </View>
    )
}

export default Screen;