import React from 'react'
import Link from 'next/link'

export default function aboutLayout({ children }) {
    return (
        <div>
            <nav>
                <ul className="flex gap-4">
                    <li><Link href="/about/mission">Mision</Link></li>
                    <li><Link href="/about/vision">Vision</Link></li>
                </ul>
            </nav>
            {children}</div>
    )
}