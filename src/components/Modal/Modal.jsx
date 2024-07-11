import styles from "./Modal.module.css"
import Input from "../Input/Input"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function Modal({video}) {
    const { modalState, setModalState, editId, dataBase, setDataBase } = useContext(GlobalContext)
    
    const updateResource = async (editId, updatedData) => {
        const db = await fetch(`https://665cf951e88051d6040526f3.mockapi.io/api/videos/${editId}`, {
            method: "PUT",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(updatedData)
        })

        const updatedElement = await db.json()

        if(!db.ok) {
            throw new Error("Error al actualizar el recurso")
        }

        // const newData = dataBase.filter(item=>item.id!==editId)
        setDataBase(dataBase.filter(item=>item.id!==editId))

        // const data = (await fetch("https://665cf951e88051d6040526f3.mockapi.io/api/videos")).json()
        setDataBase(datos => [...datos, updatedElement])
    }

    const handleSave = (e) => {
        e.preventDefault()
        const form = e.target.closest("form")
        // console.log("forro",form.checkValidity())
        if(form.checkValidity()) {
            console.log("todo bien")

            const formData = {
                title:form.elements["Titulo"].value,
                category:form.elements["Categoria"].value,
                image:form.elements["Imagen"].value,
                url:form.elements["Video"].value,
                description:form.elements["Descripcion"].value
            }

            console.log(formData)
            updateResource(editId, formData)

            setModalState(false)
            form.reset()
        } else {
            form.reportValidity()
        }
    }


    return <dialog open={modalState}>
        <div className={styles.modal}>
            <form method="dialog" className={styles.closeButtonForm}>
                <button onClick={()=>setModalState(false)}>
                    <img src="/img/x-solid.svg" alt="icon"></img>
                </button>
            </form>

            <form className={styles.modalForm} method="dialog">
                <h1 className={styles.formTitle}>EDITAR CARD:</h1>

                <Input type="text" name="Titulo" id="Titulo" placeholder="ingrese el titulo" bordercolor="gray" height="5vh" />

                <div className={styles.selection}>
                    <label htmlFor="categoria">Categoria</label>
                    <select name="Categoria" id="categoria" required defaultValue="">
                        <option value="" disabled hidden>seleccione una categoria</option>
                        <option>Deportes</option>
                        <option>Entretenimiento</option>
                        <option>Arte</option>
                    </select>
                </div>

                {/* LA SECCION DE SELECTION VA A TENER QUE SER UN COMPONENTE SI
                    QUIERO QUE TENGA CATEGORIAS DINAMICAS, ASI SE ACTUALIZARA
                    SIMULTANEAMENTE EN MODAL Y NEWVIDEO */}

                <Input type="url" name="Imagen" id="Imagen" placeholder="ingrese imagen" bordercolor="gray" height="5vh" />
                <Input type="url" name="Video" id="Video" placeholder="ingrese el enlace video" bordercolor="gray" height="5vh" />

                <div className={styles.textArea}>
                    <label htmlFor="descripcion">Descripcion</label>
                    <textarea name="Descripcion" id="descripcion" placeholder="¿de que se trata este video?"></textarea>
                </div>

                <div className={styles.buttonBox}>
                    <button type="submit" onClick={handleSave}>
                        GUARDAR
                    </button>
                    <button type="reset">LIMPIAR</button>

                </div>
            </form>
        </div>
    </dialog>
}

export default Modal