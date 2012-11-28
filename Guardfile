# A sample Guardfile
# More info at https://github.com/guard/guard#readme

require 'securerandom'

interactor :off
notification :notifysend, timeout: 1 # faster timeout on XFCE; otherwise they queue up and get backlogged forever
ignore! %r{^node_modules/}, %r{^.git/}, %r{^public/}, %r{^tmp/} # override the ignore dirs so vendor/ is not included by default

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }
#
ignore %r{/^app/views/layouts/}
guard 'shell' do
  #watch(/./) {|m|
  #watch(%r{^vendor/assets/.+?/(.+\.js)$}) do |m|
  #  `mkdir -p public/assets/#{File.dirname(m[1])}/`
  #  `cp #{m[0]} public/assets/#{m[1]}`
  #  #Notifier::notify "Copied #{m[0]} to public/assets/#{m[1]}."
  #  puts "Copied #{m[0]} to public/assets/#{m[1]}."
  #end

  # TODO: precompile handlebars templates
  watch(%r{^app/views/(.+\.jade)$}) do |m|
    tmp = "/tmp/#{SecureRandom.hex(13)}"
    `mkdir -p #{tmp}/`
    `node_modules/jade/bin/jade #{m[0]} -O #{tmp}/`
    basename = File.basename(m[0], '.jade')
    `mv #{tmp}/#{basename}.html #{tmp}/#{basename}`
    target = "app/assets/javascripts/views/#{File.dirname(m[1])}"
    `mkdir -p #{target}/`
    `node_modules/handlebars/bin/handlebars #{tmp}/#{basename} --output #{target}/#{basename}.js`
    `rm -rf #{tmp}/`
    puts "Copied #{m[0]} to #{target}/#{basename}.js."
  end

  # TODO: aggregate javascript
  # TODO: minify javascript
  # TODO: compile sass + css sprite images with compass
  # TODO: aggregate css and strip whitespace
  # TODO: gzip final files
end
