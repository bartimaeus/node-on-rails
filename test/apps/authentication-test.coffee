assert = require 'assert'
request = require 'request'
app = require '../../server'

describe 'authentication', ->
  describe 'GET /login', ->
    body = null
    before (done) ->
      debugger
      options =
        uri: "http://localhost:#{app.settings.port}/login"
      request options, (err, response, _body) ->
        body = _body
        done()
    it 'has user field', ->
      assert.ok /user/.test body
