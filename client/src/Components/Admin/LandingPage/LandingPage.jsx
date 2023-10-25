import React from 'react'
import heroImage from '../../../assets/hero.png'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="bg-gray-50">
    <section className="relative py-12 sm:py-16 lg:pb-40">
        <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-y-4 lg:items-center lg:grid-cols-2 xl:grid-cols-2">
                <div className="text-center xl:col-span-1 lg:text-left md:px-16 lg:px-0 xl:pr-20">
                    <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">Time to take every store online</h1>
                    <p className="mt-2 text-lg text-gray-600 sm:mt-6 font-inter">'Empower and embrace your local businesses, and rediscover the heart of your community.'</p>
                    <Link to='/auth' className="inline-flex px-8 py-4 mt-8 text-lg font-bold text-white transition-all duration-200 bg-red-600 border border-transparent rounded sm:mt-10 font-pj hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-400" role="button">
                        Get Started
                    </Link>
                </div>
                <div className="xl:col-span-1">
                    <img className="w-full mx-auto mix-blend-multiply" src={heroImage} alt="" />
                </div>
            </div>
        </div>
    </section>
</div>

  )
}
