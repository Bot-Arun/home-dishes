import { useEffect, useState } from "react";
import axios from "axios";
import {
  Alert,
  BackHandler,
  SafeAreaView,
  Text,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialIcons, Ionicons } from "@expo/vector-icons";
import Item from "./Item";
import { TailwindProvider } from "tailwindcss-react-native";
import Screen from "./Screen";
import { ScrollView } from "react-native-gesture-handler";
const ItemList = ({ items, setCount, setItem }) => {
  const result = items.map((item, index) => {
    return (
      <Item
        key={index}
        id={index}
        className=""
        catagory={item.item}
        count={item.value}
        setData={setItem}
        setVal={setCount}
      />
    );
  });
  return <>{result}</>;
};
const Home = ({ navigation }) => {
  useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to quit the App?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel",
        },
        { text: "YES", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
  const [freeq, setFreeq] = useState(0);
  const [items, setItems] = useState([]);
  const setItem = (id, val) => {
    items[id].item = val;
    setItems([...items]);
    //    console.log(items)
  };
  const setCount = (id, val) => {
    items[id].value = val;
    setItems([...items]);
    // console.log([...items])
  };
  const publish = () => {
    const data = {};
    for (let x of items) {
      if (data[x.item]) {
        data[x.item] += x.value;
      } else {
        data[x.item] = x.value;
      }
    }
    data.userId = "arun";
    // , {
    //   method: "POST",
    //   body: JSON.stringify({ data }),
    // }
    // console.log(data)
    axios
      .post("http://192.168.1.103:4000/logs/data", { data: data })
      .then(() => {
        console.log("print got data");
        setItems([]);
        setFreeq(0);
      })
      .catch((err) => console.log(err));
  };
  return (
    <Screen>
      <TailwindProvider>
        <View className="p-10 flex flex-col py-20 bg-slate-800 h-full  justify-center ">
          <Text className="text-center text-2xl text-cyan-400">Chose your Choice</Text>
          <ScrollView className=" ">
            <ItemList items={items} setItem={setItem} setCount={setCount} />
            <View className=" flex flex-row justify-around">
              <TouchableOpacity
                onPress={() => {
                  setFreeq((freq) => freq + 1);
                  setItems([...items, { item: "Idely", value: 1 }]);
                }}
                className=" self-center  mt-3"
              >
                <Text
                  className="text-center px-8 py-2 rounded-xl text-white  "
                  style={{ fontSize: 18 }}
                >
                  <MaterialIcons
                    name="add-circle"
                    size={30}
                    color="dodgerblue"
                  />
                </Text>
              </TouchableOpacity>
              {freeq !== 0 && (
                <TouchableOpacity
                  onPress={() => {
                    items.pop();
                    setFreeq((freq) => freq - 1);
                    setItems([...items]);
                  }}
                  className=" self-center  mt-3"
                >
                  <Text
                    className="text-center px-8 py-2 rounded-xl text-white"
                    style={{ fontSize: 18 }}
                  >
                    <Ionicons name="ios-trash-bin" size={30} color="red" />
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </ScrollView>
          <View className="flex flex-row justify-center">
            {freeq !== 0 && (
              <TouchableNativeFeedback
                className=" self-center "
                onPress={publish}
              >
                <Text className="text-center bg-cyan-500 self-center px-5 py-3 text-white rounded-xl font-medium">
                  Publish
                </Text>
              </TouchableNativeFeedback>
            )}
          </View>
        </View>
      </TailwindProvider>
    </Screen>
  );
};
export default Home;
