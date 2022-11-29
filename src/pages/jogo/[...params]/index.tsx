import Porta from "../../../components/Porta";
import { useState, useEffect } from "react";
import { criarPortas, atualizarPortas } from "../../../controllers/portaController";
import Link from 'next/link';
import styles from '../../../styles/jogo.module.css';
import { useRouter } from 'next/router'
import { PortaModel } from "../../../model/portaModel";

export default function JogoPage() {
  const [portas, setPortas] = useState<PortaModel[]>([]);
  const route = useRouter();

  useEffect(() => {
    if (route.query?.params?.length) {
      const [portas, ondeTahPresente] = route.query.params;
      setPortas(criarPortas(Number(portas), Number(ondeTahPresente)));
    } else {
      setPortas(criarPortas());
    }
  }, [route]);
  
  function renderPortas() {
    return portas.map(p => <Porta key={p.numero} model={p} onChange={novaPorta => {
      setPortas(atualizarPortas(portas, novaPorta));
    }} />)
  }

  return (
    <div className={styles.jogo}>
      <div className={styles.portas}>
        {renderPortas()}
      </div>
      <div className={styles.botoes}>
        <button type="button" onClick={e => route.reload()}>recarregar</button>
        
        <Link href="/">
          <button type="button">voltar para o início</button>
        </Link>
      </div>      
    </div>
  )
}
