import getAllPosts from '@/lib/getAllPosts'
import React from 'react'
import Link from 'next/link'

export default async function Posts() {
    const posts =  await getAllPosts();
  return (
    <div className = 'mt-6'>
        <h1>All Posts</h1>
        <ul className='mt-4'>
            {posts.map((post) => (
                <li key={post.id} className='mb-4'>
                  <Link href={`/posts/${post.id}`}>{post.title}</Link>
                </li>
            ))} 
        </ul>
    </div>
  )
}
