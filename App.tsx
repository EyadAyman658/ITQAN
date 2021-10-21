/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

 import React ,{useEffect}from 'react';
 import {
   SafeAreaView,
   StyleSheet,
   useColorScheme,

 } from 'react-native';

 import {
   Colors,
 } from 'react-native/Libraries/NewAppScreen';

import {AppContainer} from './src/routes/routes'
import AppContext from './src/context/index'
import SplashScreen from  "react-native-splash-screen";

 const App = () => {
   const isDarkMode = useColorScheme() === 'dark';

   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
   useEffect(() => {SplashScreen.hide();});
   return (
     //@ts-ignore
     <AppContext>
     <SafeAreaView style={{flex:1}}>
     {/* <StatusBar translucent={true} backgroundColor="transparent" barStyle="light-content" /> */}

        <AppContainer/>
     </SafeAreaView>
     </AppContext>
   );
 };

 const styles = StyleSheet.create({
   sectionContainer: {
     marginTop: 32,
     paddingHorizontal: 24,
   },
   sectionTitle: {
     fontSize: 24,
     fontWeight: '600',
   },
   sectionDescription: {
     marginTop: 8,
     fontSize: 18,
     fontWeight: '400',
   },
   highlight: {
     fontWeight: '700',
   },
 });

 export default App;
