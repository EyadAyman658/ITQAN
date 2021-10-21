import { Dimensions,PixelRatio} from 'react-native';
const height = Dimensions.get('window').height
const calcHeight = (x:number) => PixelRatio.roundToNearestPixel((height * x) / 100)

export const txtTitle=calcHeight(3)
export const txtTitleWeight='bold'
export const txtSubTitleWight='800'

export const txtSubTitle=calcHeight(2)
export const ctaTxt=calcHeight(2)
export const textConstant=calcHeight(1.9)
