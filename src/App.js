import React, {useEffect, useState} from 'react';
import './App.css';
import ReactGA from 'react-ga';
import { Menu } from 'semantic-ui-react';

// components
import GridHeader from './components/header/header';
import Map from './components/map/map';
import PlaceHolder from './components/placeholder/placeholder';

const trackingId = 'UA-159899842-1';
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname);

const App = () => {
  const [cData, setData] = useState();
  const [latest, setLatest] = useState();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://coronavirus-tracker-api.herokuapp.com/all')
      .then(res => res.json())
      .then(data => {
        setLatest(data.latest)
        setData(data);
        setLoading(false);
      }).catch(err => {
        console.log(`Error fetching: ${err}`);
      });
  },[])

  if (isLoading) {
    return <PlaceHolder />
  }

  return (
    <div className="App">
      <header className="App-header">
        <Menu
          pointing 
          secondary
          inverted
        >
          <Menu.Item
            name='editorials'
          >
            <a 
              href="https://github.com/galoncyryll/COVID-19-tracker" 
              target="_blank"
              rel="noopener noreferrer"
              className="github-link"
            >
              <i className="github icon"></i>
            </a>
          </Menu.Item>
        </Menu>
        <GridHeader latest={latest}/>
      </header>
      <Map data={cData}/>
    </div>
  );
}

export default App;
