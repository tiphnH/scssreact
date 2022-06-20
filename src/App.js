// import logo from './logo.svg';
import './App.css';
import Card from './components/Card'
import './components/Card.scss';

function App() {
  return  (
    <div className="App">
      <Card      
      imageUrl='https://cdn.pixabay.com/photo/2016/10/30/14/39/cat-1783342_1280.jpg'
      title='Chat'
      secondaryText='secondary text'
      body='Phasellus curabitur justo dictumst, eros eleifend in turpis proin potenti turpis.'
      action1='action1'
      subtitle='Subtitle'
      />   
    </div>   
  );
}

export default App;