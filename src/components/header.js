import { DesktopNav } from '@/components/desktop-nav'
import { Link } from '@/components/mdx'
import { MobileNav } from '@/components/mobile-nav'
import { menuItems } from '@/data/menu-items'
import { FiMenu, FiX } from 'react-icons/fi'
import {
  Box,
  Container,
  Flex,
  IconButton,
  Image,
  Stack,
  useDisclosure,
} from '@chakra-ui/react'

export const Header = () => {
  const { open, onToggle } = useDisclosure()

  return (
    <Box>
      <Flex
        as={'header'}
        pos='fixed'
        top={'0'}
        w={'full'}
        minH={'60px'}
        boxShadow={'sm'}
        zIndex={'999'}
        justify={'center'}
        bg={'gray.600'}
        css={{
          backdropFilter: 'saturate(180%) blur(5px)',
        }}
      >
        <Container as={Flex} maxW={'1024px'} align={'center'}>
          <Flex
            flex={{ base: '0', md: 'auto' }}
            ml={{ base: -2 }}
            mr={{ base: 6, md: 0 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              variant={'ghost'}
              size={'sm'}
              aria-label={'Toggle Navigation'}
            >
              {open ? (
                <FiX size={12} color="var(--chakra-colors-orange-400)" />
              ) : (
                <FiMenu size={20} color="var(--chakra-colors-orange-400)" />
              )}
            </IconButton>
          </Flex>

          <Flex
            flex={{ base: 1, md: 'auto' }}
            justify={{ base: 'start', md: 'start' }}
          >
            <Stack
              as={Link}
              href={'/'}
              direction={'row'}
              alignItems={'center'}
              gap={{ base: 2, sm: 4 }}
            >
              <Image
                h={20}
                src={'/startpage/logo_uil.svg'}
                alt={'Girls @ Informatica Olympiade logo'}
              />
            </Stack>
          </Flex>

          <Stack
            direction={'row'}
            align={'center'}
            gap={{ base: 6, md: 8 }}
            flex={{ base: 1, md: 'auto' }}
            justify={'flex-end'}
          >
            <DesktopNav
              navItems={menuItems}
              display={{ base: 'none', md: 'flex' }}
            />
          </Stack>
        </Container>
      </Flex>
      <MobileNav isOpen={open} navItems={menuItems} />
    </Box>
  )
}
