import { Link as ChakraLink } from '@chakra-ui/react'
import NextLink from 'next/link'
import React from 'react'
import { FiExternalLink } from 'react-icons/fi'

export const Link = React.forwardRef(function CustomLink(props, ref) {
  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))
  const { useExternalIcon, ...rest } = props

  if (isInternalLink) {
    return (
      <ChakraLink as={NextLink} ref={ref} {...rest}>
        {rest.children}
      </ChakraLink>
    )
  }

  return (
    <ChakraLink
      {...rest}
      target={rest.target ?? '_blank'}
      rel={rest.rel ?? 'noopener noreferrer'}
      as={NextLink}
      ref={ref}
    >
      {rest.children}
      {useExternalIcon && <FiExternalLink style={{ marginInline: '2px' }} />}
    </ChakraLink>
  )
})
