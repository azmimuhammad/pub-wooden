import styled from 'styled-components'
import {Typography} from '@mui/material'

export const Container = styled.div`
  min-height: 500px;
  padding: 0px 0px 50px 0px;
`

export const ContentWrapper = styled.div`
  padding: ${(props) => (props.withPadding ? '0px 5%' : '0px')};
  display: flex;
  flex-direction: column;
  gap: 30px;
`

export const CustomFlex = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : 'row')};
  justify-content: ${(props) =>
    props.justifyContent ? props.justifyContent : 'flex-start'};
  align-content: ${(props) =>
    props.alignContent ? props.alignContent : 'flex-start'};
  align-items: ${(props) =>
    props.alignItems ? props.alignItems : 'flex-start'};
  gap: ${(props) => (props.gap ? props.gap : 0)};
  padding: ${(props) => (props.padding ? props.padding : 0)};
`

export const CustomText = styled.div`
  font-weight: ${(props) => (props.fw ? props.fw : 'normal')};
  font-size: ${(props) => (props.fs ? props.fs : '12px')};
  color: ${(props) => (props.fc ? props.fc : '#000')};
`

export const Title = styled(Typography)`
  font-size: 28px !important;
  color: #9a6725;
  border-left: 5px solid;
  padding-left: 15px;
`

export const SubTitle1 = styled(Typography)`
  color: #9a6725;
  font-weight: bold !important;
  font-size: 22px !important;
`

export const ContentTitle = styled(Typography)`
  color: #aa865a;
  font-weight: bold !important;
`

export const ContentText = styled(Typography)`
  color: #aa865a;
`

export const ProductExampleImage = styled.img`
  width: 100%;
  border-radius: 5px;
`
