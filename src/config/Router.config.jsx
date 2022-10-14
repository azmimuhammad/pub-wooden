import HomePage from '../pages/home'
import GaleryPage from '../pages/galery'
import CatalogPage from '../pages/catalog'

const RouterConfig = [
  {path: '/', component: <HomePage />},
  {path: '/about', component: <div>About</div>},
  {path: '/catalog', component: <CatalogPage />},
  {path: '/gallery', component: <GaleryPage />},
]

export default RouterConfig
