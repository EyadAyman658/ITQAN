import React,{useState,useContext, useEffect} from 'react'
import { Alert } from 'react-native'
  import userContext from '../../../context/context';

const useSubmitVacation =()=>{
    const { state,setContext } = useContext(userContext);
    const [name,setName]=useState<string>('')
    const [departmentName,setDepartmentName]=useState<string>('department_1')
    const [mobileNumber,setMobileNumber]=useState<number>()
    const [date,setDate]=useState<string>('')
    const [reuqestedDay,setRequestedDay]=useState<number>()
    
    const proceed= () =>{
        let regName = /^[a-zA-Z]+$/;
        let regDate = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;
        let regReqDays = /^[0-9]+$/;

        if (!name === regName.test(name) || name === "") {
            Alert.alert('please enter all of the required name')
          }

       //@ts-ignore
        else if (!reuqestedDay === regReqDays.test(reuqestedDay) || reuqestedDay=== undefined) {
            Alert.alert('please enter all of the required reuqestedDay')
        }  
        //@ts-ignore
        else if (!date === regDate.test(date) || date=== "") {
            Alert.alert('please enter all of the required date')
        }  
        else {
            let collection ={} as any
            let list= state.vacationlist
            let context =
            {
              vacationlist :list,   
            };
            collection.name=name
            collection.departmentName =departmentName,
            collection.Date = date,
            collection.reqDays =reuqestedDay,
            collection.mobileNumber = mobileNumber

                list.push(collection) 
                setName('')
                setDepartmentName('')
                setMobileNumber(undefined)
                setRequestedDay(undefined)
                setDate('')
                //@ts-ignore
                setContext(context)  
                // navigation.navigate('Details')          
            
            }

      }
      useEffect(()=>{},[name,departmentName,mobileNumber,date,reuqestedDay])

    return {name,departmentName,mobileNumber,date,reuqestedDay,setName,setDepartmentName,setMobileNumber,setDate,setRequestedDay,proceed}

}

export default useSubmitVacation

