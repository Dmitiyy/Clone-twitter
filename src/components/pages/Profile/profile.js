import React from 'react';
import './profile.sass';
import {connect} from 'react-redux';
import {setAvaProfile, setBgProfile} from '../../../actions/actions';

const Profile = ({setAvaProfile, avaUrl, setBgProfile, bgUrl, posts}) => {
    const handleReader = (file) => {
        const reader  = new FileReader();
        reader.addEventListener('loadend', () => {
            setAvaProfile(reader.result);
        })
        if (file) {
          reader.readAsDataURL(file);
        }
    }

    const handleReaderBg = (file) => {
        const reader  = new FileReader();
        reader.addEventListener('loadend', () => {
            setBgProfile(reader.result);
        })
        if (file) {
          reader.readAsDataURL(file);
        }
    }

    return (
        <>
            <div className="header">
                <h1 className="header_title">Profile</h1>
            </div>
            <div className="profile">
                <label className="label_bg">
                    <div style={{'background': bgUrl ? `url(${bgUrl}) center` : 'lightgrey'}} className="profile_bg"></div>
                    <input onChange={(e) => handleReaderBg(e.target.files[0])} className="profile_bg_file" type="file"/>
                </label>
                <label className="label_ava">
                    <div style={{'background': avaUrl ? `url(${avaUrl}) center` : 'lightgrey'}} className="profile_ava"></div>
                    <input onChange={(e) => handleReader(e.target.files[0])} className="profile_ava_file" type="file"/>
                </label>
                <h2 className="profile_count">Count of tweets: <span>{" " + posts.length}</span></h2>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        avaUrl: state.avaUrl,
        bgUrl: state.bgUrl,
        posts: state.posts
    }
}

const mapDispatchToProps = {
    setAvaProfile, 
    setBgProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);