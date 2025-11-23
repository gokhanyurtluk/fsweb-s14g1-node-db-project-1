const { checkAccountId, checkAccountPayload, checkAccountNameUnique } = require('./accounts-middleware');
const { getAll, getById, create, updateById, deleteById } = require('./accounts-model');

const router = require('express').Router()

router.get('/', async (req, res, next) => {
  // KODLAR BURAYA
  try {
    const accounts = await getAll();
    res.json(accounts);
  } catch(error) {
    next(error) 
  }
})

router.get('/:id', checkAccountId, async (req, res, next) => {
  // KODLAR BURAYA
  try {
    const account = await getById();
    res.json(account);
  } catch(error) {
    next(error)
  }
})

router.post('/', checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  // KODLAR BURAYA
  try {
    const account = await create(req.body);
    res.json(account);
  } catch(error) {
    next(error)
  }
}) 

router.put('/:id', checkAccountId, checkAccountPayload, checkAccountNameUnique, async (req, res, next) => {
  // KODLAR BURAYA
  try {
    const account = await updateById(req.params.id, req.body);
    res.status(200).json(account);
  } catch(error) {
    next(error)
  }
});

router.delete('/:id', checkAccountId, (req, res, next) => {
  // KODLAR BURAYA
  try {
    const account = deleteById(req.params.id);
    res.json(account);
  } catch(error) {
    next(error)
  } 
})

router.use((err, req, res, next) => { // eslint-disable-line
  // KODLAR BURAYA
  return res.status(err.status || 500).json({message: err.message || "An error occured while processing your request"});
})

module.exports = router;
