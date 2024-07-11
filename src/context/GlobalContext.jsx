import { createContext, useEffect, useState } from "react"

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {
    // Aqui van los hooks que quiero exportar a otros componentes

    const [dataBase, setDataBase] = useState([])
    const [modalState, setModalState] = useState(false)
    const [editId, setEditId] = useState(null)

    const fetchData = async () => {
        const db = await fetch("https://665cf951e88051d6040526f3.mockapi.io/api/videos")
        const dataBase = await db.json()
        setDataBase(await dataBase)
    }

    useEffect(()=>{
        fetchData()
    }, [])

    // const [dataBase, setDataBase] = useState([
    //     {
    //         id: "1",
    //         nombre: "a",
    //         categoria: "PAN",
    //         url: "nose"
    //     },
    //     {
    //         id: "2",
    //         nombre: "a",
    //         categoria: "MORCILLA",
    //         url: "nose"
    //     },
    //     {
    //         id: "3",
    //         nombre: "a",
    //         categoria: "MORCILLA",
    //         url: "nose"
    //     },
    //     {
    //         id: "4",
    //         nombre: "a",
    //         categoria: "CHIMICHURRI",
    //         url: "nose"
    //     }
    // ])
    
    return (
        <GlobalContext.Provider value={{                 
                dataBase,
                setDataBase,
                modalState,
                setModalState,
                editId, 
                setEditId
            }}>
            {children}
        </GlobalContext.Provider>
    )
}

export { GlobalContext, GlobalProvider };
