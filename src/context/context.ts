import {createContext} from 'react'
import {StoreApi,State} from './index.interface'

export const initialState :State =
{
   vacationlist:[]
}

export default createContext<StoreApi>
(
{
state: initialState,
//@ts-ignore
setContext:(state:State)=>state
}
);