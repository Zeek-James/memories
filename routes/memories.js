const express = require('express')
const { getMemories, createMemory, deleteMemory, updateMemory, likeMemory } = require('../controller/memories')

const router = express.Router()

router.route('/:id').delete(deleteMemory).patch(updateMemory).patch()
router.route('/:id/likeMemPost').patch(likeMemory)

router.route('/').get(getMemories).post(createMemory)



module.exports = router