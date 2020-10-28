import React from 'react';
import {connect} from 'react-redux';

const Bookmarks = ({marks}) => {
    // console.log(marks);
    return (
        <>
            <div className="header">
                <h1 className="header_title">Bookmarks</h1>
            </div>
            <div className="marks">
                {
                    marks.map((item, i) => {
                        const {myUrl, myText} = item;
                        return (
                            <div key={i} className="post_item">
                                <h2 className="description_post_item">{myText}</h2>
                                {
                                    myUrl.length === 0 ? console.log('empty url') : (<img src={myUrl} className="img_post_item" alt=""/>)
                                }
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        marks: state.marks
    }
}

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Bookmarks);