export default function Home() {
  return (
    <>
      {/* header  */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
            </svg>
            <span className="ml-3 text-xl">Yatra</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a className="mr-5 hover:text-gray-900">Home</a>
            <a className="mr-5 hover:text-gray-900">About Us</a>
            <a className="mr-5 hover:text-gray-900">How to Use</a>
            {/* <a className="mr-5 hover:text-gray-900">Fourth Link</a> */}
          </nav>

        </div>
      </header>

      {/* hero section starts */}
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-7 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">Platform for online cab
            </h1>
            <p className="mb-8 leading-relaxed">
              Get to your destination safely and on time with Yatra.
            </p>
            <div className="flex justify-center">
              <a href="/register"><button className="inline-flex text-white bg-indigo-400 border-0 py-3 px-6 focus:outline-none hover:bg-indigo-600  text-lg">Get Started</button></a>
            </div>
            <div className="mt-1">
              <label>Already register?</label> <a href="/login">Login</a>
            </div>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://images.unsplash.com/photo-1558980664-769d59546b3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          </div>
        </div>
      </section>
      {/* hero section ends  */}
    </>
  )
}
