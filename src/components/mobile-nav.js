import { FiChevronDown } from 'react-icons/fi'
import {
  Collapsible,
  Flex,
  Icon,
  Stack,
  Text,
  useDisclosure,
} from '@chakra-ui/react'

import { Link } from '@/components/mdx'

const MobileNavItem = ({ href, children, label }) => {
  const { open, onToggle } = useDisclosure()

  const handleToggle = (e) => {
    if (children) {
      e.preventDefault()
      onToggle()
    }
  }

  return (
    <Stack gap={4} onClick={handleToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? '/#'}
        justify={'space-between'}
        align={'center'}
        _hover={{
          textDecoration: 'none',
        }}
      >
        <Text
          fontWeight={600}
          color={'gray.600'}
        >
          {label}
        </Text>
        {children && (
          <Icon
            transition={'all .25s ease-in-out'}
            transform={open ? 'rotate(180deg)' : ''}
            w={6}
            h={6}
          >
            <FiChevronDown />
          </Icon>
        )}
      </Flex>

      <Collapsible.Root open={open}>
        <Collapsible.Content>
          <Stack
            mt={2}
            pl={4}
            borderLeftWidth='1px'
            borderStyle={'solid'}
            borderColor={'gray.200'}
            align={'start'}
          >
            {children &&
              children.map((child, index) => (
                <Link key={index} href={child.href ?? '#'} py={2}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapsible.Content>
      </Collapsible.Root>
    </Stack>
  )
}

export const MobileNav = ({ navItems, isOpen }) => {
  if (!isOpen) return null

  return (
    <Stack
      p={4}
      display={{ md: 'none' }}
      zIndex={9999}
      pos='fixed'
      top='60px'
      w={'full'}
      bg={'white'}
      minH={'calc(100vh - 60px)'}
      css={{
        backdropFilter: 'saturate(180%) blur(5px)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
      }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  )
}
