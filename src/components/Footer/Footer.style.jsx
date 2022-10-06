import styled from 'styled-components'
import {Typography} from '@mui/material'

export const FooterWrapper = styled.div`
  bottom: 0;
  width: 100%;
  background-color: #f7f0e6;
  box-shadow: 0px -2px 3px rgba(0, 0, 0, 0.16);
`

export const Content = styled.div`
  padding: 10px 10px 30px 10px;
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  color: #aa865a;
  gap: 20px;
`

export const Title = styled(Typography)`
  font-weight: bold !important;
  font-size: 22px !important;
  color: #9a6725;
`

export const LinkContant = styled.a`
  text-decoration: none;
  color: #aa865a;
`

export const Logo = styled.img`
  width: 100px;
  border-radius: 50%;
  box-shadow: rgba(0, 0, 0, 0.16) 3px 5px 4px;
  margin-top: 50px;
`

export const TextLogo = styled.img`
  width: 70%;
`
