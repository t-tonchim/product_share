import React, { Fragment } from 'react'
import Link from 'next/link'
import Auth from '../lib/auth'

const auth0 = new Auth()

export default class SighnUp extends React.Component {
    componentDidMount() {
        auth0.showLock('auth-container')

    }

    render() {
        return (
            <div id="auth-container"></div>
        )
    }
}