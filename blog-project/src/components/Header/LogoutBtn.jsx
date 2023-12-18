import React from 'react'
import {useDispatch} from 'react-redux';
import authService from '../../appwrite/auth';
import {logout} from '../../store/authSlice';

function LogoutBtn() {
  const dispatch=useDispatch()
  const logoutHandler=()=>{
    authService.logout().then(()=>{
      //In the store, it gets updated that the session is logged out
          dispatch(logout)
    })
  }
  return (
    <button
    onClick={logoutHandler}
    className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'
    >Logout</button>
  )
}

export default LogoutBtn
