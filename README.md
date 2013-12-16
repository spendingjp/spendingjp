# Spending.jp Project Website

## Installation

### Requirements

* Ruby +1.9.3
* RubyGems
* Bundler

```bash
$ git clone git@github.com:spendingjp/spendingjp.git
$ cd spendingjp
$ gem update --system
$ bundle install --path vendor/bundle
```

## Getting Started

### Running local server

```bash
$ bundle exec middleman server
```

Open [http://localhost:4567/](http://localhost:4567/) with your browser. The browser will be reloaded automatically whenever files change.

## Building and deploying to your own GitHub pages

```bash
$ bundle exec middleman deploy
```

The build task runs automatically before deploying.

### Only building

```bash
$ bundle exec middleman build
```
