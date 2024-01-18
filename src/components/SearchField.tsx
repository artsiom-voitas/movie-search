'use client'

import { searchMovieQuerry } from '@/redux/moviesSlice'
import { Input } from '@nextui-org/react'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

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
    <Input
      color='default'
      label='The Movie'
      className='max-w-[300px]'
      value={searchValue}
      ref={searchRef}
      onKeyDown={onEnterKeyDown}
      onChange={onSearchValueChange}
      variant='bordered'
      endContent={
        <Search
          size='30'
          className='hover:bg-default-200/70 rounded-xl bg-default-200/10 cursor-pointer'
          onClick={onClick}
        />
      }
    />
  )
}
