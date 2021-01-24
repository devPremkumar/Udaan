import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Trail from './src/drawer';
import { client } from './src/apollo';
const App = () => {
  useEffect(() => {
    client;
  }, []);
  return (
    <NavigationContainer>
      <Trail />
    </NavigationContainer>
  );
};

export default App