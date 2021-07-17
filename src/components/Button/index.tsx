import React,{FC} from 'react'
import {Props} from './index.interface'
import { View,Text,TouchableOpacity } from 'react-native'
import {styles} from './style'
const Button:FC<Props>=({action,title})=>{
 return(
     <TouchableOpacity onPress={action}>
         <View style={styles.ButtonContainer}>
            <Text style={styles.ButtonContent}>{title}</Text>
         </View>
     </TouchableOpacity>
 )
}

export default Button