import { PortaModel } from '../model/portaModel';
import style from '../styles/porta.module.css';
import Presente from './Presente';

export default function Porta({model, onChange}:{model: PortaModel, onChange: (novaPota: PortaModel) => void}) {

  function renderPorta() {
    return (
      <div className={style.porta}>
          <p className={style.numero}>{model.numero}</p>
          <div className={style.macaneta} onClick={e => {
            e.stopPropagation();
            onChange(model.abrir());
          }}></div>
        </div>
    );
  }

  return (
    <div className={style.area} onClick={e => onChange(model.alterarSelecao())}>
      <div className={`${style.estrutura} ${model?.selecionada && !model?.aberta && style.selecionado}`}>
        {model.aberta ? model.temPresente ? <Presente /> : null : renderPorta() }
      </div> 
      <div className={style.chao}></div>
    </div>
  );
}