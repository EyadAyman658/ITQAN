import React,{FC, useState} from 'react'
import {SubmitVacationProps} from './index.interface'
import { View } from 'react-native'
import {styles} from './style'
import Button from '../../components/Button/index'
import Input from '../../components/TextInput/index'
import useSubmitVacation from './hooks/useSubmitVacation'
import {Picker} from '@react-native-picker/picker';

const SubmiteVacation :FC<SubmitVacationProps>=()=>{
const {setDate,
      setDepartmentName,
      setMobileNumber,
      setName,
      setRequestedDay,
      proceed,
      name,
      departmentName,
      mobileNumber,
      reuqestedDay,
      date }=useSubmitVacation()

 return(
    <View style={styles.SubmitVacationContainer}>
    <Input
     title={'Name*'}
     value={name}
     onChange={(name:string)=>setName(name)}
    />
    <Picker
        selectedValue={departmentName}
        style={styles.Picker}
        onValueChange={(itemValue, itemIndex) => setDepartmentName(itemValue)}
      >
        <Picker.Item label="department_1" value="department_1" />
        <Picker.Item label="department_2" value="department_2" />
        <Picker.Item label="department_3" value="department_3" />
      </Picker>
    <Input
     title={'Mobile Number (optional)'}
     value={mobileNumber}
     onChange={(mobileNumber:number)=>setMobileNumber(mobileNumber)}
    />
    <Input
     title={'Start Date*'}
     value={date}
     onChange={(date:any)=>setDate(date)}
    />
    <Input
     title={'Required Days*'}
     value={reuqestedDay}
     onChange={(reqDays:any)=>setRequestedDay(reqDays)}

    />
    <Button title={'Proceed'} action={proceed}/>

  </View>
 )
}

export default SubmiteVacation