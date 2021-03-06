import React from 'react';
import { StyleSheet} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Routes } from './src/routes';
import { SimplesProvider } from './src/contexts/SimplesContext';

export default function App() {
  return (
    <SimplesProvider> 
      <NavigationContainer>
        <Routes/>
      </NavigationContainer>
    </SimplesProvider>
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
