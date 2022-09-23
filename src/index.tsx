import React from 'react'
import ReactDOM from 'react-dom'

import {Hello} from './Hello'
import {Store} from './store/Store'

ReactDOM.render(
    <Store.Provider>
        <Hello/>
    </Store.Provider>,
    document.getElementById('root')
)
