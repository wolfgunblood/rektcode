"use client"
import { Button } from '@/components/ui/button'
import React from 'react'
import { blindJson } from '@/resources/blind'


const PracticePage = () => {

    const showData = () => {
        console.log(blindJson);
    }

    return (
        <Button onClick={showData}>Click Me!!!</Button>
    )
}

export default PracticePage