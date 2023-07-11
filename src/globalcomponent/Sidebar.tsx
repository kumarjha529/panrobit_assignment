import React, { useEffect, useState } from 'react'
import './Sidebar.scss'
import ArrowIcon from '../assets/arrow.svg'
import { useNavigate } from 'react-router-dom'
type SidebarProps = {}

const Sidebar = (props: SidebarProps) => {
  const navigate = useNavigate()
  const [tabIn, setTabIn] = useState<string>("Profile");
  useEffect(() => {
    const body = document.querySelector('body');
    if (body) {
      body.classList.add("add-global-space")
      return (() => body.classList.remove("add-global-space"))
    }
  })
  const handleClick = (title: string) => {
    if (title === 'Profile') {
      setTabIn("Profile");
      navigate('/profile', { state: "Profile" })
    } else if (title === "Post") {
      setTabIn("Post");
      navigate('/post', { state: "Post" })
    } else if (title === "Gallary") {
      setTabIn("Gallary");
      navigate('/gallary', { state: "Gallary" })
    } else if (title === "ToDo") {
      setTabIn("ToDo");
      navigate('/todo', { state: "ToDo" })
    }
  }
  return (
    <div className='Sidebar_comp'>
      <div className="container">
        <div className="item" onClick={() => handleClick("Profile")}>
          <div className="name">Profile</div>
          {tabIn === "Profile" ?
            <img src={ArrowIcon} alt="" className="arrow" /> : null}
        </div>
        <div className="item" onClick={() => handleClick("Post")}>
          <div className="name">Post</div>
          {tabIn === "Post" ?
            <img src={ArrowIcon} alt="" className="arrow" /> : null}
        </div>
        <div className="item" onClick={() => handleClick("Gallary")}>
          <div className="name">Gallary</div>
          {tabIn === "Gallary" ?
            <img src={ArrowIcon} alt="" className="arrow" /> : null}
        </div>
        <div className="item" onClick={() => handleClick("ToDo")}>
          <div className="name">ToDo</div>
          {tabIn === "ToDo" ?
            <img src={ArrowIcon} alt="" className="arrow" /> : null}
        </div>
      </div>

    </div>
  )
}

export default Sidebar