import React from 'react'
import "./User.scss"
const User = () => {
    return (
        <div className='user_container'>
            <div className='left_container'>
                <div className='user_data'>
                    <h3>John Doe</h3>
                    <p>Company name sp. z.o.o.</p>
                </div>

            </div>
            <div className='right_container'>
                <div className='profile_pic'></div>
            </div>
        </div>
    )
}

export default User