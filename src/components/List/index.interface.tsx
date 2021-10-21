import { ViewStyle } from "react-native";

 export interface Props
{
  navigation:any,
  data:any[],
  ItemSeparatorComponent?:any
  renderItem:any,
  horizontalFlag:boolean,
  showsVerticalScrollIndicator:boolean,
  style?:any
}

