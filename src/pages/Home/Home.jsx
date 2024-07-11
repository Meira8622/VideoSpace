import styles from "./Home.module.css"
import Banner from "../../components/Banner/Banner"
import Display from "../../components/Display/Display"
import Modal from "../../components/Modal/Modal"
import { useContext, useEffect } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function Home() {

    const { modalState } = useContext(GlobalContext)

    useEffect(()=>{
        // console.log(modalState)
    }, [modalState])

    return <main className={styles.main}>
        <Banner/>
        <Display/>
        <Modal/>
    </main> 
}

export default Home