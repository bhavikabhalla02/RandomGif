import './App.css';
import Tag from './Components/Tag';
import Random from './Components/Random';
function App() {
  return (
    <div className="container background">
    <h1 className='heading'>RANDOM GIFS</h1>

    <div className="main1">
      <Random/>
      <Tag/>
    </div>
    </div>
  );
}

export default App;
