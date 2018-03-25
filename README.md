# frontend
Course planner with professor rating for NYU students

![Slice](https://img.shields.io/badge/Hexo%20Theme-Slice-ff4500.svg?style=flat-square)
![NHibiki](https://img.shields.io/badge/Author-NHibiki-40aa00.svg?style=flat-square)
![Code](https://img.shields.io/badge/Code%20With-<3-ff0000.svg?style=flat-square)

[Demo](https://mirror.yuuno.cc) | [Customize](https://github.com/NHibiki/hexo-theme-slice#customize)

## Installation

### Download

```bash
  git clone https://github.com/NHibiki/hexo-theme-slice.git themes/slice
```

Or, download the zip package through [GitHub](https://github.com/NHibiki/hexo-theme-slice/archive/master.zip).

Then unzip the file to folder `themes/slice`

### Config

You need to install these plugins to enable the theme:

 - hexo-generator-json-content
 - hexo-generator-feed

After that, you need to add some configs to Hexo Config.

```yml
theme: slice # To Enable The Theme.

jsonContent:
  meta: true
  dateFormat: YYYY-MM-DD HH:mm:ss
  posts:
    title: true
    slug: true
    date: true
    updated: true
    comments: true
    path: true
    link: true
    permalink: true
    excerpt: true
    keywords: true
    text: true
    raw: false
    content: true
    categories: true
    tags: true
```

<span style="color:red">Make Sure "content" and "text" are set to true if you don't want any bother.</span>

### Customize

Then, it is time to work on the theme `_config.yml` file.

First, rename `_config.yml.edit` which is a default config to `_config.yml`

```yml
menu:
  Home: /#/home
  About: /#/article/about
  Tag: /#/tag
  Category: /#/category
  Link: /#/link
  NHibiki: https://yuuno.cc
  # Menu Bar

music:
  "The Song's Name":
    subtitle: Infomation you want to add to the song
    src: url to the song
  "The 2nd Song's Name":
    subtitle: Infomation you want to add to the song
    src: url to the song
  # Music List

comment:
  disqus: # Disqus
  github: # Gitalk
    owner: 
    repo: 
    id: 
    secret: 
  crisp: # Crisp ID, You can get it through the embed code after variable "window.CRISP_WEBSITE_ID"
# Comment System
# The Crisp id is like "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"

link:
  YuunoHibiki: https://yuuno.cc
  Slice: https://nhibiki.github.io/slice
  # Links You Want To Add

license: Creative Commons Attribution-NonCommercial 4.0 International
  # You can change the site license, default is NC CC 4.0.

```

## License

GNU License 3.0
