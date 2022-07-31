import { Picker } from '@react-native-picker/picker';
import { TouchableOpacity, View,Text } from 'react-native';
const Item =({id,catagory,count, setData ,setVal})=> {
    
    function decrement () {
        if(count ==1) 
            return
        setVal(id,count-1)
    }

    return(
        <View className="bg-slate-400 pb-4 px-3 mt-5 rounded-2xl">
        <View className="flex mt-5  flex-col justify-between">
            {/* <Text>this</Text> */}
            <Picker  className=""  selectedValue={catagory} onValueChange={(val)=>setData(id,val)} >
                <Picker.Item   label='Idley' value={"Idely"} />
                <Picker.Item label='Dosa' value={"Dosa"} />
                <Picker.Item label='Pongal' value={"Pongal"} />
            </Picker>
        </View>
        <View className="flex flex-row justify-between">
            <Text className="self-center mr-auto"> Count</Text> 
            <View className="flex flex-row ">
                <TouchableOpacity className= " bg-gray-300 px-6 py-3 rounded-l-xl " onPress={()=>decrement()}><Text className="text-lg">-</Text></TouchableOpacity>    
                <Text className="text-lg  py-3 px-5 bg-gray-100">{count}</Text>
                
                <TouchableOpacity className="bg-gray-300 px-6 py-3 rounded-r-xl " onPress={()=>setVal(id,count+1)}><Text className="text-lg">+</Text></TouchableOpacity>    
            </View>
        </View>
        </View>
    )
}

export default Item ;