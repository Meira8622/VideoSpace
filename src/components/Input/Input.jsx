import styles from "./Input.module.css"

function Input({type,name,id,placeholder,bordercolor,height}) {
    const inputStyles = {
        borderColor: bordercolor,
        height: height,
    }

    return <div className={styles.container}>
        <label htmlFor={id}>{name}</label>
        <input type={type} name={name} id={id} placeholder={placeholder} style={inputStyles} required></input>
    </div>
}

export default Input