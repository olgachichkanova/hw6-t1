import './App.css';
import Clock from './components/Clock/Clock';
import Form from './components/Form/Form';
import Error from './components/Error/Error';
import { useState } from 'react';
import shortid from "shortid";

function App() {
  const [form, setForm] = useState({
      city: "",
      timezone: ""
  })

  const [clocks, setClocks] = useState([
    {
      id: "1",
      city: "Taipei",
      timezone: "Asia/Taipei"
    },
    {
      id: "2",
      city: "Jakarta",
      timezone: "Asia/Jakarta"
    }
  ])

  const [error, setError] = useState("")
  

  function onAddClock(e) {
      e.preventDefault();
      if(form.timezone.length > 0) {
        const newClock = {
          id: shortid.generate(),
          city: form.city,
          timezone: form.timezone
        }
        
        setClocks((prevClocks) => [...prevClocks, newClock]);
        setForm({
          city: "",
          timezone: ""
        })
        setError("")
      } else {
        setError("Timezone can't be blank")
        return
      }
  }

  function handleDelete(clock) {
    setClocks(prevClock => prevClock.filter(i => i.id !== clock.id))
  }

  return (
    <div className="App">
      <Form form={form} setForm={setForm} onAddClock={onAddClock} />
      {error.length > 0 ? <Error message={error} /> : null}
      <div className="clocks-wrapper">
        {clocks.map(i => <Clock key={i.id} city={i.city} timezone={i.timezone} handleDelete={() => handleDelete(i)} />)}
      </div>
    </div>
  );
}

export default App;
