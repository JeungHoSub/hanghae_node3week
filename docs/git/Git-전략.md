[< ๋ค๋ก๊ฐ๊ธฐ](./README.md)

## ๐ Git ์ ๋ต

> ์์ฑ์ผ : `2022-08-06`

1. `local` submain ์ต์ ํ : `origin` submain to `local` submain
2. `local` dev/** ์ต์ ํ : `local` submain to `local` dev/**
3. `origin` dev/** ์ฝ๋ ํธ์ฌ : `local` dev/** to `origin` dev/**
4. `origin` submain ์ต์ ํ : `origin` dev/** to `origin` submian

<p style="align: center;"><img src="../img/git-branch.png" style="width: 600px;"></p>

<br><hr><br>

#### 1. `local` submain ์ต์ ํ

```cmd
git switch submain
git fetch
git pull origin submain
```

<br><hr><br>

#### 2. `local` dev/** ์ต์ ํ

```cmd
git switch dev/**
git merge submain
```

<br><hr><br>

#### 3. `origin` dev/** ์ฝ๋ ํธ์ฌ

```cmd
git status
git add file-name
git commit -m 'commit-title' -m 'commit-description'
git push origin dev/**
```

<br><hr><br>

#### 4. `origin` submain ์ต์ ํ

`๋ธ๋ผ์ฐ์ `์์ Pull Request ๋ฅผ ์์ฑํ๊ณ  dev/** ์์ submain ์ผ๋ก ๋ณด๋ด์ฃผ์ธ์.

๊ทธ๋ฆฌ๊ณ  ํ์์๊ฒ ๊ณต์ ํด์ฃผ์ธ์.ใด