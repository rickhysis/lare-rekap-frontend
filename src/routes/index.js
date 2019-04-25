import { mount, route } from 'navi'

export default mount({
  '/': route({
    title: "React Site",
    getView: () => import('./product.js')
  })
})