import { BlogPosts } from "app/components/posts";
import Links from "./components/links";

export default function Page() {
  return (
    <section>
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">Hi, Matteo here! 👋</h1>
      <p className="mb-4">
        {`I'm a 23-year-old engineer graduate. 
        Currently, I'm pursuing my Master's degree in Computer Engineering @ Politecnico di Torino. 
        Passionate about leveraging technology to solve complex problems, I am dedicated to exploring the intersection 
        of engineering and computer science to drive innovation and make a meaningful impact in the tech industry. `}
      </p>
      <div className="my-8">
        <Links />
        <div className="flex flex-col gap-8">
          <div className="space-y-4">
            <a
              className="underline-offset-4 group flex items-center gap-2 tracking-tight text-secondary"
              href="/blog"
            >
              Latest blogs
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="h-5 w-5 text-tertiary transition-all group-hover:text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M5.22 14.78a.75.75 0 0 0 1.06 0l7.22-7.22v5.69a.75.75 0 0 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75h-7.5a.75.75 0 0 0 0 1.5h5.69l-7.22 7.22a.75.75 0 0 0 0 1.06Z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </a>
          </div>

          <BlogPosts />
        </div>
      </div>
    </section>
  );
}
