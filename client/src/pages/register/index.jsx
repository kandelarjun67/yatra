const Register = () => {
    return (
        <>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-3 mx-auto flex flex-wrap items-center">
                    <div className="lg:w-1/2 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:m-auto">
                        <h2 className="text-gray-900 text-lg font-medium title-font mb-3">Sign Up</h2>
                        <div className="relative mb-3">
                            <label for="full-name" className="leading-7 text-sm text-gray-600">Full Name</label>
                            <input type="text" id="full-name" name="full-name" required className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-3">
                            <label className="leading-7 text-sm text-gray-600">Contact Number</label>
                            <input type="number" id="phoneNumber" name="phoneNumber" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-3">
                            <label for="address" className="leading-7 text-sm text-gray-600">Address</label>
                            <input type="text" id="address" name="address" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-4">
                            <label for="password" className="leading-7 text-sm text-gray-600">Password</label>
                            <input type="password" id="password" name="password" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <div className="relative mb-3">
                            <label for="confirmPassword" className="leading-7 text-sm text-gray-600">Confirm Password</label>
                            <input type="password" id="confirmPassword" name="confirmPassword" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        </div>
                        <button className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Submit</button>

                         <p className="mt-1 text-center text-sm text-gray-500">
                    Already a member?{' '}
                    <a href="/login" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
                        Login
                    </a>
                </p>
                    </div>
                </div>
               
            </section>
        </>
    )
}
export default Register
