import React from "react";
import { TextInput, View, Text } from "react-native";
import FontAwesome from "@expo/vector-icons/FontAwesome";

interface DefaultSearchCompParams {
  placeholder?: string;
}
export const DefaultSearchComp: React.FC<DefaultSearchCompParams> = ({
  placeholder,
}) => {
  return (
    <View className="w-full flex">
      <View className="flex flex-row items-center p-4 w-full rounded bg-[#F2F2F2]">
        <FontAwesome name="search" color={"#999"} size={16} />

        <TextInput
          style={{ fontSize: 14, fontFamily: "Poppins_500Medium" }}
          placeholder={placeholder}
          placeholderTextColor={"#999"}
          className="ml-3 text-black"
        />
      </View>
    </View>
  );
};
