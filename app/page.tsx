import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Aishik's Portfolio
      </h1>
      <p className="mb-4">
        {`Hi, I'm Aishik Dutta, a final year B.Tech Information Technology student at RCC Institute of Information Technology, Kolkata. I'm passionate about technology, particularly web development.`}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
