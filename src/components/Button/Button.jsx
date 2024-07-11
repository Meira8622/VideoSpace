import styles from "./Button.module.css"

function Button({text, state, type}) {
    const buttonClass = `${styles.button} ${styles[state]}`

    return <button className={buttonClass} type={type}>
        {text}
    </button>
}

export default Button