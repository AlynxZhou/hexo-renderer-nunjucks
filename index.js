/* global hexo */
"use strict";

const nunjucks = require("nunjucks");
const path = require("path");

function njksCompile(data) {
	const templateDir = path.dirname(data["path"]);
	const config = Object.assign({"autoescape": false}, hexo.config.nunjucks);
	const env = nunjucks.configure(templateDir, config);
	return nunjucks.compile(data["text"], env, data["path"]);
}

function njksRenderer(data, locals, callback) {
	return njksCompile(data).render(locals, callback);
}

// Return a compiled renderer.
njksRenderer.compile = function (data) {
	// Need a closure to keep the compiled template.
	return function (locals, callback) {
		return njksCompile(data).render(locals, callback);
	}
}

hexo.extend.renderer.register("njk", "html", njksRenderer);
hexo.extend.renderer.register("nunjucks", "html", njksRenderer);
hexo.extend.renderer.register("j2", "html", njksRenderer);
