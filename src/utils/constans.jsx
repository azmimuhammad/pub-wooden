import KitchenSetImage from '../assets/images/top-product/kitchen-set.jpg'
import CupBoardImage from '../assets/images/top-product/lemari-pakaian.jpg'
import MirrorImage from '../assets/images/top-product/cermin.jpg'
import TableImage from '../assets/images/top-product/meja.jpg'
import HangerImage from '../assets/images/top-product/lemari-gantung.jpg'

import Cupboard from '../assets/images/product-category/cupboard.png'
import Custom from '../assets/images/product-category/custom.png'
import DeskSet from '../assets/images/product-category/desk-set.jpg'
import KitchenSet from '../assets/images/product-category/kitchen-set.png'
import RakGantung from '../assets/images/product-category/rak-gantung.jpg'
import Backdrop from '../assets/images/product-category/backdrop.jpg'

import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import CallIcon from '@mui/icons-material/Call'

const productList = [
  {
    id: '0001',
    name: 'Kitchen Set dan Lemari Gantung',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: KitchenSetImage,
    feature: [
      'Lemari Gantung 2 Pintu',
      'Lemari Gantung 4 Pintu',
      'Lemari Berdiri 2 Pintu',
      'Laci',
      'Dll',
    ],
    material: ['kayu', 'baud', 'lem'],
    sold: 40,
    category: '002',
    pictureDetails: [KitchenSetImage, CupBoardImage, HangerImage, MirrorImage],
  },
  {
    id: '0002',
    picture: CupBoardImage,
    name: 'Lemari Pakaian',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    feature: ['Cermin', '1 Laci', '1 Tempat untuk gantungan'],
    material: ['kayu', 'baud', 'lem'],
    sold: 33,
    category: '001',
  },
  {
    id: '0003',
    picture: HangerImage,
    name: 'Hiasan Dinding Persegi Panjang',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    feature: ['Persegi panjang beberapa ukuran', 'Lampu backlit LED'],
    material: ['kayu', 'baud', 'lem'],
    sold: 32,
    category: '003',
  },
  {
    id: '0004',
    picture: TableImage,
    name: 'Meja Komputer',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    feature: ['Persegi panjang beberapa ukuran', 'Lampu backlit LED', 'Laci'],
    material: ['kayu', 'baud', 'lem'],
    sold: 31,
    category: '004',
  },
  {
    id: '0005',
    picture: MirrorImage,
    name: 'Cermin berdiri',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    feature: ['Cermin'],
    material: ['kayu', 'baud', 'lem'],
    sold: 28,
    category: '006',
  },
  {
    id: '0006',
    name: 'Kitchen Set dan Lemari Gantung',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`,
    picture: KitchenSetImage,
    feature: [
      'Lemari Gantung 2 Pintu',
      'Lemari Gantung 4 Pintu',
      'Lemari Berdiri 2 Pintu',
      'Laci',
      'Dll',
    ],
    material: ['kayu', 'baud', 'lem'],
    sold: 10,
    category: '002',
  },
  {
    id: '0007',
    picture: CupBoardImage,
    name: 'Lemari Pakaian',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    feature: ['Cermin', '1 Laci', '1 Tempat untuk gantungan'],
    material: ['kayu', 'baud', 'lem'],
    sold: 11,
    category: '001',
  },
  {
    id: '0008',
    picture: HangerImage,
    name: 'Hiasan Dinding Persegi Panjang',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    feature: ['Persegi panjang beberapa ukuran', 'Lampu backlit LED'],
    material: ['kayu', 'baud', 'lem'],
    sold: 12,
    category: '003',
  },
  {
    id: '0009',
    picture: TableImage,
    name: 'Meja Komputer',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    feature: ['Persegi panjang beberapa ukuran', 'Lampu backlit LED', 'Laci'],
    material: ['kayu', 'baud', 'lem'],
    sold: 2,
    category: '004',
  },
  {
    id: '0010',
    picture: MirrorImage,
    name: 'Cermin berdiri',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`,
    feature: ['Cermin'],
    material: ['kayu', 'baud', 'lem'],
    sold: 2,
    category: '006',
  },
]

const Categories = [
  {
    id: '001',
    name: 'Lemari Pakaian',
    picture: Cupboard,
    isCustomSize: true,
    isCustomDesign: true,
    isCustomMaterial: true,
  },
  {
    id: '002',
    name: 'Kitchen Set',
    picture: KitchenSet,
    isCustomSize: true,
    isCustomDesign: true,
    isCustomMaterial: false,
  },
  {
    id: '003',
    name: 'Rak Dinding',
    picture: RakGantung,
    isCustomSize: true,
    isCustomDesign: true,
    isCustomMaterial: true,
  },
  {
    id: '004',
    name: 'Meja',
    picture: DeskSet,
    isCustomSize: true,
    isCustomDesign: true,
    isCustomMaterial: true,
  },
  {
    id: '005',
    name: 'Backdrop',
    picture: Backdrop,
    isCustomSize: true,
    isCustomDesign: true,
    isCustomMaterial: true,
  },
  {
    id: '006',
    name: 'Furnitur Lainnya',
    picture: Custom,
    isCustomSize: true,
    isCustomDesign: true,
    isCustomMaterial: true,
  },
]

const Contact = [
  {
    type: 'facebook',
    link: 'https://www.facebook.com/mmd.azmi',
    icon: <FacebookIcon sx={{color: '#4267B2'}} />,
    name: 'Azmi Muhammad',
  },
  {
    type: 'instagram',
    link: 'https://www.instagram.com/mmd_azmi/',
    icon: <InstagramIcon sx={{color: '#C13584'}} />,
    name: 'Azmi Muhammad',
  },
  {
    type: 'email',
    link: 'mailto:azmim@gmail.com',
    icon: <EmailIcon sx={{color: '#BB001B'}} />,
    name: 'Azmi Muhammad',
  },
  {
    type: 'whatsapp',
    link: 'https://bit.ly/ChatAzmi',
    icon: <WhatsAppIcon sx={{color: '##5BF377'}} />,
    name: 'Azmi Muhammad',
  },
  {
    type: 'phone',
    link: 'https://bit.ly/ChatAzmi',
    icon: <CallIcon sx={{color: '#282828'}} />,
    name: 'Azmi Muhammad',
  },
  {
    type: 'youtube',
    link: 'https://www.youtube.com/',
    icon: <YouTubeIcon sx={{color: '#FF0000'}} />,
    name: 'Azmi Muhammad',
  },
]

export {productList, Categories, Contact}
