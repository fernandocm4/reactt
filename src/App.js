import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List  from  './components/List';

function App() {

  const nome='Maria'

  return (
    <div className="App">
      <Frase></Frase>
      <Frase></Frase>
      <SayMyName nome='Fernando'></SayMyName>
      <SayMyName nome='João'></SayMyName>
      <SayMyName nome={nome}></SayMyName>
      <Pessoa 
        nome='Rodrigo' 
        idade='28' 
        profissao='programador' 
        foto='https://via.placeholder.com/150'>
      </Pessoa>
      <List></List>
    </div>
  );
}

export default App;
