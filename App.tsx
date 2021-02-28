import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import PlayerWidget from './components/PLayerWidget';
import { AppContext } from './context/AppContext';

import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);

export default function App() {

  const [songId, setSongId] = useState<string|null>(null);

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value = {{
          songId ,
          setSongId : (id: string) => setSongId(id),
        }} >
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
        <PlayerWidget />
        </AppContext.Provider>
      </SafeAreaProvider>
    );
  }
}
