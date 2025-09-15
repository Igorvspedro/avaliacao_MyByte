import { useState } from "react";
import "./App.css";

function App() {
  // Estados para Juros Simples
  const [cSimples, setCSimples] = useState('');
  const [iSimples, setISimples] = useState('');
  const [tSimples, setTSimples] = useState('');
  const [jSimples, setJSimples] = useState('');
  const [mSimples, setMSimples] = useState('');

  // Estados para Juros Compostos
  const [cComposto, setCComposto] = useState('');
  const [iComposto, setIComposto] = useState('');
  const [tComposto, setTComposto] = useState('');
  const [jComposto, setJComposto] = useState('');
  const [mComposto, setMComposto] = useState('');

  // Estados para Valor Presente
  const [vf, setVF] = useState('');
  const [iVP, setIVP] = useState('');
  const [tVP, setTVP] = useState('');
  const [vp, setVP] = useState('');

  // Calculo de juros simples
  const calcularJurosSimples = (e) => {
    e.preventDefault();

    const taxaDecimal = parseFloat(iSimples) / 100;
    setISimples(taxaDecimal);

    const juros = (parseFloat(cSimples) * taxaDecimal * parseFloat(tSimples));
    setJSimples(juros);

    const montante = parseFloat(cSimples) + juros;
    setMSimples(montante);
  };

  // Calculo de juros compostos
  const calcularJurosCompostos = (e) => {
    e.preventDefault();

    const taxaDecimal = parseFloat(iComposto) / 100;
    setIComposto(taxaDecimal);

    const montante = parseFloat(cComposto) * Math.pow(1 + taxaDecimal, parseFloat(tComposto));
    setMComposto(montante.toFixed(2));

    const juros = montante - parseFloat(cComposto);
    setJComposto(juros.toFixed(2));
  };

  // Calculo de Valor Presente
  const calcularValorPresente = (e) => {
    e.preventDefault();

    const taxaDecimal = parseFloat(iVP) / 100;
    setIVP(taxaDecimal);

    const valorPresente = parseFloat(vf) / (1 + taxaDecimal * parseFloat(tVP));
    setVP(valorPresente.toFixed(2));
  };

  return (
    <div className="App-header">
      <h3>Teste 2 - Cálculos Financeiros</h3>

      {/* Formulário de juros simples */}
      <form onSubmit={calcularJurosSimples}>
        <h5>Juros Simples</h5>
        <label>
          Capital (C):
          <input type="number" value={cSimples} onChange={(e) => setCSimples(e.target.value)} />
        </label>
        <label>
          Taxa de Juros (i %):
          <input type="number" value={iSimples} onChange={(e) => setISimples(e.target.value)} />
        </label>
        <label>
          Tempo (t):
          <input type="number" value={tSimples} onChange={(e) => setTSimples(e.target.value)} />
        </label>
        <button type="submit">Calcular Juros</button>
        {jSimples && (
          <div>
            <p>Valor dos juros: <strong>{jSimples}</strong></p>
            <p>Montante: <strong>{mSimples}</strong></p>
          </div>
        )}
      </form>

      {/* Formulário de juros compostos */}
      <form onSubmit={calcularJurosCompostos}>
        <h5>Juros Compostos</h5>
        <label>
          Capital (C):
          <input type="number" value={cComposto} onChange={(e) => setCComposto(e.target.value)} />
        </label>
        <label>
          Taxa de Juros (i %):
          <input type="number" value={iComposto} onChange={(e) => setIComposto(e.target.value)} />
        </label>
        <label>
          Tempo (t):
          <input type="number" value={tComposto} onChange={(e) => setTComposto(e.target.value)} />
        </label>
        <button type="submit">Calcular Juros Compostos</button>
        {jComposto && (
          <div>
            <p>Valor do montante: <strong>{mComposto}</strong></p>
            <p>Valor dos juros compostos: <strong>{jComposto}</strong></p>
          </div>
        )}
      </form>

      {/* Formulário de Valor Presente */}
      <form onSubmit={calcularValorPresente}>
        <h5>Valor Presente</h5>
        <label>
          Valor Futuro (VF):
          <input type="number" value={vf} onChange={(e) => setVF(e.target.value)} />
        </label>
        <label>
          Taxa de Juros (i %):
          <input type="number" value={iVP} onChange={(e) => setIVP(e.target.value)} />
        </label>
        <label>
          Tempo (t):
          <input type="number" value={tVP} onChange={(e) => setTVP(e.target.value)} />
        </label>
        <button type="submit">Calcular Valor Presente</button>
        {vp && (
          <div>
            <p>Valor Presente: <strong>{vp}</strong></p>
          </div>
        )}
      </form>
    </div>
  );
}

export default App;
