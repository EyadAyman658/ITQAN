import {Colors} from '../../styles/index'
import { StyleSheet } from "react-native";
import {style} from './index.interface'

export const styles=StyleSheet.create<style>({

    homeScreenContainer:{
       flex:1,
       flexDirection:'row',
       justifyContent:'space-evenly',
       alignItems:'center',
       backgroundColor:Colors.background
   }
})