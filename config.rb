###
# Blog settings
###

# Time.zone = "UTC"

activate :blog do |blog|
  # This will add a prefix to all links, template references and source paths
  # blog.prefix = "blog"

  # blog.permalink = "{category}/{title}"
  blog.permalink = "{title}"
  # Matcher for blog source files
  blog.sources = "blog/{title}.html"
  # blog.taglink = "tags/{tag}.html"
  blog.layout = "story_layout"
  # blog.summary_separator = /(READMORE)/
  blog.summary_length = 250
  # blog.year_link = "{year}.html"
  # blog.month_link = "{year}/{month}.html"
  # blog.day_link = "{year}/{month}/{day}.html"
  # blog.default_extension = ".markdown"

  blog.tag_template = "tag.html"
  blog.calendar_template = "calendar.html"

  # Enable pagination
  # blog.paginate = true
  # blog.per_page = 10
  # blog.page_link = "page/{num}"
end

page "/feed.xml", layout: false

###
# Compass
###

# Turn this on if you want to make your url's prettier, without the .html
activate :directory_indexes

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
# page "/path/to/file.html", layout: false
#
# With alternative layout
# page "/path/to/file.html", layout: :otherlayout
#
# A path which all have the same layout
# with_layout :admin do
#   page "/admin/*"
# end

# Proxy pages (http://middlemanapp.com/basics/dynamic-pages/)
# proxy "/this-page-has-no-template.html", "/template-file.html", locals: {
#  which_fake_page: "Rendering a fake page with a local variable" }

###
# Helpers
###

# activate :syntax

###
# Markdown
###

# set :markdown_engine, :redcarpet
# set :markdown, :fenced_code_blocks => true, :smartypants => true
set :markdown_engine, :kramdown
set :markdown, :layout_engine => :erb,
               :tables => true,
               :autolink => true,
               :smartypants => true,
               :fenced_code_blocks => true

###
# Code highlighting
###

# activate :rouge_syntax
activate :syntax

# Automatic image dimensions on image_tag helper
# activate :automatic_image_sizes

# Reload the browser automatically whenever files change
activate :livereload

# Methods defined in the helpers block are available in templates # {:class => current.to_s}
helpers do
  def nav_active_blog(path)
    current = /^(.+?)\//.match(current_page.path.to_s)
    current = current.to_s
    if current_page.path == path
      {:class => "active"}
    elsif current == "blog/"
      {:class => "active"}
    else
      {}
    end
  end

  def nav_active(path)
    if current_page.path == path
      {:class => "active"}
    else
      {}
    end
  end
end
#   def some_helper
#     "Helping"
#   end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

activate :s3_sync do |s3_sync|
  s3_sync.delete                     = false # We delete stray files by default.
  s3_sync.after_build                = false # We do not chain after the build step by default.
  s3_sync.prefer_gzip                = true
  s3_sync.path_style                 = true
  s3_sync.reduced_redundancy_storage = false
  s3_sync.acl                        = 'public-read'
  s3_sync.encryption                 = false
  s3_sync.prefix                     = ''
  s3_sync.version_bucket             = false
  s3_sync.index_document             = 'index.html'
  s3_sync.error_document             = '404.html'
end

# activate gibberish

#  activate :gibberish do |gibberish|

    # gibberish.password = 'deepshahportfolioyo'
    # gibberish.encrypt '/cota-analytics/index.html'
    # gibberish.encrypt '/cota-pigments/index.html'
    # gibberish.encrypt '/cota-clinic/index.html'

#  end

# Build-specific configuration
# configure :build do
  # For example, change the Compass output style for deployment
  # activate :minify_css

  # Minify Javascript on build
  # activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  # activate :relative_assets

  # Or use a different image path
  # set :http_prefix, "/Content/images/"
# end
