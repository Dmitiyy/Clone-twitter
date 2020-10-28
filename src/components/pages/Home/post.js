import React from 'react';
import Mark from './images/mark.png';
import Like from './images/like.png';
import {connect} from 'react-redux';
import {changeMark, changeLike, setMark} from '../../../actions/actions';

const Post = ({posts, changeMark, changeLike, setMark}) => {
    return (
        <div className="post_element">
            {posts.map((item, i) => {
            const {myUrl, myText, mark, like} = item;
            return (
                <div key={i} className="post_item">
                    <h2 className="description_post_item">{myText}</h2>
                    {
                        myUrl.length === 0 ? console.log('empty url') : (<img src={myUrl} className="img_post_item" alt=""/>)
                    }
                    <button onClick={() => {changeMark(i); setMark(i)}} style={{'background': mark ? '#84a8c060' : 'transparent'}} className="btn_mark">
                        <img src={Mark} alt=""/>
                    </button>
                    <button onClick={() => {changeLike(i);}} style={{'background': like ? '#84a8c060' : 'transparent'}}  className="btn_like">
                        <img src={Like} alt=""/>
                    </button>    
                </div>
            )}
        )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        posts:  state.posts,
        trig: state.trig
    }
}

const mapDispatchToProps = {
    changeMark,
    changeLike,
    setMark
}

export default connect(mapStateToProps, mapDispatchToProps)(Post);