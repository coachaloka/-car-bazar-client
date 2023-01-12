
import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
    return (
        <div className="img h-[80vh] relative">
            <img className='w-[100%] md:h-[100vh]' src="https://media.istockphoto.com/id/1304406740/photo/error-404-number-404-in-three-dimensions-next-to-a-security-magnifying-glass-on-a-yellow.jpg?b=1&s=170667a&w=0&k=20&c=moAzyHI3EdHNQeNTM8zrqQm-a6LHSJuUNbXbTldd8Qg=" alt="" />
            <div className="flex absolute top-10 left-1/3 justify-center">
                <div className="max-w-md text-center">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-gray-600">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-800">But dont worry, you can find plenty of other things on our homepage.</p>
                    <Link to={'/'} rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-gray-900">Back to homepage</Link>
                </div>
            </div>
        </div>

    )
}

export default ErrorPage;