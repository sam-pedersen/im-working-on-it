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

router.post('/', async (req, res) => {
  try {
    const newHobby = req.body
    await db.createHobby(newHobby)
    res.sendStatus(201)
  } catch (error) {
    console.log(error)
    res.status(500).json({ message: 'Something went wrong' })
  }
})

router.patch('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const updatedHobby = req.body
    await db.updateHobby(updatedHobby, id)
    res.sendStatus(200)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})

router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const deleteHobbyById = req.body
    await db.deleteHobby(deleteHobbyById, id)
    res.sendStatus(200)
  } catch (error) {
    console.error(`database error: ${error}`)
    res.sendStatus(500)
  }
})
export default router
