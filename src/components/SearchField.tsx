'use client'

import { searchMovieQuery } from '@/redux/moviesSlice'
import { Input } from '@nextui-org/react'
import { SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useCallback, useRef, useState } from 'react'
import { useSelector } from 'react-redux'

export default function SearchField() {
  const storedSearchQuery = useSelector(searchMovieQuery)
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
    if (storedSearchQuery === searchValue) {
      setSearchValue('')
    }
  }, [searchValue])

  const onEnterKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>): void => {
      if (event.key === 'Enter' && storedSearchQuery !== searchValue) {
        redirectToSearchResults()
        loseInputFocus()
      } else if (event.key === 'Enter' && storedSearchQuery === searchValue) {
        setSearchValue('')
        loseInputFocus()
      }
    },
    [searchValue],
  )

  return (
    <Input
      classNames={{
        base: 'max-w-full sm:max-w-[400px] h-10',
        mainWrapper: 'h-full',
        input: 'text-small',
        inputWrapper:
          'h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20',
      }}
      placeholder='Type to search...'
      size='sm'
      endContent={
        <SearchIcon
          size={18}
          onClick={onClick}
          className='hover:bg-default-200/70 rounded-xl bg-default-200/10 cursor-pointer'
        />
      }
      type='search'
      value={searchValue}
      ref={searchRef}
      onKeyDown={onEnterKeyDown}
      onChange={onSearchValueChange}
    />
  )
}
