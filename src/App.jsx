import './App.css';

import FirstComponent from './components/FirstComponent.jsx';
import TemplateExpressions from './components/TemplateExpressions.jsx';
import MyComponent from './components/MyComponent.jsx';

import Animal from './assets/CAT.jpg'
import OutroComponent from './components/OutroComponent.jsx';
import ComponentORemake from './components/ComponentORemake.jsx';



function App() {
  const n = 15
  const classDiferente = true

  return (
   <div className='App'>
    {/* <FirstComponent />
    <TemplateExpressions />
    <MyComponent /> */}

    <ComponentORemake />

      <h1>Olha só um texto aqui</h1>

      {/* Css no propio modulo */}
    <OutroComponent />
      {/* css inline */}

    <p style={{color: "blue", padding:"25px", backgroundColor:"red", fontSize:"40px"}}>Este parágrafo é do app.jsx</p>

    <h3 style={n > 10 ? ({color:"green", backgroundColor:"gray"}) : ({color:"red", backgroundColor:"gray"}) } >Aqui tem um texto com o primeiro estilo</h3>

    <h3 style={n < 10 ? ({color:"green", backgroundColor:"gray"}) : ({color:"red", backgroundColor:"gray"}) } >Aqui tem um texto com o segundo estilo</h3>

    <h2 className={classDiferente ? "red-title": "normal-title"}>Texto com classes diferentes 1</h2>

      {/* import pela pasta public */}
    <img src="./FISH.jpg" width={1100} height={600} />

    <img src={Animal} alt="gato meme" width={1100} height={600}/>

   </div>
  );
}

export default App;
