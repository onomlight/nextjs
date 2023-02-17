// our-domain.com
// our-domain.com/news/something-important

import Link from 'next/link'
import { Fragment } from 'react'

function NewsPage() {
  return (
    <Fragment>
      <h1>The NewsPage Page</h1>
      <ul>
        <li>
          <Link href="/new/nextjs-is-a-great-framework">
            넥스트제이에스연습
          </Link>
        </li>
        <li>SomeTingElse</li>
      </ul>
    </Fragment>
  )
}

export default NewsPage
