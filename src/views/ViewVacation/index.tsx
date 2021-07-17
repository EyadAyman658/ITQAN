import React, { FC } from 'react'
import { ViewVacationProps } from './index.interface'
import { View, Text, FlatList } from 'react-native'
import { styles } from './style'
import Button from '../../components/Button/index'
import Input from '../../components/TextInput/index'

import useViewVacation from './hooks/useViewVacation'
const ViewVacation: FC<ViewVacationProps> = ({ children, navigationOptions }) => {
  const { deleteVacation, state, handleChange, searchResults,searchTerm } = useViewVacation()
  // navigationOptions = { header: null };
  return (
    <View style={styles.ViewVacationContainer}>
       <Input title={'Search'} 
       onChange={(searchValue:string)=>handleChange(searchValue)}
/>
      {
        state.vacationlist.length > 0 ?
          <FlatList
            // horizontal={true}
            style={{
              flex: 1,
              width: '100%'
            }}
            data={searchResults.length>0 ? searchResults : state.vacationlist}
            numColumns={2}
            showsVerticalScrollIndicator={true}

            renderItem={({ item }) => (
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#000' }}>Name:{item.name}</Text>
                <Text>Department:{item.departmentName}</Text>
                {item.mobileNumber !== undefined ? <Text>mobile number:{item.mobileNumber}</Text> : null}
                <Text>Date:{item.Date}</Text>
                <Text>Requested Day:{item.reqDays}</Text>
                <Button title={'Delete'} action={() => { deleteVacation(item) }} />
              </View>

            )
            } keyExtractor={(item) => item.name}
          /> : <Text>no vacation list</Text>
      }
    </View>
  )
}

export default ViewVacation