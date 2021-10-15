import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData, updateUserProfile } from '../../actions';
import Loading from '../Auth/login/Loading';
import ErrorMessage from '../Auth/login/ErrorMessage';
import { Button } from 'react-bootstrap';

export default function Profile() {
    const [fullname, setFullname] = useState("")
    const [mail, setMail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [isAdmin, setIsAdmin] = useState(false)

    const [message, setMessage] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();
    
    dispatch(getUserData())
   dispatch(updateUserProfile())
   const userData = useSelector((state) => state?.userInfo)
   const userDetail = useSelector((state) => state?.users)
   console.log(userDetail)
  
   
    useEffect(() => {
        if(!userDetail){
            dispatch(getUserData(userData?._id))            
        } else {
            setFullname(userDetail.fullname);
            setMail(userDetail.mail)
        }

    }, []);

   const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      alert('Password and Confirm Password Are Not Matched');
    } else {
      dispatch(
        updateUserProfile({
          userId: userDetail?._id,
          fullname,
          mail,
          password,
        })
      );
    }
   }

   return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <h1>User Profile</h1>
        </div>
        {loading ? (
          <Loading />
        ) : error ? (
          <ErrorMessage variant="danger">{error}</ErrorMessage>
        ) : (
          <>
            {loading && <Loading/>}
            {error && (
              <ErrorMessage variant="danger">{error}</ErrorMessage>
            )}
            <div>
              <label htmlFor="name">Fullname</label>
              <input
                id="name"
                type="text"
                placeholder="Enter name"
                value={fullname}
                onChange={(e) => setFullname(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="email">Mail</label>
              <input
                id="email"
                type="email"
                placeholder="Enter email"
                value={mail}
                onChange={(e) => setMail(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label htmlFor="confirmPassword">confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Enter confirm password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              ></input>
            </div>
            <div>
              <label />
              <button className="primary" type="submit">
                Update
              </button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}