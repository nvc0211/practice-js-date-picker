
import { useState } from "react";
import "./date.css";
import DateDisplay from "./DateDisplay";
const DateContainer = () => {
    const [date, setDate] = useState(Date.now());

    return (
        <section className="date-container">
            <input className="date-input" type="date" onChange={(event) => setDate(event.target.value)} />
            <DateDisplay date = {date}/>
        </section>
    );
}

export default DateContainer;