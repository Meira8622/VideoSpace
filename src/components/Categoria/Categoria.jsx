import styles from "./Categoria.module.css"
import Card from "./Card/Card"
import { GlobalContext } from "../../context/GlobalContext"
import { useContext, useEffect } from "react"

function Categoria({name}) {

    const { dataBase } = useContext(GlobalContext)

    useEffect(()=>{
        
    }, [dataBase])

    return <div className={styles.container}>
        <div className={styles.categoryName}>{name}</div>
        {/* <Card/> las cards iran apareciendo dinamicamente a medida que se 
        agreguen videos a la categoria*/}
        <div className={styles.videos}>
            {/* <Card/> */}
            {
                dataBase.map((video)=>{
                    if(video.category===name) {
                        return <Card key={video.id} id={video.id} image={video.image} url={video.url}/>
                    } else return null
                })
            }
        </div>
    </div> 
}

export default Categoria