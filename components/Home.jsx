import {
  Text,
  View,
  ScrollView,
  FlatList,
  TouchableOpacity,
  TouchableNativeFeedback,
  Pressable,
} from "react-native";
import Item from "./Item";
import data from './data'
import {Screen} from "./Screen";
import { Ionicons, FontAwesome } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import { useFocusEffect} from "@react-navigation/native";



// const Separotor = () => {
//   return <View className="mx-4  bg-gray-300" style={{ paddingTop: 1 }} />;
// };



const RenderItem = ({ item, ky, count, len, setLen, setCount,handleCount }) => {
  return (
    <Item
      id={item.id}
      title={item.title}
      price={item.price}
      desc={item.desc}
      img={item.img}
      count={count}
      setCount={setCount}
      setLen={setLen}
      len={len}
      handleCount={handleCount}
    />
  );
};

// const ItemList = ({count,setCount,setLen,len}) => {

//   const list = data.map((item, ky) => (
//     <RenderItem ky={ky} item={item} count={count} setCount={setCount} setLen={setLen} len={len} />
//   ));
//   return <>{list}</>;
// };
const Home = ({navigation,route }) => {
  const [len, setLen] = useState(data.length);
  const [count, setCount] = useState(Array(len).fill(0));
  const [noItems,setNoItems] = useState(0);
  const [totPrice ,setTotPrice] =useState(0);
  
  // if (route.) {
    // count = countC;
  console.log("route",route)
  const handleCount = (id,val,opp) => {
    count[id] =val;
    setCount([...count]);
    if (opp) {
      setNoItems(value => value+1)
      setTotPrice(price=>price+data[id].price)
    }
    else {
      setNoItems(value => value-1) 
      setTotPrice(price=>price-data[id].price)
    }
  }
  // useFocusEffect(()=>{
  //   try {
      
  //     if (route.params) {
  
  //       console.log("from focus",route.params.count, count ===route.params.count )
  //       // setCount([...(route.params.count)])
  //     }
  //   }
  //   catch (err) {console.log(err)}
  // })
  useEffect(()=>{
    if (route.params) {
  
      console.log("from focus",route.params.count, count ===route.params.count )
      setCount([...(route.params.count)])
    }
  },[route.params])
  return (
    <Screen>
      <View className="flex flex-col min-h-fit bg-gray-300 ">
        <View className="  w-full flex py-3 px-5 justify-between flex-row bg-white ">
          <View>
            <Ionicons name="md-logo-firefox" size={34} color="#335566" />
          </View>
          <View className="flex flex-row">
            <Ionicons name="md-search-sharp" size={34} color="#335566" />
            <FontAwesome name="user-circle" size={34} color="#335566" />
          </View>
        </View>
        <View
          className="absolute w-full flex flex-col justify-center bottom-32"
          style={{ zIndex: 10 }}
        >
          <TouchableOpacity style={{elevation:7}} className="self-center py-2 px-5 bg-slate-700 rounded-full">
            <Text  className="self-center text-white text-md">VIEW MENU</Text>
          </TouchableOpacity>
          {noItems>0 && <View className="px-2">
            <TouchableNativeFeedback onPress={()=>navigation.navigate("Cart",{count})} >

            <View className={"flex w-full px-4 flex-row justify-between rounded-md mt-1 bg-[#ef4f5f] h-26"}>
              <View className="flex flex-col py-2">
                <Text className="self-center  font-semibold text-white">
                {noItems} Items
                </Text>
                <Text className="font-semibold text-white">₹{totPrice}</Text>
              </View>
              <View  className="self-center">
              <Text className="self-center  text-white font-semibold ">
                View Cart
              </Text>

              </View>
            </View>
            </TouchableNativeFeedback>
          </View>}
        </View>
        <View className=" min-h-fit">
          <View className="mb-[180px] px-3">
            {/* <ItemList len={len} count={count} setCount={setCount} setLen={setLen}  /> */}
            <FlatList
              data={data}
              ListFooterComponent={<View className={ noItems==0 ?"h-10":"h-20"}></View>}
              renderItem={({ item }) => (
                <RenderItem
                  count={count}
                  item={item}
                  setCount={setCount}
                  setLen={setLen}
                  len={len}
                  handleCount={handleCount}
                  
                />
              )}
              
              len={len}
              count={count}
              setCount={setCount}
              setLen={setLen}
            ></FlatList>
          </View>
        </View>
      </View>
    </Screen>
  );
};
export default Home;
