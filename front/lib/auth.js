import Auth0Lock from 'auth0-lock'
import jwtDecode from 'jwt-decode'
import queryString from 'query-string'
import configures from '../config'

const config = configures.auth0

export default class Auth {
    showLock(container) {
        const lock = new Auth0Lock(
            config.clientId,
            config.domain,
            {
                container,
                closable: false,
                auth: {
                    responseType: 'token id_token',
                    redirectUrl: `${window.origin}/callback`,
                    params: {
                        scope: 'openid profile email'
                    }
                }
            }
        )
       lock.show() 
    }

    get queryPrams() {
        return queryString.parse(window.location.hash)
    }

    setToken() {
        const { access_token, id_token, expires_in } = this.queryPrams
        const localStorage = window.localStorage
        localStorage.setItem('accessToken', access_token)
        localStorage.setItem('idToken', id_token)
        localStorage.setItem('expiresAt', expires_in * 1000 + new Date().getTime())
        localStorage.setItem('user', JSON.stringify(jwtDecode(id_token)))
    }
}