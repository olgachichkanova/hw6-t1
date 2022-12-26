import './App.css';
import Clock from './components/Clock/Clock';
import Form from './components/Form/Form';
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

  function onAddClock(e) {
      e.preventDefault();

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
  }

  function handleDelete(clock) {
    setClocks(prevClock => prevClock.filter(i => i.id !== clock.id))
  }

  return (
    <div className="App">
      <Form form={form} setForm={setForm} onAddClock={onAddClock} />
      <div className='hint-wrapper'><a href="https://en.wikipedia.org/wiki/List_of_tz_database_time_zones">Check available timezones here</a></div>
      <div className="clocks-wrapper">
        {clocks.map(i => <Clock key={i.id} city={i.city} timezone={i.timezone} handleDelete={() => handleDelete(i)} />)}
      </div>
    </div>
  );
}

export default App;
