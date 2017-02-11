import Inferno from 'inferno';
import Component from 'inferno-component';
import './App.css';
import TopNavBar from './components/top-nav-bar';
import GoogleMap from './components/map';


class App extends Component {
  render() {
    return (
      <div>
        <TopNavBar />
        <GoogleMap center={{ lat: -30.0305007, lng: -51.2331994 }} zoom={17} />
      </div>
    );
  }
}

export default App;
