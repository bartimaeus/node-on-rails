# A sample Guardfile
# More info at https://github.com/guard/guard#readme

#interactor :off # messes with interactive debug
notification :notifysend, timeout: 1 # faster timeout on XFCE; otherwise they queue up and get backlogged forever
ignore! %r{^node_modules/}, %r{^.git/}, %r{^public/}, %r{^tmp/} # override the ignore dirs so vendor/ is not included by default

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }
#
guard 'shell' do
  #watch(/./) {|m|
  watch(%r{^vendor/assets/.+?/(.+\.js)$}) {|m|
    `mkdir -p public/assets/#{File.dirname(m[1])}`
    `cp #{m[0]} public/assets/#{m[1]}`
    #Notifier::notify "Copied #{m[0]} to public/assets/#{m[1]}."
    puts "Copied #{m[0]} to public/assets/#{m[1]}."
  }

  # TODO: precompile handlebars templates
  # TODO: aggregate javascript
  # TODO: minify javascript
  # TODO: compile sass + css sprite images with compass
  # TODO: aggregate css and strip whitespace
  # TODO: gzip final files
end
