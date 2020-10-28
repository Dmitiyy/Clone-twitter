import React from 'react';
import trends from '../../Right sidebar/trends';
import './explore.sass';

const Explore = () => {
    return (
        <>
            <div className="header">
                <h1 className="header_title">Explore</h1>
            </div>
            <div className="explore">
                {
                    trends.map((item, i) => {
                        const {name, category, tweets} = item;
                        
                        return (
                            <div key={i} className="trend_block">
                                <h2>{name}</h2>
                                <h3>{category}</h3>
                                <h3>{tweets}</h3>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Explore;