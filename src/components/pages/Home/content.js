import React, {useState, useRef} from 'react';
import './content.sass';
import Ava from './images/ava.png';
import ImgIcon from './images/img_icon.png';
import StickerIcon from './images/sticker_icon.png';
import {connect} from 'react-redux';
import {outImg, showStickers, showInputText, handleClick, storeText, clear} from '../../../actions/actions';
import emoji from './emojis';
import Post from './post';
import {Link} from 'react-router-dom';

const Content = ({outImg, url, showStickers, toggleStic, showInputText, handleClick, storeText, clear, avaUrl}) => {
    const [active, chandeActive] = useState(false);
    const inputText = useRef();
    const prevImg = useRef();

    const handleReader = (file) => {
        const reader  = new FileReader();
        reader.addEventListener('loadend', () => {
            outImg(reader.result);
            chandeActive(true);
        })
        if (file) {
          reader.readAsDataURL(file);
        }
    }

    const clearInputs = () => {
        clear(inputText.current, prevImg.current);
        chandeActive(false);
    }

    return (
        <>
            <div className="header">
                <h1 className="header_title">Home</h1>
            </div>
            <div className="post_block">
                <div className="wrap_ava">
                    <Link to="/profile"><img src={avaUrl ? avaUrl : Ava} alt="" className="avatar"/></Link>
                </div>
                <div className="wrapper_content">
                    <div className="content_inner_text">
                        <textarea ref={inputText} className="ariaMes" onChange={(e) => storeText(e.target.value, '')} placeholder="What's happening?"/>
                        <img ref={prevImg} src={url} alt="" style={{'marginTop': active ? '20px' : '0px'}} className="post_img_item"/>
                    </div>
                    <div className="content_inner_features">
                        <div className="content_inner_features_wrap_additions">
                            <label className="post_img_label">
                                <img src={ImgIcon} alt="" className="img_additions"/>
                                <input className="imgfile" onChange={(e) => {
                                    handleReader(e.target.files[0]);
                                }} name="imgfile" type="file"/>
                            </label>
                            <img onClick={() => showStickers()} src={StickerIcon} alt="" className="img_additions"/>
                        </div>
                        <button className="btn_tweet_content" onClick={() => {
                            handleClick();
                            clearInputs();
                        }}>Tweet</button>
                    </div>
                    <div style={{'height': toggleStic ? '150px' : '0'}} className="wrapper_emojis">
                        {
                            emoji.map((item, i) => {
                                return (
                                    <span key={i} style={{'fontSize': toggleStic ? '25px' : '0px'}} onClick={() => showInputText(item.icon)} role="img" aria-label="emoji">{item.icon}</span>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
            <Post/>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        url: state.url,
        toggleStic: state.toggleStic,
        posts: state.posts,
        avaUrl: state.avaUrl
    }
}

const mapDispatchToProps = {
    outImg, 
    showStickers, 
    showInputText,
    handleClick, 
    storeText,
    clear
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);