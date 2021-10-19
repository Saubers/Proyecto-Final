import React, { useState } from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserData, updateUserProfile } from '../../actions';
import Loading from '../Auth/login/Loading';
import ErrorMessage from '../Auth/login/ErrorMessage';
import { Button } from 'react-bootstrap';
import UserDelete from './ProfileDelete';

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
   const userData = useSelector((state) => state.userInfo)
   const userUpdate = useSelector((state) => state.usersUpdate)
   console.log(userData)
  
   
    useEffect(() => {
        if(!userUpdate){
            dispatch({type: 'USER_UPDATE_PROFILE_RESET'})
            dispatch(getUserData(userData?._id))            
        } else {
            setFullname(userUpdate.fullname);
            setMail(userUpdate.mail)
        }

    }, []);

   const handleSubmit = (e) => {
    e.preventDefault();
    // dispatch update profile
    if (password !== confirmPassword) {
      setError('Password and Confirm Password Are Not Matched');
    } else {
      dispatch(
        updateUserProfile({
          userId: userUpdate?._id,
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
              <h6>
                {userData?.fullname}
              </h6>
            </div>
            <div>
            <h6>
                {userData?.mail}
              </h6>
            </div>
            <div>
            <h6>
                {userData?.phone}
              </h6>
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
              <UserDelete />
              <Button className="primary" type="submit">
                Update
              </Button>
            </div>
          </>
        )}
      </form>
    </div>
  );
}