import Link from 'next/link'
import React from 'react'

const Navigation = () => {
    const navlist = [
        {
            title: "Contact",
            href: "/contact"
         },
        {
            title: "Contact",
            href: "/contact",
        }
    ]
  return (
    <nav>
        <div>
            <p>Dwellify</p>
            <ul>
                {navlist.map((nav) => {
                    return <Link key={nav.title} href={nav.href} >{nav.title}</Link>
                })}
            </ul>
        </div>
    </nav>
  )
}

export default Navigation