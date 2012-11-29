Node on Rails :)

i feel like node is ready to replace RoR
its perfectly positioned for state-of-the-art single-page-application (SPA) architecture.

here are the things to find equivalents for:

  x use express-coffee (connect + express(sinatra) + coffeescript)
  x use mincer + jade/handlebars + coffeescript/js + stylus/css + stylus-sprite
  x mingle ruby tools like: guard, foreman, mailcatcher
  x use mocha instead of jasmine

  abandon mysql? or mongoose lib for mongodb. persistence.js for back, activerecordjs.org for front.

  port my sass mixins over to stylus
  get npm test to run on git push and not allow a push until tests all pass green
  grunt to minify+digest+gzip mincer js and css
    use something like amazon cloudfront cdn or varnish to cache compiled .js, .css, and sprite images
  use coffee-resque instead of sidekiq
  use sock.js for websockets, not socket.io
  would be nice if mincer could do the jade > handlebars conversion
