const createMongoClient = require('../shared/mongo');

module.exports = async function (context, req) {
  const user= req.body || {}

  if (user) {
    context.res = {
      status: 400,
      body: 'user data is required! '
    }
  }

  const { db, connection } = await createMongoClient()

  const users = db.collection('users')

  try {
    const users = await Dishes.insert(user)
    connection.close()

    context.res = {
      status: 201,
      body: users.ops[0]
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: 'Error creating a new user'
    }
  }
}