import Button from "../Button";
import './style.scss';

const Form = () => {
    return (
        <form className="novaTarefa">
            <div className="inputContainer">
                <label htmlFor="tarefa">Adicione um novo estudo</label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    placeholder="O que vc quer estudar?" />
            </div>
            <div className="inputContainer">
                <label htmlFor="tempo">Tempo</label>
                <input type="time"
                    step={1}
                    name="tempo"
                    id="tempo"
                    min={"00:00:00"}
                    max={"01:30:00"}
                    required />
                <Button />
            </div>
        </form>
    )
}

export default Form;