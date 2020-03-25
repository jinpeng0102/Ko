import React from 'react';
import { View, Text, RadioButton, useEventHandler, LineEdit } from '@nodegui/react-nodegui';
import SubHeader from '../components/SubHeader';
import { QRadioButtonSignals } from '@nodegui/nodegui';
import { getBase64Image } from '../globalFunctions';

const { mainContentView, title, label } = require('../style').default;

export default function MainContentView() {
  const btnHandler = useEventHandler<QRadioButtonSignals>(
    {
      clicked: () => {
        // TODO Write here something...
      },
    },
    [],
  );
  return (
    <View style={mainContentView}>
      <SubHeader/>
      <View style={`height:'48px';`}/>
      <Text style={title}>LED Selection</Text>
      <View style={`height:'31px';`}/>
      <View style={`flex-direction: row;`}>
        <RadioButton style={label} text={`All`} on={btnHandler}/>
        <RadioButton style={`${label} padding-left: 14;`} text={`Custom`} on={btnHandler}/>
        <LineEdit
          style={`${label} background: #1a2326; border: none; width: 145px; height: 24px; margin-horizontal: 5;`}/>
        <Text>{`<img src="${getBase64Image('./assets/info.png')}" alt="info" />`}</Text>
      </View>
      <View style={`height:'29px';`}/>
      <Text style={title}>Lighting Modes</Text>
      <View style={`height:'35px';`}/>
      <View style={`flex-direction: row;`}>
        <RadioButton style={label} text={`Static`} on={btnHandler}/>
        <RadioButton style={`${label} padding-left: 14;`} text={`Color Cycle`} on={btnHandler}/>
      </View>
      <View style={`height:'12px';`}/>
      <View style={`flex: 1; flex-direction: row; border: 1px solid #131d1e; `}>
        <View style={`flex-grow: 4; flex-basis: 4; border: 1px solid #131d1e; `}>

        </View>
        <View style={`flex-grow: 3;flex-basis: 3; border: 1px solid #131d1e; `}>

        </View>
        <View style={`flex-grow: 4;flex-basis: 4; border: 1px solid #131d1e; `}>

        </View>

      </View>
    </View>
  );
}