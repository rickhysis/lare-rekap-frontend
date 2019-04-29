import { mount, route } from 'navi'

export default mount({
  '/': route({
    title: "Lare Rekap",
    getView: () => import('./product.js')
  })
})