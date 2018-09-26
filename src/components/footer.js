
import React, { Component } from 'react'
import Headercss from './common.css'


class Footer extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount () {

    }

    render () {

        return (
            <div>
                <div className={Headercss.footer}>
                    Facebook：通證界
                </div>
            </div>
        )
    }
}



export default Footer