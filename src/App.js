
import { useEffect, useState } from 'react';
import './App.css';
import Landing from './components/Landing';
import axios from 'axios';
import { Routes,Route, useNavigate } from 'react-router-dom';
import Repositories from './components/Repositories';
import RepoDetail from './components/RepoDetail';
function App() {
  const[userName,setUserName]=useState("");
  const[data,setData]=useState();
  const nav=useNavigate()
  console.log(userName);
  useEffect(() => {
    const fetchData = async () => {
      if (userName) {
        try {
          const response = await axios.post(`http://localhost:3001/${userName}`);
          setData(response.data);
          nav("/userdetail");
        } catch (error) {
          console.error("Error fetching data:", error);
          setData(null); 
        }
      }
    };

    fetchData();

  }, [userName]);

  console.log(data);
  return (
    <Routes>
      <Route path="/" element={ <div className='landing'>
        <Landing userName={userName} setUserName={setUserName}/>
    </div>} />

        <Route path="/userdetail" element={<Repositories data={data}/>}/>
        <Route path="/repodetail" element={< RepoDetail/>}/>
      </Routes>
   
  );
}

export default App;
