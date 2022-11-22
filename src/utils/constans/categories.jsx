import Cupboard from '../../assets/images/product-category/cupboard.png'
import Custom from '../../assets/images/product-category/custom.png'
import DeskSet from '../../assets/images/product-category/desk-set.jpg'
import KitchenSet from '../../assets/images/product-category/kitchen-set.png'
// import RakGantung from '../../assets/images/product-category/rak-gantung.jpg'
import Backdrop from '../../assets/images/product-category/backdrop.jpg'
import Bedroom from '../../assets/images/product-category/bedroom-set.jpg'

const Categories = [
  {
    id: 1,
    name: 'Lemari',
    picture: Cupboard,
    isCustomSize: true,
    isCustomDesign: true,
    isCustomMaterial: true,
  },
  {
    id: 2,
    name: 'Kitchen Set',
    picture: KitchenSet,
    isCustomSize: true,
    isCustomDesign: true,
    isCustomMaterial: true,
  },
  {
    id: 3,
    name: 'Bedroom Set',
    picture: Bedroom,
    isCustomSize: true,
    isCustomDesign: true,
    isCustomMaterial: true,
  },
  {
    id: 4,
    name: 'Meja',
    picture: DeskSet,
    isCustomSize: true,
    isCustomDesign: true,
    isCustomMaterial: true,
  },
  {
    id: 5,
    name: 'Backdrop',
    picture: Backdrop,
    isCustomSize: true,
    isCustomDesign: true,
    isCustomMaterial: true,
  },
  {
    id: 6,
    name: 'Furnitur Lainnya',
    picture: Custom,
    isCustomSize: true,
    isCustomDesign: true,
    isCustomMaterial: true,
  },
]

export {Categories}
