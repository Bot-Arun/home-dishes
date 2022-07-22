import {
  ActivityIndicator,
  Text,
  Image,
  ImageBackground,
  VirtualizedList,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  ListViewBase,
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import Screen from "./Screen";
import RBSheet from "react-native-raw-bottom-sheet";
import { useRef } from "react";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const Separotor = () => {
  return <View className="mx-4  bg-gray-300" style={{ paddingTop: 1 }} />;
};
const Item = ({ title, price, desc, img }) => {
  const model = useRef();
  return (
    <View className="w-full g flex rounded-3xl flex-row justify-between py-5 bg-white my-2  "style={{elevation:10,shadowColor:'white'}} >
      <View className="header pl-9  p-5 flex-1">
        <Text className="text-xl text-left pt-5 text-red-600 font-bold">{title} </Text>
        <Text className="py-3 text-left text-lg font-semibold">₹{price}</Text>
        <View className="flex-row">
          <Text
            className=" text-md-center text-gray-500 text-md"
            numberOfLines={10}
            style={{ flexWrap: "wrap", flex: 1 }}
          >
            {" "}
            {desc}
          </Text>
        </View>
      </View>
      
      <View className="ml-auto  pt-5 pr-5">
        <Pressable onPress={() => model.current.open()}>
        <View className="bg-gray-100  rounded-2xl " style={{ elevation: 5 }}>
          <Image
            style={{
              resizeMode: "contain",
              shadowColor: "black",
              width: 150,
              height: 150,
            }}
            source={img}
            />
        </View>
            </Pressable>
        <TouchableNativeFeedback >
          <Text
            style={{ elevation: 4 }}
            className="text-white font-bold py-2 px-9 text-lg -translate-y-2 self-center rounded-xl bg-red-500 text-center "
          >
            ADD
          </Text>
        </TouchableNativeFeedback>
      </View>
      <RBSheet
        ref={model}
        closeOnDragDown={true}
        closeOnPressMask={true}
        height={400}
        customStyles={{
          wrapper: {
            backgroundColor: "rgba(0,0,0,0.5)",
          },
          container: {
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: "#fff",
          },
          draggableIcon: {
            backgroundColor: "#000",
          },
        }}
      >
        <View className="">
          <Image
            className=""
            style={{
              width: "100%",
              height: 200,
              borderRadius: 10,
              resizeMode: "contain",
            }}
            source={require("../assets/samosa.png")}
          />
          <View className="header pl-9  p-5 flex-1">
            <Text className="text-xl text-left pt-5 font-bold text-red-500">
              Tandoori Zinger{" "}
            </Text>
            <Text className="py-3 text-left text-lg font-semibold">₹200</Text>
            <View className="flex-row">
              <Text
                className=" text-md-center text-gray-500 text-md"
                numberOfLines={10}
                style={{ flexWrap: "wrap", flex: 1 }}
              >
                Chicken zinger with a deliciout tandoori sauce
              </Text>
            </View>
          </View>
        </View>
      </RBSheet>
    </View>
  );
};
const RenderItem = ({ item, key }) => {
  return (
    <>
    <Item
      key={key}
      title={item.title}
      price={item.price}
      desc={item.desc}
      img={item.img}
    />
    </>
  );
};
const data = [
  {
    title: "Tandoori Zinger",
    price: 200,
    desc: "Chicken zinger with a deliciout tandoori sauce",
    img: require("../assets/samosa.png"),
  },
  {
    title: "Tandoori Zinger",
    price: 200,
    desc: "Chicken zinger with a deliciout tandoori sauce",
    img: require("../assets/samosa.png"),
  },
  {
    title: "Tandoori Zinger",
    price: 200,
    desc: "Chicken zinger with a deliciout tandoori sauce",
    img: require("../assets/samosa.png"),
  },
  {
    title: "Tandoori Zinger",
    price: 200,
    desc: "Chicken zinger with a deliciout tandoori sauce",
    img: require("../assets/samosa.png"),
  },
  {
    title: "Tandoori Zinger",
    price: 200,
    desc: "Chicken zinger with a deliciout tandoori sauce",
    img: require("../assets/samosa.png"),
  },
  {
    title: "Tandoori Zinger",
    price: 200,
    desc: "Chicken zinger with a deliciout tandoori sauce",
    img: require("../assets/samosa.png"),
  },
  {
    title: "Tandoori Zinger",
    price: 200,
    desc: "Chicken zinger with a deliciout tandoori sauce",
    img: require("../assets/samosa.png"),
  },
];
const ItemList = () => {
  const list = data.map((item, key) => (
    <RenderItem key={key} item={item}></RenderItem>
  ));
  return <>{list}</>;
};
const Home = ({ navigation, title, width }) => {
  return (
    <Screen>
      <View className="flex flex-col bg-gray-300 ">
        <ScrollView stickyHeaderIndices={[0]} className=" min-h-fit">
          <View className="flex py-3 px-5 justify-between flex-row bg-white " >
            <View>
              <Ionicons name="md-logo-firefox" size={34} color="#335566" />
            </View>
            <View className="flex flex-row">
              <Ionicons name="md-search-sharp" size={34} color="#335566" />
              <FontAwesome name="user-circle" size={34} color="#335566" />
            </View>
          </View>
        <View className="px-3">

          <ItemList />
        </View>
          
        </ScrollView>
        <View className="absolute w-full flex justify-center bottom-5">
          <TouchableOpacity className="self-center py-2 px-5 bg-slate-700 rounded-full">
            <Text className="self-center text-white text-md">VIEW MENU</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};
export default Home;
