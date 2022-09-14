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
                        <NavLink to={`service/${props.slug}/page/1`} className='title'>
                            {props.name}
                        </NavLink>
                        :
                        <NavLink to={`hypothec`} className='title'>
                            {props.name}
                        </NavLink>
                }
            </div>
        </div>
    );
};

export default TileServices;