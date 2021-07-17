import { Dimensions,PixelRatio} from 'react-native';
const width = Dimensions.get('window').width
const height = Dimensions.get('window').height

export const calcHeight = (x:number) => PixelRatio.roundToNearestPixel((height * x) / 100)
export const calcWidth = (x:number)=> PixelRatio.roundToNearestPixel((width * x) / 100)
export const base= calcWidth(5)
