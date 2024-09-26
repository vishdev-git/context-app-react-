import React, { Component } from 'react';

class BookList extends Component {
    state = {  } 
    render() { 
        return (
            <div className="book-list">
                <ul>
                    <li>The Vikings</li>
                    <li>Harry Potter</li>
                    <li>Enigma Power of Mind</li>
                </ul>
            </div>
        );
    }
}
 
export default BookList;