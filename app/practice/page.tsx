"use client"
import React from 'react'
import { DataTable } from './data-table'
import { columns } from './column'
import { blindJson } from '@/resources/blind'


const PracticePage = () => {

    return (
        <div className="container mx-auto py-10">
            <DataTable columns={columns} data={blindJson} />
        </div>
    )
}

export default PracticePage