import React, { useContext, useEffect, useState } from 'react'
import './Header.scss'
import { useLocation, useNavigate } from 'react-router-dom'
import { CreateContext } from '../App'

type HeaderProps = {
}

const Header = (props: HeaderProps) => {
    const navigate = useNavigate();
    const data = useContext(CreateContext);
    const [userData, setUserData] = useState<any>();
    const location = useLocation()
    useEffect(() => {

        const Id = localStorage.getItem("userId")
        if (Id) {
            const data1 = data?.find((item: { id: string }) => item.id == Id)
            setUserData(data1)
        } else {
            navigate('/')
        }
    }, []);
    return (
        <div className='Header_comp'>
            <div className="profile">{location.state ? location.state : "Profile"}</div>
            <div className="user-icon">
                <img src={userData?.profilepicture} alt="" className="user-image" />
                <div className="user-name">{userData?.name}</div>
            </div>
        </div>
    )
}
export default Header