import React,{useEffect,useState} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'


export default function Protected({children,authentication=true}) {

    const navigate=useNavigate()
    const [loader,setLoader]=useState(true)
    const authStatus=useSelector(state=>
        state.auth.status)

      useEffect(()=>{
        if(authentication && authStatus!=authentication){
          navigate("/login")
        }else if(!authentication && authStatus!=authentication){
          navigate("/")
        }
        setLoader(false);
      },[authStatus,authentication,navigate])
  return (
    <>
    if(loader){
          <p>It is loading</p>
    }
    else{
      {children}
    }
    </>
  )


}

 
