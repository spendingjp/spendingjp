# Spending.jp Project Website

## Installation

### Requirements

* Ruby +1.9.3
* RubyGems
* Bundler

```bash
$ gem update --system
$ bundle install --path vendor/bundle
```

## Getting Started

### Running local server

```bash
$ bundle exec middleman server
```

Open [http://localhost:4567/](http://localhost:4567/) with your browser.

## Building for a production

```bash
$ bundle exec middleman build
```

## Deploying to your own GitHub pages

```bash
$ bundle exec middleman deploy
```

If you use a remote name, see https://github.com/tvaughan/middleman-deploy#git-eg-github-pages for details.
