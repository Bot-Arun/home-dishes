import { useFocusEffect } from "@react-navigation/native";
import axios from "axios";
// import { ObjectId } from "mongodb";
import { useState, useEffect } from "react";
import mongoose from "mongoose";
import {
  BackHandler,
  Modal,
  Alert,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  RefreshControl,
} from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";

import Screen from "./Screen";
const Log = ({ data }) => {
  const res = data.map((item, ky) => {
    let lt = Object.keys(item);
    lt = lt.filter((item) => {
      return item[0] != "_" && item !=='userId';
    });
    console.log("lt",typeof mongoose.Types.ObjectId(item._id).getTimestamp().toString());
    const singleItem = lt.map((details, id) => {
      return (
        <Text className="text-white text-lg px-4 " key={id}>
          {details}  <View className="px-2 bg-yellow-500 rounded-full translate-y-1 "><Text className=" ">{item[details]}</Text></View>
        </Text>
      );
    });
    return (
    <View className="bg-slate-700 rounded-xl mt-3 p-4 " key={ky}>
      <View className="flex flex-row justify-between mb-3">
      <Text className="bg-teal-400 px-3 py-2 ml-2 text-md capitalize  rounded-lg">{item.userId} </Text>
      <Text className="bg-blue-300 rounded-lg self-center py-1 px-3">{mongoose.Types.ObjectId(item._id).getTimestamp().toString().substring(4,15)}</Text>
      </View>
      
      <View className="flex ">
      {singleItem}
      </View>
    
    </View>);
  });
  return <View>{res}</View>;
};
const History = () => {
  const [data, setData] = useState([]);
  const [refreshing, SetRefreshing] = useState(false);
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
  const getFun = () => {
    axios
      .get("http://192.168.1.103:4000/logs/data")
      .then((res) => {
        setData(res.data);
        console.log('sent get request');
      })
      .catch((err) => console.log(err));
  };
  useEffect(getFun, []);
  useFocusEffect(()=>{
    console.log('history is focused')
    // setReload(!reload);
    // getFun();
  })
  const onRefresh = ()  => {
    getFun()
    SetRefreshing(false);
  }
  return (
    <Screen>
      <TailwindProvider>
        <ScrollView className="h-full bg-slate-800 px-3 py-2" refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
          <Log data={data} />
        </ScrollView>
      </TailwindProvider>
    </Screen>
  );
};
export default History;
