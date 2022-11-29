import Cartao from "../components/Cartao";
import style from '../styles/formulario.module.css';
import Link from 'next/link';
import InputNumero from "../components/InputNumero";
import {useState} from 'react';

export default function Index() {
  const [qtdPortas, setQtdPortas] = useState<number>();
  const [portaPresente, setPortaPresente] = useState<number>();

  return (
    <div className={style.formulario}>
      <div>
        <Cartao bgColor="#c0392c"><h1>Monty Hall</h1></Cartao>
        <Cartao>
          <InputNumero 
            label="Quantidade de portas?"
            value={qtdPortas}
            min={4}
            max={16}
            onChange={setQtdPortas}
          />
        </Cartao>
      </div>
      <div>
        <Cartao>
          <InputNumero 
            label="Qual com o presente?"
            value={portaPresente}
            max={qtdPortas}
            onChange={setPortaPresente}
          />
        </Cartao>
        <Cartao bgColor="#28a085">
          <Link href={`/jogo/${qtdPortas && qtdPortas > 16 ? 16 : qtdPortas}/${!portaPresente ? '' : portaPresente}`} className={style.link}>
            <h2>Iniciar</h2>
          </Link>
        </Cartao>
      </div>
    </div>
  );
}
