import React from 'react';
import { Text, Window, hot, View } from '@nodegui/react-nodegui';
import { QIcon } from '@nodegui/nodegui';
import appIcon from '../assets/appIcon.png';
import { getBase64Image } from './globalFunctions';
import LeftSideView from './containers/LeftSideView';
import MainContentView from './containers/MainContentView';
import { Device, devices, HID } from 'node-hid';
// TODO for hiding title bar on Mac version
// import { setTitleBarStyle } from '@nodegui/plugin-title-bar';

devices().map((deviceInfo: Device) => {
  // console.log('>>>>>>>>deviceInfo>>>', deviceInfo);
  if (deviceInfo && deviceInfo.path) {
    try {
      const device = new HID(deviceInfo.path);
      device.on('data', async (data) => {
        console.log('Data: ', data);
      });
      device.on('error', err => {
        throw err;
      });
      device.close();
    } catch (e) {
      console.log('Catch error: ', e);
    }
  }
});
const { rootView } = require('./style').default;
const styleSheet = require('./styleSheet').default;

const minSize = { width: 1360, height: 735 };
const winIcon = new QIcon(appIcon);

class App extends React.Component {
  render() {
    return (
      <Window
        windowIcon={winIcon}
        windowTitle="UMBRA"
        minSize={minSize}
        styleSheet={styleSheet}
      >
        <View style={rootView}>
          <View id="body">
            <LeftSideView/>
            <View style={`width:10px; height:'100%';`}/>
            <MainContentView/>
          </View>
          <View id="footer">
            <Text style={`flex: 1;`}>{`<img src="${getBase64Image('./assets/logo.png')}" alt="profile" />`}</Text>
            <Text style={`color: white; font-size: 10px;`}>support@kolink.eu</Text>
          </View>
        </View>
      </Window>
    );
  }
}

export default hot(App);
