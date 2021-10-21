import React, { FC } from 'react'
import { View, Image, ViewStyle } from 'react-native'
import { HeaderProps } from './index.interface'
import { styles } from './style'
import { TouchableOpacity } from 'react-native-gesture-handler'
import useHeaderHook from '../../hooks/useHeaderhook'
const Header: FC<HeaderProps> = ({ navigation }) => {
    const {previousPage}=useHeaderHook(navigation)
    return (
        <View style={styles.headerContaner} >
            <TouchableOpacity  onPress={()=>{previousPage()}}>
                <Image style={styles.navigationArrow as any} source={require('../../../../assets/icons/png/arrowBack.png')} />
            </TouchableOpacity>
        </View>


    )
}

export default Header