import styles from "./Card.module.css"
import { useContext } from "react"
import { GlobalContext } from "../../../context/GlobalContext"

function Card({id, image, url}) {

    const { dataBase, setDataBase, setModalState, setEditId } = useContext(GlobalContext)

    async function dataBaseDelete(index) {
        const data = await fetch(`https://665cf951e88051d6040526f3.mockapi.io/api/videos/${index}`, {
            method: "DELETE",
            headers:{"content-type":"application/json"}
        })
    }

    const borrarId = ()=> {
        console.log(id)
        const updatedDataBase = dataBase.filter(element => element.id !== id )
        console.log(dataBase)
        console.log(updatedDataBase)
        setDataBase(updatedDataBase)
            
        dataBaseDelete(id)
    }

    return <div className={styles.card}>

        <img src={`${image}`} alt="Video" className={styles.thumbnail}></img>
        
        <div className={styles.buttonBox}>
            <button onClick={()=>borrarId()}>
                <img src="/img/trash-solid.svg" alt="icon"></img>
                BORRRAR
            </button>
            <button onClick={()=>{
                setModalState(true)
                setEditId(id)
                // console.log(dataBase.filter(element=>element.id===id))
            }}>
                <img src="/img/pencil-solid.svg" alt="icon"></img>
                EDITAR
            </button>
        </div>
        
        <div className={styles.shadowBox}></div>
        <a href={url}></a>
    </div>
}

export default Card