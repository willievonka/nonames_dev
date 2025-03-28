import Router from 'express'
import artistController from '../controller/artist.controller.js'

const router = new Router()

router.post('/artist', artistController.createArtist)
router.get('/artist', artistController.getArtists)
router.get('/artist/:id', artistController.getOneArtist)
router.put('/artist', artistController.updateArtist)
router.delete('/artist/:id', artistController.deleteArtist)

export default router