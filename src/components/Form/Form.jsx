import './Form.css';

const Form = ({form, setForm, onAddClock}) => {
    function handleInput(e){
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }
    
    return (
        <form>
            <div>
                <input type="text" name='city' placeholder="Input city..." value={form.city} onChange={handleInput} />
                <input type="text" name='timezone' placeholder="Input timezone" value={form.timezone} onChange={handleInput} />
                <button onClick={onAddClock}>Add</button>
            </div>
        </form>
    )
}

export default Form;