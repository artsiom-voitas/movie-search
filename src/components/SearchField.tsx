'use client'

import { searchMovieQuerry, setSearchQuerry } from '@/redux/moviesSlice'
import { FormControl, TextField } from '@mui/material'
import Link from 'next/link'
import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { SearchIconMod } from './icons/'

export default function SearchField() {
  const storedSearchQuerry = useSelector(searchMovieQuerry)
  const [searchValue, setSearchValue] = useState<string>('')
  const dispatch = useDispatch()

  const onSearchValueChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value)
  }, [])

  const onClick = useCallback((): void => {
    if (storedSearchQuerry !== searchValue) {
      dispatch(setSearchQuerry(searchValue))
    }
    setSearchValue('')
  }, [searchValue])

  return (
    <FormControl sx={{ flexDirection: 'row' }} className='flex items-center gap-5'>
      <TextField
        id='outlined-controlled'
        label='The Movie'
        variant='outlined'
        color='primary'
        value={searchValue}
        onChange={onSearchValueChange}
        className='w-[300px]'
      />
      {searchValue.length >= 1 ? (
        <Link
          onClick={onClick}
          href={`
             /movies?search=${searchValue}&page=1
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
