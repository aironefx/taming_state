import React from 'react';
import './App.css';
import {SearchableList} from './SearchableList';

export class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let myList =
            [
                { id: 1, name: "abc" },
                { id: 2, name: "bce"
                }
            ];
        return (
            <div className="App">
                <SearchableList list={myList}/>
            </div>
        );
    }
}

export default App;
