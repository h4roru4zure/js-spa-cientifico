# js-spa-cientifico

<!-- npm install @babel/core babel-loader html-webpack-plugin webpack webpack-dev-server --save-dev -->

<!-- adding the project to the github pages. -->

<!-- First, we'll add a repository key to our package.json. We're adding it under the version key but the order doesn't matter as long as it is in the top-most level of our package object, the same level as name and version. After we add that, let's set it equal to an object with a url key. Use the following code snippet as an example, replacing {REPONAME} with your repo and {USERNAME} with your GitHub username respectively. -->
<!-- ./package.json
{
 "name": "project name",
 "version": "1.0.0",
 "repository": {
   "url": "git+https://github.com/{USERNAME}/{REPONAME}.git"
 },
...
}
Next we'll add two new commands to our scripts object:

predeploy builds our site and bundles it in the dist folder.
deploy pushes the contents of that folder to a new commit on the gh-pages branch, creating that branch if it doesn't already exist.

./package.json
{
...
 "scripts": {
   "build": "webpack --mode=development",
   ...
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
 },
...
} -->

<!-- 
install package
$ npm install --save-dev gh-pages

then deploy the site
$ npm run deploy

> npm run build

> gh-pages -d dist

After we’ve successfully deployed our site, it will be hosted at a URL like this, where {USERNAME} is your github username and {REPONAME} is the name of your repository :

https://{USERNAME}.github.io/{REPONAME} -->