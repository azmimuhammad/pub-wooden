import React, {useState} from 'react'
import {ImageList, ImageListItem} from '@mui/material'
import {ContentWrapper} from '../../config/Global.styles'
import {productList} from '../../utils/constans'

import Fade from 'react-reveal/Fade'

import DialogDetail from '../../components/Dialog/DialogDetail.component'

const GaleryPage = () => {
  const [open, setOpen] = useState(false)
  const [detail, setDetail] = useState(null)

  const onClose = () => {
    setOpen(false)
    setDetail(null)
  }

  const onSelectDetail = (data) => {
    setDetail(data)
    setOpen(true)
  }

  return (
    <ContentWrapper withPadding>
      <ImageList variant="masonry" cols={4} gap={8}>
        {productList.map((item) => (
          <Fade bottom>
            <ImageListItem key={item.id}>
              <img
                src={item.picture}
                alt={item.name}
                loading="lazy"
                style={{cursor: 'pointer'}}
                onClick={() => onSelectDetail(item)}
              />
            </ImageListItem>
          </Fade>
        ))}
      </ImageList>
      <DialogDetail open={open} onClose={() => onClose()} data={detail} />
    </ContentWrapper>
  )
}

export default GaleryPage
