const router = require('express').Router();
const { getAllThoughts,
    createThought,
    getThoughtById,
    updateThought,
    deleteThought,
    createReaction,
    deleteReaction } = require('../../controllers/thought-controller');

// routes at /api/thoughts
router
    .route('/')
    .get(getAllThoughts)
    .post(createThought);

// routes at /api/thoughts/:id
router
    .route('/:id')
    .get(getThoughtById)
    .put(updateThought)
    .delete(deleteThought);

// routes at /api/thoughts/:thoughtId/reactions
router
    .route('/:thoughtId/reactions')
    .post(createReaction);

// routes at /api/thoughts/:thoughtId/reactions/:reactionId
router
    .route('/:thoughtId/reactions/:reactionId')
    .delete(deleteReaction);

module.exports = router;