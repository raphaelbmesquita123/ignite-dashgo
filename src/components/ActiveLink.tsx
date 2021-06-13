import { useRouter } from 'next/dist/client/router'
import Link, { LinkProps } from 'next/link'
import { cloneElement, ReactElement } from 'react'

interface ActiveLinkPorps extends LinkProps {
  children: ReactElement
  shouldMatcvhExactHref?: false
}
export default function ActiveLink({ children, shouldMatcvhExactHref = false,...rest }: ActiveLinkPorps) {
  const { asPath } = useRouter()

  let isActive = false

  if (shouldMatcvhExactHref && (asPath === rest.href || asPath === rest.as)){
      isActive = true
  }

  if(!shouldMatcvhExactHref && (asPath.startsWith(String(rest.href)) || asPath.startsWith(String(rest.as)))){
      isActive = true
  }


  return (
    <Link {...rest}>
      {cloneElement(children, {
        color: isActive ? 'pink.400' : 'gray.50',
      })}
    </Link>
  )
}
