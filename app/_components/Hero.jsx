import React from 'react';
import Constant from '../_utils/Constant';
import Link from 'next/link';

function Hero() {
    return (
        <section className="bg-black overflow-hidden">
            <div className="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
                <div className="mx-auto max-w-xl text-center">
                    <h1 className="text-white text-3xl font-extrabold sm:text-5xl">
                        Upload, Save and easily Share
                        <span className='text-violet-500'>
                            { } your files in one place
                        </span>
                    </h1>

                    <p className="mt-4 sm:text-xl/relaxed text-gray-600">
                        {Constant.description}
                    </p>

                    <div className="mt-8 flex flex-wrap justify-center gap-4">
                        <Link
                            className="block w-full rounded bg-violet-500 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-700 sm:w-auto"
                            href="/files"
                        >
                            Get Started
                        </Link>

                        <a
                            className="block w-full rounded px-12 py-3 text-sm font-medium text-violet-500 shadow hover:text-violet-700  sm:w-auto"
                            href="/about"
                        >
                            Learn More
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
