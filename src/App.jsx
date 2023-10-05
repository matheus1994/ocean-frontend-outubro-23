import './App.css'
import Card from './components/Card/Card'
 

function App() {

  const personagem1 = {
    nome: 'Rick Sanchez',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  const personagem2 = {
    nome: 'Rick Sanchez',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }

  return (

    <>
       <Card item={personagem1}/>
       <Card item={personagem2}/>

    </>

  )

}

 

export default App