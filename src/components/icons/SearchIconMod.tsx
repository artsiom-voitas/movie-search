import SearchIcon from '@mui/icons-material/Search'
import { IconButton } from '@mui/material'

import IconProps from '.'

export default function SearchIconMod({ className, onClick }: IconProps) {
  return (
    <IconButton aria-label='search' onClick={onClick}>
      <SearchIcon className={`${className ? className : ''}`} />
    </IconButton>
  )
}
