import React from 'react'
import { UserPreview } from './UserPreview';

export const FilterDropdwon = ({ users }) => {
  console.log(users);
  return (
    <section className='filter-dropdwon'>
      <div className="dropdwon">

        <div className="square"></div>
        <div className="content">
          <ul>
            {users.map(user => {
              return (
                <li key={user._id}>
                  <UserPreview user={user}></UserPreview>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}
