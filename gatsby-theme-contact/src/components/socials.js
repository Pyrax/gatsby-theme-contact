/** @jsx jsx */
import React from 'react'
import { jsx, Styled, useThemeUI } from 'theme-ui'
import { SocialIcon } from 'react-social-icons'
import useSiteMetadata from '../hooks/use-site-metadata'

const Socials = () => {
  const { social } = useSiteMetadata()
  const { theme } = useThemeUI()
  return social ? (
    <>
      <Styled.h3>Socials</Styled.h3>
      <Styled.ul sx={{ listStyle: 'none', p: 0, m: 0 }}>
        {social.map(({ url }) => (
          <Styled.li
            key={url}
            sx={{
              display: 'inline',
              mr: 0
            }}
          >
            <SocialIcon
              url={url}
              bgColor='transparent'
              fgColor={theme.colors.text}
            />
          </Styled.li>
        ))}
      </Styled.ul>
    </>
  ) : null
}

export default Socials
