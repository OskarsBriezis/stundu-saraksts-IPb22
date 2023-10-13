import Stunda from "./Stunda";
import styles from "./Diena.module.css";
function Diena(props) {
    const stundasJSX = props.stundas.map((stunda, indekss) => {
        return <Stunda key={indekss} nosaukums={stunda} />
    });
    return (
    <>
    <h2 className={styles.violets}>{props.diena}</h2>
    <ul>
        {stundasJSX}
    </ul>
    </>
    )
};

export default Diena;