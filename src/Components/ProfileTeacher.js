import React from 'react';
import { Link } from "react-router-dom";

const ProfileTeacher = () => {
  return (
  <div className='profileTeacher'>
      <form action="">
                <ul>
                    <li>
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </li>
                    <li>
                        <label htmlFor="">Password</label>
                        <input type="text" />
                    </li>
                    <li>
                        <p>Don't have an account? <Link to= "/signup">Sign up</Link></p>
                        <button>Submit</button>
                    </li>
                </ul>
            </form>
  </div>
  )
};

export default ProfileTeacher;
