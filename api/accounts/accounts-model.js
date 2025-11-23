const db = require('../data/db-config');

const getAll = () => {
  // KODLAR BURAYA
  return db('accounts').select('*');
}

const getById = accountId => {
  // KODLAR BURAYA
  return db('accounts').where('id', accountId).first();
}

const create = account => {
  // KODLAR BURAYA
  return db('accounts').insert(account).then(ids => {
    return getById(ids[0])
  })
  };

const updateById = (id, account) => {
  // KODLAR BURAYA
  return db('accounts').where('id', id).update(account).then(() => {
    return getById(id)
  });
}

const deleteById = id => {
  // KODLAR BURAYA
  return getById(id).then(account => {
    return db('accounts').where('id', id).del().then(()=> {
      return account;
    });
  })
}

const getByName = name => {
  return db('accounts').where('name', name).first();
}

module.exports = { 
  getAll,
  getById,
  create,
  updateById,
  deleteById,
  getByName
}
