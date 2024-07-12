import styles from "./Header.module.css"
import { Link, useLocation } from "react-router-dom"
import Button from "../Button/Button"
import { useEffect, useState } from "react"

function Header() {

    const location = useLocation()
    const [buttonState, setButtonstate] = useState("")
    const [newVideoButtonState, setNewVideoButtonState] = useState("")

    useEffect(()=>{
        setButtonstate(location.pathname==="/"?"on":"off")
        setNewVideoButtonState(location.pathname==="/NewVideo"?"on":"off")
    }, [location])

    return <header className={styles.cabecera}>
        <img src={`${process.env.PUBLIC_URL}/img/patrick.jpg`} alt="logo"/>
        <div>
            <Link to="/">
                <Button text="Home" state={buttonState}/>
            </Link>
            <Link to="/NewVideo">
                <Button text="Nuevo Video" state={newVideoButtonState}/>
            </Link>
        </div>
    </header>
}

export default Header