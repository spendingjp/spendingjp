# Spending.jp Project Website

## インストール

### 必要なもの

* Ruby 1.9.3 以上
* RubyGems
* Bundler

```bash
$ git clone git@github.com:spendingjp/spendingjp.git
$ cd spendingjp
$ gem update --system
$ bundle install --path vendor/bundle
```

## 新しく立ち上がったサイトを反映するには

まずは、`git pull origin master` でローカルリポジトリを最新化してください。

### 地図への反映

[Spending.jp ヒストリー](https://docs.google.com/spreadsheet/ccc?key=0AnJGwhMm-ribdEJ6V25HRTV2azVRNkpjTTJSQ3k3Nnc&usp=sharing) に行を追加します。`Tags` は `launch`、`Location` は [Geocoding](http://www.geocoding.jp/) などで緯度経度を調べて入力します。公開している CSVファイルと Excelファイルも、このスプレッドシートから出力されるようになっています。

### Webページの「更新情報」の修正

`source/index.html.slim` の先頭の方に Ruby の配列とハッシュで定義してあるので、古いものは削除しつつ、新しいものを追加してください。

### ローカル環境で確認

`bundle exec middleman server` を実行すると、ローカルのWebサーバーが起動します。

```bash
$ bundle exec middleman server
== The Middleman is loading
== LiveReload is waiting for a browser to connect
== The Middleman is standing watch at http://0.0.0.0:4567
== Inspect your site configuration at http://0.0.0.0:4567/__middleman/
```

ブラウザで [http://localhost:4567/](http://localhost:4567/) を開くとプレビューが見られるので、修正内容を確認して下さい。

### commit & push

問題がなければ、ローカルの master リポジトリに commit して、GitHub 側に push してください。

```bash
$ git add (編集したファイル)
$ git commit -m '（コミットメッセージ）'
$ git push origin master
```

### 本番環境に反映

最後に次のコマンドを実行して、http://spending.jp に反映します。

```bash
$ bundle exec middleman deploy
```

実行すると、`build/` 以下に静的ファイルが生成され、さらに GitHub の gh-pages リポジトリに push されます。これで http://spending.jp が更新されます。
