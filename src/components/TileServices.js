import React from 'react';
import {NavLink} from "react-router-dom";

const TileServices = (props) => {
    return (
        <div className="tile">
            <img src={props.img}/>
            <div className="links">
                {
                    props.dynamic
                        ?
                        <NavLink to={`service/${props.slug}`} className='title services-links'>
                            {props.name}
                        </NavLink>
                        :
                        <NavLink to={`hypothec`} className='title services-links'>
                            {props.name}
                        </NavLink>
                }
            </div>
        </div>
    );
};

export default TileServices;