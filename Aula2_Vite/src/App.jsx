import './App.css'

function Ola() {
  return (
    <h1>Olá...</h1>
  )
}

const dados = {
nome: "Everton",
sobrenome: "Moraes",
}

function Mensagem(){
  return (
  <h2>Usuário: {dados.nome} {dados.sobrenome}</h2>
  )
}

function App() {
  return (
    <>
    <Ola />
    <Mensagem />
    </>
  )
}

export default App
