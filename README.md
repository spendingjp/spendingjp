# Spending.jp Project Website

## Installation

### Requirements

* Ruby +1.9.3
* RubyGems
* Bundler

```bash
$ 
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

### Only building

```bash
$ bundle exec middleman build
```


## TODO

* 更新情報を Spending.jp ヒストリーの Spreadsheet から自動更新する。
* Spending.jp ヒストリーの Spreadsheet と Spending.jp Satellite Site List の Spreadsheet を統合する。
* 「KNOW」のセクションに、サテライトサイトの選択プルダウンを追加する。
* favicon を追加する。