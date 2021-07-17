import React,{FC} from 'react'
import {Props} from './index.interface'
import { View,TextInput,Text } from 'react-native'
import {styles} from './style'
const Input:FC<Props>=({onChange,onSubmbit,blurOnSubmit,ref,secureTextEntry,title,value})=>{
 return(
     <View>
    <Text style={styles.TextInfo}>{title}</Text>
    <TextInput
    ref={ref}
    value={value}
    onSubmitEditing={onSubmbit}
    blurOnSubmit={blurOnSubmit}
    onChangeText={onChange}
    style={styles.TextInfo}
    underlineColorAndroid='#000'
    secureTextEntry={secureTextEntry}
  />
     </View>
  
 )
}

export default Input