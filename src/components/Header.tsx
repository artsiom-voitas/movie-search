import MovieOutlinedIcon from '@mui/icons-material/MovieOutlined'
import AppBar from '@mui/material/AppBar'
import Container from '@mui/material/Container'
import Toolbar from '@mui/material/Toolbar'
import { motion } from 'framer-motion'
import Link from 'next/link'

import SearchField from './SearchField'
import { ThemeSwitcher } from './ThemeSwitcher'

export default function Header() {
  const MotionLink = motion(Link)
  return (
    <AppBar position='fixed' enableColorOnDark sx={{ backgroundColor: '#15202b' }}>
      <Container maxWidth='xl'>
        <Toolbar disableGutters className='justify-between p-2'>
          <MotionLink
            href='/'
            whileHover={{
              scale: 1.01,
            }}
            whileTap={{ scale: 0.95 }}
          >
            <MovieOutlinedIcon sx={{ display: 'flex', mr: 2, fontSize: '60px', color: 'white' }} />
          </MotionLink>
          <ThemeSwitcher />
          <SearchField />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
