import React from 'react'

export default function Demo() {
  return (
    <>
      <div className="w-1/3 h-60 border-2  flex justify-around items-center">
        <div className="h-4/5 flex flex-col justify-center gap-2">
          <div className="w-2/5 font-medium text-white bg-yellow-500 rounded-md p-1 text-center">
            Bestseller
          </div>
          <h2 className="font-medium text-sm md:text-2xl">Classic French Fries</h2>
          <p className="font-medium text-xl">&#8377;129</p>
        </div>
        <div className="relative">
          <img
            className="rounded-2xl w-36"
            src="https://picsum.photos/200"
            alt="item"
          />
          <button className="w-4/5 border-2 border-red-400 bg-red-50 rounded-md p-1 text-red-400 font-medium absolute -bottom-4 left-4">
            ADD +
          </button>
        </div>
      </div>
    </>
  )
}
