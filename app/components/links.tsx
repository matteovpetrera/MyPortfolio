function ArrowIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M2.07102 11.3494L0.963068 10.2415L9.2017 1.98864H2.83807L2.85227 0.454545H11.8438V9.46023H10.2955L10.3097 3.09659L2.07102 11.3494Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function Links() {
  return (
    <footer className="mb-16">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="underline-offset-4 flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/matteovpetrera"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Github</p>
          </a>
        </li>

        <li>
          <a
            className="underline-offset-4 flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            rel="noopener noreferrer"
            target="_blank"
            href="http://www.instagram.com/matteo_petrera"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Instagram</p>
            {/* <img src="instagram-white-icon.png" className="w-5 h-5"></img> */}
          </a>
        </li>
        <li>
          <a
            className="underline-offset-4 flex w-fit items-center rounded-full bg-secondary px-3 py-1 no-underline hover:bg-tertiary"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/matteovpetrera/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">Linkedin</p>
            {/* <img src="linkedin-app-white-icon.png" className="w-5 h-5"></img> */}
          </a>
        </li>
      </ul>
    </footer>
  );
}
