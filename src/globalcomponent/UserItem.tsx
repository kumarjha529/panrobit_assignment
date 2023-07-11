import React from 'react'
import './UserItem.scss'
import { useNavigate } from 'react-router-dom'
interface UserItemProps {
    name: string,
    profilepicture: string,
    id: string
}

const UserItem = (props: UserItemProps) => {
    const navigate = useNavigate();
    const handleClick = (): void => {
        navigate("/profile")
        console.log(props.id);
        localStorage.setItem("userId", props.id)
    }
    return (
        <div className='useritem_card' onClick={handleClick}>
            <img className='user-image' src={props.profilepicture} alt="" />
            <div className="user-name">{props.name}</div>
        </div>
    )
}

export default UserItem