import React from 'react'
import Auth from '../lib/auth'
import Router from 'next/router'

const auth = new Auth()

export default class Callback extends React.Component {
    componentDidMount() {
        auth.setToken()
        Router.push('/')
    }

    render() {
        return <p>Signing in...</p>
    }
}