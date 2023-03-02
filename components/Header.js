import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/auth">
            <a>Authentication</a>
          </Link>
        </li>
        <li>
          <Link href="/timetable">
            <a>Timetable</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}

export default Header
