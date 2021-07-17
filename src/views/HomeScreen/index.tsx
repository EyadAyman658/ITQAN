import React,{FC} from 'react'
import {HomeScreenProps} from './index.interface'
import { View,Text } from 'react-native'
import {styles} from './style'
import Button from '../../components/Button/index'
import useHomeScreen from '../HomeScreen/hooks/useHomeScreen'

const HomeScreen :FC<HomeScreenProps>=({navigation})=>{
 const {selectPage}=useHomeScreen(navigation)
 return(
    <View style={styles.homeScreenContainer}>
  
    <Button title={'Submit'} action={()=>{selectPage('SubmitVacation')}}/>
    <Button title={'View'} action={()=>{selectPage('ViewVacation')}}/>
  </View>
 )
}

export default HomeScreen