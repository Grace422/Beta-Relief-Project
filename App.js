// // import { StatusBar } from 'expo-status-bar';
// import { Provider as PaperProvider, DefaultTheme, DarkTheme } from 'react-native-paper';
// import { AppearanceProvider, useColorScheme } from 'react-native-appearance';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import HomeStack from './routes/HomeStack';


// const CustomDefaultTheme = {
//   ...DefaultTheme,
//   colors: {
//     ...DefaultTheme.colors,
//     primary: '#1A8FE3',
//     background: '#ffffff',
//     text: '#000000',
//   },
// };

// const CustomDarkTheme = {
//   ...DarkTheme,
//   colors: {
//     ...DarkTheme.colors,
//     primary: '#1A8FE3',
//     background: '#000000',
//     text: '#ffffff',
//   },
// };

// const SettingsScreen = ({ toggleTheme, theme }) => (
//   <View style={styles.container}>
//     <Text style={styles.text}>Current Theme: {theme === CustomDefaultTheme ? 'Light' : 'Dark'}</Text>
//     <Button onPress={toggleTheme} title="Toggle Theme" />
//   </View>
// );

// export default function App() {
//   const colorScheme = useColorScheme();
//   const [theme, setTheme] = useState(CustomDefaultTheme);

//   useEffect(() => {
//     const loadTheme = async () => {
//       const storedTheme = await AsyncStorage.getItem('theme');
//       if (storedTheme) {
//         setTheme(storedTheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme);
//       } else {
//         setTheme(colorScheme === 'dark' ? CustomDarkTheme : CustomDefaultTheme);
//       }
//     };
//     loadTheme();
//   }, [colorScheme]);

//   const toggleTheme = async () => {
//     const newTheme = theme === CustomDefaultTheme ? CustomDarkTheme : CustomDefaultTheme;
//     setTheme(newTheme);
//     await AsyncStorage.setItem('theme', newTheme === CustomDarkTheme ? 'dark' : 'light');
//   };

//   return (
//     <AppearanceProvider>
//       <PaperProvider theme={theme}>
//         <SettingsScreen toggleTheme={toggleTheme} theme={theme} />
//       </PaperProvider>
//       <HomeStack/>
//     </AppearanceProvider>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#ffffff', // default background color
//   },
//   text: {
//     color: '#000000', // default text color
//     marginBottom: 20,
//   },
// });

import { StyleSheet, Text, View } from 'react-native';
import HomeStack from './routes/HomeStack'

export default function App() {
  return (
    // <View >
      <HomeStack/>
    //  </View> 
  );
}







