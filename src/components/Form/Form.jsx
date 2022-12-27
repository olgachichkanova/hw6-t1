import './Form.css';
import TimezoneSelect from 'react-timezone-select'

const Form = ({form, setForm, onAddClock}) => {
    
    function handleInput(e){
        const {name, value} = e.target;
        setForm({...form, [name]: value})
    }

    function handleSelect(e) {
        setForm({...form, timezone: e.value})
    }
    
    return (
        <form>
            <div>
                <input type="text" name='city' placeholder="Input city..." value={form.city} onChange={handleInput} required />
                <TimezoneSelect name='timezone' placeholder="Select timezone"  value={form.timezone} onChange={handleSelect} required />
                <button onClick={onAddClock}>Add</button>
            </div>
        </form>
    )
}

export default Form;