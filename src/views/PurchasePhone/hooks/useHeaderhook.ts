import { baseProps } from "react-native-gesture-handler/lib/typescript/handlers/gestureHandlers"
const useHeader=(navigation:any)=>{

    function previousPage()
    {
        navigation.goBack()
    }
    return{previousPage}
}

export default useHeader


