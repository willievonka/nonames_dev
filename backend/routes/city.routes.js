import Router from 'express'
import cityController from '../controller/city.controller.js'

const router = new Router()

router.post('/city', cityController.createCity)
router.get('/city', cityController.getCities)
router.get('/city/:id', cityController.getOneCity)
router.put('/city/', cityController.updateCity)
router.delete('/city/:id', cityController.deleteCity)

export default router