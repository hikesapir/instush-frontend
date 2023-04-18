import React, { useRef, useState } from 'react'
import { useEffect } from 'react';
import { UserPreview } from './UserPreview';
import { useOnClickOutside } from '../hooks/useOnClickOutside';

export const FilterDropdwon = ({ users, isOpen, setIsOpen }) => {
  const [className, setClassName] = useState('hide')
  const dropdwon = useRef(null)
  useOnClickOutside(dropdwon, () => setIsOpen(false))

  // useEffect(() => {
  //   document.addEventListener("mousedown", (ev) => {
  //     if (!ev.path.includes(dropdwon.current)) {
  //       setIsOpen(false)
  //     }
  //   })
  // })

  useEffect(() => {
    setClassName(isOpen ? '' : 'hide')

  }, [isOpen])


  return (
    <section className='filter-dropdwon'>
      <div className={"dropdwon " + className} ref={dropdwon}>

        <div className="square"></div>
        <div className="content">
          <ul>
            {users?.map(user => {
              return (
                <li key={user._id} onClick={() => setIsOpen(false)}>
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
