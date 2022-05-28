// import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import cards from './carddata.js'

function App() {
  return (
    <div className="App">
    {cards.map((point) => {
      console.log(point)
        // <Card img={point.img} case={point.case} gift={point.gift} pay={point.pay} mobile={point.mobile} />
       return <div  key={point.id}>
        <Card  {...point} />
        </div>
    })}
      

    </div>
  );
}

export default App;
