import { BlogPosts } from 'app/components/posts'

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        My Portfolio
      </h1>
      <p className="mb-4">
        {`Hello, I'm Matteo Petrera, a 22-year-old graduate in Management Engineering (L-8). 
        Currently, I'm pursuing my Master's degree in Computer Engineering @ Politecnico di Torino. 
        Passionate about leveraging technology to solve complex problems, I am dedicated to exploring the intersection 
        of engineering and computer science to drive innovation and make a meaningful impact in the tech industry. `}
      </p>
      <div className="my-8">
        <BlogPosts />
      </div>
    </section>
  )
}
