import { StyleSheet } from "react-native";
import {style} from './index.interface'
import {Colors,Typography, Spacing} from '../../styles/index'

export const styles=StyleSheet.create<style>({

   textInputContainer:{
    fontSize: Typography.ctaTxt,
    textAlign: 'center',
    color: 'white',
    alignSelf: 'stretch',
   },

  
   TextInfo: {
    color:Colors.textInput,
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: Typography.ctaTxt,
    width:Spacing.calcWidth(40)
  },
    
})