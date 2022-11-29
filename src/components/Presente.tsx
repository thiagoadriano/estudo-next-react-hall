import style from '../styles/presente.module.css';

export default function Presente() {
    return (
        <div className={style.presente}>
            <div className={style.tampa}></div>
            <div className={style.corpo}></div>
            <div className={style.lacoVertical}></div>
            <div className={style.lacoHorizontal}></div>
        </div>
    );
}