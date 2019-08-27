import { Router } from 'express'
import controller from './item.controllers'

const router = Router()

// /api/item
router
  .route('/')
  .get(controller)
  .post(controller)

// /api/list/:id
router
  .route('/:id')
  .get(controller)
  .put(controller)
  .delete(controller)

export default router
