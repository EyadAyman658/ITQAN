import { StyleSheet } from "react-native";

import { Dimensions,PixelRatio} from 'react-native';
import {style} from './index.interface'
import {Colors} from '../../styles/index'

export const styles=StyleSheet.create<style>({

    ViewVacationContainer:{
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       backgroundColor:Colors.background
   }

  
    
})