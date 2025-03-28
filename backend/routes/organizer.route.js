import Router from 'express'
import organizerController from '../controller/organizer.controller.js'

const router = new Router()

router.post('/organizer', organizerController.createOrganizer)
router.get('/organizer', organizerController.getOrganizers)
router.get('/organizer/:id', organizerController.getOneOrganizer)
router.put('/organizer/', organizerController.updateOrganizer)
router.delete('/organizer/:id', organizerController.deleteOrganizer)

export default router