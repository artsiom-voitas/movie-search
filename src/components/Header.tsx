import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Link from 'next/link'

import SearchField from './SearchField'

export default function Header() {
  return (
    <AppBar position='fixed' color='primary' enableColorOnDark>
      <Container maxWidth='xl'>
        <Toolbar disableGutters className='justify-between p-2'>
          <Link href='/'>
            <MovieOutlinedIcon sx={{ display: 'flex', mr: 2, fontSize: '60px' }} />
          </Link>
          <SearchField />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
