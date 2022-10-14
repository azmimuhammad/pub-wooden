import React, {useState} from 'react'
import {Grid, ImageList, ImageListItem} from '@mui/material'
import {ContentWrapper, Title} from '../../config/Global.styles'
import {CategoryImage} from './Catalog.styles'
import {Categories, productList} from '../../utils/constans'

import DialogDetail from '../../components/Dialog/DialogDetail.component'

import Fade from 'react-reveal/Fade'

const CatalogPage = () => {
  const [value, setValue] = useState('001')
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

  const handleChange = (id) => {
    setValue(String(id))
  }

  const findCategoryById = (id) => {
    return Categories.find((val) => val.id === id)
  }

  const renderList = () => {
    const filteredList = productList.filter((val) => val.category === value)
    return filteredList
  }

  return (
    <ContentWrapper withPadding style={{marginTop: 40}}>
      <Grid container>
        {Categories.map((item, i) => {
          return (
            <Grid item xs={2} md={2} key={i} style={{padding: '10px'}}>
              <CategoryImage
                src={item.picture}
                alt=""
                selected={value === item.id}
                onClick={() => handleChange(item.id)}
              />
            </Grid>
          )
        })}
      </Grid>
      <Title>{findCategoryById(value).name}</Title>
      <ImageList variant="masonry" cols={4} gap={8}>
        {renderList().map((item) => (
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

export default CatalogPage
