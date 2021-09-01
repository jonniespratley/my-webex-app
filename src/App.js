import {WebexMeetingWidget} from '@webex/widgets';

import '@webex/widgets/dist/webexWidgets.css';

import './App.css';


const meetingDestination = '';
const accessToken = '';

function App() {
  return (
    <div className="App">
     <h2>Space Widget</h2>
     <WebexMeetingWidget 
     accessToken={accessToken}
     meetingDestination={meetingDestination} />
    </div>
  );
}

export default App;
