import React, {useState, useRef} from 'react';
import './modal.sass';
import ImgIcon from '../pages/Home/images/img_icon.png';
import StickerIcon from '../pages/Home/images/sticker_icon.png';
import {connect} from 'react-redux';
import {closeModal, addEmojiMod, outImgModal, handleClickMod, storeText, clearMod} from '../../actions/actions';
import emoji from '../pages/Home/emojis';

const Modal = ({modal, closeModal, addEmojiMod, outImgModal, urlMod, handleClickMod, storeText, clearMod}) => {
    const [toggleStic, onToggleStic] = useState(false);
    const inputText = useRef();
    const prevImg = useRef();

    const handleReader = (file) => {
        const reader  = new FileReader();
        reader.addEventListener('loadend', () => {
            outImgModal(reader.result);
        })
        if (file) {
          reader.readAsDataURL(file);
        }
    }

    const clearInputs = () => {
        clearMod(inputText.current, prevImg.current);
    }

    return (
        <div onClick={(e) => closeModal(e.target)} style={{'display': modal ? 'block' : 'none'}} className="wrapper_modal">
            <div className="modal">
                <img ref={prevImg} src={urlMod} alt="" className="post_img_item post_img_item_mod"/>
                <textarea ref={inputText} onChange={(e) => storeText('', e.target.value)} className="ariaMes ariaMesMod" placeholder="What's happening?"/>
                <div className="wrapper_additions_items">
                    <label className="post_img_label">
                        <img src={ImgIcon} alt="" className="img_additions"/>
                        <input className="imgfile" onChange={(e) => {
                            handleReader(e.target.files[0]);
                        }} name="imgfile" type="file"/>
                    </label>
                    <img onClick={() => onToggleStic(!toggleStic)} src={StickerIcon} alt="" className="img_additions"/>
                </div>
                <div style={{'height': toggleStic ? '150px' : '0'}} className="wrapper_emojis wrapper_emojis_mod">
                        {
                            emoji.map((item, i) => {
                                return (
                                    <span key={i} style={{'fontSize': toggleStic ? '25px' : '0px'}} onClick={() => addEmojiMod(item.icon)} role="img" aria-label="emoji">{item.icon}</span>
                                );
                            })
                        }
                    </div>
                <button onClick={() => {handleClickMod(); clearInputs()}} className="btn_tweet_content">Tweet</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        modal: state.modal,
        urlMod: state.urlMod
    }
}

const mapDispatchToProps = {
    closeModal,
    addEmojiMod,
    outImgModal,
    handleClickMod,
    storeText,
    clearMod
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);