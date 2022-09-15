import Image from 'next/image'
import Link from 'next/link'
import { HeaderContainer, NewUserButton } from '../../styles/components/header'

import logo from '../../assets/logo.svg'

interface HeaderProps {
  url: string;
  buttonText: string;
}

export function Header({ url, buttonText }: HeaderProps) {
  return (
    <HeaderContainer>
      <Image src={logo} alt="" />

      <Link href={url}>
        <NewUserButton>{buttonText}</NewUserButton>
      </Link>
      
    </HeaderContainer>
  )
}