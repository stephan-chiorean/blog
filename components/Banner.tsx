import React from 'react'

function Banner() {
  return (
    <div className="flex flex-col justify-between px-10 py-5 mb-10">
        <div>
            <h1 className="text-7xl pb-3">Stephan's Blog</h1>
            <h2 className="mt-5 md:mt-0 uppercase tracking-[5px]">By Stevie Productions</h2>
        </div>
        <p className="mt-5 md:mt-2 text-gray-400 max-w-lg">
            Personal Endeavors | Technology Research | Opinion Pieces
        </p>
    </div>
  )
}

export default Banner