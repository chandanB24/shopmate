import { Icon } from '@chakra-ui/react'
import React from 'react'
import {BsShop} from 'react-icons/bs'
import {AiOutlineAppstoreAdd} from 'react-icons/ai'
import {RxBarChart} from 'react-icons/rx'

export default function Info() {


    const data = [
        {
        id:1,
        title:'Create your store',
        description:'We provide seamless and easy way to setup your store online with in few seconds of time.',
        icon:BsShop
    },
        {
        id:2,
        title:'Add Products',
        description:'Effortless product listings with captivating images, competitive prices, detailed descriptions.',
        icon:AiOutlineAppstoreAdd

    },
        {
        id:3,
        title:'Start Selling Online',
        description:'Unlock the digital marketplace and start selling your products online.',
        icon:RxBarChart

    },
    ]


  return (
    <section class="py-12 bg-white sm:py-16 lg:py-20">
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="text-center mb-5">
            <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl font-pj">How it Works</h2>
        </div>
        <div class="grid grid-cols-1 mt-4 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0 xl:mt-4">
           {data && data.map((item)=>(
           <div class="md:p-8 lg:p-14" key={item.id}>
                <Icon className='mx-auto text-5xl' as={item.icon}/>
                <h3 class="mt-12 text-xl font-bold text-gray-900 font-pj">{item.title}</h3>
                <p class="mt-5 text-base text-gray-600 font-pj">{item.description}</p>
            </div>  
            ))}   
        </div>
    </div>
</section>

  )
}
