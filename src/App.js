import logo from './logo.svg';
import './App.css';
import Menu from './components/Menu';
import Recipe from './components/Recipe';
import data from './utils/data';

console.log(data);

function App() {
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <main>
        <Menu recipes={data}  title="Delicious Recipes"/>
        {data.map((recipe, i)=>(
          <Recipe key={i} {...recipe} />
        ))}
      </main>
    </div>
  );
}

export default App;
