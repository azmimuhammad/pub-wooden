import * as React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {
  Avatar,
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
} from '@mui/material'

import LogoIcon from '../../assets/images/logo-square.jpg'
import MenuIcon from '@mui/icons-material/Menu'

const pages = [
  {path: '/', name: 'Beranda'},
  {path: '/about', name: 'Tentang Kami'},
  {path: '/catalog', name: 'Katalog Produk'},
  {path: '/gallery', name: 'Galeri'},
]

const ResponsiveAppBar = () => {
  const navigate = useNavigate()
  const [anchorElNav, setAnchorElNav] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const onClickMenu = (path) => {
    handleCloseNavMenu()
    navigate(path)
  }

  return (
    <AppBar
      position="static"
      style={{backgroundColor: '#f7f0e6', color: '#9a6725'}}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Avatar
            src={LogoIcon}
            component={Link}
            to="/"
            sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}
          />
          <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: {xs: 'block', md: 'none'},
              }}
            >
              {pages.map((page, i) => (
                <MenuItem key={i} onClick={() => onClickMenu(page.path)}>
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Avatar
            src={LogoIcon}
            component={Link}
            to="/"
            sx={{display: {xs: 'flex', md: 'none'}, mr: 2}}
          />
          <Typography
            variant="h5"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 2,
              display: {xs: 'flex', md: 'none'},
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            PUB WOODEN
          </Typography>
          <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
            {pages.map((page, i) => (
              <Button
                key={i}
                onClick={() => onClickMenu(page.path)}
                sx={{
                  my: 2,
                  mx: 1,
                  color: '#9a6725',
                  display: 'block',
                  fontWeight: 'bold',
                }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default ResponsiveAppBar
