import React from 'react';
import {View, Text} from 'react-native';

// Import the JSON files
const jsonData1 = require('./Teacher.json');
const jsonData2 = require('./Student.json');

const App = () => {
  return (
    <View>
      {jsonData1 && <Text>Data 1: {JSON.stringify(jsonData1)}</Text>}

      {jsonData2 && <Text>Data 2: {JSON.stringify(jsonData2)}</Text>}
    </View>
  );
};

export default App;
