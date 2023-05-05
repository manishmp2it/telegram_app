import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import RootNavigator from './src/navigations/RootNavigator';
import { MD3LightTheme, Provider as PaperProvider } from 'react-native-paper';




export default function App() {
  const theme = {
    ...MD3LightTheme, // or MD3DarkTheme
    roundness: 2,
    colors: {
      "primary": "#2675EC",
      "onPrimary": "rgb(255, 255, 255)",
      "primaryContainer": "#2675EC",
      "onPrimaryContainer": "rgb(0, 29, 49)",
      "secondary": "rgb(115, 92, 0)",
      "onSecondary": "rgb(255, 255, 255)",
      "secondaryContainer": "#2675EC",
      "onSecondaryContainer": "#fff",
      "tertiary": "#2675EC",
      "onTertiary": "#2675EC",
      "tertiaryContainer": "#fff",
      "onTertiaryContainer": "#2675EC",
      "error": "rgb(186, 26, 26)",
      "onError": "rgb(255, 255, 255)",
      "errorContainer": "rgb(255, 218, 214)",
      "onErrorContainer": "rgb(65, 0, 2)",
      "background": "rgb(252, 252, 255)",
      "onBackground": "rgb(26, 28, 30)",
      "surface": "#fff",
      "onSurface": "#2675EC",
      "surfaceVariant": "rgb(222, 227, 235)",
      "onSurfaceVariant": "rgb(66, 71, 78)",
      "outline": "rgb(114, 120, 126)",
      "outlineVariant": "rgb(194, 199, 206)",
      "shadow": "rgb(0, 0, 0)",
      "scrim": "rgb(0, 0, 0)",
      "inverseSurface": "rgb(47, 49, 51)",
      "inverseOnSurface": "rgb(240, 240, 244)",
      "inversePrimary": "rgb(146, 204, 255)",
      "elevation": {
        "level0": "transparent",
        "level1": "rgb(239, 244, 250)",
        "level2": "rgb(232, 240, 247)",
        "level3": "rgb(224, 235, 244)",
        "level4": "rgb(222, 234, 243)",
        "level5": "rgb(217, 231, 240)"
      },
      "surfaceDisabled": "rgba(26, 28, 30, 0.12)",
      "onSurfaceDisabled": "rgba(26, 28, 30, 0.38)",
      "backdrop": "rgba(43, 49, 55, 0.4)"
    },
  };

  
  return (
    <PaperProvider theme={theme}>
        <RootNavigator />
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
