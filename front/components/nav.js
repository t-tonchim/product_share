import React from 'react'
import Link from 'next/link'

const links = [
  { href: '/signin', label: 'Sign in' },
  { href: '/signup', label: 'Sign Up' }
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`
  return link
})

const Nav = () => (
  <nav>
    <ul>
      <li>
        <Link prefetch href="/">
          <a>
            <img className="logo" src="../static/logo.jpg">
            </img>
          </a>
        </Link>
      </li>
      <ul>
        {links.map(({ key, href, label }) => (
          <li key={key}>
            <Link href={href}>
              <a>{label}</a>
            </Link>
          </li>
        ))}
      </ul>
    </ul>

    <style jsx>{`
      :global(body) {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Avenir Next, Avenir,
          Helvetica, sans-serif;
      }
      nav {
        display: grid;
        text-align: center;
        border-bottom: solid 1px;
        border-color: #dedede;
      }
      ul {
        display: flex;
        justify-content: space-between;
        margin: 0 5% 0 5%;
      }
      nav > ul {
        padding: 4px 16px;
      }
      li {
        display: flex;
        padding: 0px 8px;
      }
      a {
        color: #067df7;
        text-decoration: none;
        font-size: 13px;
      }
      .logo {
        align-self: flex-start;
        height: 48px;
        object-fit: contain;
      }
    `}</style>
  </nav>
)

export default Nav
