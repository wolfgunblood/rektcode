"use client"

import { ColumnDef } from "@tanstack/react-table"

import { Blind, blindJson } from '@/resources/blind'

export const columns: ColumnDef<Blind>[] = [
  {
    accessorKey: "Problem",
    header: "Problem",
  },
  {
    accessorKey: "difficulty",
    header: "Difficulty",
  },
  {
    accessorKey: "C++",
    header: "Code",
  },

]
