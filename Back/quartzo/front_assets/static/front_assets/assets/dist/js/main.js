// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"86rhv":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 7081;
var HMR_SECURE = false;
var HMR_ENV_HASH = "e3eb47ae5558e22f";
module.bundle.HMR_BUNDLE_ID = "f356396b58279329";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"3TfXL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _accordion = require("./modules/accordion");
var _accordionDefault = parcelHelpers.interopDefault(_accordion);
var _breadcrumb = require("./modules/breadcrumb");
var _breadcrumbDefault = parcelHelpers.interopDefault(_breadcrumb);
var _dataTablesInit = require("./modules/dataTablesInit");
var _dataTablesInitDefault = parcelHelpers.interopDefault(_dataTablesInit);
var _dropdown = require("./modules/dropdown");
var _dropdownDefault = parcelHelpers.interopDefault(_dropdown);
var _inlineFunctions = require("./modules/inlineFunctions");
var _inlineFunctionsDefault = parcelHelpers.interopDefault(_inlineFunctions);
var _inputToogleActive = require("./modules/inputToogleActive");
var _inputToogleActiveDefault = parcelHelpers.interopDefault(_inputToogleActive);
var _multiLevelMenu = require("./modules/multiLevelMenu");
var _multiLevelMenuDefault = parcelHelpers.interopDefault(_multiLevelMenu);
var _showCorrectSection = require("./modules/showCorrectSection");
var _showCorrectSectionDefault = parcelHelpers.interopDefault(_showCorrectSection);
var _showToast = require("./modules/showToast");
var _showToastDefault = parcelHelpers.interopDefault(_showToast);
var _startAllChoices = require("./modules/startAllChoices");
var _startAllChoicesDefault = parcelHelpers.interopDefault(_startAllChoices);
var _tabs = require("./modules/tabs");
var _tabsDefault = parcelHelpers.interopDefault(_tabs);
var _mostraSenha = require("./modules/mostraSenha");
var _mostraSenhaDefault = parcelHelpers.interopDefault(_mostraSenha);
var _tableSelecionarColunasJs = require("./modules/tableSelecionarColunas.js");
var _tableSelecionarColunasJsDefault = parcelHelpers.interopDefault(_tableSelecionarColunasJs);
var _tableBasicOrdenationJs = require("./modules/tableBasicOrdenation.js");
var _tableBasicOrdenationJsDefault = parcelHelpers.interopDefault(_tableBasicOrdenationJs);
var _addFilterURLAndReloadJs = require("./modules/addFilterURLAndReload.js");
var _addFilterURLAndReloadJsDefault = parcelHelpers.interopDefault(_addFilterURLAndReloadJs);
var _tableBasicSearchJs = require("./modules/tableBasicSearch.js");
var _tableBasicSearchJsDefault = parcelHelpers.interopDefault(_tableBasicSearchJs);
var _tableBasicQntJs = require("./modules/tableBasicQnt.js");
var _tableBasicQntJsDefault = parcelHelpers.interopDefault(_tableBasicQntJs);
var _tableBasicRecentesJs = require("./modules/tableBasicRecentes.js");
var _tableBasicRecentesJsDefault = parcelHelpers.interopDefault(_tableBasicRecentesJs);
var _notificationBar = require("./modules/notification_bar");
var _notificationBarDefault = parcelHelpers.interopDefault(_notificationBar);
var _mudaValoresDeAcordoComFormulaJs = require("./modules/mudaValoresDeAcordoComFormula.js");
var _mudaValoresDeAcordoComFormulaJsDefault = parcelHelpers.interopDefault(_mudaValoresDeAcordoComFormulaJs);
var _loader = require("./modules/loader");
var _loaderDefault = parcelHelpers.interopDefault(_loader);
var _formTitleChange = require("./modules/formTitleChange");
var _formTitleChangeDefault = parcelHelpers.interopDefault(_formTitleChange);
var _animation = require("./modules/animation");
var _animationDefault = parcelHelpers.interopDefault(_animation);
(0, _accordionDefault.default)();
(0, _breadcrumbDefault.default)();
(0, _dataTablesInitDefault.default)();
(0, _dropdownDefault.default)();
(0, _inlineFunctionsDefault.default)() // Faz as implementações relacionadas aos inlines
;
(0, _inputToogleActiveDefault.default)() // muda class ativa nos inputs
;
(0, _multiLevelMenuDefault.default)();
(0, _notificationBarDefault.default)();
(0, _showCorrectSectionDefault.default)() //mostra elemento de acordo com parametro na url
;
(0, _showToastDefault.default)();
(0, _startAllChoicesDefault.default)() //inicia bibiloteca Choices.js
;
(0, _tabsDefault.default)();
(0, _mostraSenhaDefault.default)();
(0, _addFilterURLAndReloadJsDefault.default)() //adiona um filtro na url e recarrega
;
//table
(0, _tableSelecionarColunasJsDefault.default)() //show hide coluns
;
(0, _tableBasicOrdenationJsDefault.default)() // ordenacao ao clicar na thead
;
(0, _tableBasicSearchJsDefault.default)() //Busca da tabela basica
;
(0, _tableBasicQntJsDefault.default)() //quantidade de items vcisiveis na tabela
;
(0, _tableBasicRecentesJsDefault.default)() //ordena por id maior ou menor
;
(0, _formTitleChangeDefault.default)();
(0, _animationDefault.default)();
const menuObject = (0, _multiLevelMenuDefault.default)(subMenuItens);
if (menuObject) {
    const menu = menuObject.init();
    window.menu = menu;
}
window.initAccordion = (0, _accordionDefault.default);
window.mudaValoresDeAcordoComFormula = (0, _mudaValoresDeAcordoComFormulaJsDefault.default);
window.myLoader = (0, _loaderDefault.default);
document.addEventListener("DOMContentLoaded", ()=>{
    document.body.classList.add("DOMContentLoaded");
});

},{"./modules/accordion":"7HZ7k","./modules/breadcrumb":"9s8Jw","./modules/dataTablesInit":"kzoD7","./modules/dropdown":"in4le","./modules/inlineFunctions":"cZPWp","./modules/inputToogleActive":"hFg0E","./modules/multiLevelMenu":"47GGI","./modules/showCorrectSection":"32OjR","./modules/showToast":"2QygT","./modules/startAllChoices":"aixIX","./modules/tabs":"iBTzB","./modules/mostraSenha":"eCbMy","./modules/tableSelecionarColunas.js":"IP2ro","./modules/tableBasicOrdenation.js":"joCiO","./modules/addFilterURLAndReload.js":"d8aJH","./modules/tableBasicSearch.js":"P8vEo","./modules/tableBasicQnt.js":"3LIoa","./modules/tableBasicRecentes.js":"eyveg","./modules/notification_bar":"7APMO","./modules/mudaValoresDeAcordoComFormula.js":"6jGOO","./modules/loader":"17FrQ","./modules/formTitleChange":"cdbrq","./modules/animation":"bRJsd","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"7HZ7k":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function accordion() {
    const accordionsCooontainer = document.querySelectorAll("[js-accordion-container]");
    if (!accordionsCooontainer) return;
    accordionsCooontainer.forEach((container)=>{
        container.addEventListener("click", handleClick);
        function handleClick(e) {
            const target = e.target;
            const title = target.classList.contains(".accordion-title") || target.closest(".accordion-title");
            if (title) {
                const attrParent = title.getAttribute(`js-comentario-parent`);
                if (attrParent) //parent accordion
                document.querySelectorAll(`.accordion-title[js-comentario-parent="${attrParent}"]`).forEach((i)=>{
                    if (i !== title) {
                        if (i.closest(".accordion-item").classList.contains("active")) i.click();
                    }
                });
                const idAccordion = title.getAttribute("data-accordion");
                const content = container.querySelector(`.accordion-content[data-accordion="${idAccordion}"]`);
                const contentDiv = container.querySelector(`.accordion-content[data-accordion="${idAccordion}"] > div `);
                const pai = content.parentElement.closest(".accordion-content");
                const height = content.scrollHeight;
                title.closest(".accordion-item").classList.toggle("active");
                content.classList.toggle("active");
                let isChildren = content.hasAttribute("js-accordion-child");
                if (isChildren && content.classList.contains("active")) {
                    gsap.set(pai, {
                        height: "auto"
                    });
                    return;
                }
                if (content.classList.contains("active")) gsap.fromTo(content, {
                    height: 0
                }, {
                    height: height,
                    duration: 0.3
                });
                else gsap.fromTo(content, {
                    height: height
                }, {
                    height: 0,
                    duration: 0.3
                });
            }
        }
    });
}
exports.default = accordion;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"2GLs3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9s8Jw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function breadcrumb() {
    const attr = "[js-breadcrumb]";
    const breadcrumb = document.querySelector(`.breadcrumb${attr}`);
    const objStr = breadcrumb?.dataset.obj;
    console.log(objStr);
    if (!breadcrumb || !objStr) return;
    const obj = JSON.parse(objStr.replaceAll(`'`, `"`));
    const aLength = obj.length - 1;
    const items = obj.map(({ name , slug , link  }, index)=>`
		<li class="${index === aLength ? "active" : ""}">
			<a ${link ? `href="${link}"` : ""} data-slug="${slug}">${name}</a>
		</li>
		`);
    const template = ()=>{
        return `
			<ul class="flex flex-wrap breadcrumb-wrapper">
				<li>
					<a href="/">
							Home
					</a>
				</li>
				${items.join("")}
			</ul>
		`;
    };
    breadcrumb.innerHTML = template();
    if (GLOBAL.isMobile) {
        const breadMobile = document.querySelector(".breadcrumb-mobile");
        breadMobile.appendChild(breadcrumb);
    }
}
exports.default = breadcrumb;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"kzoD7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function dataTablesInit() {
    document.querySelectorAll("table[js-dataTables]")?.forEach((t)=>{
        const props = t.dataset.props || {};
        const Dtable = $(t).DataTable({
            "language": {
                "show": "Visualizar",
                "lengthMenu": "Mostrar _MENU_ linhas por p\xe1gina",
                "zeroRecords": "Nada encontrado",
                "info": "Exibindo p\xe1gina _PAGE_ de _PAGES_",
                "infoEmpty": "Nada encontrado",
                "infoFiltered": "(filtrado de _MAX_ no total)",
                "search": "Pesquisar",
                "paginate": {
                    "previous": "Anterior",
                    "next": "Pr\xf3xima"
                }
            },
            "autoWidth": true,
            "ordering": true,
            "order": [
                [
                    0,
                    "desc"
                ]
            ],
            // rowReorder: {
            //     selector: 'td:nth-child(2)'
            // },
            select: {
                items: "cell"
            },
            responsive: true,
            paginate: false,
            search: false,
            info: false,
            ...props
        });
        GLOBAL.wrap_single(t, "div", [
            "table-container"
        ]);
    // t.querySelectorAll("thead th")
    // 	?.forEach(t => t.addEventListener("click", () => {
    // 		Dtable.columns.adjust().draw();
    // 	}))
    });
}
exports.default = dataTablesInit;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"in4le":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _outsideCLick = require("./outsideCLick");
var _outsideCLickDefault = parcelHelpers.interopDefault(_outsideCLick);
function dropdown() {
    const dropdownMenus = document.querySelectorAll("[js-dropdown]");
    dropdownMenus.forEach((menu)=>{
        [
            "touchstart",
            "click"
        ].forEach((userEvent)=>{
            menu.addEventListener(userEvent, handleClick);
        });
    });
    function handleClick(event) {
        // event.preventDefault(); //retirar se tiver click no item
        dropdownMenus.forEach((i)=>i.classList.remove("active"));
        this.classList.add("active");
        // outside click pode ser reaproveitado para outros eventos de bubble
        (0, _outsideCLickDefault.default)(this, [
            "touchstart",
            "click",
            "mouseleave"
        ], ()=>{
            this.classList.remove("active");
        });
    }
}
exports.default = dropdown;

},{"./outsideCLick":"4EFvs","@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"4EFvs":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function outSideClick(element, events, callback) {
    const outside = "data-outside";
    const html = document.documentElement;
    if (!element.hasAttribute(outside)) {
        events.forEach((userEvent)=>{
            html.addEventListener(userEvent, handleOutsideClick) //adiciona evento de click que vai aproveitar do bubble
            ;
        });
        element.setAttribute(outside, "") //coloca atributo para nao adicionar o evento mais de uma vez
        ;
    }
    function handleOutsideClick(event) {
        if (!element.contains(event.target)) {
            element.removeAttribute(outside, "");
            events.forEach((userEvent)=>{
                html.removeEventListener(userEvent, handleOutsideClick) //adiciona evento de click que vai aproveitar do bubble
                ;
            });
            callback();
        }
    }
}
exports.default = outSideClick;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"cZPWp":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function inlineFunctions() {
    const hasInlines = document.querySelector("[data-js-inline]");
    if (!hasInlines) return;
    function addRemoveEventInExistingInlines() {
        const btnsRemoveInline = document.querySelectorAll("[class*='remove_inline']");
        btnsRemoveInline.forEach((btn)=>{
            const inline = btn.closest(".inline-item");
            btn.addEventListener("click", ()=>removeInline(inline));
        });
    }
    function checkMaxNumAllForms() {
        const maxNumbersElements = document.querySelectorAll("[id$='-MAX_NUM_FORMS']");
        maxNumbersElements.forEach((numberElement)=>{
            const wrapperInline = numberElement.closest(".wrapper-inline");
            checkMaxNumForm(numberElement.value, wrapperInline);
        });
    }
    function checkMaxNumForm(totalForms, wrapperInline) {
        const inlineItens = wrapperInline.querySelectorAll(".inline-item");
        if (inlineItens.length === Number(totalForms)) {
            const dataJsInline = wrapperInline.dataset.jsInline;
            const btnAddInline = document.querySelector(`.add_inline[data-js-inline='${dataJsInline}']`);
            btnAddInline.classList.add("hidden");
        }
    }
    function addAddEventInExistingInlines() {
        const btnsAddInline = document.querySelectorAll(".add_inline");
        btnsAddInline && btnsAddInline.forEach((btnAddInline)=>{
            //o id já vir acrescentado do outro
            btnAddInline.addEventListener("click", ()=>addInline(btnAddInline.dataset.jsInline));
        });
    }
    function addInline(dataJsInline) {
        const wrapperInline = document.querySelector(`.wrapper-inline[data-js-inline='${dataJsInline}']`);
        const inputMaxForms = wrapperInline.querySelector("[id$='-MAX_NUM_FORMS']");
        const inputFormIndex = wrapperInline.querySelector("[id$='-TOTAL_FORMS']");
        const intFormIndex = parseInt(inputFormIndex.value);
        const emptyForm = $(`.empty_inline_form[data-js-inline='${dataJsInline}']`);
        $(wrapperInline).append(emptyForm.html().replace(/__prefix__/g, intFormIndex));
        const removeBtn = wrapperInline.querySelector(`.remove_inline-${intFormIndex}`);
        const inline = document.querySelector(`.inline-${intFormIndex}[data-js-inline=${dataJsInline}]`);
        removeBtn.addEventListener("click", ()=>removeInline(inline));
        inputFormIndex.value = intFormIndex + 1;
        extraConfigs(inline, intFormIndex);
        checkMaxNumForm(inputMaxForms.value, wrapperInline);
    }
    function removeInline(inline) {
        const wrapperInline = inline.closest(".wrapper-inline");
        const inputMaxForms = wrapperInline.querySelector("[id$='-MAX_NUM_FORMS']");
        const deleteBtn = inline.querySelector(`[id$='-DELETE'`);
        deleteBtn.setAttribute("checked", true);
        inline.classList.add("hidden");
        checkMaxNumForm(inputMaxForms.value, wrapperInline);
    }
    function extraConfigs(inline, id) {
        initInlineAccordion(inline, id);
        initChoices(inline);
    }
    function initChoices(inline) {
        const selects = [
            ...inline.querySelectorAll("select")
        ];
        const props = {
            searchEnabled: false,
            searchChoices: false
        };
        const outrosChoices = selects.map((select)=>GLOBAL.initChoices(select, props));
        window.listOfChoices = [
            ...listOfChoices,
            ...outrosChoices
        ];
    }
    // let count = 1000;
    function initInlineAccordion(inline, id) {
        const accordionsItem = inline.querySelectorAll(".accordion[js-accordion-container]");
        const inlineAccordions = inline.querySelectorAll("[data-accordion]");
        const accordionsTitle = inline.querySelectorAll(".accordion-title .texto");
        accordionsTitle.forEach((i)=>i.innerText = `Item n°${id}`);
        inlineAccordions?.forEach((i)=>i.setAttribute("data-accordion", id));
    // window.initAccordion(accordionsItem, id);
    }
    (function init() {
        addAddEventInExistingInlines();
        addRemoveEventInExistingInlines();
        checkMaxNumAllForms();
    })();
}
exports.default = inlineFunctions;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"hFg0E":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function inputToogleActive() {
    //seta em todos esses tipos de input a classe active
    // se tiver length
    const attr = "[js-ativo]";
    const type = `
	input[type='text']${attr}, 
	input[type='number']${attr}, 
	input[type='email']${attr},
	textarea${attr}
	`;
    const inputs = document.querySelectorAll(type);
    // console.log('inputs', inputs)
    inputs?.forEach((input)=>input.addEventListener("change", (event)=>{
            const input = event.currentTarget;
            input.value.length !== 0 ? input.classList.add("active") : input.classList.remove("active");
        }));
}
exports.default = inputToogleActive;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"47GGI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function multiLevelMenu(obj) {
    let state = {
        open: false,
        delay: 150
    };
    const { isTablet , debounceFunction  } = GLOBAL;
    const sidebar = document.querySelector(".sidebar");
    if (!sidebar) return false;
    const sideBarOptions = document.querySelector(".opcoes-container");
    const body = document.body;
    const svgAdicionar = `<svg><use xlink:href="#icon_add"></use></svg>`;
    const svgList = `<svg><use xlink:href="#icon_list"></use></svg>`;
    const svgArrow = `<svg class="icon group-hover:opacity-100 icon-arrow"><use xlink:href="#icon_arrow_left"></use></svg>`;
    const iconBack = `<svg class="icon-back group-hover:opacity-100 icon-arrow h-32 w-32"><use xlink:href="#icon_back_arrow"></use></svg>`;
    const tipyAdicionar = 'data-tippy-content="Adicionar"';
    const tipyList = 'data-tippy-content="Lista"';
    const fundo = document.querySelector(".nav-fundo ");
    const itensLV0 = sidebar.querySelectorAll("[js-menu-lista] > li[js-lista-name] ");
    const toogle = document.querySelector("[js-menu-toggle]");
    // Titulo
    const templateModuleName = (name, icon)=>`<li class='module-name'>${icon && !isTablet ? icon.outerHTML : ""} ${isTablet ? iconBack : ""}  ${name}<li>`;
    // Me de o menu pertencente
    const getStaticMenu = (slug)=>{
        return document.querySelector(`[js-menu-lista] [js-lista-name='${slug}']`);
    };
    // Popula os leveis do menu
    const populateMenuLevel = (itemMenu, submenu, name, svg)=>{
        const templateSubMenu = templateLevelMenu(submenu);
        const templateItems = submenu.items.map(templateItensSubmenu);
        templateSubMenu.innerHTML = templateItems.join("");
        templateSubMenu.insertAdjacentHTML("afterbegin", templateModuleName(name, svg));
        itemMenu.appendChild(templateSubMenu);
        itemMenu.classList.add("have-submenu");
    };
    // Template das liZ	
    const templateItensSubmenu = (item)=>{
        const { name , link , list , adicionar , slug , submenu  } = item;
        // console.log(item)
        return `
				<li class="group" js-lista-name='${slug}' ${submenu ? `data-submenu` : ""}>
					<div class="item-wrapper">
						<a ${link ? `href="${link}"` : ""} class='item'> ${name}	</a>
						${adicionar ? `<a ${tipyAdicionar} class='adicionar' href="${adicionar}">${svgAdicionar}</a>` : ""}
						${list ? `<a ${tipyList} class='lista' href="${list}">${svgList}</a>` : ""}
						${submenu ? svgArrow : ""}
					</div>
				</li>`;
    };
    // Template dos sublevel
    const templateLevelMenu = (submenu)=>{
        const div = document.createElement("ul");
        div.setAttribute("data-level", submenu.level);
        div.classList.add("submenu");
        return div;
    };
    //Cria subMenus
    const createSubMenus = ({ slug , submenu , name  })=>{
        // console.log(slug)
        const itemMenu1 = getStaticMenu(slug);
        const svg = itemMenu1.querySelector("svg").cloneNode(true);
        svg.style.setProperty("--cor-1", "white");
        if (!submenu) return;
        populateMenuLevel(itemMenu1, submenu, name, svg);
        submenu.items.forEach(({ slug , submenu , name  })=>{
            const itemMenu2 = getStaticMenu(slug);
            if (!submenu) return;
            populateMenuLevel(itemMenu2, submenu, name);
            submenu.items.forEach(({ slug , submenu , name  })=>{
                const itemMenu3 = getStaticMenu(slug);
                if (!submenu) return;
                populateMenuLevel(itemMenu3, submenu, name);
            });
        });
    };
    const handleClickFundo = ()=>{
        itensLV0.forEach((i)=>i.classList.remove("active"));
        body.classList.remove("menu-ativo");
        toogleMenu();
    };
    const handleClickItem = (i)=>(e)=>{
            //e.preventDefault()
            setTimeout(()=>sidebar.classList.add("animou"), 200) //add classe para animar apenas uma vez
            ;
            body.classList.add("menu-ativo") //add classe para mostrar o fundo do menu
            ;
            itensLV0.forEach((i)=>i.classList.remove("active")) //remove ativo tds outros
            ;
            body.classList.remove("dont-open-submenu") // remove a classe que impede que o submenu seja aberto
            ;
            i.classList.toggle("active");
        };
    const toogleMenu = ()=>{
        //funcao do jquery que me da mais certeza c o menu esta aberto ou n
        if (!isTablet) {
            if (body.classList.contains("menu-ativo")) return;
            state.open = !$(sidebar).is(":hover");
        }
        // console.log(state.open);
        if (state.open) {
            body.classList.add("menu-closed");
            body.classList.add("dont-open-submenu");
            sidebar.classList.remove("animou");
            sideBarOptions.classList.remove("ativar");
            if (isTablet) {
                state.open = false;
                body.classList.remove("menu-ativo");
            }
        } else {
            body.classList.remove("menu-closed");
            body.classList.remove("menu-ativo");
            if (isTablet) state.open = true;
        }
    };
    // const showLevelActive = (e) => {
    // 	const level = Number(e.target.closest(".have-submenu")?.querySelector(".submenu").dataset.level) + 1
    // 	console.log(level);
    // 	if (level === 3) sidebar.setAttribute("data-radius", "3")
    // 	if (level === 2) sidebar.setAttribute("data-radius", "2")
    // 	if (level === 1) sidebar.setAttribute("data-radius", "1")
    // }
    const backLevel = (e)=>{
        setTimeout(()=>itensLV0.forEach((i)=>i.classList.remove("active")), 100);
    };
    const events = ()=>{
        itensLV0.forEach((i)=>i.addEventListener("click", handleClickItem(i)));
        if (isTablet) {
            toogle?.addEventListener("click", toogleMenu);
            document.querySelectorAll(".icon-back").forEach((i)=>i.addEventListener("click", backLevel));
        } else {
            sidebar.addEventListener("mouseenter", debounceFunction(toogleMenu, state.delay));
            sidebar.addEventListener("mouseout", toogleMenu);
            fundo.addEventListener("click", handleClickFundo);
        }
    // sidebar.addEventListener("mousemove", showLevelActive)
    };
    function init() {
        obj.forEach(createSubMenus);
        events();
        return this;
    }
    return {
        init,
        toogleMenu
    };
}
exports.default = multiLevelMenu;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"32OjR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function showCorrectSection() {
    const attr = document.querySelector("[data-secao]");
    if (!attr) return;
    const secao = GLOBAL.url.searchParams.get("secao");
    const wrapperSecao = document.querySelector(`[data-secao='${secao}']`);
    wrapperSecao && wrapperSecao.classList.remove("hidden");
}
exports.default = showCorrectSection;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"2QygT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function showToast() {
    const { url  } = GLOBAL;
    if (url.searchParams.has("mensagem_toastify")) {
        const mensagemToastify = url.searchParams.get("mensagem_toastify");
        Toastify({
            text: mensagemToastify,
            duration: 3000,
            position: "center"
        }).showToast();
        url.searchParams.set("mensagem_toastify", "");
        url.search = "";
        window.history.pushState({}, "", url);
    }
}
exports.default = showToast;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"aixIX":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function startAllChoices() {
    const allSelects = [
        ...document.querySelectorAll("select[js-choices]")
    ]?.filter((select)=>!select.hasAttribute("js-no-choices"));
    if (!allSelects) return;
    const listOfChoices = [
        ...allSelects
    ].map((i)=>{
        const hasAttr = i.getAttribute("js-choices-props");
        const props = hasAttr ? JSON.parse(hasAttr) : {};
        const choicesObj = i.getAttribute("js-choices-obj");
        const opts = {
            searchEnabled: false,
            searchChoices: false,
            itemSelectText: "Selecionar",
            noResultsText: "Nada Encontrado...",
            // choices: choicesObj
            ...props
        };
        const source = {
            choices: window[choicesObj]
        };
        const returnedTarget = choicesObj ? {
            ...opts,
            ...source
        } : opts;
        return GLOBAL.initChoices(i, returnedTarget);
    });
    window.listOfChoices = listOfChoices;
}
exports.default = startAllChoices;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"iBTzB":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function tabs() {
    const attr = "[js-tab]";
    const tabs = document.querySelectorAll(`.tabs${attr}`);
    if (!tabs.length) return;
    tabs.forEach((t)=>initTab(t));
    function initTab(tab) {
        console.log(tab);
        const collapses = tab.querySelectorAll(".tab-collapse");
        const tabItens = tab.querySelectorAll(".tabs-wrapper .tab-item");
        tabItens.forEach((t)=>{
            t.addEventListener("click", (e)=>{
                collapses.forEach((c)=>c.classList.remove("active"));
                tabItens.forEach((c)=>c.classList.remove("active"));
                t.classList.add("active");
                const att = e.currentTarget.dataset.tab;
                collapses.forEach((c)=>{
                    const attCollapse = c.getAttribute("data-tab");
                    console.log(attCollapse, att);
                    if (attCollapse == att) c.classList.add("active");
                });
            });
        });
    }
}
exports.default = tabs;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"eCbMy":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mostraSenha() {
    const attr = "[js-password]";
    const divs = document.querySelectorAll(`.show-password${attr}`);
    if (!divs.length) return;
    function handleEvent(div) {
        return function(event) {
            let input = div.querySelector("[js-input-password]");
            let item = event.currentTarget;
            input.type = input.type == "text" ? "password" : "text";
            if (input.type == "text") item.classList.add("mostra");
            else item.classList.remove("mostra");
        };
    }
    divs.forEach((div)=>{
        const buttonPass = div.querySelector(".password");
        buttonPass.addEventListener("click", handleEvent(div));
    });
}
exports.default = mostraSenha;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"IP2ro":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function tableSelecionarColunas() {
    const attr = "[js-selecionar-colunas]";
    const els = document.querySelectorAll(attr);
    if (!els.length) return;
    const url = new URL(window.location);
    let filtersOBJ = GLOBAL.splitFilters(url.search);
    let colunasOcultas;
    let colunasInicialmenteOcultas;
    const showHideColun = (el, drop)=>(e)=>{
            const value = el.value;
            const table = document.querySelector("table");
            const tableColuns = table.querySelectorAll(`[data-reference='${value}']`);
            if (e.currentTarget.checked === false) tableColuns.forEach((i)=>i.classList.add("hidden"));
            else tableColuns.forEach((i)=>i.classList.remove("hidden"));
            colunasOcultas = [
                ...drop.querySelectorAll("input")
            ].filter((i)=>!i.checked).map((i)=>i.value).join();
            if (filtersOBJ) filtersOBJ["colunas_ocultas"] = colunasOcultas;
            else {
                filtersOBJ = {};
                filtersOBJ["colunas_ocultas"] = colunasOcultas;
            }
            const newFilters = GLOBAL.generateStringFilterFromObject(filtersOBJ);
            history.pushState(null, null, `${url.origin}${url.pathname}${newFilters}`);
        };
    if (filtersOBJ) {
        if (filtersOBJ["colunas_ocultas"]) colunasInicialmenteOcultas = filtersOBJ["colunas_ocultas"].split(",");
    }
    els.forEach((drop)=>{
        const inputs = drop.querySelectorAll("input");
        inputs.forEach((input)=>input.addEventListener("change", showHideColun(input, drop)));
        if (colunasInicialmenteOcultas) {
            const els = [
                ...drop.querySelectorAll(colunasInicialmenteOcultas.map((i)=>`input[value=${i}]`).join(","))
            ];
            els?.forEach((i)=>{
                i.checked = false;
                i.dispatchEvent(new Event("change"));
            });
        }
    });
}
exports.default = tableSelecionarColunas;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"joCiO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function tableBasicOrdenation() {
    const attr = "js-table-ordenation";
    const els = document.querySelectorAll(`table[${attr}]`);
    if (!els.length) return;
    const url = GLOBAL.url;
    const filtersOBJ = GLOBAL.splitFilters(url.search);
    const order = filtersOBJ?.order;
    if (!order) return;
    const upOrDown = order?.includes("-") ? "down" : "up";
    console.log("FILTROS ATIVOS", filtersOBJ);
    els.forEach((table)=>{
        console.log(order);
        const th = table.querySelector(`thead [data-reference='${order.replace("-", "")}']`);
        console.log("th", th);
        th?.classList.add(upOrDown);
    });
}
exports.default = tableBasicOrdenation;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"d8aJH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function addFilterURLAndReload() {
    const attr = "js-add-filter";
    const els = document.querySelectorAll(`[${attr}]`);
    if (!els.length) return;
    els.forEach((i)=>i.addEventListener("click", handleCallback));
    function handleCallback(e) {
        e.preventDefault();
        const target = e.currentTarget;
        const filtro = target.getAttribute("js-add-filter")?.split(",");
        const [param, value] = filtro;
        const valueClean = value?.trim();
        const url = new URL(window.location);
        let filtersOBJ = GLOBAL.splitFilters(url.search);
        // const haveSameFilter = filtersOBJ ? filtersOBJ[param] : false
        if (filtersOBJ) {
            if (param === "order" && filtersOBJ.order?.replace("-", "") === valueClean) {
                console.log(target.classList.contains("up"));
                if (target.classList.contains("up")) filtersOBJ[param] = `-${valueClean}`;
                else filtersOBJ[param] = valueClean;
            } else filtersOBJ[param] = valueClean;
        } else {
            filtersOBJ = {};
            filtersOBJ[param] = value;
        }
        const newFilters = GLOBAL.generateStringFilterFromObject(filtersOBJ);
        window.location.href = `${url.origin}${url.pathname}${newFilters}`;
    }
}
exports.default = addFilterURLAndReload;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"P8vEo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function tableBasicSearch() {
    const attr = "js-table-search";
    const els = document.querySelectorAll(`[${attr}]`);
    const url = new URL(window.location);
    let filtersOBJ = GLOBAL.splitFilters(url.search);
    if (!els.length) return;
    els.forEach((i)=>{
        const wrapper = i.closest(".input-container");
        const btn = wrapper.querySelector("button");
        btn.addEventListener("click", search(i));
        i.addEventListener("keyup", (e)=>{});
        if (!filtersOBJ) return;
        if (filtersOBJ["filter"]) i.value = decodeURIComponent(filtersOBJ["filter"]);
        else return;
    });
    function search(input) {
        return (e)=>{
            const target = e.currentTarget;
            if (filtersOBJ) filtersOBJ["filter"] = input.value;
            else {
                filtersOBJ = {};
                filtersOBJ["filter"] = input.value;
            }
            const newFilters = GLOBAL.generateStringFilterFromObject(filtersOBJ);
            window.location.href = `${url.origin}${url.pathname}${newFilters}`;
        };
    }
    function clearSearch() {
        const el = document.querySelector("[js-table-clear-search]");
        const urlParams = new URLSearchParams(window.location.search);
        const filterParam = urlParams.get("filter");
        if (!el || !filterParam) return;
        const newUrl = location.href.replace(`&filter=${filterParam}`, "");
        el.classList.remove("hidden");
        el.setAttribute("href", newUrl);
    }
    clearSearch();
}
exports.default = tableBasicSearch;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"3LIoa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function tableBasicQnt() {
    const attr = "js-table-qnt";
    const els = document.querySelectorAll(`[${attr}]`);
    const url = new URL(window.location);
    let filtersOBJ = GLOBAL.splitFilters(url.search);
    if (!els.length) return;
    els.forEach((i)=>{
        i.addEventListener("change", search(i));
        if (!filtersOBJ) return;
        if (filtersOBJ["paginate_by"]) {
            const select = GLOBAL.getChoicesActive(i.id, listOfChoices);
            select.setChoiceByValue(filtersOBJ["paginate_by"]);
        }
    });
    function search(input) {
        return (e)=>{
            const target = e.currentTarget;
            const url = new URL(window.location);
            let filtersOBJ = GLOBAL.splitFilters(url.search);
            if (filtersOBJ) filtersOBJ["paginate_by"] = target.value;
            else {
                filtersOBJ = {};
                filtersOBJ["paginate_by"] = target.value;
            }
            const newFilters = GLOBAL.generateStringFilterFromObject(filtersOBJ);
            window.location.href = `${url.origin}${url.pathname}${newFilters}`;
        };
    }
}
exports.default = tableBasicQnt;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"eyveg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function tableBasicRecentes() {
    const attr = "js-table-recentes";
    const els = document.querySelectorAll(`[${attr}]`);
    const url = new URL(window.location);
    let filtersOBJ = GLOBAL.splitFilters(url.search);
    if (!els.length) return;
    els.forEach((i)=>{
        i.addEventListener("change", search(i));
        if (!filtersOBJ) return;
        if (filtersOBJ["order"]) {
            const select = GLOBAL.getChoicesActive(i.id, listOfChoices);
            select.setChoiceByValue(filtersOBJ["order"]);
        }
    });
    function search(input) {
        return (e)=>{
            const url = new URL(window.location);
            let filtersOBJ = GLOBAL.splitFilters(url.search);
            const target = e.currentTarget;
            if (filtersOBJ) filtersOBJ["order"] = target.value;
            else {
                filtersOBJ = {};
                filtersOBJ["order"] = target.value;
            }
            const newFilters = GLOBAL.generateStringFilterFromObject(filtersOBJ);
            window.location.href = `${url.origin}${url.pathname}${newFilters}`;
        };
    }
}
exports.default = tableBasicRecentes;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"7APMO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function initNotification() {
    const body = document.body;
    const btnOpenNotification = document.querySelector("[js-notification-open]");
    const sidebarNotification = document.querySelector(".alertas");
    let state = {
        open: false,
        delay: 150
    };
    const { isTablet , debounceFunction  } = GLOBAL;
    const toggleSidebarNotification = (e)=>{
        state.open = true;
        body.classList.remove("notification-closed");
        if (state.open) // body.classList.add('notification-hover')
        body.classList.add("alerta-aberto");
        else {
            body.classList.add("notification-closed");
            // body.classList.remove('notification-hover')
            body.classList.remove("alerta-aberto");
        }
    };
    const toggleOnHoverSideBar = (e)=>{
        //funcao do jquery que me da mais certeza c o menu esta aberto ou n
        if (!isTablet) state.open = $(sidebarNotification).is(":hover");
        if (state.open) {
            body.classList.add("notification-hover");
            body.classList.add("alerta-aberto");
        } else {
            body.classList.remove("notification-hover");
            body.classList.remove("alerta-aberto");
            if (isTablet) state.open = true;
        }
    };
    const closeNotificationBar = ({ target  })=>{
        if (target.classList.contains("fundo-alerta") || target.hasAttribute("js-notification-close")) {
            body.classList.remove("alerta-aberto");
            // body.classList.remove('notification-hover')
            body.classList.add("notification-closed");
            open.state = false;
        }
    };
    document.addEventListener("click", closeNotificationBar);
    btnOpenNotification && btnOpenNotification.addEventListener("click", debounceFunction(toggleSidebarNotification, state.delay));
// if (isTablet) {
//   sidebarNotification.addEventListener("click", toggleOnHoverSideBar)
// } else {
//   sidebarNotification && sidebarNotification.addEventListener('mouseenter', debounceFunction(toggleOnHoverSideBar, state.delay))
//   sidebarNotification && sidebarNotification.addEventListener("mouseout", toggleOnHoverSideBar)
// }
}
exports.default = initNotification;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"6jGOO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function mudaValoresDeAcordoComFormula(form, formulas) {
    function mudavalores(formulas) {
        //pego cada objeto de formula
        const relacaoFormulas = Object.values(formulas).map((value)=>value);
        //jogo no elemento o resultado da formula
        relacaoFormulas.map((i)=>i.el.innerHTML = i.formula());
    }
    //rodo inicialmente pra mudar o valor
    mudavalores(formulas);
    //adiciono o change pra rodar a mudanca de valores
    form.addEventListener("change", ()=>mudavalores(formulas));
}
exports.default = mudaValoresDeAcordoComFormula;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"17FrQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function loader(_loader) {
    const textDefault = [
        "Aguarde, estamos enviando seus dados",
        "Mais um pouco...",
        "Quase l\xe1..."
    ];
    const loaderEL = document.querySelector(".loader--container") || _loader;
    const pEl = loaderEL.querySelector("p");
    let interval;
    /**
	* @param {array} opcional | recebe um array de objetos para ser mostrado 
	*/ function show(options) {
        loaderEL.dataset.active = "true";
        let atual = 0;
        const obj = {
            textos: textDefault,
            time: 8000,
            ...options
        };
        $(pEl).text(obj.textos[atual]);
        interval = setInterval(function() {
            $(pEl).fadeOut(function() {
                if (atual > obj.textos.length) atual = 0;
                $(pEl).text(obj.textos[atual]).fadeIn();
                atual = atual + 1;
            });
        }, obj.time);
        return this;
    }
    function hide() {
        loaderEL.dataset.active = "false";
        clearInterval(interval);
        pEl.innerText = "";
        return this;
    }
    return {
        show,
        hide
    };
}
exports.default = loader;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"cdbrq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function formTitleChange() {
    const textToChange = document.querySelector(".card.estilo-form .header-card .titulo p");
    const urlString = window.location.href;
    if (!textToChange) return;
    urlString.indexOf("update") != -1 && (textToChange.innerText = "Editar Cadastro");
}
exports.default = formTitleChange;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}],"bRJsd":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
function initialAnimations() {
    const cardsToAnimate = document.querySelectorAll("[js-animate]");
    gsap.set(cardsToAnimate, {
        autoAlpha: 0,
        transition: "initial",
        y: 15
    });
    document.addEventListener("DOMContentLoaded", ()=>{
        gsap.to(cardsToAnimate, {
            autoAlpha: 1,
            stagger: 0.10,
            y: 0,
            delay: .2
        });
    });
}
exports.default = initialAnimations;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"2GLs3"}]},["86rhv","3TfXL"], "3TfXL", "parcelRequire3506")

//# sourceMappingURL=main.js.map
