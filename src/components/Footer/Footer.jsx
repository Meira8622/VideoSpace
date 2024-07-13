import styles from "./Footer.module.css"

function Footer() {
    return <footer className={styles.pie}>
        <img src={`${process.env.PUBLIC_URL}/img/logo.png`} alt="logo"/>
    </footer>
}

export default Footer 