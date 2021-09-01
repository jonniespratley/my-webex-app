import React from 'react';
import RecentsWidget from '@webex/widget-recents';
import SpaceWidget, {destinationTypes} from '@webex/widget-space';

import '@webex/widget-space/src/momentum.scss';
import './App.css';

import Webex from 'webex';



const meetingDestination = 'bc2266b0d6c311ebaef56d77908bfcbb';
const accessToken = 'YTc4NmMzM2ItYjM0MS00MDhjLWFiMmUtZGJiYWM3NDVkZDE0NDY2ZTkyM2MtMDU3_PF84_1eb65fdf-9643-417f-9974-ad72cae0e10f';

const webexInstance = Webex.init({
  config: {
    credentials: {
      authorizationString: accessToken
    }
  }
});

console.log('webex instance', webexInstance);

const spaceWidgetProps = {
  accessToken,
  destinationType: destinationTypes.USERID,
  destinationId: 'jonniespratley@gmail.com',
  activities: {
    files: false,
    meet: true,
    message: false,
    people: true
  },
  initialActivity: 'meet'
}

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log('Mounted')
  }
  render() {
    return (<div className="App">

      <h2>Space Widget</h2>
      <SpaceWidget {...spaceWidgetProps}/>

      <h2>Recents Widget</h2>
      <RecentsWidget
        accessToken={accessToken}
        logLevel="debug" />

      {/*<WebexMeetingWidget 
    accessToken={accessToken}
    meetingDestination={meetingDestination} /> 
   */}
    </div>);
  }
}


export default App;
