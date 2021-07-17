import { Dimensions,PixelRatio} from 'react-native';
const height = Dimensions.get('window').height
const calcHeight = (x:number) => PixelRatio.roundToNearestPixel((height * x) / 100)

export const txtTitle=calcHeight(6)
export const txtSubTitle=calcHeight(4)
export const ctaTxt=calcHeight(2)
