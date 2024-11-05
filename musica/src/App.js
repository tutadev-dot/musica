import React, { useState } from 'react';
import './App.css';

function App() {
  const [musicas, setMusicas] = useState([]);
  const [novaMusica, setNovaMusica] = useState("");


  const adicionarMusica = () => {
    if (novaMusica.trim() !== "") {
      setMusicas([...musicas, novaMusica]);
      setNovaMusica(""); 
    }
  };


  const removerMusica = (index) => {
    const novaLista = musicas.filter((_, i) => i !== index);
    setMusicas(novaLista);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Gerenciador de Músicas</h1>
        
        <div>
          <input
            type="text"
            value={novaMusica}
            onChange={(e) => setNovaMusica(e.target.value)}
            placeholder="Nome da música"
          />
          <button onClick={adicionarMusica}>Adicionar Música</button>
        </div>

        <ul>
          {musicas.map((musica, index) => (
            <li key={index}>
              {musica}
              <button onClick={() => removerMusica(index)}>Remover</button>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
