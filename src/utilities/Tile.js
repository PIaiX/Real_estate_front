import React, {useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

export default function Tile(props) {
    const [mob, setMob] = useState(false);
    const [visibility, setVisibility] = useState(false);

    useEffect(() => {
        function changeTile() {
            if(window.matchMedia("(max-width: 991px)").matches){
                setMob(true);
            } else {
                setMob(false);
            }
        }
          window.addEventListener('resize', changeTile);
          changeTile();
          return () => window.removeEventListener('resize', changeTile);
    }, []);

    const titles = props.titles;
    const hoverLinks = props.hoverLinks;

    if(mob){
        return (
            <div className="tile" onClick={() => setVisibility(true)}>
                <img src={props.img} alt="иконка"/>
                <div className="links">
                    {
                        (props.simpleLink)&&
                        <a className="title" href={props.simpleLink.url}>{props.simpleLink.title}</a>
                    }
                    {
                        (titles)&&
                        titles.map(function(item) {
                            return (
                                <div key={item} className="title">{item}</div>
                            )
                        })
                    }
                </div>
                {
                    (hoverLinks)&&
                    <div className={(visibility) ? "click-links" : "click-links d-none"}>
                        <div className="titles mb-2 mb-sm-3">
                            {
                                titles.map(function(item) {
                                    return (
                                        <div key={item} className="title">{item}</div>
                                    )
                                })
                            }
                        </div>
                        <ul>
                            {
                                hoverLinks.map(function(item) {
                                    return (
                                        <li>
                                            <NavLink key={item.name} to={item.link}>{item.name}</NavLink>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                        
                    </div>
                }
            </div>
        )
    } else {
        return (
            <div className="tile">
                <img src={props.img} alt="иконка"/>
                <div className="links">
                    {
                        (props.simpleLink)&&
                        <a className="title" href={props.simpleLink.url}>{props.simpleLink.title}</a>
                    }
                    {
                        (titles)&&
                        titles.map(function(item) {
                            return (
                                <div key={item} className="title">{item}</div>
                            )
                        })
                    }
                    {
                        (hoverLinks)&&
                        <div className="hover-links">
                            {
                                hoverLinks.map(function(item) {
                                    return (
                                        <div>
                                            <NavLink key={item.name} to={item.link}>{item.name}</NavLink>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    }
                </div>
            </div>
        )
    }

    
}
