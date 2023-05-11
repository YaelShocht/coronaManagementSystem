import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom"

export default function AddPeople({ onAddPeople }) {
  const [people, setPeople] = useState({ tz: '', name: '', address: '', dateBorn: '', phone: '', cellPhon: '' });

  const set = (e) => {
    setPeople({ ...people, [e.target.name]: e.target.value });
  }
  const navigate = useNavigate()
  const cancel = () => {
    navigate("/");
  }
  const add = () => {
    axios.post('http://localhost:5000/people/', people)
      .then(res => {
        onAddPeople(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }

  return (
    <div style={{ border: '5px solid pink' }}>
      <h1>Add People</h1>
      <div>

        <p>תעודת זהות</p>
        <input type='text' name='tz' onChange={set} value={people.tz}   placeholder="הכנס מספר זהות"/>
        <p>שם פרטי</p>
        <input type='text' name='name' onChange={set} value={people.name}placeholder="  הכנס שם פרטי" />
        <p>כתובת</p>
        <input type='text' name='address' onChange={set} value={people.address}placeholder="  הכנס כתובת(עיר רחוב ומספר) " />
        <p>תאריך לידה</p>
        <input type='Date' name='dateBorn' onChange={set} value={people.dateBorn}/>
        <p>טלפון</p>
        <input type='tel' name='phon' onChange={set} value={people.phon} placeholder="  הכנס  מספר טלפון"/>
        <p>פלאפון</p>
        <input type='tel' name='cellPhon' onChange={set} value={people.cellPhon} placeholder="  הכנס  מספר פלאפון"/>
        <br></br>
        <button onClick={add}>שמור</button>
        <button onClick={cancel}>ביטול</button>
      </div>
    </div>
  );
}

// export default AddPeople;


