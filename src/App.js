import logo from './logo.svg';
import './App.css';
import item from './items/item';
import ShopItemClass from './components/ShopItemClass.jsx';

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={item} />
      </div>
    </div>
  );
}

export default App;
