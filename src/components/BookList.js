import React, { Component } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

class BookList extends Component {
    static contextType = ThemeContext
    render() { 
        const {isLightTheme, light, dark} = this.context;
        const Theme = isLightTheme ? light : dark; 
        return (
            <div style={{background: Theme.bg, color:Theme.syntax}} className="book-list">
                <ul>
                    <li style={{background:Theme.ui}}>The Vikings</li>
                    <li style={{background:Theme.ui}}>Harry Potter</li>
                    <li style={{background:Theme.ui}}>Enigma Power of Mind</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;