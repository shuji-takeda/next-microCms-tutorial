import Head from 'next/head'
import React from 'react'
import { client } from '../libs/client'

interface Article {
  id: string
  title: string
  publishedAt: string
}

interface Contents {
  contents: Article[]
}

export default function Home({
  blog,
}: {
  blog: { id: string; title: string; publishedAt: string }[]
}): JSX.Element {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <ul>
          {blog.map((blog) => (
            <li key={blog.id}>
              <p>{blog.title}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const data: Contents = await client.get({ endpoint: 'blog' })
  return {
    props: {
      blog: data.contents,
    },
  }
}
