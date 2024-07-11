import styles from "./NewVideo.module.css"
import Input from "../../components/Input/Input"
import { useContext } from "react"
import { GlobalContext } from "../../context/GlobalContext"

function NewVideo() {

    const { setDataBase } = useContext(GlobalContext)

    async function dataBasePost(title,category,image,url,description) {
        const db = await fetch("https://665cf951e88051d6040526f3.mockapi.io/api/videos", {
            method:"POST",
            headers:{"content-type":"application/json"},
            body: JSON.stringify({
                title:title,
                category:category,
                image:image,
                url:url,
                description:description
            })
        });
        const data = await db.json()
        // console.log(data)
        setDataBase(prevData=>[...prevData, data])
    }

    const handleSave = (e) => {
        e.preventDefault()
        const form = e.target.closest("form")

        if(form.checkValidity()) {
            console.log("todo bien")
            const title = form.elements["Titulo"].value;
            const category = form.elements["Categoria"].value;
            const image = form.elements["Imagen"].value;
            const url = form.elements["Video"].value;
            const description = form.elements["Descripcion"].value;

            //post
            dataBasePost(title,category,image,url,description)

            form.reset()
        } else {
            form.reportValidity()
            console.log("que rompimo")
        }
    }

    return <main className={styles.container}>
        <div className={styles.mainTitle}> 
            <h1>NUEVO VIDEO</h1>
            <p>COMPLETE EL FORMULARIO PARA CREAR UNA NUEVA TARJETA DE VIDEO</p>
        </div>

        <div className={styles.formSection}>
            <form>
                <div className={styles.titleForm}>
                    <hr></hr>
                    <h2>Crear Tarjeta</h2>
                    <hr></hr>
                </div>

                <div className={styles.firstLine}>
                    <Input type="text" name="Titulo" id="Titulo" placeholder="ingrese el titulo" bordercolor="gray" height="6.889vh"/>
                    <div>
                        <label htmlFor="categoria">Categoria</label>
                        <select name="Categoria" id="categoria" required defaultValue="">
                            <option value="" disabled hidden>seleccione una categoria</option>
                            <option>Deportes</option>
                            <option>Entretenimiento</option>
                            <option>Arte</option>
                        </select> 
                    </div>
                </div>

                <div className={styles.secondLine}>
                    <Input type="url" name="Imagen" id="Imagen" placeholder="ingrese imagen" bordercolor="gray" height="6.889vh"/>
                    <Input type="url" name="Video" id="Video" placeholder="ingrese el enlace video" bordercolor="gray" height="6.889vh"/>
                </div>

                <div className={styles.thirdLine}>
                    <label htmlFor="descripcion">Descripcion</label>
                    <textarea name="Descripcion" id="descripcion" placeholder="¿de que se trata este video?"></textarea>
                </div>

                <div className={styles.buttons}>
                    <button type="submit" onClick={handleSave}>GUARDAR</button>
                    <button type="reset">LIMPIAR</button>
                </div>
            </form>
        </div>
    </main>
}

export default NewVideo