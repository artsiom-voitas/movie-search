'use client'

import { searchMovieQuerry } from '@/redux/moviesSlice'
import { FormControl, TextField } from '@mui/material'
import { useRouter } from 'next/navigation'
import React, { useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

import { SearchIconMod } from './icons/'

export default function SearchField() {
  const storedSearchQuerry = useSelector(searchMovieQuerry)
  const [searchValue, setSearchValue] = useState<string>('')
  const router = useRouter()
  const searchRef = useRef<HTMLInputElement>(null)

  function redirectToSearchResults(): void {
    if (searchValue.length >= 1) {
      router.push(`
      /movies?search=${searchValue}&page=1
    `)
      setSearchValue('')
    }
  }

  function loseInputFocus(): void {
    if (searchRef.current) {
      searchRef.current.blur()
    }
  }
  const onSearchValueChange = useCallback((event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value)
  }, [])

  const onClick = useCallback((): void => {
    redirectToSearchResults()
    if (storedSearchQuerry === searchValue) {
      setSearchValue('')
    }
  }, [searchValue])

  const onEnterKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>): void => {
      if (event.key === 'Enter' && storedSearchQuerry !== searchValue) {
        redirectToSearchResults()
        loseInputFocus()
      } else if (event.key === 'Enter' && storedSearchQuerry === searchValue) {
        setSearchValue('')
        loseInputFocus()
      }
    },
    [searchValue],
  )

  return (
    <FormControl sx={{ flexDirection: 'row' }} className='flex items-center gap-5'>
      <TextField
        id='outlined-controlled'
        label='The Movie'
        variant='outlined'
        color='primary'
        value={searchValue}
        inputRef={searchRef}
        onChange={onSearchValueChange}
        onKeyDown={onEnterKeyDown}
        className='w-[300px]'
      />
      <SearchIconMod onClick={onClick} />
    </FormControl>
  )
}
