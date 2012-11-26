module.exports = (app) ->
  app.get '/login', (request, response) ->
    response.render "#{__dirname}/views/login",
      title: 'Login'
      stylesheet: 'login'
