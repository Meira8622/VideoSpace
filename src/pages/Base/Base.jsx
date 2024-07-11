import styles from "./Base.module.css"
import Header from "../../components/Header/Header"
import Footer from "../../components/Footer/Footer"
import { Outlet } from "react-router-dom"

function Base() {
    return <div className={styles.base}>
        <Header/>
        <Outlet/>
        <Footer/>
    </div>
}

export default Base