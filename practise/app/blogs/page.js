import Image from "next/image";
import Link from "next/link";

export default function Blogs() {
  const blogs = [
    {
      id: 1,
      title: "Blog 1",
      description: "This is the first blog",
    },
    {
      id: 2,
      title: "Blog 2",
      description: "This is the second blog",
    },
    {
      id: 3,
      title: "Blog 3",
      description: "This is the third blog",
    },
  ];

  return (
    <main className="mt-10">
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className="border p-4 my-2">
            <Link href={`/blogs/${blog.id}`}>
              <h2 className="text-2xl font-bold">{blog.title}</h2>
            </Link>
            <p>{blog.description}</p>
          </li>
        ))} 
      </ul>
    </main>
   
  );
}
