import YouTubeIcon from '@mui/icons-material/YouTube'
import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import EmailIcon from '@mui/icons-material/Email'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'
import CallIcon from '@mui/icons-material/Call'

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

export {Contact}
