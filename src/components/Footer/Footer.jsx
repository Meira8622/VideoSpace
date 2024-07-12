import styles from "./Footer.module.css"

function Footer() {
    return <footer className={styles.pie}>
        <img src={`${process.env.PUBLIC_URL}/img/patrick.jpg`} alt="logo"/>
    </footer>
}

export default Footer 