import { useEffect, useState } from 'react';
import {Alert, BackHandler, SafeAreaView, Text,TouchableNativeFeedback,TouchableOpacity, View} from 'react-native'
import {MaterialIcons,Ionicons} from '@expo/vector-icons'
import Item from './Item'
import { TailwindProvider } from 'tailwindcss-react-native';
import Screen from './Screen';
import { ScrollView } from 'react-native-gesture-handler';
const ItemList = ({items,setCount,setItem}) => {
    const result =items.map( (item,index)=> {
        return <Item key={index} id={index} className=" " catagory={item.item} count={item.value} setData={setItem} setVal={setCount} />
        
    } )
    return <>{result}</>
}
const Home = ({navigation}) => {
    useEffect(() => {
        const backAction = () => {
          Alert.alert("Hold on!", "Are you sure you want to quit the App?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
          ]);
          return true;
        };
    
        const backHandler = BackHandler.addEventListener(
          "hardwareBackPress",
          backAction
        );
    
        return () => backHandler.remove();
    }, []);
    const [freeq,setFreeq] = useState(0);
    const [items,setItems] =useState([])
    const setItem = (id,val)=> {
       items[id].item =val
       setItems([...items]);
    //    console.log(items)
    }
    const setCount = (id,val)=> {
        items[id].value =val
        setItems([...items]);
        // console.log([...items])
    }
    return (<Screen>
      
    <TailwindProvider>
        <View className="p-10 flex flex-col py-20   justify-center ">
            <Text className="text-center text-2xl">Chose your Choice</Text>
        <ScrollView  className=" ">
                <ItemList items={items} setItem={setItem} setCount={setCount} />
        <View className=" flex flex-row justify-around">

        <TouchableOpacity onPress={()=>{
          setFreeq(freq => freq+1);
          setItems([...items,{item:'idely',value:1}])}} className=" self-center  mt-3">
            <Text className="text-center px-8 py-2 rounded-xl text-white  " style={{fontSize:18}}><MaterialIcons name="add-circle" size={30} color="dodgerblue" /></Text>
        </TouchableOpacity>
       {freeq!==0 && <TouchableOpacity onPress={()=>{
          items.pop();
          setFreeq(freq =>freq-1)
          setItems([...items])
          }} className=" self-center  mt-3">
            <Text className="text-center px-8 py-2 rounded-xl text-white" style={{fontSize:18}}><Ionicons name="ios-trash-bin" size={30} color="red" /></Text>
        </TouchableOpacity>}
        </View>
        </ScrollView>
        <View className="flex flex-row justify-center">

        <TouchableNativeFeedback className=" self-center ">
          <Text className="text-center bg-blue-600 self-center px-5 py-3 text-white rounded-xl font-medium">Publish</Text>
        </TouchableNativeFeedback>
        </View>
        </View>
    </TailwindProvider>
    </Screen>)
}
export default Home ;