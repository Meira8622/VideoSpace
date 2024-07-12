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
        const updatedDataBase = dataBase.filter(element => element.id !== id )
        setDataBase(updatedDataBase)
        dataBaseDelete(id)
    }

    return <div className={styles.card}>

        <img src={`${image}`} alt="Video" className={styles.thumbnail}></img>
        
        <div className={styles.buttonBox}>
            <button onClick={()=>borrarId()}>
                <img src={`${process.env.PUBLIC_URL}/img/trash-solid.svg`} alt="icon"></img>
                BORRRAR
            </button>
            <button onClick={()=>{
                setModalState(true)
                setEditId(id)
            }}>
                <img src={`${process.env.PUBLIC_URL}/img/pencil-solid.svg`} alt="icon"></img>
                EDITAR
            </button>
        </div>
        
        <div className={styles.shadowBox}></div>
        <a href={url}></a>
    </div>
}

export default Card