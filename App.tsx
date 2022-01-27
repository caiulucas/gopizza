import React from 'react';
import AppLoading from 'expo-app-loading';
import { useFonts, DMSans_400Regular } from '@expo-google-fonts/dm-sans';
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display';
import { Inter_500Medium } from '@expo-google-fonts/inter';
import { ThemeProvider } from 'styled-components/native';
import { StatusBar } from 'react-native';

import { Routes } from '@routes/index';
import themes from './src/themes';

export default function App() {
  const [fontsLoaded] = useFonts({
    DMSans_400Regular,
    DMSerifDisplay_400Regular,
    Inter_500Medium,
  });

  if (!fontsLoaded) return <AppLoading />;

  return (
    <ThemeProvider theme={themes}>
      <StatusBar translucent backgroundColor="transparent" />
      <Routes />
    </ThemeProvider>
  );
}
