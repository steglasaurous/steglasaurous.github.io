# Setup

* In Ubuntu, make sure ruby stuff is installed: `sudo apt install ruby-gems ruby-dev`
* Setup gems by running `bundle install`.  Might need sudo for it, not sure.

# Usage

* Fire up a jekyll dev server: `bundle exec jekyll serve --host=10.0.0.79 --livereload`
* To do a build, run `bundle exec jekyll build`.  The output will be in the `_site` folder.  Copy its contents to the root of steglasaurous.github.io.
* Images live in the assets folder in the root of the repo.

