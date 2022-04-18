import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import './style.css'
import api from './services/api.js'

function App() {

  const [input, setInput] = useState('')
  const [cep, setCEP] = useState({})

  async function handleSearch() {
    if (input === '') {
      alert ('Preencha com um CEP correto')
      return
    }

    try {
      const response = await api.get(`${input}/json`)
      setCEP(response.data)
      setInput('')

    } catch (error) {
      alert('Erro ao buscar CEP')
      setInput('')
    }
  }

  return (
    <div className="container">
      <h1 className="title">Buscador CEP</h1>

      <div className="containerInput">
        <input 
        type='Text' 
        placeholder="Digite seu CEP"
        value={input}
        onChange={(e) => setInput(e.target.value) }
        />

        <button className="buttonSearch" onClick={handleSearch}>
          <FiSearch size={25} color='white'/>
        </button>
      </div>

      {Object.keys(cep).length > 0 &&(
        <main className="main">
        <h2>CEP: {cep.cep}</h2>

        <span>{cep.logradouro}</span>
        <span>{cep.bairro}</span>
        <span>{cep.localidade}, {cep.uf}</span>

      </main>
      )}

    </div>
  );
}

export default App;