
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Weather'
import Weather from './Weather';

function App() {
  return (
    <div className="App">
      <div className='container'>

<Weather defaultCity='Jos'   />




      </div>
      <p>
        This was coded by Lucy Ajumi Ameh and it is an 
        <a href='https://github.com/Luluameh/weather-site'>
          Open source
        </a>
      </p>
    </div>
  );
}

export default App;
