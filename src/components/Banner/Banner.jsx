import styles from "./Banner.module.css"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function Banner() {

    const { dataBase } = useContext(GlobalContext)

    const randX = (max)=>{
        return Math.floor(Math.random()*max)
    }

    if (dataBase.length === 0) {
        return <div>Cargando...</div>
    }

    const featured = randX(dataBase.length)

    return <section className={styles.banner}>
        <div className={styles.bannerBackground}></div>
        <div className={styles.container}>
            <div>
                <h1>{dataBase[featured].category}</h1>
                
                <div className={styles.description}>
                    <h2>{dataBase[featured].title}</h2>
                    <p>{dataBase[featured].description}</p>
                </div>
            </div>
            <img src={dataBase[featured].image} alt="Video"/>
            <a href={dataBase[featured].url} className={styles.shadowBox}></a>
        </div> 

    </section>
}

export default Banner