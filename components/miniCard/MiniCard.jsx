import style from './style.module.css';

export default function main(props) {
    return (
        <div id={style.bodyCard}>
            <div className={style.card}>
                <div className={style.cardName}>
                    <strong>{props.name}</strong>
                </div>
                <div className={style.cardLink}>
                    <a href={props.link}>{props.textLink}</a>
                </div>
                <div className={style.cardDescription}>{props.description}</div>
            </div>
        </div>
    );
}