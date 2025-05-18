import {notFound} from 'next/navigation';

export default function BlogPage ({params}) {
    const {id} = params;
    if(id === '4')
    {
        notFound();
    }
  return (
    <div>
        The blog id is {id}
    </div>
  )
}