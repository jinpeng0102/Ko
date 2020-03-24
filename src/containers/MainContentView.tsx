import React from 'react';
import { Text, View } from '@nodegui/react-nodegui';

// TODO
export default function MainContentView() {
  return(
    <View style={`flex: 1; padding: 12; width: '100%'`}>
      <View style={`height:32px;background-color: #34464d; `}>
        <Text style={``}>
          Main content
        </Text>
      </View>
    </View>
  )
}