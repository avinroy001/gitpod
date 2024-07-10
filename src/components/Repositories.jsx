import React, { useEffect } from 'react'
import "./Repositories.css";
import { useState } from 'react';
import axios from 'axios';
import Card from './Card';
import { useNavigate } from 'react-router-dom';

const Repositories = ({data}) => {
    const[repos,setRepos]=useState([]);
    const nav=useNavigate()

    useEffect(()=>{
        const fetchData=async()=>{
            const response=await axios.get(data.repos_url);
            setRepos(response.data);
        }
        fetchData();
    },[])
    console.log(repos);
  return (
    <div >
        <div className='userinfo'>
            <div className='left'>
            <img src={data.avatar_url} alt='img' className='avatar'/>
            </div>
            <div className='right'>
                <h1>{data.name?(data.name):(data.login)}</h1>
                <p>{data.bio}</p>
                
                <div>
                    <span>Following: {data.following}</span>
                    <span>Follower: {data.followers}</span>
                </div>
            </div>
        </div>  
        <div className='card'>
        {repos.map((ele,idx)=>
        <div className='cards'  onClick={() => nav("/repodetail", { state: { repo: ele } })}>
             <Card repos={ele} key={idx} />
        </div>
       
        )}
        </div>
        
    </div>
  )
}

export default Repositories