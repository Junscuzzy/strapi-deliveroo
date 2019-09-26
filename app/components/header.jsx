import React from 'react'
import Link from 'next/link'
import { useSelector } from 'react-redux'

export default function Header() {
  const isAuth = useSelector(state => state.auth)
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        {isAuth || (
          <>
            <li>
              <Link href="/login">
                <a>Login</a>
              </Link>
            </li>
            <li>
              <Link href="/register">
                <a>Register</a>
              </Link>
            </li>
          </>
        )}
        {isAuth && (
          <li>
            <Link href="/register">
              <a>Logout</a>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  )
}
