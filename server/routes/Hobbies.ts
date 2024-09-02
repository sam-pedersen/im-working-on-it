import { Router } from 'express'

import * as db from '../db/Hobbies.ts'

const router = Router()

router.get('/', async (req, res) => {
  try {
    const Hobbies = await db.getAllHobbies()

    res.json({ Hobbies: Hobbies.map((Hobbies) => Hobbies) })
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const task = await db.getHobbyById(id)
    res.json(task)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

// router.post('/:id', async (req, res) => {
//   try {
//     const
//   } catch (error) {
//     console.log(error)
//     res.status(500).json({ message: 'Something went wrong' })
//   }
// })
export default router
