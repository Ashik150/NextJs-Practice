import getPost from '@/lib/getPost';
import React from 'react'

export default async function PostPage({ params }) {
    const { id } = await params;
    const post = await getPost(id);
    return (
        <div className='mt-6'>
            <h1 className = "text-blue-500">{post.title}</h1>
            <p>{post.body}</p>
        </div>
    )
}
