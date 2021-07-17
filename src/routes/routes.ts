import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import ViewVacation from '../views/ViewVacation/index'
import SubmitVacation from '../views/SubmitVacation/index'
import HomeScreen from '../views/HomeScreen/index'

const AppNavigator = createStackNavigator(
  {
    HomeScreen:HomeScreen,
    ViewVacation: ViewVacation,
    SubmitVacation: SubmitVacation,
  },
  {
    initialRouteName: 'HomeScreen',
    headerMode: 'none',
    // navigationOptions: {
    //   headerVisible: false,
    // }

}

);;



  export const AppContainer=createAppContainer(AppNavigator);
