# Code Coverage #

## Day1 

* Download and install Node (https://nodejs.org/en/)
	* npm (Installed with node)
	* npm -v
* Create a new project with npm
	* npm init
		* <b>package.json</b> file is created by npm
* Download a dependency and append in package.json
	* npm install name --save
	* npm i name -S
* Read <i>package.json</i> and install all the dependencies saved in package.json
	* npm install
	* npm i
* Set Npm to work with proxy
	* npm config set proxy http://proxy.company.com:8080
	* npm config set https-proxy https://proxy.company.com:8080
	* npm config set proxy http://username:password@proxy.company.com:8080
	* npm config set https-proxy https://username:password@proxy.company.com:8080
* Unset npm proxy settings
	* npm config delete http-proxy
	* npm config delete https-proxy
	* npm config rm proxy
	* npm config rm https-proxy
	* set HTTP_PROXY = null
	* set HTTPS_PROXY = null
* IDE
	compiler, debugger, text editor	
	- WebStorm
	- Brackets
	- Visual Studio Code (We are using in this session)
* MongoDB
	* database	
		* server (js)
		* Client (js)
		* DB (js)
* Browser
	* Chrome
	* Opera
	* Firefox
* ES5 vs ES6


## Day 2
* Create a npm project and run html 
* Use ES6
* typescript
	* npm install typescript -g
		* -g makes dependency as global
		* tsc -v
		* https://www.typescriptlang.org/docs/handbook/compiler-options.html
* angular2 code


## Day 3
* Angular 1.x vs Angular 2.x vs React
* Bootstrap Badge
* Data binding
* One way binding
* Event binding
* Angular2 cli

## Day 4
* Bootstrap Dropdown
* Nested Components
* Custom Event Binding
* Custom Property Binding

## Day 5
* Shadow Dom
	* Shadow Host & Shadow Root
		* <b>Shadow Host</b>: is the DOM element which is hosting the Shadow DOM subtree or it is the DOM node which contains the Shadow Root.
		* <b>Shadow Root</b>: is the root of the DOM subtree containing the shadow DOM nodes. It is a special node, which creates the boundary between the normal DOM nodes and the Shadow DOM nodes. It is this boundary, which encapsulates the Shadow DOM nodes from any JavaScript or CSS code on the consuming page.
		* <b>Shadow DOM</b>: allows for multiple DOM subtrees to be composed into one larger tree. Following images from the W3C working draft best explains the concept of overlaying the nodes. This is how it looks before the Shadow Root's content are attached to Shadow Host element:
* Directives
	* Structural 
	* Attribute
* Introduction to Pipes
	* Built in pipes and demo
	* Writing custom pipes for filtering data







