import React from 'react'
import ReactDOM from 'react-dom'

import {Hello} from './Hello'
import {Store1} from './store/Store1'
import {Store2} from './store/Store2'

ReactDOM.render(
    <Store2.Provider>
        <Store1.Provider>
            <Hello/>
        </Store1.Provider>
    </Store2.Provider>,
    document.getElementById('root')
)
