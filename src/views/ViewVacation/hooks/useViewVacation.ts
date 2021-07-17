import { useContext, useState, useEffect } from 'react'
import userContext from '../../../context/context'

const useViewVacation = () => {
    const { state, setContext } = useContext(userContext);
    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] =useState([]);
    function handleChange (item:any)  {
        let vacationList = state.vacationlist
        vacationList = vacationList.filter((_id: any) => _id.name.toLowerCase() == item.toLowerCase())
        
        setSearchResults(vacationList)
    };

    function deleteVacation(item: any) {
        let vacationList = state.vacationlist
        let searchResultList = searchResults
        let newContext = { vacationlist: vacationList }
        vacationList.splice(vacationList.indexOf(item), 1)
        vacationList = vacationList.filter((_id: any) => _id !== item)
//@ts-ignore
        searchResultList.splice(searchResultList.indexOf(item), 1)
        searchResultList = searchResultList.filter((_id: any) => _id !== item)
        
        setContext(newContext)
    }

    useEffect(() => {
      
      }, [searchTerm]);

    return { state, deleteVacation,searchResults,handleChange,searchTerm }
}

export default useViewVacation