import React from 'react'
import {BsShop} from 'react-icons/bs'

export default function Info() {


    const data = [{
        
    }]


  return (
    <section class="py-12 bg-white sm:py-16 lg:py-20">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center">
            <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">How it Works</h2>
        </div>
        <div class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-24">
            <div class="md:p-8 lg:p-14">
                <BsShop className='mx-auto text-5xl'/>
                <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">Support</h3>
                <p class="mt-5 text-base text-gray-600 font-pj">Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus ac amet.</p>
            </div>      
        </div>
    </div>
</section>

  )
}
