import AdbIcon from '@mui/icons-material/Adb'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import Link from 'next/link'

import SearchField from './SearchField'

export default function Header() {
  return (
    <header>
      <AppBar position='static' color='default' enableColorOnDark>
        <Container maxWidth='xl'>
          <Toolbar disableGutters className='justify-between p-2'>
            <Link href='/'>
              <AdbIcon sx={{ display: 'flex', mr: 2 }} />
            </Link>
            <SearchField />
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  )
}
