import Router from 'express'
import placeController from '../controller/place.controller.js'

const router = new Router()

router.post('/place', placeController.createPlace)
router.get('/place', placeController.getPlaces)
router.get('/place/:id', placeController.getOnePlace)
router.put('/place/', placeController.updatePlace)
router.delete('/place/:id', placeController.deletePlace)

export default router