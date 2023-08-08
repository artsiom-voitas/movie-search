'use client'

import { getMoviesRequest } from '@/redux/movieSlice'
import { FormControl, TextField } from '@mui/material'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'

import { SearchIconMod } from './icons/'

export default function SearchField() {
  const [searchQuerry, setSearchQuerry] = useState<string>('')
  const dispatch = useDispatch()

  const onSearchValueChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchQuerry(event.target.value)
  }, [])

  const onClick = useCallback((): void => {
    dispatch(getMoviesRequest())
    setSearchQuerry('')
  }, [searchQuerry])

  return (
    <FormControl sx={{ flexDirection: 'row' }} className='flex items-center gap-5'>
      <TextField
        id='outlined-controlled'
        label='The Movie'
        variant='outlined'
        color='secondary'
        value={searchQuerry}
        onChange={onSearchValueChange}
        className='w-[300px]'
      />
      {searchQuerry.length >= 1 ? (
        <Link
          onClick={onClick}
          href={`
             /movies?search=${searchQuerry}&page=1
           `}
        >
          <SearchIconMod />
        </Link>
      ) : (
        <SearchIconMod />
      )}
    </FormControl>
  )
}
