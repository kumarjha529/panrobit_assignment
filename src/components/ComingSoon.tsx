import React from 'react'
import './ComingSoon.scss'
import Sidebar from '../globalcomponent/Sidebar'
import Header from '../globalcomponent/Header'

type ComingSoonProps = {}

const ComingSoon = (props: ComingSoonProps) => {
    return (
        <>
            <Sidebar />
            <Header  />
            <div className='ComingSoon  global-slidebar-component'>
                <div className='text'>
                    Coming Soon
                </div>
            </div>
        </>
    )
}

export default ComingSoon