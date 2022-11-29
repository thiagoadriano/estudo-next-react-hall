import style from '../styles/inputnumero.module.css';
import { useCallback, useEffect } from 'react';

interface iInputNumero {
  value: number|undefined;
  onChange: (newValue: number|undefined) => void;
  label: string;
  min?:number;
  max?:number;
}

export default function InputNumero({ label, value, onChange, min, max }: iInputNumero) {
  const update = useCallback((num: number|undefined) => onChange(num), [onChange]);
  const validateMax = (num: number|undefined) => num && max ? num < max : true;
  const validateMin = (num: number|undefined) => num && min ? num > min : true;

  const inc = () => {
    if(validateMax(value)) {
      onChange(value ? value + 1 : 1);
    }
  }

  const dec = () => {
    if (validateMin(value)) {
      onChange(value ? value - 1 : value && value < 0 ? undefined : value);
    }
  }

  useEffect(() => {
    update(min);
  }, [min, update])

  useEffect(() => {
    if (value && max && value > max) {
      update(max);
    }
  }, [max, update, value]);
  

  return (
    <div className={style.inputNumero}>
        <label htmlFor={label} className={style.label}>{label}</label>
        <span className={style.input}>{value}</span>
        <div className={style.buttons}>
          <button type='button' onClick={dec}>-</button>
          <button type='button' onClick={inc}>+</button>
        </div>
    </div>
  );
}