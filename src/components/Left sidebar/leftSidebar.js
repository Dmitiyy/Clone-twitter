import React, {useRef} from 'react';
import Logo from './images/logo.png';
import Bookmarks from './images/bookmarks.png';
import Profile from './images/profile.png';
import Home from './images/home.png';
import Explore from './images/explore.png';
import './leftSidebar.sass';
import {connect} from 'react-redux';
import {openModal, setComponentActive} from '../../actions/actions';
import {Link} from 'react-router-dom';

const LeftSidebar = ({openModal, setComponentActive}) => {
    const wrappTitle = useRef();

    return (
        <>
            <div onClick={(e) => setComponentActive(e.target)} ref={wrappTitle} className="wrapper_sidebar">
                <img src={Logo} className="logo" alt=""/>
                <Link to="/home">
                    <div className="left_home">
                        <img className="left_home_img" alt="" src={Home}/>
                        <h2 className="left_home_h2">Home</h2>
                    </div>
                </Link> 
                <Link to="/bookmarks">
                    <div className="left_bookmarks">
                        <img src={Bookmarks} className="left_bookmarks_img" alt=""/>
                        <h2 className="left_bookmarks_h2">Bookmarks</h2>
                    </div>
                </Link>
                <Link to="/profile">
                    <div className="left_profile">
                        <img className="left_profile_img" alt="" src={Profile}/>
                        <h2 className="left_profile_h2">Profile</h2>
                    </div>
                </Link>
                <Link to="/explore">
                    <div className="left_explore">
                        <img className="left_explore_img" alt="" src={Explore}/>
                        <h2 className="left_explore_h2">Explore</h2>
                    </div>
                </Link>
                <button onClick={() => openModal()} className="btn_tweet">Tweet</button>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = {
    openModal, 
    setComponentActive
}

export default connect(mapStateToProps, mapDispatchToProps)(LeftSidebar);