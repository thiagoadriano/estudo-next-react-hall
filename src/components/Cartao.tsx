import { ReactElement } from 'react';
import style from '../styles/cartao.module.css';

interface iCartaoProps {
  bgColor?: string;
  children?: ReactElement<HTMLElement>;
}

export default function Cartao({bgColor, children}: iCartaoProps) {
  return (
    <div 
      className={style.cartao}
      style={{backgroundColor: bgColor ?? '#fff'}}
    >
      {children}
    </div>
  );
}