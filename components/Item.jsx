import { useEffect, useRef, useState } from "react";
import {
  Image,
  Pressable,
  Text,
  TouchableOpacity,
  TouchableNativeFeedback,
  View,
} from "react-native";
import RBSheet from "react-native-raw-bottom-sheet";

const Input = ({ id, count, handleCount }) => {
  return (
    <View className="-translate-y-2  flex flex-row  justify-center ">
      <View
        style={{ elevation: 4 }}
        className="self-center flelx rounded-lg flex-row"
      >
        <Pressable
          className=" bg-[#ef4f5f] px-3  pl-4 py-2 rounded-l-xl "
          onPress={() => handleCount(id, count[id] - 1, 0)}
        >
          <Text className="text-lg font-extrabold text-white">-</Text>
        </Pressable>
        <Text className="text-lg  py-2 px-3 bg-[#ef4f5f] text-white  font-extrabold">
          {count[id]}
        </Text>

        <Pressable
          className="bg-[#ef4f5f] px-3 pr-4 py-2 rounded-r-xl "
          onPress={() => handleCount(id, count[id] + 1, 1)}
        >
          <Text className="text-lg font-extrabold text-white">+</Text>
        </Pressable>
      </View>
    </View>
  );
};

const Item = ({
  title,
  price,
  desc,
  img,
  len,
  setLen,
  count,
  setCount,
  id,
  handleCount,
}) => {
  const model = useRef();

  return (
    <View
      className="w-full g flex rounded-3xl flex-row justify-between py-5 bg-white my-2  "
      style={{ elevation: 10, shadowColor: "white" }}
    >
      <View className="header pl-9  p-5 flex-1">
        <Text className="text-xl text-left pt-5 text-red-600 font-bold">
          {title}{" "}
        </Text>
        <Text className="py-3 text-left text-lg font-semibold">₹{price}</Text>
        <View className="flex-row">
          <Text
            className=" text-md-center text-gray-500 text-md"
            numberOfLines={10}
            style={{ flexWrap: "wrap", flex: 1 }}
          >
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
        {count[id] <= 0 && (
          <Pressable
            onPress={() => {
              handleCount(id, count[id] + 1, 1);
            }}
          >
            <View
              style={{ elevation: 4 }}
              className="text-white font-bold py-2 px-9 text-lg -translate-y-2 self-center rounded-xl bg-[#ef4f5f] text-center "
            >
              <Text className="text-white font-bold text-lg">ADD</Text>
            </View>
          </Pressable>
        )}
        {count[id] > 0 && (
          <Input
            id={id}
            count={count}
            handleCount={handleCount}
            len={len}
            setCount={setCount}
            setLen={setLen}
          />
        )}
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
            <Text className="text-xl text-left pt-5 font-bold text-[#ef4f5f]">
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

export default Item;
