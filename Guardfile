# A sample Guardfile
# More info at https://github.com/guard/guard#readme

#interactor :off # messes with interactive debug
notification :notifysend, timeout: 1 # faster timeout on XFCE; otherwise they queue up and get backlogged forever
ignore! %r{^node_modules/}, %r{^.git/}, %r{^tmp/} # override the ignore dirs so vendor/ is not included by default

# Add files and commands to this file, like the example:
#   watch(%r{file/path}) { `command(s)` }
#
guard 'shell' do
  #watch(/./) {|m|
  watch(%r{^vendor/assets/javascripts/.+\.js$}) {|m|
    Notifier::notify "Copied #{m[0]} to public/assets/."
    `cp #{m[0]} public/assets/`
  }
end
