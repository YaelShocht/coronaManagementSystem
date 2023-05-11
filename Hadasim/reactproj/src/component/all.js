import React, { useState, useEffect } from 'react'
import { useNavigate, Outlet } from 'react-router-dom';
import axios from 'axios'


function All() {
    const [people, setPeople] = useState();
    const navigate = useNavigate();
    const [temp, settemp] = useState([]);
    const [image, setImage] = useState([]);

   

    useEffect(() => {
        axios.get('http://localhost:5000/people/')
            .then(res => {
                setPeople(res.data);
                console.log(res.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    function onFileChange(e) {
        setImage({ imgCollection: e.target.files });
        // if (e.target.files && e.target.files[0]) {
        //     settemp(Object.values(e.target.files).map((i) => URL.createObjectURL(i)));
        // }
        console.log(e.target.files);
    }

   async function saveImage(idPeaple) {
        var formData = new FormData();
        // for (const key of Object.keys(image.imgCollection)) {
        // }
        formData.append("imgCollection", image.imgCollection[0]);
        console.log(formData);
       await axios
            .post("http://localhost:5000/people/upload-image/"+idPeaple, formData, {})
            .then(async (res) => {
                console.log(res.data);
            })
    }
    const cancel = () => {
        navigate("/");
    }
    return (
        <div>
            <h1>
                people
            </h1>
            <button onClick={() => { navigate('addPeople')}}>הוסף בן אדם</button>
            <button onClick={cancel}>ביטול</button>
            <Outlet />
            <ul>
                {people &&
                    people.map(people => (
                        <li key={people._id} style={{ border: "1px solid black", marginRight: '400px' }}>
                            <div>תעודת זהות   {people.tz}{" "}</div>
                            <div> שם פרטי     {people.name} {" "}</div>
                            <div> כתובת  {people.address}{" "}</div>
                            <div> תאריך לידה  {people.dateBorn}{" "}</div>
                            <div>  טלפון {people.phon}{" "}</div>
                            <div> פלאפון {people.cellPhon}{" "}</div>
                          {  people.vaccination&&people.vaccination.map(item => (  
                            <div key={item._id}> <div>תאריך קבלת החיסון {item.dateGetVaccination}{" "}</div> 
                             <div> יצרן{item.manufacturer}{" "}</div> 
                             </div>
                            
                            ))
                        }
                            {people.image && <img src={people.image} style={{width:"50px",height:"50px"}}/>}
                            <input
                                className="input__fieldAdd"
                                type="file"
                                name="imgCollection"
                                onChange={(e) => {
                                    onFileChange(e);
                                    console.log(e.target.files);
                                }}
                                // multiple
                            />
                            
                            <button onClick={()=>saveImage(people._id)}>שמירת תמונה</button>
                        </li>
                    ))}
            </ul>
        </div>
    );
}
export default All;





