import { ViewStyle } from "react-native";

export interface Props {
 placeHolder?: string 
 onChange?:any
 onSubmbit?:any 
 ref?:any
 secureTextEntry?:boolean,
 blurOnSubmit?:boolean,
 title:string,
 value?:any
}

export interface style {
     textInputContainer:ViewStyle,
     TextInfo:ViewStyle
   }