import Link from "next/link";

export const Layout = () => {
  return (
    <>
      <div className="flex justify-center">
        <nav className="bg-white border-gray-200 mt-8 w-5/6 rounded-3xl">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <img
              src="figurinha/Icon.png"
              className="ml-8 w-10 p-0"
              alt="Icon Richard"
            />
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white mr-">
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 text-black bg-blue-700 md:hover:text-blue-400 rounded md:bg-transparent  md:p-0"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 "
                  >
                    Projetos
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/richard-henrique-69ab95241/"
                    target="_blank"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 "
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/RichardHNS"
                    target="_blank"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 "
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <Link
                    href="/"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-400 md:p-0 "
                  >
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};
