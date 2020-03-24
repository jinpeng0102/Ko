import React from 'react';
import { Text, View } from '@nodegui/react-nodegui';
import { getBase64Image } from '../globalFunctions';

const { leftSideView, deviceHeader } = require('../style').default;

export default function LeftSideView() {
  return (
    <View style={leftSideView}>
      <View
        style={deviceHeader}>
        <Text style={`flex: 1;`}>
          {`<img src="${getBase64Image('./assets/profile.png')}" alt="profile" />
            <span style="color: white; font-size: 14px; font-weight: bold">PROFILES</Text>`}
        </Text>
        <Text>{`<img src="${getBase64Image('./assets/menu.png')}" alt="menu" />`}</Text>
      </View>
      <View>
        <View style={`height: 8px;`}/>
        <View style={`height: 96px; background-color: #1a2326; flex-direction: row;`}>
          <View style="width: 4px; height: 96px; background-color: #204888;"/>
          <Text style={`margin-horizontal: 16px;`}>
            {`<img src="${getBase64Image('./assets/device.png')}" alt="device" />`}
          </Text>
          <Text style={`padding: 0; color: white; font-size: 14px; font-weight: bold`}>DEFAULT</Text>
        </View>
      </View>
      {[0, 1, 2, 3, 4].map(key =>
        <View key={key}>
          <View style={`height: 8px;`}/>
          <View style={`height: 96px; border: 1px dashed #131d1e; align-items: 'center'; justify-content: 'center';`}>
            <Text>{`<img src="${getBase64Image('./assets/add-device.png')}" alt="add-device" />`}</Text>
          </View>
        </View>)}
    </View>
  );
}