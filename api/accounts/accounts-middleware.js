const { getByName, getById } = require("./accounts-model");

exports.checkAccountPayload = (req, res, next) => {
  // KODLAR BURAYA
  // Not: Validasyon için Yup(şu an yüklü değil!) kullanabilirsiniz veya kendiniz manuel yazabilirsiniz.
  try { 
    const {name, budget} = req.body;
    if(!name || budget === undefined){
      return res.status(400).json({message : "name and budget are required"});
    }
    if(name.trim().length < 3 || name.trim().length > 100){
      return res.status(400).json({message: "name of account must between 3 and 100"});
    }
    if(budget === null || isNaN(budget) || budget === ''){
      return res.status(400).json({message: "budget of account must be a number"});
    }
    if(budget < 0 || budget > 1000000){
      return res.status(400).json({message: "budget of account is too large or too small"});
    }
    req.body.name = name.trim();
    req.body.budget = Number(budget);
    next();
  } catch(error) {
    next(error)
}
}

exports.checkAccountNameUnique = async (req, res, next) => {
  // KODLAR BURAYA
  try {
    const {name} = req.body;
    const account = await getByName(name);
    if(account) {
      return res.status(400).json({message: "that name is taken"})
    }
    next();
  } catch(error) {
    next(error)
  }
}

exports.checkAccountId = async (req, res, next) => {
  // KODLAR BURAYA
  try {
    const {id} = req.params;
    const account = await getById(id);
    if(!account) {
      return res.status(404).json({message: "account not found"})
    }
    next();
  } catch(error) {
    next(error)
}
}