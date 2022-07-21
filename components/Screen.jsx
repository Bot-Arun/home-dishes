import { NativeModules, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
const { StatusBarManager } = NativeModules;

var statusbar_from_os = 0;
if (Platform.OS != "web") {
  var statusbar_from_os = Platform.OS === "ios" ? 20 : StatusBarManager.HEIGHT;
}
const STATUSBAR_HEIGHT = statusbar_from_os;

const Screen = (props) => {
  return (
    <View style={{ marginTop: STATUSBAR_HEIGHT }}>
      <TailwindProvider>{props.children}</TailwindProvider>
    </View>
  );
};

export default Screen;
