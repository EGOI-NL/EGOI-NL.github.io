import { Link } from '@/components/mdx'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Box,
  Flex,
  Icon,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Stack,
  Text,
} from '@chakra-ui/react'

export const DesktopNav = ({ navItems, ...props }) => {
  return (
    <Stack direction={'row'} spacing={4} {...props}>
      {navItems.map((navItem) => (
        <Box key={navItem.label} display="flex" flexDirection="column" alignItems="center">
          <Popover trigger={'hover'} placement={'bottom-start'}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? '/#'}
                fontSize={'sm'}
                fontWeight={'bold'}
                color={'orange.300'}
                textAlign="center"
                fontFamily="'Neue Haas', 'Inter Variable', 'Work Sans', system-ui, sans-serif"
                _hover={{
                  textDecoration: 'none',
                  color: 'orange.100',
                }}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={'xl'}
                bg={'white'}
                p={4}
                rounded={'xl'}
                minW={'sm'}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  )
}

const DesktopSubNav = ({ label, href, subLabel }) => {
  return (
    <Link
      href={href ?? '#'}
      role={'group'}
      display={'block'}
      p={2}
      rounded={'md'}
      _hover={{ bg: 'orange.500', color: 'white' }}
      fontFamily="'Neue Haas', 'Champ Black', 'Inter Variable', 'Work Sans', system-ui, sans-serif"
    >
      <Stack direction={'row'} align={'center'}>
        <Box>
          <Text
            transition={'all .3s ease'}
            _groupHover={{ color: 'orange.100' }}
            fontWeight={500}
            fontFamily="'Neue Haas', 'Champ Black', 'Inter Variable', 'Work Sans', system-ui, sans-serif"
            color={'orange.200'}
          >
            {label}
          </Text>
          <Text fontSize={'sm'}>{subLabel}</Text>
        </Box>
        <Flex
          transition={'all .3s ease'}
          transform={'translateX(-10px)'}
          opacity={0}
          _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
          justify={'flex-end'}
          align={'center'}
          flex={1}
        >
          <Icon color={'blue.400'} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  )
}
