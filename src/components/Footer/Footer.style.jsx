import styled from 'styled-components'
import {Typography} from '@mui/material'

export const FooterWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  color: #9a6725;
  background-color: #ebdfcc;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
`

export const Content = styled.div`
  padding: 10px 10px 30px 10px;
`

export const Title = styled(Typography)`
  font-weight: bold;
  font-size: 16px;
`
