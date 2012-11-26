module.exports = (app) ->
  app.get '/login', (request, response) ->
    response.render "#{__dirname}/../views/users/login",
      title: 'Login'
      stylesheet: 'login'
