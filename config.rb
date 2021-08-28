###
# Compass
###

# Change Compass configuration
# compass_config do |config|
#   config.output_style = :compact
# end

###
# Page options, layouts, aliases and proxies
###

# Per-page layout changes:
#
# With no layout
# page "/path/to/file.html", :layout => false
#
# With alternative layout
# page "/path/to/file.html", :layout => :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", :locals => {
#  :which_fake_page => "Rendering a fake page with a local variable" }

###
# Helpers
###

# Automatic image dimensions on image_tag helper
activate :automatic_image_sizes

# Reload the browser automatically whenever files change
activate :livereload

# Full image URL
configure :development do
  set :protocol, "http://"
  set :host, "spending.jp"
  set :port, 80
end

#activate :deploy do |deploy|
#  deploy.method = :git
#  deploy.build_before = true
#end

#activate :google_analytics do |ga|
#  ga.tracking_id = false
#end

helpers do

  def host_with_port
    [config[:host], config[:optional_port]].compact.join(':')
  end

  def optional_port
    config[:port] unless config[:port].to_i == 80
  end
  
  def canonical_url(path = '')
    config[:protocol] + host_with_port + path
  end
  
  def image_url(source)
    config[:protocol] + host_with_port + image_path(source)
  end

end

I18n.enforce_available_locales = false

###
# Gem
###
require 'slim'

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  set :protocol, "http://"
  set :host, "spending.jp"
  set :port, 80
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_path, "/Content/images/"

  # Activate google-analytics extension
  # activate :google_analytics do |ga|
  #  ga.tracking_id = 'UA-42072521-1'
  # end
end
