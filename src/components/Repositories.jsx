import React, { useEffect } from 'react'
import "./Repositories.css";
import { useState } from 'react';
import axios from 'axios';
import Card from './Card';

const Repositories = ({data}) => {
    const[repos,setRepos]=useState([]);

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
        
        {repos.map((ele)=>
        <Card repos={ele}  />
        )}
    </div>
  )
}

export default Repositories