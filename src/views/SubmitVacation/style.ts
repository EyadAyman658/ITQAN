import { StyleSheet } from "react-native";
import {style} from './index.interface'
import  {Spacing,Colors,Typography} from '../../styles/index'


export const styles=StyleSheet.create<style>({

    SubmitVacationContainer:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:Colors.background
   },

   Picker: {
    color:Colors.textInput,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: Typography.ctaTxt,
    width:Spacing.calcWidth(40),
    height:Spacing.calcHeight(10)

  },
   
})