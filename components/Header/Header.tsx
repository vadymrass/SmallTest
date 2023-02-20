import React, { useEffect } from 'react'
import { HeaderContainer, ImageWrapper, NavItem, StyledSelect, SelectWrapper } from './header.styles'
import Image from 'next/image'
import Logo from '../../assets/logo.png'
import useIsMobile from '../../hooks/hooks'
import { IconButton } from '../Hero/hero.styles'
import { browser } from 'process'

export const Header = () => {
  const isMobile = useIsMobile()

  return (
    <HeaderContainer>
        <ImageWrapper>
            <Image
                src={Logo}
                alt="logo"
                objectFit={"contain"}
                width={isMobile ? 99 : 158}
                height={isMobile ? 19 : 33}
            />
            <NavItem>
                <span>About Us</span>
            </NavItem>
            <NavItem>
                <span>View Jobs</span>
            </NavItem>
            <NavItem>
                <span>Blog</span>
            </NavItem>
        </ImageWrapper>
        <SelectWrapper>
            <StyledSelect>
                <option value="US">US</option>
                <option value="UK">UK</option>
                <option value="CA">CA</option>
                <option value="ZA">ZA</option>
            </StyledSelect>
        </SelectWrapper>
        {isMobile ? <IconButton style={{marginRight: '0px'}}>
            <svg width="19" height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5.73726 9.55068H17.5524C18.3418 9.55068 18.9997 9.08331 18.9997 8.52247C18.9997 7.96163 18.3418 7.49426 17.5524 7.49426H5.73726C4.94783 7.49426 4.28998 7.96163 4.28998 8.52247C4.28998 9.08331 4.92152 9.55068 5.73726 9.55068Z" fill="white"/>
            <path d="M11.1953 16.7481H17.6106C18.3683 16.7481 18.9997 16.1639 18.9997 15.4629C18.9997 14.7618 18.3683 14.1776 17.6106 14.1776H11.1953C10.4376 14.1776 9.80615 14.7618 9.80615 15.4629C9.80615 16.1639 10.4376 16.7481 11.1953 16.7481Z" fill="white"/>
            <path d="M1.42371 2.86727H17.5763C18.3529 2.86727 19 2.28306 19 1.58201C19 0.880961 18.3529 0.296753 17.5763 0.296753H1.42371C0.647139 0.296753 0 0.880961 0 1.58201C0 2.28306 0.621253 2.86727 1.42371 2.86727Z" fill="white"/>
            </svg>
        </IconButton> : null}
    </HeaderContainer>
  )
}