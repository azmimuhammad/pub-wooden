import {Categories} from '../categories'
import Image0001 from '../../../assets/images/product/cupboard/0001.JPG'
import Image0002 from '../../../assets/images/product/cupboard/0002.JPG'
import Image0003 from '../../../assets/images/product/cupboard/0003.JPG'
import Image0004 from '../../../assets/images/product/cupboard/0004.JPG'
import Image0005 from '../../../assets/images/product/cupboard/0005.JPG'
import Image0006 from '../../../assets/images/product/cupboard/0006.JPG'
import Image0007 from '../../../assets/images/product/cupboard/0007.JPG'

const _cupboard = [
  {
    name: 'Lemari Baju 2 Pintu',
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
    category: 1,
  },
  {
    name: 'Lemari Baju 2 Pintu',
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
    category: 1,
  },
  {
    name: 'Lemari Baju 2 Pintu',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: Image0003,
    feature: [
      'Lemari Gantung 2 Pintu',
      'Lemari Gantung 4 Pintu',
      'Lemari Berdiri 2 Pintu',
      'Laci',
      'Dll',
    ],
    material: ['kayu', 'baud', 'lem'],
    sold: 40,
    category: 1,
  },
  {
    name: 'Lemari Baju 2 Pintu',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: Image0004,
    feature: [
      'Lemari Gantung 2 Pintu',
      'Lemari Gantung 4 Pintu',
      'Lemari Berdiri 2 Pintu',
      'Laci',
      'Dll',
    ],
    material: ['kayu', 'baud', 'lem'],
    sold: 40,
    category: 1,
  },
  {
    name: 'Lemari Baju 2 Pintu',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: Image0005,
    feature: [
      'Lemari Gantung 2 Pintu',
      'Lemari Gantung 4 Pintu',
      'Lemari Berdiri 2 Pintu',
      'Laci',
      'Dll',
    ],
    material: ['kayu', 'baud', 'lem'],
    sold: 40,
    category: 1,
  },
  {
    name: 'Lemari Baju 2 Pintu',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: Image0006,
    feature: [
      'Lemari Gantung 2 Pintu',
      'Lemari Gantung 4 Pintu',
      'Lemari Berdiri 2 Pintu',
      'Laci',
      'Dll',
    ],
    material: ['kayu', 'baud', 'lem'],
    sold: 40,
    category: 1,
  },
  {
    name: 'Lemari Baju 2 Pintu',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: Image0007,
    feature: [
      'Lemari Gantung 2 Pintu',
      'Lemari Gantung 4 Pintu',
      'Lemari Berdiri 2 Pintu',
      'Laci',
      'Dll',
    ],
    material: ['kayu', 'baud', 'lem'],
    sold: 40,
    category: 1,
  },
]

const CupboardProduct = []

_cupboard.forEach((item, i) => {
  const category = Categories.find((cat) => cat.id === item.category)

  CupboardProduct.push({...item, id: `cupboard-${i + 1}`, category})
})

export {CupboardProduct}
