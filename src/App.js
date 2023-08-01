import './App.css';
import Menu from './components/Menu';
import data from './utils/data';

function App() {
  return (
    <div className="App">
      <main>
        <Menu recipes={data} title="Zambian Recipes"/>
      </main>
    </div>
  );
}

export default App;
