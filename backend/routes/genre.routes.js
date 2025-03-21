import Router from 'express'
import genreController from '../controller/genre.controller.js'

const router = new Router()

router.post('/genre', genreController.createGenre)
router.get('/genre', genreController.getGenres)
router.get('/genre/:id', genreController.getOneGenre)
router.put('/genre/', genreController.updateGenre)
router.delete('/genre/:id', genreController.deleteGenre)

export default router