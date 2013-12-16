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

## 新しくサイトが立ち上がったら

### 地図への反映

[Spending.jp ヒストリー](https://docs.google.com/spreadsheet/ccc?key=0AnJGwhMm-ribdEJ6V25HRTV2azVRNkpjTTJSQ3k3Nnc&usp=sharing) に行を追加します。`Tags` は `launch`、`Location` は [Geocoding](http://www.geocoding.jp/) などで緯度経度を調べて入力します。

### CSVファイル、Excelファイルへの反映
[Spending.jp Satellite Site List](https://docs.google.com/spreadsheet/ccc?key=0ApLxfVa3-bUGdDk2YWdnakNOQ3RJWmtKbzAzaG05MEE&usp=sharing) にURLを追記してください。

### Webページの「更新情報」の修正

`source/index.html.slim` の先頭の方に Ruby の配列とハッシュで定義してあるので、古いものは削除しつつ、新しいものを追加してください。
