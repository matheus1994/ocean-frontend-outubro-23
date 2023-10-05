import './App.css'
import Card from './components/Card/Card'
 

function App() {

  const personagem1 = {
    nome: 'Rick Sanchez',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg'
  }

  const personagem2 = {
    nome: 'Marty Smith',
    imagemUrl: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg'
  }

  const personagens = [personagem1, personagem2]

  return (

    <>
       {personagens.map(function(personagem) {
           return <Card item={personagem}/>
       })}
       

    </>

  )

}

 

export default App