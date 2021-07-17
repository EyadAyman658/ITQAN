import { StyleSheet } from "react-native";
import {Colors,Spacing,Typography} from '../../styles/index'
import {style} from './index.interface'


export const styles=StyleSheet.create<style>({

  ButtonContainer:{
   width:Spacing.calcWidth(30),
   height:Spacing.calcHeight(5),
   backgroundColor:Colors.ctaButton,
   borderRadius:Spacing.calcHeight(4)
  },

  ButtonContent:{
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
      color:Colors.primarytxt,
      marginTop:6,
      fontSize:Typography.ctaTxt
  }

    
})