import React from 'react'
import {FcGoogle} from 'react-icons/fc'
import {Button, Center, Text} from '@chakra-ui/react'

export default function Auth() {
  return (
    <div className='flex justify-center items-center h-[85vh] flex-col'>
        <p className="text-2xl lg:text-4xl md:text-3xl mb-4 font-bold">welcome to shopmate</p>
        <div className='rounded-md'>
        <Button w={'full'} variant='solid' leftIcon={<FcGoogle />} colorScheme={'messenger'}>
          <Center>
            <Text>Sign in with Google</Text>
          </Center>
        </Button>
        </div>
    </div>
  )
}
