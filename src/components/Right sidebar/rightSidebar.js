import React, {useState} from 'react';
import './rightSidebar.sass';
import trends from './trends';
import {Link} from 'react-router-dom';

const RightSidebar = () => {
    const staticData = trends.slice(0, 4);
    const [more, onMore] = useState(false);
    
    return (
        <div className="wrapper_sidebar_r" style={{'position': more ? 'relative' : 'fixed'}}>
            <div className="trends">
                <div className="trends_title-block">
                    <h2 className="trends_title-block-h2">Trends for you</h2>
                </div>
                {   
                    more ? trends.map((item, i) => {
                            const {name, category, tweets} = item;
    
                            return (
                                <Link key={i}  to="/explore"><div className="trends_content-block">
                                    <h3 className="trends_content-block-h3">{category}</h3>
                                    <h2 className="trends_content-block-h2">{name}</h2>
                                    <h3 className="trends_content-block-h3">{tweets}</h3>
                                </div>
                                </Link>
                            )
                        }) :    
                    staticData.map((item, i) => {
                        const {name, category, tweets} = item;

                        return (
                            <Link key={i}  to="/explore"><div key={i} className="trends_content-block">
                                <h3 className="trends_content-block-h3">{category}</h3>
                                <h2 className="trends_content-block-h2">{name}</h2>
                                <h3 className="trends_content-block-h3">{tweets}</h3>
                            </div>
                            </Link>
                        )
                    })
                }
                <div onClick={() => onMore(!more)} className="trends_more-block">
                    <h2 className="trends_more-block-h2">{more ? 'Close more' : 'Show more'}</h2>
                </div>
            </div>
        </div>
    )
}

export default RightSidebar;