module.exports = (app) ->
  app.get '/login', (request, response) ->
    ##{__dirname}/../views/login",
    response.render "#{__dirname}/../assets/javascripts/views/users/login.jst.jade",
      title: 'Login'
      stylesheet: 'login'
