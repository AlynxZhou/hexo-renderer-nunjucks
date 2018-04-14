hexo-renderer-njucks
==================

Yet another Nunjucks renderer for Hexo. Async, alive and can be actively updated.

# WHY?

Both `hexo-renderer-nunjucks` and `hexo-renderer-njk` and `hexo-renderer-njks` are using Nunjucks version 2, and seems their author won't update them to Nunjucks 3. They take the best name in npm, but leave code unmaintained! So I write my own hexo renderer to render my theme [ARIA](https://github.com/AlynxZhou/hexo-theme-aria).

# READ HERE BEFORE USING IT OR CREATING YOUR OWN THEME WITH NUNJUCKS：

By default it set `autoescape` to `true` because Hexo renders markdown to HTML, Nunjucks just place strings.

If you want to change Nunjucks config (for doc looks [here](https://mozilla.github.io/Nunjucks/cn/api.html#configure)), just write them in Hexo's site config `_config.yml` like this:

```yaml
nunjucks:
  watch: true
  # and other config...
```

If you write a Hexo theme with Nunjucks with me, I have some useful tips for you:

  1. Some of Hexo's varibles are not the same type as they looks like, for example, in index template, you may think `page.posts` is an Array, but it's an Object (read [here](https://hexo.io/docs/variables.html#Page-Variables)), which you cannot iterate it with `for in`, I don't know why Hexo designs it so strange (more strange, some data structure of Hexo is "Array of ???", WHAT IS `???`?). OK, if you need an Array, use `toArray()` method like `page.posts.toArray()`, which is mentioned by @tommy351 (author of Hexo) [here](https://github.com/hexojs/hexo/issues/232#issuecomment-42256839).

  2. `hexo-renderer-Nunjucks` and `hexo-renderer-njk` are using Nunjucks version 2, and some Nunjucks' keywords like `===` and `!==` are not supported in version 2, that's why I make this plugin.

# LICENSE:

Apache-2.0
