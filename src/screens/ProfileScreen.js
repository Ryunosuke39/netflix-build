import React from 'react'

import './ProfileScreen.css'
import Nav from '../Nav'
import PlansScreen from './PlansScreen'
import { auth } from '../firebase'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice';
import { useNavigate } from 'react-router-dom'

function ProfileScreen() {

  const user = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen__body'>
        <h1>Edit Profile</h1>
        <div className='profileScreen__info'>
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
            alt=""
          />
          <div className="profileScreen__detail">
            <h2>{user.email}</h2>
            <div className='profileScreen__plans'>
              <h3>Plans</h3>
              <PlansScreen />
              <p></p>
              <button 
                onClick={() => auth.signOut()} 
                className='profileScreen__signOut'
                >
                  Sign Out
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileScreen