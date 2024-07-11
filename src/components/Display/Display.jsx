import styles from "./Display.module.css"
import Categoria from "../Categoria/Categoria"

function Display() {

    return <section className={styles.display}>
        <Categoria name="Arte"/>
        <Categoria name="Deportes"/>
        <Categoria name="Entretenimiento"/>
    </section>
}

export default Display