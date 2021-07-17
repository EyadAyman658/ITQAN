import React from 'react'
const useHomeScreen=(navigation:any)=>{
    function selectPage(page:string)
    {
       navigation.navigate(page)
    }
    return{selectPage}
}

export default useHomeScreen