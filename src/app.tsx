import { Text, Window, hot, View } from '@nodegui/react-nodegui';
import React from 'react';
import { QIcon } from '@nodegui/nodegui';
import { StepOne } from './components/stepone';
import { StepTwo } from './components/steptwo';
import nodeguiIcon from '../assets/nodegui.jpg';

const { styleSheet } = require('./styleSheet');

const minSize = { width: 500, height: 520 };
const winIcon = new QIcon(nodeguiIcon);

class App extends React.Component {
  render() {
    return (
      <Window
        windowIcon={winIcon}
        windowTitle="Hello 👋🏽"
        minSize={minSize}
        styleSheet={styleSheet}
      >
        <View style={containerStyle}>
          <Text id="welcome-text">Welcome to NodeGui 🐕</Text>
          <Text id="step-1">1. Play around</Text>
          <StepOne/>
          <Text id="step-2">2. Debug</Text>
          <StepTwo/>
        </View>
      </Window>
    );
  }
}

const containerStyle = `
  flex: 1; 
`;

export default hot(App);
