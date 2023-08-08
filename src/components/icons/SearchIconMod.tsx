import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'

import IconProps from '.'

export default function SearchIconMod({ className }: IconProps) {
  return (
    <IconButton aria-label='search'>
      <SearchIcon className={`${className ? className : ''}`} />
    </IconButton>
  )
}
