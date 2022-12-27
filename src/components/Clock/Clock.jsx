import './Clock.css';
import { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai"

const Clock = ({city, timezone, handleDelete}) => {
    const [date, setDate] = useState(new Date());
    function refreshClock() {
      setDate(new Date());
    }

    useEffect(() => {
        const timerId = setInterval(refreshClock, 1000);
        return function cleanup() {
          clearInterval(timerId);
        };
      }, [date]);
    
    return (
        <div className="clock-box">
          <div>
            <h3>{city}</h3>
            <span>
                {date.toLocaleTimeString("en-US", {timeZone: timezone})}
            </span>
          </div>
          <button onClick={handleDelete}><AiOutlineClose></AiOutlineClose></button>
        </div>
    );
  }
  export default Clock;