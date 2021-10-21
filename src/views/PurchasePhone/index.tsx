import React, { FC } from 'react'
import { PurhcasePhoneProps } from './index.interface'
import { View, Text, FlatList } from 'react-native'
import { styles } from './style'
import  {Header,Content}  from './partials/index'

// import usePurchasePhone from './hooks/usePurchasePhoneHook'
const PurchasePhone: FC<PurhcasePhoneProps> = ({ children, navigation }) => {
  // const { deleteVacation, state, handleChange, searchResults,searchTerm } = usePurchasePhone()
  return (
    <View style={styles.purchasePhoneContainer}>
         <Header navigation={navigation}/>
         <Content navigation={navigation}/>
    </View>
  )
}

export default PurchasePhone