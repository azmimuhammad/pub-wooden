import {Categories} from './categories'
import {KitchensetProduct} from './product/kitchenSet'
import {CupboardProduct} from './product/cupboard'
import {BedroomProduct} from './product/bedroom'
import {TableProduct} from './product/table'
import {BackdropProduct} from './product/backdrop'
import {OtherProduct} from './product/other'
import {Contact} from './contact'

const allProduct = OtherProduct.concat(
  BackdropProduct.concat(
    TableProduct.concat(
      BedroomProduct.concat(KitchensetProduct.concat(CupboardProduct))
    )
  )
)

const Highlight = [
  KitchensetProduct[0],
  TableProduct[0],
  CupboardProduct[0],
  TableProduct[0],
  BackdropProduct[0],
]
const Galery = allProduct.sort(() => Math.random() - 0.5)

export {Categories, Galery, Highlight, Contact}
