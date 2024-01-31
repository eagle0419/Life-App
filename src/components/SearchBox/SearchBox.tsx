import React from "react";
import { TextInput, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import styles from "./styles";

interface SearchBoxProps {
  bgColor?: string;
  phColor?: string;
  crColor?: string;
}

const SearchBoxComp: React.FC<SearchBoxProps> = ({
  bgColor = "#075985",
  phColor = "#eee",
  crColor = "white"
}) => {
  const SearchBoxStyle = styles(crColor);
  return (
    <View style={{ backgroundColor: bgColor }} className="flex flex-row rounded-lg">
      <View className="p-3">
        <Ionicons name="search" size={16} color={crColor} />
      </View>
      <TextInput className="py-0 flex-1" style={SearchBoxStyle.input} placeholder="Search" placeholderTextColor={phColor} cursorColor={crColor} />
    </View>
  );
}

export default SearchBoxComp;