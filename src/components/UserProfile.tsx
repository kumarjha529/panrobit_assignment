import React, { useContext, useEffect, useState } from 'react'
import './UserProfile.scss'
import Sidebar from '../globalcomponent/Sidebar'
import Header from '../globalcomponent/Header'
import { useNavigate } from 'react-router-dom'
import { CreateContext } from '../App'
import GoogleMapReact from "google-map-react";

// import GoogleMapReact from 'google-map-react/api'
type UserProfileProps = {}
// type AnyReactComponentProps = {
//     lat: number,
//     lng: number,
//     text: String,
// }
// const AnyReactComponent = (props: AnyReactComponentProps) => <div>{props.text}</div>;
var latitude: number
var longitude: number
const UserProfile = (props: UserProfileProps) => {
    const navigate = useNavigate();
    const data = useContext(CreateContext);
    const [userData, setUserData] = useState<any>();
    const Id = localStorage.getItem("userId")
    useEffect(() => {
        console.log("data", data);

        if (Id) {
            const selectedData = data?.find((item: { id: string }) => item.id == Id)
            console.log("selectedData", selectedData);
            latitude = selectedData.address.geo.lat
            longitude = selectedData.address.geo.lng
            console.log("latitude", latitude);
            console.log("longitude", longitude);


            setUserData(selectedData)
        } else {
            navigate('/')
        }
    }, []);

    const renderMarkers = (map: any, maps: any) => {
        let marker = new maps.Marker({
            position: { lat: latitude, lng: longitude },
            map,
            title: "Hello World!",
        });

        return marker;
    };


    return (
        <>
            <Sidebar />
            <Header />
            <div className='UserProfile_page global-slidebar-component'>
                <div className="section-left">
                    <img src={userData?.profilepicture} alt="" className="user-image" />
                    <div className="user-name">{userData?.name} </div>
                    <div className="detail-container">
                        <div className="detail-item">
                            <span className="text-title">UserName </span>:
                            <span className="text-value">{userData?.username}</span>
                        </div>
                        <div className="detail-item">
                            <span className="text-title">email </span>:
                            <span className="text-value">{userData?.email}</span>
                        </div>
                        <div className="detail-item">
                            <span className="text-title">Phone </span>:
                            <span className="text-value">{userData?.phone.slice(0, 12)}</span>
                        </div>
                        <div className="detail-item">
                            <span className="text-title">Website </span>:
                            <span className="text-value">{userData?.website}</span>
                        </div>
                    </div>
                    <div className='saprate'></div>
                    <div className="user-name">Company</div>
                    <div className="detail-container">
                        <div className="detail-item">
                            <span className="text-title">Name </span>:
                            <span className="text-value">{userData?.company.name}</span>
                        </div>
                        <div className="detail-item">
                            <span className="text-title">Catchphrase </span>:
                            <span className="text-value">{userData?.company.catchPhrase}</span>
                        </div>
                        <div className="detail-item">
                            <span className="text-title">Bs</span>:
                            <span className="text-value">{userData?.company.bs}</span>
                        </div>
                    </div>
                </div>
                <div className="section-right">
                    <div className="user-address">Address</div>
                    <div className="detail-container">
                        <div className="detail-item">
                            <span className="text-title">Street </span>:
                            <span className="text-value">{userData?.address.street}</span>
                        </div>
                        <div className="detail-item">
                            <span className="text-title">Suite </span>:
                            <span className="text-value">{userData?.address.suite}</span>
                        </div>
                        <div className="detail-item">
                            <span className="text-title">City </span>:
                            <span className="text-value">{userData?.address.city}</span>
                        </div>
                        <div className="detail-item">
                            <span className="text-title">Zip Code </span>:
                            <span className="text-value">{userData?.address.zipcode}</span>
                        </div>
                    </div>

                    <div className="map-container">
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyBRiQe9dLkipIafgPcdEinVfXCgbA-gPsQ" }}
                        defaultCenter={{ lat: latitude, lng: longitude }}
                        defaultZoom={16}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => renderMarkers(map, maps)}
                    ></GoogleMapReact>

                    </div>
                </div>

            </div>
        </>
    )
}

export default UserProfile