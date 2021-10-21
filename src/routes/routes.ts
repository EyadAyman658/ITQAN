import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import PurhcasePhone from '../views/PurchasePhone/index'
import HomeScreen from '../views/HomeScreen/index'

const AppNavigator = createStackNavigator(
  {
    HomeScreen:HomeScreen,
    PurhcasePhone: PurhcasePhone,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
    // navigationOptions: {
    //   headerVisible: true,
    
    // }

}

);;



  export const AppContainer=createAppContainer(AppNavigator);
