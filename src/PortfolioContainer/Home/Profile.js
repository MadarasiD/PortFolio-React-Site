import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';

export default function Profile() {
  return (
    <div className='profile-container'>
        <div className="profile-parent">
            <div className="profile-details">
                <div className="colz">

                    <a href="#">
                    <FacebookIcon />
                    </a>

                    <a href="#">
                        <i className='fa fa-google-plus-square>'></i>
                    </a>

                    <a href="#">
                        <i className='fa fa-linkedin>'></i>
                    </a>

                    <a href="#">
                        <i className='fa fa-facebook-square>'></i>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}
