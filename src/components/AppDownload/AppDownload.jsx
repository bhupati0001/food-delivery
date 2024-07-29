import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'
const AppDownload = () => {
    return (
        <div className='download-app-container' id='mobile-app'>
            <h1 className='download-app-heading'>For Better Experience <br />Download Tomato mobile App</h1>
            <div className="app-download-links">
                <img src={assets.play_store} alt="play-store" />
                <img src={assets.app_store} alt="apple-store" />
            </div>

        </div>
    )
}

export default AppDownload