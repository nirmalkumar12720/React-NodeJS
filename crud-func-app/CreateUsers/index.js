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

  const Users = db.collection('users')

  try {
    const users = await Users.insert(user)
    connection.close()

    context.res = {
      status: 201,
      body: users
    }
  } catch (error) {
    context.res = {
      status: 500,
      body: {"message" :error.message, "error": error.toString()}
    }
  }
}