import React, {useState} from 'react'
import {ImageList, ImageListItem} from '@mui/material'
import {ContentWrapper} from '../../config/Global.styles'
import {Galery} from '../../utils/constans'

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
      <ImageList
        vsx={{width: 500, height: 450}}
        variant="woven"
        cols={3}
        gap={8}
      >
        {Galery.map((item) => (
          <ImageListItem key={item.id}>
            <img
              src={item.picture}
              alt={item.name}
              loading="lazy"
              style={{cursor: 'pointer'}}
              onClick={() => onSelectDetail(item)}
            />
          </ImageListItem>
        ))}
      </ImageList>
      <DialogDetail open={open} onClose={() => onClose()} data={detail} />
    </ContentWrapper>
  )
}

export default GaleryPage
