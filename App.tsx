import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { ThemeProvider } from 'styled-components/native';
import themes from './src/themes';
import { SignIn } from '@screens/SignIn';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  });

  if(!fontsLoaded) return <AppLoading />

  return (
    <ThemeProvider theme={themes}>
      <SignIn />
    </ThemeProvider >
  );
}
