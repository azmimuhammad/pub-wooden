import {Categories} from '../categories'
import Image0001 from '../../../assets/images/product/bedroom/0001.JPG'
import Image0002 from '../../../assets/images/product/bedroom/0002.JPG'

const _bedroom = [
  {
    name: 'Custom Dipan dengan laci',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: Image0001,
    feature: [
      'Lemari Gantung 2 Pintu',
      'Lemari Gantung 4 Pintu',
      'Lemari Berdiri 2 Pintu',
      'Laci',
      'Dll',
    ],
    material: ['kayu', 'baud', 'lem'],
    sold: 40,
    category: 3,
  },
  {
    name: 'Custom Dipan dengan laci',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: Image0002,
    feature: [
      'Lemari Gantung 2 Pintu',
      'Lemari Gantung 4 Pintu',
      'Lemari Berdiri 2 Pintu',
      'Laci',
      'Dll',
    ],
    material: ['kayu', 'baud', 'lem'],
    sold: 40,
    category: 3,
  },
]

const BedroomProduct = []

_bedroom.forEach((item, i) => {
  const category = Categories.find((cat) => cat.id === item.category)

  BedroomProduct.push({...item, id: `bedroom-${i + 1}`, category})
})

export {BedroomProduct}
