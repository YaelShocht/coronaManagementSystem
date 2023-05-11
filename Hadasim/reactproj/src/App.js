
import {Routes, Route} from 'react-router-dom';
import './App.css';

import  AddPeople from './component/addPeople';
import All from './component/all';
// import ButtonImage from './component/buttenImage';



function App() {
  return (

   <>
 
<Routes>
  
  <Route path='/' element={<All/>}>
    <Route path='/addPeople' element={<AddPeople />}/>
  </Route>
</Routes>

   </>
  );
}

export default App;
