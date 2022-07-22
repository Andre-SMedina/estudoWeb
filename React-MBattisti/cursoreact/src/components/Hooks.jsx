// Serve para mudar o valor da variável no front em tempo real
import { useState, useEffect } from "react";

const Hooks = () => {
  let idade = 30;
  const [novaIdade, setNovaIdade] = useState(40);

  const changeAge = () => {
    idade = 31;
  };

  const changeNewAge = () => {
    setNovaIdade(45);
  };

  useEffect(() => {
    console.log("testando");
  });

  return (
    <div>
      {/* Não muda o valor em tempo real */}
      <p>Idade: {idade}</p>
      <button onClick={changeAge}>Mudar Idade</button>

      {/* Muda o valor em tempo real */}
      <p>Idade: {novaIdade}</p>
      <button onClick={changeNewAge}>Mudar nova Idade</button>
    </div>
  );
};

export default Hooks;
