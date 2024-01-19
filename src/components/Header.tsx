import { Navbar, NavbarBrand, NavbarContent } from '@nextui-org/react'
import { motion } from 'framer-motion'
import { Clapperboard } from 'lucide-react'
import Link from 'next/link'

import SearchField from './SearchField'

export default function Header() {
  const MotionLink = motion(Link)
  return (
    <Navbar isBordered classNames={{ brand: '!flex-grow-0' }}>
      <NavbarBrand>
        <MotionLink
          href='/'
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{ scale: 0.95 }}
        >
          <Clapperboard size={40} />{' '}
        </MotionLink>
      </NavbarBrand>
      <NavbarContent justify='end'>
        <SearchField />
      </NavbarContent>
    </Navbar>
  )
}
