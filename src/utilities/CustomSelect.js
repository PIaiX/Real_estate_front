import React, { Component } from 'react';

export default class CustomSelect extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            clicked: false
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(state => ({
            clicked: !state.clicked
        }))
    }
    render() {
        return (
            <div className="custom-select">
                <button type="button" className="btn btn-2">
                    Снять
                </button>
                <div className="options py-2">
                    <div className="radio">
                        <input type="radio" name="type" value="Купить" />
                        <label>Купить</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="type" value="Продать" />
                        <label>Продать</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="type" value="Сдать" />
                        <label>Сдать</label>
                    </div>
                    <div className="radio">
                        <input type="radio" name="type" value="Снять" checked={true}/>
                        <label>Снять</label>
                    </div>
                </div>
            </div>
        )
    }
}
