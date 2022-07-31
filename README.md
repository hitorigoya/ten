# 天 Hugo theme

Blog 用のシンプルな Hugo テーマ

<br/>

| 機能                | 実装 |
| :------------------ | ---: |
| ソーシャルアイコン  |    ✔ |
| Google Analytics v4 |    ✔ |
| Open Graph          |    ✔ |
| Twitter Cards       |    ✔ |
| サムネイル          |    ❌ |
| コメント            |    ❌ |
| 検索                |    ❌ |

<br/>

## Install
```
git submodule add https://github.com/hitorigoya/ten.git themes/ten
git submodule update --init --recursive
```

config.yaml
```yaml
theme: "ten"
```

<br/>

## Update
```
git submodule update --remote --merge
```

<br/>

## Config
config.yaml または config.toml を編集してサイトの設定を変更できます。

<br/>

### 推奨設定
```yaml
hasCJKLanguage: true
```
デフォルトではテキストを空白文字で分割する事によって単語数をカウントしています。
`hasCJKLanguage: true` に設定すると日本語が正しくカウントされるようになります。
- 抜粋の文字数
- RSS, metaタグの description


などに影響があります。

<br/>

### 抜粋の文字数
```yaml
summaryLength: 150
```

<br/>

### メニュー
```yaml
menu:
  main:
    - identifier: posts
      name: Posts
      url: /posts/
      weight: 5
    - identifier: tags
      name: Tags
      url: /tags/
      weight: 10
  footer:
    - identifier: privacy
      name: プライバシー
      url: /privacy/
      weight: 5
    - identifier: contact
      name: お問い合わせ
      url: /contact/
      weight: 10
```

<br/>

### Logo と favicon の設定
staticフォルダに画像ファイルを置いて名前を指定します。
logo を設定するとタイトルの代わりにロゴ画像が表示されます。
```yaml
params:
  logo: "logo.png"
  favicon: "favicon.png"
```

<br/>

### ソーシャルアイコン
```yaml
params:
  socialIcons:
    - name: "github"
      url: "https://github.com/"
    - name: "twitter"
      url: "https://twitter.com"
    - name: "youtube"
      url: "https://youtube.com"
    - name: "instagram"
      url: "https://instagram.com/"
    - name: "twitch"
      url: "https://twitch.tv/"
    - name: "tiktok"
      url: "https://tiktok.com/"
```

<br/>

### テーマカラー
```yaml
params:
  themeColor: "dark"
```

<br/>

### コードハイライト
Hugo デフォルトの Chroma を使用しています。
使用できるスタイルは[Chroma Style Gallery](https://xyproto.github.io/splash/docs/all.html)をご覧下さい。
```yaml
markup:
  highlight:
    style: dracula
```
`noClasses: false` に設定するとテーマ固有のハイライトに設定されます。
```yaml
markup:
  highlight:
    noClasses: false
```

<br/>

### NotoSansJPフォントを無効にする
デフォルトで NotoSansJP を使用しています。
```yaml
params:
  disableNotoSansJP: true
```
`disableNotoSansJP: true` に設定すると無効にできます。

<br/>

### Google Analytics
```yaml
googleAnalytics: G-XXXXXXX
```

<br/>

### config.yaml の例
```yaml
baseURL: "https://example.com/"
title: "myBlog"
theme: "ten"
paginate: 8
hasCJKLanguage: true
summaryLength: 150

menu:
  main:
    - identifier: posts
      name: Posts
      url: /posts/
      weight: 5
    - identifier: tags
      name: Tags
      url: /tags/
      weight: 10
  footer:
    - identifier: privacy
      name: プライバシー
      url: /privacy/
      weight: 5
    - identifier: contact
      name: お問い合わせ
      url: /contact/
      weight: 10
params:
  socialIcons:
    - name: "github"
      url: "https://github.com/"
    - name: "twitter"
      url: "https://twitter.com"
    - name: "youtube"
      url: "https://youtube.com"
markup:
  highlight:
    style: dracula
```