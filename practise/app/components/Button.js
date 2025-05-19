'use client'

export default function Button() {
    return (
        <div className='mt-5'>
            <button className="bg-red-500 rounded-sm px-4 py-1" onClick={() => console.log('hello')}>Click me</button>
        </div>
    )
}
