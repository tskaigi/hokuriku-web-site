# TSKaigi Hokuriku 2025 Web Site

## Setup

パッケージマネージャーには [`pnpm`](https://pnpm.io/ja) を使用しています。

```bash
# Clone repository
git clone git@github.com:tskaigi/hokuriku-web-site.git

cd hokuriku-web-site

# Install pnpm
npm install -g pnpm

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

## Format

フォマッターには [`Prettier`](https://prettier.io) を使用しています。

```bash
# Check formatting
pnpm prettier . --check

# Format
pnpm run format
```

Pull Request は各自フォーマットを行ってから作成するようにしてください。

## Pull Request

Pull Request を作成すると、自動的に Firebase Hosting のプレビューURLが発行されます。

レビュー担当者は、このプレビューを参考にレビューを行なってください。

(ここにPR作成時の画像を貼る)

## Release

`main` ブランチに Pull Request がマージされると、自動的に本番リリース（GitHub Pages へのデプロイ）が行われます。
