import React from 'react';
import { Text, View } from '@nodegui/react-nodegui';
import { getBase64Image } from '../globalFunctions';

const { title } = require('../style').default;

export default function SubHeader() {
  return (
    <View
      style={`
          height: '32px';
          background-color: #34464d;
          justify-content: 'space-between';
          align-items: 'center';
          padding-left: '12px';
          flex-direction: row;
        `}>
      <View style={`flex: 1; flex-direction: row;`}>
        <Text>
          {`<img src="${getBase64Image('./assets/plug.png')}" alt="plug" />
            <span style="${title}">DEVICES</Text>`}
        </Text>
        <Text style={`margin: 7;`}>
          {`<img src="${getBase64Image('./assets/child-nav.png')}" alt="nav" />`}
        </Text>
        <Text style={title}>DEVICE 1</Text>
      </View>
      <Text>{`<img src="${getBase64Image('./assets/back-button.png')}" alt="back-button" />`}</Text>
    </View>
  );
}