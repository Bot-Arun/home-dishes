import { Text, Pressable,Button, View, FlatList, BackHandler } from "react-native";
import { Screen } from "./Screen";
import data from  './data'
import React,{ useEffect, useState } from "react";
import { TouchableOpacity,TouchableNativeFeedback } from "react-native-gesture-handler";
import { Ionicons } from '@expo/vector-icons';
const CartItem = ({id,Count,handleCount}) => {
    if(Count[id]==0) {
        return <></>
    }
    
  return(
    <View className="flex flex-row justify-between px-5 py-3">
          <View className="">
            <Text className="text-md font-medium">Chicken Dum Biriyani</Text>
            <Text className="mt-2">110</Text>
          </View>
          <View className="py-1">
            <Input Count={Count} id={id} handleCount={handleCount}  />
            <Text className="text-right mr-4">110</Text>
          </View>
        </View>
  );
};
const Input = ({ id, Count ,handleCount }) => {
    
  return (
    <View className="-translate-y-2  flex flex-row  justify-center ">
      <View
        style={{ elevation: 4 }}
        className="self-center flex rounded-lg flex-row"
      > 
        <Pressable className=" bg-[#ef4f5f] px-1  pl-3 py-1 rounded-l-xl "
         onPress={() => handleCount(id, Count[id] - 1, 0)}>
          <Text className="text-md font-medium text-white">-</Text>
        </Pressable>
        <Text className="text-md  py-1 px-2 bg-[#ef4f5f] text-white  font-medium">
        {Count[id]}
        </Text>

        <Pressable className="bg-[#ef4f5f] px-1 pr-3 py-1 rounded-r-xl "
         onPress={() => handleCount(id, Count[id] + 1, 1)}>
          <Text className="text-md font-medium text-white">+</Text>
        </Pressable>
      </View>
    </View>
  );
  
}
const RenderScreen =({Count , handleCount,navigation,totPrice})=> {
  const backAction = () => {
    console.log("handled back button press" ,Count)
    navigation.navigate('Home',{count:Count})
    return true;
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      ()=> backAction()
    );

    return () => backHandler.remove();
  }, [Count]);
  return(
    <Screen  >
      
      <View>
        
         
      <View  className="bg-white py-3 flex flex-row">
      <Pressable  onPress={() => backAction(Count)} style={{marginLeft:10}} title="Update Count " ><Ionicons name="ios-arrow-back" size={32} color="black" /></Pressable><Text className="text-2xl ml-4 h">Cart</Text>
      </View>
      <View className="pt-5 bg-white h-full ">
      <View className="px-2 w-full bottom-48  absolute">
            <TouchableNativeFeedback  >

            <View className={"flex  px-4 py-3 flex-row justify-between rounded-md mt-1 bg-[#ef4f5f] h-26"}>
              <View className="flex flex-row py-2">
                <Text className="self-center  font-semibold text-white">
                 Total
                </Text>
                <Text className="font-semibold text-white"> ₹{totPrice}</Text>
              </View>
              <View  className="self-center">
              <Text className="self-center  text-white font-semibold ">
                Make Payment
              </Text>

              </View>
            </View>
            </TouchableNativeFeedback>
          </View>
        <Text className="text-xl  font-semibold ml-3">Your Order </Text>
        
      
      <FlatList data={data} ListFooterComponent={<FooterComponent totPrice={totPrice}/>} renderItem={({index})=><CartItem  Count={Count} handleCount={handleCount} id={index}  />}/>
        
    
      
    </View>
      </View>
    </Screen>
  )
}
const FooterComponent = () => {
  return <View className="flex flex-row justify-between p-5 px-7"><Text className="text-xl font-semibold">Grand Total</Text><Text className="text-xl font-semibold text-red-500" >₹ {10}</Text></View>
}
const Cart = ({  route ,navigation}) => {
    const [Count,setCount ] = useState(route.params.count);
    const [totPrice ,setTotPrice] = useState(route.params.totPrice);
    const handleCount = (id,val,opp) => {
      if (opp) {
        Count[id]++;
        //   setNoItems(value => value+1)
        //   setTotPrice(price=>price+data[id].price)
      }
      else {
        Count[id]--;
        //   setNoItems(value => value-1) 
        //   setTotPrice(price=>price-data[id].price)
      }
      setCount([...Count]);
  }
  
  React.useLayoutEffect(() => {
    navigation.setOptions({  
      headerLeft: () => (
        <></>
      ),
      headerRight:()=> <></>
    });
  }, [navigation]);
  
  return (
    <RenderScreen Count={Count} handleCount={handleCount} totPrice={totPrice} navigation={navigation} ></RenderScreen>
  );
};
export default Cart;
