import styles from "./NotFound.module.css"

function NotFound() {
    return(
        <section className={styles.container}>
            <h1>404</h1>
            <p>Pagina no encontrada</p>
        </section>
    )
}

export default NotFound