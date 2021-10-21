import { StyleSheet } from "react-native";
import {Spacing} from '../../../../styles/index'

import { Dimensions,PixelRatio} from 'react-native';
import {HeaderStyles} from './index.interface'
import { calcHeight } from "../../../../styles/spacing";

export const styles=StyleSheet.create<HeaderStyles>({

  headerContaner:{
     flex:0.8,
      backgroundColor:'#450b70'
  },
navigationArrow:{
   marginTop:calcHeight(2),
   marginHorizontal:calcHeight(2)
}
  
    
})