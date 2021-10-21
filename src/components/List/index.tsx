import React,{FC} from 'react'
import {Props} from './index.interface'
import { FlatList } from 'react-native'
const List:FC<Props>=({style,data,horizontalFlag,navigation,renderItem,ItemSeparatorComponent,showsVerticalScrollIndicator})=>{
 return(
    <FlatList
    style={style}
    horizontal={horizontalFlag}
    data={data}
    ItemSeparatorComponent={ItemSeparatorComponent}
    showsVerticalScrollIndicator={showsVerticalScrollIndicator}
    renderItem={
    renderItem
    }
    keyExtractor={(item, index) => index.toString()}
  />
 )
}

export default List