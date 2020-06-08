
if (process.env.NODE_ENV && process.env.NODE_ENV !== 'development') {
  if (false) {
    throw new Error(`NODE_ENV (${process.env.NODE_ENV}) does not match value for compiled assets: development`);
  } else {
    console.warn('Overriding NODE_ENV: ' + process.env.NODE_ENV + ' to development in order to match value for compiled assets');
    process.env.NODE_ENV = 'development';
  }
} else {
  process.env.NODE_ENV = 'development';
}
  
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadUpdateChunk(chunkId) {
/******/ 		var chunk = require("./" + "" + chunkId + "." + hotCurrentHash + ".hot-update.js");
/******/ 		hotAddUpdateChunk(chunk.id, chunk.modules);
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotDownloadManifest() {
/******/ 		try {
/******/ 			var update = require("./" + "" + hotCurrentHash + ".hot-update.json");
/******/ 		} catch (e) {
/******/ 			return Promise.resolve();
/******/ 		}
/******/ 		return Promise.resolve(update);
/******/ 	}
/******/
/******/ 	//eslint-disable-next-line no-unused-vars
/******/ 	function hotDisposeChunk(chunkId) {
/******/ 		delete installedChunks[chunkId];
/******/ 	}
/******/
/******/ 	var hotApplyOnUpdate = true;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentHash = "2692c9521f3ec81026aa";
/******/ 	var hotRequestTimeout = 10000;
/******/ 	var hotCurrentModuleData = {};
/******/ 	var hotCurrentChildModule;
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParents = [];
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	var hotCurrentParentsTemp = [];
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateRequire(moduleId) {
/******/ 		var me = installedModules[moduleId];
/******/ 		if (!me) return __webpack_require__;
/******/ 		var fn = function(request) {
/******/ 			if (me.hot.active) {
/******/ 				if (installedModules[request]) {
/******/ 					if (installedModules[request].parents.indexOf(moduleId) === -1) {
/******/ 						installedModules[request].parents.push(moduleId);
/******/ 					}
/******/ 				} else {
/******/ 					hotCurrentParents = [moduleId];
/******/ 					hotCurrentChildModule = request;
/******/ 				}
/******/ 				if (me.children.indexOf(request) === -1) {
/******/ 					me.children.push(request);
/******/ 				}
/******/ 			} else {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" +
/******/ 						request +
/******/ 						") from disposed module " +
/******/ 						moduleId
/******/ 				);
/******/ 				hotCurrentParents = [];
/******/ 			}
/******/ 			return __webpack_require__(request);
/******/ 		};
/******/ 		var ObjectFactory = function ObjectFactory(name) {
/******/ 			return {
/******/ 				configurable: true,
/******/ 				enumerable: true,
/******/ 				get: function() {
/******/ 					return __webpack_require__[name];
/******/ 				},
/******/ 				set: function(value) {
/******/ 					__webpack_require__[name] = value;
/******/ 				}
/******/ 			};
/******/ 		};
/******/ 		for (var name in __webpack_require__) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(__webpack_require__, name) &&
/******/ 				name !== "e" &&
/******/ 				name !== "t"
/******/ 			) {
/******/ 				Object.defineProperty(fn, name, ObjectFactory(name));
/******/ 			}
/******/ 		}
/******/ 		fn.e = function(chunkId) {
/******/ 			if (hotStatus === "ready") hotSetStatus("prepare");
/******/ 			hotChunksLoading++;
/******/ 			return __webpack_require__.e(chunkId).then(finishChunkLoading, function(err) {
/******/ 				finishChunkLoading();
/******/ 				throw err;
/******/ 			});
/******/
/******/ 			function finishChunkLoading() {
/******/ 				hotChunksLoading--;
/******/ 				if (hotStatus === "prepare") {
/******/ 					if (!hotWaitingFilesMap[chunkId]) {
/******/ 						hotEnsureUpdateChunk(chunkId);
/******/ 					}
/******/ 					if (hotChunksLoading === 0 && hotWaitingFiles === 0) {
/******/ 						hotUpdateDownloaded();
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		fn.t = function(value, mode) {
/******/ 			if (mode & 1) value = fn(value);
/******/ 			return __webpack_require__.t(value, mode & ~1);
/******/ 		};
/******/ 		return fn;
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotCreateModule(moduleId) {
/******/ 		var hot = {
/******/ 			// private stuff
/******/ 			_acceptedDependencies: {},
/******/ 			_declinedDependencies: {},
/******/ 			_selfAccepted: false,
/******/ 			_selfDeclined: false,
/******/ 			_disposeHandlers: [],
/******/ 			_main: hotCurrentChildModule !== moduleId,
/******/
/******/ 			// Module API
/******/ 			active: true,
/******/ 			accept: function(dep, callback) {
/******/ 				if (dep === undefined) hot._selfAccepted = true;
/******/ 				else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._acceptedDependencies[dep[i]] = callback || function() {};
/******/ 				else hot._acceptedDependencies[dep] = callback || function() {};
/******/ 			},
/******/ 			decline: function(dep) {
/******/ 				if (dep === undefined) hot._selfDeclined = true;
/******/ 				else if (typeof dep === "object")
/******/ 					for (var i = 0; i < dep.length; i++)
/******/ 						hot._declinedDependencies[dep[i]] = true;
/******/ 				else hot._declinedDependencies[dep] = true;
/******/ 			},
/******/ 			dispose: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			addDisposeHandler: function(callback) {
/******/ 				hot._disposeHandlers.push(callback);
/******/ 			},
/******/ 			removeDisposeHandler: function(callback) {
/******/ 				var idx = hot._disposeHandlers.indexOf(callback);
/******/ 				if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			// Management API
/******/ 			check: hotCheck,
/******/ 			apply: hotApply,
/******/ 			status: function(l) {
/******/ 				if (!l) return hotStatus;
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			addStatusHandler: function(l) {
/******/ 				hotStatusHandlers.push(l);
/******/ 			},
/******/ 			removeStatusHandler: function(l) {
/******/ 				var idx = hotStatusHandlers.indexOf(l);
/******/ 				if (idx >= 0) hotStatusHandlers.splice(idx, 1);
/******/ 			},
/******/
/******/ 			//inherit from previous dispose call
/******/ 			data: hotCurrentModuleData[moduleId]
/******/ 		};
/******/ 		hotCurrentChildModule = undefined;
/******/ 		return hot;
/******/ 	}
/******/
/******/ 	var hotStatusHandlers = [];
/******/ 	var hotStatus = "idle";
/******/
/******/ 	function hotSetStatus(newStatus) {
/******/ 		hotStatus = newStatus;
/******/ 		for (var i = 0; i < hotStatusHandlers.length; i++)
/******/ 			hotStatusHandlers[i].call(null, newStatus);
/******/ 	}
/******/
/******/ 	// while downloading
/******/ 	var hotWaitingFiles = 0;
/******/ 	var hotChunksLoading = 0;
/******/ 	var hotWaitingFilesMap = {};
/******/ 	var hotRequestedFilesMap = {};
/******/ 	var hotAvailableFilesMap = {};
/******/ 	var hotDeferred;
/******/
/******/ 	// The update info
/******/ 	var hotUpdate, hotUpdateNewHash;
/******/
/******/ 	function toModuleId(id) {
/******/ 		var isNumber = +id + "" === id;
/******/ 		return isNumber ? +id : id;
/******/ 	}
/******/
/******/ 	function hotCheck(apply) {
/******/ 		if (hotStatus !== "idle") {
/******/ 			throw new Error("check() is only allowed in idle status");
/******/ 		}
/******/ 		hotApplyOnUpdate = apply;
/******/ 		hotSetStatus("check");
/******/ 		return hotDownloadManifest(hotRequestTimeout).then(function(update) {
/******/ 			if (!update) {
/******/ 				hotSetStatus("idle");
/******/ 				return null;
/******/ 			}
/******/ 			hotRequestedFilesMap = {};
/******/ 			hotWaitingFilesMap = {};
/******/ 			hotAvailableFilesMap = update.c;
/******/ 			hotUpdateNewHash = update.h;
/******/
/******/ 			hotSetStatus("prepare");
/******/ 			var promise = new Promise(function(resolve, reject) {
/******/ 				hotDeferred = {
/******/ 					resolve: resolve,
/******/ 					reject: reject
/******/ 				};
/******/ 			});
/******/ 			hotUpdate = {};
/******/ 			var chunkId = "main";
/******/ 			// eslint-disable-next-line no-lone-blocks
/******/ 			{
/******/ 				/*globals chunkId */
/******/ 				hotEnsureUpdateChunk(chunkId);
/******/ 			}
/******/ 			if (
/******/ 				hotStatus === "prepare" &&
/******/ 				hotChunksLoading === 0 &&
/******/ 				hotWaitingFiles === 0
/******/ 			) {
/******/ 				hotUpdateDownloaded();
/******/ 			}
/******/ 			return promise;
/******/ 		});
/******/ 	}
/******/
/******/ 	// eslint-disable-next-line no-unused-vars
/******/ 	function hotAddUpdateChunk(chunkId, moreModules) {
/******/ 		if (!hotAvailableFilesMap[chunkId] || !hotRequestedFilesMap[chunkId])
/******/ 			return;
/******/ 		hotRequestedFilesMap[chunkId] = false;
/******/ 		for (var moduleId in moreModules) {
/******/ 			if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				hotUpdate[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if (--hotWaitingFiles === 0 && hotChunksLoading === 0) {
/******/ 			hotUpdateDownloaded();
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotEnsureUpdateChunk(chunkId) {
/******/ 		if (!hotAvailableFilesMap[chunkId]) {
/******/ 			hotWaitingFilesMap[chunkId] = true;
/******/ 		} else {
/******/ 			hotRequestedFilesMap[chunkId] = true;
/******/ 			hotWaitingFiles++;
/******/ 			hotDownloadUpdateChunk(chunkId);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotUpdateDownloaded() {
/******/ 		hotSetStatus("ready");
/******/ 		var deferred = hotDeferred;
/******/ 		hotDeferred = null;
/******/ 		if (!deferred) return;
/******/ 		if (hotApplyOnUpdate) {
/******/ 			// Wrap deferred object in Promise to mark it as a well-handled Promise to
/******/ 			// avoid triggering uncaught exception warning in Chrome.
/******/ 			// See https://bugs.chromium.org/p/chromium/issues/detail?id=465666
/******/ 			Promise.resolve()
/******/ 				.then(function() {
/******/ 					return hotApply(hotApplyOnUpdate);
/******/ 				})
/******/ 				.then(
/******/ 					function(result) {
/******/ 						deferred.resolve(result);
/******/ 					},
/******/ 					function(err) {
/******/ 						deferred.reject(err);
/******/ 					}
/******/ 				);
/******/ 		} else {
/******/ 			var outdatedModules = [];
/******/ 			for (var id in hotUpdate) {
/******/ 				if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 					outdatedModules.push(toModuleId(id));
/******/ 				}
/******/ 			}
/******/ 			deferred.resolve(outdatedModules);
/******/ 		}
/******/ 	}
/******/
/******/ 	function hotApply(options) {
/******/ 		if (hotStatus !== "ready")
/******/ 			throw new Error("apply() is only allowed in ready status");
/******/ 		options = options || {};
/******/
/******/ 		var cb;
/******/ 		var i;
/******/ 		var j;
/******/ 		var module;
/******/ 		var moduleId;
/******/
/******/ 		function getAffectedStuff(updateModuleId) {
/******/ 			var outdatedModules = [updateModuleId];
/******/ 			var outdatedDependencies = {};
/******/
/******/ 			var queue = outdatedModules.map(function(id) {
/******/ 				return {
/******/ 					chain: [id],
/******/ 					id: id
/******/ 				};
/******/ 			});
/******/ 			while (queue.length > 0) {
/******/ 				var queueItem = queue.pop();
/******/ 				var moduleId = queueItem.id;
/******/ 				var chain = queueItem.chain;
/******/ 				module = installedModules[moduleId];
/******/ 				if (!module || module.hot._selfAccepted) continue;
/******/ 				if (module.hot._selfDeclined) {
/******/ 					return {
/******/ 						type: "self-declined",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				if (module.hot._main) {
/******/ 					return {
/******/ 						type: "unaccepted",
/******/ 						chain: chain,
/******/ 						moduleId: moduleId
/******/ 					};
/******/ 				}
/******/ 				for (var i = 0; i < module.parents.length; i++) {
/******/ 					var parentId = module.parents[i];
/******/ 					var parent = installedModules[parentId];
/******/ 					if (!parent) continue;
/******/ 					if (parent.hot._declinedDependencies[moduleId]) {
/******/ 						return {
/******/ 							type: "declined",
/******/ 							chain: chain.concat([parentId]),
/******/ 							moduleId: moduleId,
/******/ 							parentId: parentId
/******/ 						};
/******/ 					}
/******/ 					if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 					if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 						if (!outdatedDependencies[parentId])
/******/ 							outdatedDependencies[parentId] = [];
/******/ 						addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 						continue;
/******/ 					}
/******/ 					delete outdatedDependencies[parentId];
/******/ 					outdatedModules.push(parentId);
/******/ 					queue.push({
/******/ 						chain: chain.concat([parentId]),
/******/ 						id: parentId
/******/ 					});
/******/ 				}
/******/ 			}
/******/
/******/ 			return {
/******/ 				type: "accepted",
/******/ 				moduleId: updateModuleId,
/******/ 				outdatedModules: outdatedModules,
/******/ 				outdatedDependencies: outdatedDependencies
/******/ 			};
/******/ 		}
/******/
/******/ 		function addAllToSet(a, b) {
/******/ 			for (var i = 0; i < b.length; i++) {
/******/ 				var item = b[i];
/******/ 				if (a.indexOf(item) === -1) a.push(item);
/******/ 			}
/******/ 		}
/******/
/******/ 		// at begin all updates modules are outdated
/******/ 		// the "outdated" status can propagate to parents if they don't accept the children
/******/ 		var outdatedDependencies = {};
/******/ 		var outdatedModules = [];
/******/ 		var appliedUpdate = {};
/******/
/******/ 		var warnUnexpectedRequire = function warnUnexpectedRequire() {
/******/ 			console.warn(
/******/ 				"[HMR] unexpected require(" + result.moduleId + ") to disposed module"
/******/ 			);
/******/ 		};
/******/
/******/ 		for (var id in hotUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(hotUpdate, id)) {
/******/ 				moduleId = toModuleId(id);
/******/ 				/** @type {TODO} */
/******/ 				var result;
/******/ 				if (hotUpdate[id]) {
/******/ 					result = getAffectedStuff(moduleId);
/******/ 				} else {
/******/ 					result = {
/******/ 						type: "disposed",
/******/ 						moduleId: id
/******/ 					};
/******/ 				}
/******/ 				/** @type {Error|false} */
/******/ 				var abortError = false;
/******/ 				var doApply = false;
/******/ 				var doDispose = false;
/******/ 				var chainInfo = "";
/******/ 				if (result.chain) {
/******/ 					chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 				}
/******/ 				switch (result.type) {
/******/ 					case "self-declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of self decline: " +
/******/ 									result.moduleId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "declined":
/******/ 						if (options.onDeclined) options.onDeclined(result);
/******/ 						if (!options.ignoreDeclined)
/******/ 							abortError = new Error(
/******/ 								"Aborted because of declined dependency: " +
/******/ 									result.moduleId +
/******/ 									" in " +
/******/ 									result.parentId +
/******/ 									chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "unaccepted":
/******/ 						if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 						if (!options.ignoreUnaccepted)
/******/ 							abortError = new Error(
/******/ 								"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 							);
/******/ 						break;
/******/ 					case "accepted":
/******/ 						if (options.onAccepted) options.onAccepted(result);
/******/ 						doApply = true;
/******/ 						break;
/******/ 					case "disposed":
/******/ 						if (options.onDisposed) options.onDisposed(result);
/******/ 						doDispose = true;
/******/ 						break;
/******/ 					default:
/******/ 						throw new Error("Unexception type " + result.type);
/******/ 				}
/******/ 				if (abortError) {
/******/ 					hotSetStatus("abort");
/******/ 					return Promise.reject(abortError);
/******/ 				}
/******/ 				if (doApply) {
/******/ 					appliedUpdate[moduleId] = hotUpdate[moduleId];
/******/ 					addAllToSet(outdatedModules, result.outdatedModules);
/******/ 					for (moduleId in result.outdatedDependencies) {
/******/ 						if (
/******/ 							Object.prototype.hasOwnProperty.call(
/******/ 								result.outdatedDependencies,
/******/ 								moduleId
/******/ 							)
/******/ 						) {
/******/ 							if (!outdatedDependencies[moduleId])
/******/ 								outdatedDependencies[moduleId] = [];
/******/ 							addAllToSet(
/******/ 								outdatedDependencies[moduleId],
/******/ 								result.outdatedDependencies[moduleId]
/******/ 							);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 				if (doDispose) {
/******/ 					addAllToSet(outdatedModules, [result.moduleId]);
/******/ 					appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Store self accepted outdated modules to require them later by the module system
/******/ 		var outdatedSelfAcceptedModules = [];
/******/ 		for (i = 0; i < outdatedModules.length; i++) {
/******/ 			moduleId = outdatedModules[i];
/******/ 			if (
/******/ 				installedModules[moduleId] &&
/******/ 				installedModules[moduleId].hot._selfAccepted &&
/******/ 				// removed self-accepted modules should not be required
/******/ 				appliedUpdate[moduleId] !== warnUnexpectedRequire
/******/ 			) {
/******/ 				outdatedSelfAcceptedModules.push({
/******/ 					module: moduleId,
/******/ 					errorHandler: installedModules[moduleId].hot._selfAccepted
/******/ 				});
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "dispose" phase
/******/ 		hotSetStatus("dispose");
/******/ 		Object.keys(hotAvailableFilesMap).forEach(function(chunkId) {
/******/ 			if (hotAvailableFilesMap[chunkId] === false) {
/******/ 				hotDisposeChunk(chunkId);
/******/ 			}
/******/ 		});
/******/
/******/ 		var idx;
/******/ 		var queue = outdatedModules.slice();
/******/ 		while (queue.length > 0) {
/******/ 			moduleId = queue.pop();
/******/ 			module = installedModules[moduleId];
/******/ 			if (!module) continue;
/******/
/******/ 			var data = {};
/******/
/******/ 			// Call dispose handlers
/******/ 			var disposeHandlers = module.hot._disposeHandlers;
/******/ 			for (j = 0; j < disposeHandlers.length; j++) {
/******/ 				cb = disposeHandlers[j];
/******/ 				cb(data);
/******/ 			}
/******/ 			hotCurrentModuleData[moduleId] = data;
/******/
/******/ 			// disable module (this disables requires from this module)
/******/ 			module.hot.active = false;
/******/
/******/ 			// remove module from cache
/******/ 			delete installedModules[moduleId];
/******/
/******/ 			// when disposing there is no need to call dispose handler
/******/ 			delete outdatedDependencies[moduleId];
/******/
/******/ 			// remove "parents" references from all children
/******/ 			for (j = 0; j < module.children.length; j++) {
/******/ 				var child = installedModules[module.children[j]];
/******/ 				if (!child) continue;
/******/ 				idx = child.parents.indexOf(moduleId);
/******/ 				if (idx >= 0) {
/******/ 					child.parents.splice(idx, 1);
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// remove outdated dependency from module children
/******/ 		var dependency;
/******/ 		var moduleOutdatedDependencies;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 						dependency = moduleOutdatedDependencies[j];
/******/ 						idx = module.children.indexOf(dependency);
/******/ 						if (idx >= 0) module.children.splice(idx, 1);
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Now in "apply" phase
/******/ 		hotSetStatus("apply");
/******/
/******/ 		hotCurrentHash = hotUpdateNewHash;
/******/
/******/ 		// insert new code
/******/ 		for (moduleId in appliedUpdate) {
/******/ 			if (Object.prototype.hasOwnProperty.call(appliedUpdate, moduleId)) {
/******/ 				modules[moduleId] = appliedUpdate[moduleId];
/******/ 			}
/******/ 		}
/******/
/******/ 		// call accept handlers
/******/ 		var error = null;
/******/ 		for (moduleId in outdatedDependencies) {
/******/ 			if (
/******/ 				Object.prototype.hasOwnProperty.call(outdatedDependencies, moduleId)
/******/ 			) {
/******/ 				module = installedModules[moduleId];
/******/ 				if (module) {
/******/ 					moduleOutdatedDependencies = outdatedDependencies[moduleId];
/******/ 					var callbacks = [];
/******/ 					for (i = 0; i < moduleOutdatedDependencies.length; i++) {
/******/ 						dependency = moduleOutdatedDependencies[i];
/******/ 						cb = module.hot._acceptedDependencies[dependency];
/******/ 						if (cb) {
/******/ 							if (callbacks.indexOf(cb) !== -1) continue;
/******/ 							callbacks.push(cb);
/******/ 						}
/******/ 					}
/******/ 					for (i = 0; i < callbacks.length; i++) {
/******/ 						cb = callbacks[i];
/******/ 						try {
/******/ 							cb(moduleOutdatedDependencies);
/******/ 						} catch (err) {
/******/ 							if (options.onErrored) {
/******/ 								options.onErrored({
/******/ 									type: "accept-errored",
/******/ 									moduleId: moduleId,
/******/ 									dependencyId: moduleOutdatedDependencies[i],
/******/ 									error: err
/******/ 								});
/******/ 							}
/******/ 							if (!options.ignoreErrored) {
/******/ 								if (!error) error = err;
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// Load self accepted modules
/******/ 		for (i = 0; i < outdatedSelfAcceptedModules.length; i++) {
/******/ 			var item = outdatedSelfAcceptedModules[i];
/******/ 			moduleId = item.module;
/******/ 			hotCurrentParents = [moduleId];
/******/ 			try {
/******/ 				__webpack_require__(moduleId);
/******/ 			} catch (err) {
/******/ 				if (typeof item.errorHandler === "function") {
/******/ 					try {
/******/ 						item.errorHandler(err);
/******/ 					} catch (err2) {
/******/ 						if (options.onErrored) {
/******/ 							options.onErrored({
/******/ 								type: "self-accept-error-handler-errored",
/******/ 								moduleId: moduleId,
/******/ 								error: err2,
/******/ 								originalError: err
/******/ 							});
/******/ 						}
/******/ 						if (!options.ignoreErrored) {
/******/ 							if (!error) error = err2;
/******/ 						}
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				} else {
/******/ 					if (options.onErrored) {
/******/ 						options.onErrored({
/******/ 							type: "self-accept-errored",
/******/ 							moduleId: moduleId,
/******/ 							error: err
/******/ 						});
/******/ 					}
/******/ 					if (!options.ignoreErrored) {
/******/ 						if (!error) error = err;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 		}
/******/
/******/ 		// handle errors in accept handlers and self accepted module load
/******/ 		if (error) {
/******/ 			hotSetStatus("fail");
/******/ 			return Promise.reject(error);
/******/ 		}
/******/
/******/ 		hotSetStatus("idle");
/******/ 		return new Promise(function(resolve) {
/******/ 			resolve(outdatedModules);
/******/ 		});
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {},
/******/ 			hot: hotCreateModule(moduleId),
/******/ 			parents: (hotCurrentParentsTemp = hotCurrentParents, hotCurrentParents = [], hotCurrentParentsTemp),
/******/ 			children: []
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, hotCreateRequire(moduleId));
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// __webpack_hash__
/******/ 	__webpack_require__.h = function() { return hotCurrentHash; };
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return hotCreateRequire(0)(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js!./":
/*!************************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js ***!
  \************************************************************************/
/*! exports provided: chunks, runtimeChunkIds, initialChunkIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chunks", function() { return chunks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runtimeChunkIds", function() { return runtimeChunkIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialChunkIds", function() { return initialChunkIds; });
const chunks = new Map([[10000, __webpack_require__.p + "client-legacy-main.js"], [10001, __webpack_require__.p + "client-legacy-runtime.js"], [10002, __webpack_require__.p + "client-legacy-vendor.js"], ["main", __webpack_require__.p + "client-main.js"], ["runtime", __webpack_require__.p + "client-runtime.js"], ["vendor", __webpack_require__.p + "client-vendor.js"]]);
const runtimeChunkIds = new Set([10001,"runtime"]);
const initialChunkIds = new Set([10000,10002,"main","vendor"]);

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/chunk-url-map-loader.js!./":
/*!***********************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/chunk-url-map-loader.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = new Map(
    [[10000,[["es5","client-legacy-main.js"]]],[10001,[["es5","client-legacy-runtime.js"]]],[10002,[["es5","client-legacy-vendor.js"]]],["main",[["es5","client-main.js"]]],["runtime",[["es5","client-runtime.js"]]],["vendor",[["es5","client-vendor.js"]]]].map(entry => { //[number, Map<string,string>]
      entry[1] = new Map(
        entry[1].map(group => {
          group[1] = __webpack_require__.p + group[1];
          return group;
        })
      );
      return entry;
    })
  );

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./node_modules/semantic-ui-css/semantic.min.css":
/*!****************************************************************************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./node_modules/semantic-ui-css/semantic.min.css ***!
  \****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "979091fc4831c0cdf5dcecb2746c982f.css";

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/css/app.css":
/*!**********************************************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/css/app.css ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "a199c1badaa6bf93422ea4a9db1b352e.css";

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/css/index.css":
/*!************************************************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/css/index.css ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "6be6c2aec87df78d3f11a55bab446e14.css";

/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/i18n-manifest-loader.js!./":
/*!***********************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/i18n-manifest-loader.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/fusion-cli/build/loaders/sync-chunk-ids-loader.js!./":
/*!************************************************************************!*\
  !*** ./node_modules/fusion-cli/build/loaders/sync-chunk-ids-loader.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [10001,10002,10000,"runtime","vendor","main"];

/***/ }),

/***/ "./node_modules/fusion-cli/build/modern-browser-versions.js":
/*!******************************************************************!*\
  !*** ./node_modules/fusion-cli/build/modern-browser-versions.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */
module.exports = {
  chrome: 61,
  safari: 12,
  firefox: 60
};

/***/ }),

/***/ "./node_modules/fusion-cli/build/server-error.js":
/*!*******************************************************!*\
  !*** ./node_modules/fusion-cli/build/server-error.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */
function renderError(error
/*: any */
= {}) {
  let displayError;

  if (error instanceof Error) {
    displayError = error;
  } else if (typeof error === 'string') {
    displayError = new Error(error);
  } else {
    displayError = new Error(error.message);
    displayError.stack = error.stack;
    displayError.name = error.name;
  }

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <title>Server error</title>
        <style>html {background:red;color:white;line-height:2;}</style>
      </head>
      <body>
        <pre>${(displayError.stack || '').replace(/\[\d\dm/gm, '')}</pre>
      </body>
    </html>
  `;
}

module.exports.renderError = renderError;

/***/ }),

/***/ "./node_modules/fusion-cli/entries/server-entry.js":
/*!*********************************************************!*\
  !*** ./node_modules/fusion-cli/entries/server-entry.js ***!
  \*********************************************************/
/*! exports provided: start */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "start", function() { return start; });
/* harmony import */ var source_map_support__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support */ "source-map-support");
/* harmony import */ var source_map_support__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER__ */ "./node_modules/fusion-cli/build/loaders/i18n-manifest-loader.js!./");
/* harmony import */ var _SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! http */ "http");
/* harmony import */ var http__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(http__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plugins_critical_chunk_ids_plugin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../plugins/critical-chunk-ids-plugin.js */ "./node_modules/fusion-cli/plugins/critical-chunk-ids-plugin.js");
/* harmony import */ var _plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../plugins/assets-plugin */ "./node_modules/fusion-cli/plugins/assets-plugin.js");
/* harmony import */ var _plugins_context_plugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../plugins/context-plugin */ "./node_modules/fusion-cli/plugins/context-plugin.js");
/* harmony import */ var _plugins_server_error_plugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../plugins/server-error-plugin */ "./node_modules/fusion-cli/plugins/server-error-plugin.js");
/* harmony import */ var _plugins_ssr_plugin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../plugins/ssr-plugin */ "./node_modules/fusion-cli/plugins/ssr-plugin.js");
/* harmony import */ var _lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/strip-prefix.js */ "./node_modules/fusion-cli/lib/strip-prefix.js");
/* harmony import */ var _lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_9__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/* eslint-disable import/first */

source_map_support__WEBPACK_IMPORTED_MODULE_0___default.a.install(); // $FlowFixMe

 // eslint-disable-line









let prefix = process.env.ROUTE_PREFIX;
let AssetsPlugin; // $FlowFixMe

const main = __webpack_require__(/*! __FUSION_ENTRY_PATH__ */ "./src/main.js"); // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies


let server = null;
const state = {
  serve: null
};
const initialize = main ? main.default || main : () => {
  throw new Error('App should export a function');
};
async function start({
  port,
  dir = '.'
}
/*: any */
) {
  AssetsPlugin = Object(_plugins_assets_plugin__WEBPACK_IMPORTED_MODULE_5__["default"])(dir); // TODO(#21): support https.createServer(credentials, listener);

  server = http__WEBPACK_IMPORTED_MODULE_2___default.a.createServer();
  await reload();
  server.on('request', (req, res) => {
    if (prefix) _lib_strip_prefix_js__WEBPACK_IMPORTED_MODULE_9___default()(req, prefix); // $FlowFixMe

    state.serve(req, res).catch(e => {
      // $FlowFixMe
      state.app.onerror(e);
    });
  });
  return new Promise(resolve => {
    server && server.listen(port, () => {
      resolve(server);
    });
  });
}

async function reload() {
  const app = await initialize();

  if (!(app instanceof fusion_core__WEBPACK_IMPORTED_MODULE_3___default.a)) {
    throw new Error('Application entry point did not return an App');
  }

  reverseRegister(app, _plugins_context_plugin__WEBPACK_IMPORTED_MODULE_6__["default"]);
  app.register(AssetsPlugin);
  app.register(fusion_core__WEBPACK_IMPORTED_MODULE_3__["SSRBodyTemplateToken"], _plugins_ssr_plugin__WEBPACK_IMPORTED_MODULE_8__["SSRBodyTemplate"]);
  app.register(fusion_core__WEBPACK_IMPORTED_MODULE_3__["CriticalChunkIdsToken"], _plugins_critical_chunk_ids_plugin_js__WEBPACK_IMPORTED_MODULE_4__["default"]);

  if (prefix) {
    app.register(fusion_core__WEBPACK_IMPORTED_MODULE_3__["RoutePrefixToken"], prefix);
  }

  if (server) {
    app.register(fusion_core__WEBPACK_IMPORTED_MODULE_3__["HttpServerToken"],
    /*#__PURE__*/
    Object(fusion_core__WEBPACK_IMPORTED_MODULE_3__["createPlugin"])({
      provides: () => server
    }));
  }

  if (true) {
    reverseRegister(app, _plugins_server_error_plugin__WEBPACK_IMPORTED_MODULE_7__["default"]);
  }

  state.serve = app.callback(); // $FlowFixMe

  state.app = app;
}

function reverseRegister(app, token, plugin) {
  app.register(token, plugin);
  app.plugins.unshift(app.plugins.pop());
} // $FlowFixMe


if (true) {
  // $FlowFixMe
  module.hot.accept(/*! __FUSION_ENTRY_PATH__ */ "./src/main.js", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { (reload)(__WEBPACK_OUTDATED_DEPENDENCIES__); }.bind(this)); // $FlowFixMe

  module.hot.accept(/*! __SECRET_BUNDLE_MAP_LOADER__ */ "./node_modules/fusion-cli/build/loaders/chunk-url-map-loader.js!./", function() {  }); // $FlowFixMe

  module.hot.accept(/*! __SECRET_SYNC_CHUNK_IDS_LOADER__ */ "./node_modules/fusion-cli/build/loaders/sync-chunk-ids-loader.js!./", function() {  }); // $FlowFixMe

  module.hot.accept(/*! __SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER__ */ "./node_modules/fusion-cli/build/loaders/i18n-manifest-loader.js!./", function() { /* harmony import */ _SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! __SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER__ */ "./node_modules/fusion-cli/build/loaders/i18n-manifest-loader.js!./");
/* harmony import */ _SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_SECRET_I18N_MANIFEST_INSTRUMENTATION_LOADER___WEBPACK_IMPORTED_MODULE_1__);
 });
}

/***/ }),

/***/ "./node_modules/fusion-cli/entries/server-public-path.js":
/*!***************************************************************!*\
  !*** ./node_modules/fusion-cli/entries/server-public-path.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! assert */ "assert");
/* harmony import */ var assert__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(assert__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! url */ "url");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_1__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/*::
declare var __webpack_public_path__: string;
*/


let prefix = load('ROUTE_PREFIX');

if (typeof prefix === 'string') {
  assert__WEBPACK_IMPORTED_MODULE_0___default()(!prefix.endsWith('/'), 'ROUTE_PREFIX must not end with /');
  assert__WEBPACK_IMPORTED_MODULE_0___default()(prefix.startsWith('/'), 'ROUTE_PREFIX must start with /');
}

let cdnUrl = load('CDN_URL');

if (typeof cdnUrl === 'string') {
  assert__WEBPACK_IMPORTED_MODULE_0___default()(!cdnUrl.endsWith('/'), 'CDN_URL must not end with /');
  assert__WEBPACK_IMPORTED_MODULE_0___default()(new url__WEBPACK_IMPORTED_MODULE_1__["URL"](cdnUrl), 'CDN_URL must be valid absolute URL');
}

let assetBasePath = '/_static/';

if (prefix) {
  assetBasePath = prefix + assetBasePath;
}

const dangerouslyExposeSourceMaps = load('DANGEROUSLY_EXPOSE_SOURCE_MAPS'); // eslint-disable-next-line

__webpack_require__.p = cdnUrl && !dangerouslyExposeSourceMaps ? cdnUrl + '/' : assetBasePath;

function load(key) {
  const value = process.env[key];

  if (value === null) {
    return void 0;
  }

  return value;
}

/***/ }),

/***/ "./node_modules/fusion-cli/get-compilation-metadata.js":
/*!*************************************************************!*\
  !*** ./node_modules/fusion-cli/get-compilation-metadata.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */

/*
This is where webpack-related things should be defined
*/
// custom loaders: see build/compiler.js
// $FlowFixMe
const chunkUrlMap = __webpack_require__(/*! __SECRET_BUNDLE_MAP_LOADER__ */ "./node_modules/fusion-cli/build/loaders/chunk-url-map-loader.js!./"); // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies
// $FlowFixMe


const syncChunks = __webpack_require__(/*! __SECRET_SYNC_CHUNK_IDS_LOADER__ */ "./node_modules/fusion-cli/build/loaders/sync-chunk-ids-loader.js!./"); // eslint-disable-line import/no-unresolved, import/no-extraneous-dependencies


module.exports = () => {
  return {
    syncChunks,
    chunkUrlMap
  };
};

/***/ }),

/***/ "./node_modules/fusion-cli/lib/strip-prefix.js":
/*!*****************************************************!*\
  !*** ./node_modules/fusion-cli/lib/strip-prefix.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow
 */

/* eslint-env node */
module.exports = function stripPrefix(req
/*: any */
, prefix
/*: string */
) {
  if (req.url.indexOf(prefix) === 0) {
    req.url = req.url.slice(prefix.length);

    if (req.url === '' || req.url.indexOf('?') === 0) {
      req.url = `/${req.url}`;
    }
  }
};

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/assets-plugin.js":
/*!**********************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/assets-plugin.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../build/loaders/chunk-manifest-loader.js */ "./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js!./");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var koa_mount__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-mount */ "koa-mount");
/* harmony import */ var koa_mount__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_mount__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-static */ "koa-static");
/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_4__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/*::
import type {AssetsDepsType, AssetsType} from './types.js';
*/
 // $FlowFixMe

 // eslint-disable-line




/* harmony default export */ __webpack_exports__["default"] = (function (dir
/*: string */
) {
  /* eslint-disable-next-line */
  return (
    /*#__PURE__*/
    Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])
    /*:: <AssetsDepsType, AssetsType> */
    ({
      deps: {
        RouteTags: fusion_core__WEBPACK_IMPORTED_MODULE_0__["RouteTagsToken"]
      },
      middleware: ({
        RouteTags
      }) => {
        const {
          baseAssetPath,
          env,
          dangerouslyExposeSourceMaps
        } = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["getEnv"])();
        const denyList = new Set();

        for (let chunk of _build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__["chunks"].values()) {
          if (false) {}
        }

        const assetMiddleware = koa_static__WEBPACK_IMPORTED_MODULE_4___default()(path__WEBPACK_IMPORTED_MODULE_2___default.a.resolve(dir, `.fusion/dist/${env}/client`), {
          // setting defer here tells the `serve` middleware to `await next` first before
          // setting the response. This allows composition with user middleware
          defer: true,
          setHeaders: res => {
            // $FlowFixMe
            if (false) {}

            res.setHeader('Timing-Allow-Origin', '*');
          }
        });
        return koa_mount__WEBPACK_IMPORTED_MODULE_3___default()(baseAssetPath, (ctx, next) => {
          RouteTags.from(ctx).name = 'static_asset';

          if (denyList.has(ctx.url)) {
            return next();
          }

          return assetMiddleware(ctx, next);
        });
      }
    })
  );
});

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/context-plugin.js":
/*!***********************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/context-plugin.js ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/*
This is where new ctx properties should be initialized
*/

/*::
import type {ContextDepsType, ContextType} from './types';
*/
const getCompilationMetaData = __webpack_require__(/*! ../get-compilation-metadata.js */ "./node_modules/fusion-cli/get-compilation-metadata.js");

const {
  createPlugin
} = __webpack_require__(/*! fusion-core */ "fusion-core");
/* eslint-disable-next-line */


/* harmony default export */ __webpack_exports__["default"] = (createPlugin
/*:: <ContextDepsType, ContextType> */
({
  middleware: () => {
    const compilationMetaData = getCompilationMetaData();
    return function middleware(ctx, next) {
      // webpack-related things
      ctx.syncChunks = compilationMetaData.syncChunks;
      ctx.chunkUrlMap = compilationMetaData.chunkUrlMap;
      return next();
    };
  }
}));

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/critical-chunk-ids-plugin.js":
/*!**********************************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/critical-chunk-ids-plugin.js ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../build/loaders/chunk-manifest-loader.js */ "./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js!./");
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/*::
import type {CriticalChunkIdsDepsType, CriticalChunkIdsType} from './types.js';
*/
 // $FlowFixMe

 // eslint-disable-line

/* eslint-disable-next-line */

var _default =
/*#__PURE__*/
Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])
/*:: <CriticalChunkIdsDepsType, CriticalChunkIdsType> */
({
  provides: () => {
    return {
      from: Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["memoize"])(() => {
        const chunkIds = new Set();

        for (const chunkId of _build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__["initialChunkIds"]) {
          chunkIds.add(chunkId);
        }

        return chunkIds;
      })
    };
  }
});

/* harmony default export */ __webpack_exports__["default"] = (_default);

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/server-error-plugin.js":
/*!****************************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/server-error-plugin.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _build_server_error__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../build/server-error */ "./node_modules/fusion-cli/build/server-error.js");
/* harmony import */ var _build_server_error__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_build_server_error__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_1__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/*::
import type {ServerErrorDepsType, ServerErrorType} from './types.js';
*/


/* eslint-disable-next-line */

var _default =
/*#__PURE__*/
Object(fusion_core__WEBPACK_IMPORTED_MODULE_1__["createPlugin"])
/*:: <ServerErrorDepsType, ServerErrorType> */
({
  middleware: () => async function middleware(ctx, next) {
    try {
      await next();
    } catch (err) {
      ctx.status = err.statusCode || err.status || 500;
      ctx.body = _build_server_error__WEBPACK_IMPORTED_MODULE_0___default.a.renderError(err);
    }
  }
});

/* harmony default export */ __webpack_exports__["default"] = (_default);

/***/ }),

/***/ "./node_modules/fusion-cli/plugins/ssr-plugin.js":
/*!*******************************************************!*\
  !*** ./node_modules/fusion-cli/plugins/ssr-plugin.js ***!
  \*******************************************************/
/*! exports provided: SSRBodyTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SSRBodyTemplate", function() { return SSRBodyTemplate; });
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../build/loaders/chunk-manifest-loader.js */ "./node_modules/fusion-cli/build/loaders/chunk-manifest-loader.js!./");
/* harmony import */ var _build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../build/modern-browser-versions.js */ "./node_modules/fusion-cli/build/modern-browser-versions.js");
/* harmony import */ var _build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2__);
/** Copyright (c) 2018 Uber Technologies, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * 
 */

/* eslint-env node */

/* global __webpack_public_path__ */

 // eslint-disable-line


/*::
import type {SSRBodyTemplateDepsType, SSRBodyTemplateType} from './types.js';
declare var __webpack_public_path__: string;
*/

/* eslint-disable-next-line */

const SSRBodyTemplate =
/*#__PURE__*/
Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])
/*:: <SSRBodyTemplateDepsType,SSRBodyTemplateType> */
({
  deps: {
    criticalChunkIds: fusion_core__WEBPACK_IMPORTED_MODULE_0__["CriticalChunkIdsToken"].optional,
    routePrefix: fusion_core__WEBPACK_IMPORTED_MODULE_0__["RoutePrefixToken"].optional
  },
  provides: ({
    criticalChunkIds,
    routePrefix
  }) => {
    const {
      dangerouslyExposeSourceMaps
    } = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["getEnv"])();
    return ctx => {
      const {
        htmlAttrs,
        bodyAttrs,
        title,
        head,
        body
      } = ctx.template;
      const safeAttrs = Object.keys(htmlAttrs).map(attrKey => {
        return ` ${Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["escape"])(attrKey)}="${Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["escape"])(htmlAttrs[attrKey])}"`;
      }).join('');
      const safeBodyAttrs = Object.keys(bodyAttrs).map(attrKey => {
        return ` ${Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["escape"])(attrKey)}="${Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["escape"])(bodyAttrs[attrKey])}"`;
      }).join('');
      const safeTitle = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["escape"])(title); // $FlowFixMe

      const safeHead = head.map(fusion_core__WEBPACK_IMPORTED_MODULE_0__["consumeSanitizedHTML"]).join(''); // $FlowFixMe

      const safeBody = body.map(fusion_core__WEBPACK_IMPORTED_MODULE_0__["consumeSanitizedHTML"]).join('');
      const coreGlobals = [`<script nonce="${ctx.nonce}">`, `window.performance && window.performance.mark && window.performance.mark('firstRenderStart');`, routePrefix && `__ROUTE_PREFIX__ = ${JSON.stringify(routePrefix)};`, `__FUSION_ASSET_PATH__ = ${JSON.stringify(__webpack_require__.p)};`, // consumed in src/entries/client-public-path.js
      `__NONCE__ = ${JSON.stringify(ctx.nonce)}`, // consumed in src/entries/client-public-path.js
      `</script>`].filter(Boolean).join('');
      const tokenCriticalChunkIds = criticalChunkIds ? criticalChunkIds.from(ctx) : new Set();
      const allCriticalChunkIds = new Set([..._build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__["initialChunkIds"], // For now, take union of both ctx and token
      ...ctx.preloadChunks, ...tokenCriticalChunkIds, // runtime chunk must be last script
      ..._build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__["runtimeChunkIds"]]);
      const legacyUrls = [];
      const modernUrls = [];

      for (let chunkId of allCriticalChunkIds) {
        const url = _build_loaders_chunk_manifest_loader_js___WEBPACK_IMPORTED_MODULE_1__["chunks"].get(chunkId);

        if (url.includes('client-legacy')) {
          legacyUrls.push(url);
        } else {
          modernUrls.push(url);
        }
      }

      const isModernBrowser = checkModuleSupport(ctx.useragent.browser);

      if (true) {
        if (!isModernBrowser && legacyUrls.length === 0) {
          return `<!DOCTYPE html>
<html>
<head>
</head>
<body style="padding:20vmin;font-family:sans-serif;font-size:16px;background:papayawhip">
<p>You are using a legacy browser but only the modern bundle has been built (legacy bundles are skipped by default when using <code style="display:inline">fusion dev</code>)
 or when using using <code style="display:inline">fusion build</code> with the --modernBuildOnly flag.</p>
<p>Please use a modern browser, <pre><code style="display:inline">fusion dev --forceLegacyBuild</code></pre> or
<pre><code style="display:inline">fusion build</code></pre> with no --modernBuildOnly flag to build the legacy bundle.</p>
<p>For more information, see the docs on <a href="https://github.com/fusionjs/fusion-cli/blob/master/docs/progressively-enhanced-bundles.md">progressively enhanced bundles</a>.</p>
</body>
</html>`;
        }
      }

      const criticalChunkUrls = isModernBrowser || legacyUrls.length === 0 ? modernUrls : legacyUrls;
      let criticalChunkScripts = [];
      let preloadHints = [];

      for (let url of criticalChunkUrls) {
        if (false) {}

        const crossoriginAttr = process.env.CDN_URL ? ' crossorigin="anonymous"' : '';
        preloadHints.push(`<link rel="preload" href="${url}" nonce="${ctx.nonce}"${crossoriginAttr} as="script"/>`);
        criticalChunkScripts.push(`<script defer src="${url}" nonce="${ctx.nonce}"${crossoriginAttr}></script>`);
      }

      return ['<!doctype html>', `<html${safeAttrs}>`, `<head>`, `<meta charset="utf-8" />`, `<title>${safeTitle}</title>`, `${preloadHints.join('')}${coreGlobals}${criticalChunkScripts.join('')}${safeHead}`, `</head>`, `<body${safeBodyAttrs}>${ctx.rendered}${safeBody}</body>`, '</html>'].join('');
    };
  }
});

/*
Edge must get transpiled classes due to:
- https://github.com/Microsoft/ChakraCore/issues/5030
- https://github.com/Microsoft/ChakraCore/issues/4663
- https://github.com/babel/babel/issues/8019
Rather than transpile classes in the modern bundles, Edge should be forced on the slow path

Safari 10.1 and 11 have some ES6 bugs:
- https://github.com/mishoo/UglifyJS2/issues/1753
- https://github.com/mishoo/UglifyJS2/issues/2344
- https://github.com/terser-js/terser/issues/117
Rather than enable terser workarounds that reduces minification for compliant browsers,
Safari 10.1 and 11 should be treated as legacy.
*/

function checkModuleSupport({
  name,
  version
}) {
  if (typeof version !== 'string') {
    return false;
  }

  if (name === 'Chrome' || name === 'Chrome Headless' || name === 'Chromium') {
    if (majorVersion(version) >= _build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2___default.a.chrome) return true;
  } else if (name === 'Mobile Safari' || name === 'Safari') {
    if (majorVersion(version) >= _build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2___default.a.safari) return true;
  } else if (name === 'Firefox') {
    if (majorVersion(version) >= _build_modern_browser_versions_js__WEBPACK_IMPORTED_MODULE_2___default.a.firefox) return true;
  }

  return false;
}

function majorVersion(version) {
  return parseInt(version.split('.')[0], 10);
}

function addWithMap(url) {
  if (url.endsWith('-with-map.js')) {
    return url;
  } else {
    return url.replace(/\.js$/, '-with-map.js');
  }
}

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!*****************************************!*\
  !*** (webpack)/hot/log-apply-result.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
module.exports = function (updatedModules, renewedModules) {
  var unacceptedModules = updatedModules.filter(function (moduleId) {
    return renewedModules && renewedModules.indexOf(moduleId) < 0;
  });

  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

  if (unacceptedModules.length > 0) {
    log("warning", "[HMR] The following modules couldn't be hot updated: (They would need a full reload!)");
    unacceptedModules.forEach(function (moduleId) {
      log("warning", "[HMR]  - " + moduleId);
    });
  }

  if (!renewedModules || renewedModules.length === 0) {
    log("info", "[HMR] Nothing hot updated.");
  } else {
    log("info", "[HMR] Updated modules:");
    renewedModules.forEach(function (moduleId) {
      if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
        var parts = moduleId.split("!");
        log.groupCollapsed("info", "[HMR]  - " + parts.pop());
        log("info", "[HMR]  - " + moduleId);
        log.groupEnd("info");
      } else {
        log("info", "[HMR]  - " + moduleId);
      }
    });
    var numberIds = renewedModules.every(function (moduleId) {
      return typeof moduleId === "number";
    });
    if (numberIds) log("info", "[HMR] Consider using the NamedModulesPlugin for module names.");
  }
};

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!****************************!*\
  !*** (webpack)/hot/log.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var logLevel = "info";

function dummy() {}

function shouldLog(level) {
  var shouldLog = logLevel === "info" && level === "info" || ["info", "warning"].indexOf(logLevel) >= 0 && level === "warning" || ["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error";
  return shouldLog;
}

function logGroup(logFn) {
  return function (level, msg) {
    if (shouldLog(level)) {
      logFn(msg);
    }
  };
}

module.exports = function (level, msg) {
  if (shouldLog(level)) {
    if (level === "info") {
      console.log(msg);
    } else if (level === "warning") {
      console.warn(msg);
    } else if (level === "error") {
      console.error(msg);
    }
  }
};
/* eslint-disable node/no-unsupported-features/node-builtins */


var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;
/* eslint-enable node/no-unsupported-features/node-builtins */

module.exports.group = logGroup(group);
module.exports.groupCollapsed = logGroup(groupCollapsed);
module.exports.groupEnd = logGroup(groupEnd);

module.exports.setLogLevel = function (level) {
  logLevel = level;
};

module.exports.formatError = function (err) {
  var message = err.message;
  var stack = err.stack;

  if (!stack) {
    return message;
  } else if (stack.indexOf(message) < 0) {
    return message + "\n" + stack;
  } else {
    return stack;
  }
};

/***/ }),

/***/ "./node_modules/webpack/hot/poll.js?1000":
/*!**********************************!*\
  !*** (webpack)/hot/poll.js?1000 ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__resourceQuery) {/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/*globals __resourceQuery */
if (true) {
  var hotPollInterval = +__resourceQuery.substr(1) || 10 * 60 * 1000;

  var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

  var checkForUpdate = function checkForUpdate(fromUpdate) {
    if (module.hot.status() === "idle") {
      module.hot.check(true).then(function (updatedModules) {
        if (!updatedModules) {
          if (fromUpdate) log("info", "[HMR] Update applied.");
          return;
        }

        __webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);

        checkForUpdate(true);
      }).catch(function (err) {
        var status = module.hot.status();

        if (["abort", "fail"].indexOf(status) >= 0) {
          log("warning", "[HMR] Cannot apply update.");
          log("warning", "[HMR] " + log.formatError(err));
          log("warning", "[HMR] You need to restart the application!");
        } else {
          log("warning", "[HMR] Update failed: " + log.formatError(err));
        }
      });
    }
  };

  setInterval(checkForUpdate, hotPollInterval);
} else {}
/* WEBPACK VAR INJECTION */}.call(this, "?1000"))

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-react */ "fusion-react");
/* harmony import */ var fusion_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "fusion-plugin-styletron-react");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fusion-plugin-react-helmet-async */ "fusion-plugin-react-helmet-async");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _plugins_core_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./plugins/core/database */ "./src/plugins/core/database.js");
/* harmony import */ var _plugins_home_api_question__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./plugins/home/api/question */ "./src/plugins/home/api/question.js");
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./root.js */ "./src/root.js");







/* harmony default export */ __webpack_exports__["default"] = (() => {
  const app = new fusion_react__WEBPACK_IMPORTED_MODULE_0___default.a(_root_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

  if (true) {
    app.register(_plugins_core_database__WEBPACK_IMPORTED_MODULE_4__["DatabaseToken"], _plugins_core_database__WEBPACK_IMPORTED_MODULE_4__["default"]);
    app.middleware(__webpack_require__(/*! koa-bodyparser */ "koa-bodyparser")());
    app.register(_plugins_home_api_question__WEBPACK_IMPORTED_MODULE_5__["QuestionAPIToken"], _plugins_home_api_question__WEBPACK_IMPORTED_MODULE_5__["default"]);
  }

  app.register(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_3___default.a);
  app.register(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_2___default.a);
  app.register(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default.a);
  return app;
});

/***/ }),

/***/ "./src/pages/home-xxx.js":
/*!*******************************!*\
  !*** ./src/pages/home-xxx.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-styletron-react */ "fusion-plugin-styletron-react");
/* harmony import */ var fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/src/pages/home-xxx.js";


const Center = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  fontFamily: 'HelveticaNeue-Light, Arial',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%'
});
Center.displayName = "Center";
const FusionStyle = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  fontSize: '80px',
  color: 'rgba(0,0,0,.8)',
  paddingRight: '30px',
  display: 'flex'
});
FusionStyle.displayName = "FusionStyle";
const FullHeightDiv = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  height: '100%',
  backgroundColor: '#FFFFFF'
});
FullHeightDiv.displayName = "FullHeightDiv";
const Circle = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('div', {
  height: '180px',
  width: '180px',
  marginTop: '20px',
  backgroundColor: 'white',
  ':hover': {
    backgroundColor: '#f0f8fa'
  },
  border: '10px solid #4db5d9',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
});
Circle.displayName = "Circle";
const GettingStartedLink = Object(fusion_plugin_styletron_react__WEBPACK_IMPORTED_MODULE_1__["styled"])('a', {
  textDecoration: 'none',
  color: '#4db5d9',
  fontSize: '18px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center',
  height: '100%'
});
GettingStartedLink.displayName = "GettingStartedLink";

const Home = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FullHeightDiv, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, `
        html,body,#root{height:100%;}
        html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-tap-highlight-color:rgba(0,0,0,0);}
        body{margin:0;}
        button::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0;}
        input::-webkit-inner-spin-button,input::-webkit-outer-spin-button,input::-webkit-search-cancel-button,input::-webkit-search-decoration,input::-webkit-search-results-button,input::-webkit-search-results-decoration{display:none;}
        `), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(FusionStyle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, "Fusion.js"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Center, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Circle, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(GettingStartedLink, {
  href: "https://fusionjs.com/docs/overview",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, "Let's Get Started")))));

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/pages/pageNotFound.js":
/*!***********************************!*\
  !*** ./src/pages/pageNotFound.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/src/pages/pageNotFound.js";



const PageNotFound = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_1__["NotFound"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, "404"));

/* harmony default export */ __webpack_exports__["default"] = (PageNotFound);

/***/ }),

/***/ "./src/plugins/core/database.js":
/*!**************************************!*\
  !*** ./src/plugins/core/database.js ***!
  \**************************************/
/*! exports provided: DatabaseToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatabaseToken", function() { return DatabaseToken; });
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);

const DatabaseToken = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createToken"])('DatabaseToken');

var _default =
/*#__PURE__*/
Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  provides: () => {
    const DataStore = __webpack_require__(/*! nedb */ "nedb");

    return {
      questions: () => {
        const db = new DataStore({
          filename: './database/questions.db',
          autoload: true
        });
        return db;
      },
      rules: () => {
        const db = new DataStore({
          filename: '../../../database/rules.db',
          autoload: true
        });
        return db;
      }
    };
  }
});

/* harmony default export */ __webpack_exports__["default"] = (_default);

/***/ }),

/***/ "./src/plugins/home/api/question.js":
/*!******************************************!*\
  !*** ./src/plugins/home/api/question.js ***!
  \******************************************/
/*! exports provided: QuestionAPIToken, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuestionAPIToken", function() { return QuestionAPIToken; });
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_database__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core/database */ "./src/plugins/core/database.js");


const QuestionAPIToken = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createToken"])('QuestionAPIToken');

var _default =
/*#__PURE__*/
Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["createPlugin"])({
  deps: {
    db: _core_database__WEBPACK_IMPORTED_MODULE_1__["DatabaseToken"]
  },
  provides: ({
    db
  }) => ({
    questions: db.questions()
  }),
  middleware: ({
    db
  }, {
    questions
  }) => async (ctx, next) => {
    if (ctx.path === '/api/questions') {
      if (ctx.method === 'POST') {
        const rules = [];
        rules.push({
          number: 1,
          code: 'Tis',
          question: 'Is the tumor in situ ?',
          answers: {
            true: 'Tis',
            false: '2'
          },
          type: 'doctor'
        }, {
          number: 2,
          code: 'T1',
          question: 'Is the tumor thickness less than equeal 1.0 mm ?',
          answers: {
            true: '3',
            false: '5'
          },
          type: 'doctor'
        }, {
          number: 3,
          code: 'T1a',
          question: 'Is the tumor tickness less than 0.8 mm and without ulceration ?',
          answers: {
            true: 'T1a',
            false: 'T1b'
          },
          type: 'doctor'
        }, {
          number: 5,
          code: 'T2',
          question: 'Is the tumor thickness between 1.0 mm and 2.0 mm ?',
          answers: {
            true: '6',
            false: '7'
          },
          type: 'doctor'
        }, {
          number: 6,
          code: '',
          question: 'Is there any ulceration ?',
          answers: {
            true: 'T2b',
            false: 'T2a'
          },
          type: 'doctor'
        }, {
          number: 7,
          code: 'T3',
          question: 'Is the tumor thickness between 2.0 mm and 4.0 mm ?',
          answers: {
            true: '9',
            false: '8'
          },
          type: 'doctor'
        }, {
          number: 8,
          code: '',
          question: 'Is there any ulceration ?',
          answers: {
            true: 'T3b',
            false: 'T3a'
          },
          type: 'doctor'
        }, {
          number: 9,
          code: 'T4',
          question: 'Is the tumor thickness more than 4.0 ?',
          answers: {
            true: '10',
            false: '10'
          },
          type: 'doctor'
        }, {
          number: 10,
          code: '',
          question: 'Is there any ulceration ?',
          answers: {
            true: 'T4b',
            false: 'T4a'
          },
          type: 'doctor'
        }, {
          number: 11,
          code: 'N0',
          question: 'Is there any regional lymph nodes metastases detected ?',
          answers: {
            true: '12',
            false: 'N0'
          },
          type: 'doctor'
        }, {
          number: 12,
          code: 'N1',
          question: 'Is there one tumor involved nodes ?',
          answers: {
            true: 'N1',
            false: '13'
          },
          type: 'doctor'
        }, {
          number: 13,
          code: 'N2',
          question: 'Are there 2 or 3 tumors involved nodes ?',
          answers: {
            true: 'N2',
            false: 'N3'
          },
          type: 'doctor'
        }, {
          number: 15,
          code: 'M0',
          question: 'Is there evidence of distance metastases ?',
          answers: {
            true: 'M1',
            false: 'M0'
          },
          type: 'doctor'
        });
        const newData = await questions.insert(rules);
        console.log('newData', newData);
        ctx.response.status = 201;
        ctx.response.body = newData;
      }
    }

    return next();
  }
});

/* harmony default export */ __webpack_exports__["default"] = (_default);

/***/ }),

/***/ "./src/plugins/home/components/main.js":
/*!*********************************************!*\
  !*** ./src/plugins/home/components/main.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/src/plugins/home/components/main.js";




const Home = () => {
  const handleOnClick = async () => {
    const data = await isomorphic_fetch__WEBPACK_IMPORTED_MODULE_2___default()('/api/questions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    console.log('data', data);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    onClick: handleOnClick,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, "Click Here"));
};

/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "./src/root.js":
/*!*********************!*\
  !*** ./src/root.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fusion-core */ "fusion-core");
/* harmony import */ var fusion_core__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fusion_core__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fusion-plugin-react-helmet-async */ "fusion-plugin-react-helmet-async");
/* harmony import */ var fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! fusion-plugin-react-router */ "fusion-plugin-react-router");
/* harmony import */ var fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! semantic-ui-react */ "semantic-ui-react");
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _pages_home_xxx_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/home-xxx.js */ "./src/pages/home-xxx.js");
/* harmony import */ var _plugins_home_components_main_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./plugins/home/components/main.js */ "./src/plugins/home/components/main.js");
/* harmony import */ var _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/pageNotFound.js */ "./src/pages/pageNotFound.js");
var _jsxFileName = "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/src/root.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }









const cssBasic = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["assetUrl"])(__webpack_require__(/*! __SECRET_FILE_LOADER__?assetUrl=true!../node_modules/semantic-ui-css/semantic.min.css */ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./node_modules/semantic-ui-css/semantic.min.css"));
const cssLayoutBasic = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["assetUrl"])(__webpack_require__(/*! __SECRET_FILE_LOADER__?assetUrl=true!./css/index.css */ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/css/index.css"));
const cssLayout = Object(fusion_core__WEBPACK_IMPORTED_MODULE_0__["assetUrl"])(__webpack_require__(/*! __SECRET_FILE_LOADER__?assetUrl=true!./css/app.css */ "./node_modules/fusion-cli/build/loaders/file-loader.js?assetUrl=true!./src/css/app.css"));

class MobileMenuItems extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      dropdownMenuStyle: {
        display: "none"
      }
    });

    _defineProperty(this, "handleToggleDropdownMenu", () => {
      let newState = Object.assign({}, this.state);

      if (newState.dropdownMenuStyle.display === "none") {
        newState.dropdownMenuStyle = {
          display: "flex"
        };
      } else {
        newState.dropdownMenuStyle = {
          display: "none"
        };
      }

      this.setState(newState);
    });

    _defineProperty(this, "render", () => {
      return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
        padded: true,
        className: "mobile only",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
        borderless: true,
        fluid: true,
        size: "huge",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        header: true,
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "Project Name"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Menu, {
        position: "right",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Button"], {
        icon: true,
        basic: true,
        toggle: true,
        onClick: this.handleToggleDropdownMenu,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Icon"], {
        name: "content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
        vertical: true,
        borderless: true,
        fluid: true,
        style: this.state.dropdownMenuStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        active: true,
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Home"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "About"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"], {
        text: "Dropdown",
        className: "item",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Menu, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        },
        __self: this
      }, "Action"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        },
        __self: this
      }, "Another action"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        },
        __self: this
      }, "Something else here"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Divider, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Header, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        },
        __self: this
      }, "Navbar header"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, "Seperated link"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Dropdown"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "One more seperated link"))), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, "Default"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        active: true,
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, "Static top"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
        as: "a",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, "Fixed top"))));
    });
  }

}

const MenuItems = () => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Grid"], {
  padded: true,
  className: "tablet computer only",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"], {
  borderless: true,
  fluid: true,
  size: "huge",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
  header: true,
  as: "a",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, "Melanoma App"), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, "Home")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/predict",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, "Predict")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/info",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, "Info")), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Menu"].Item, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, "About")))));

const DynamicContent = () => react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  exact: true,
  path: "/",
  component: _plugins_home_components_main_js__WEBPACK_IMPORTED_MODULE_6__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  exact: true,
  path: "/home2",
  component: _pages_home_xxx_js__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_router__WEBPACK_IMPORTED_MODULE_2__["Route"], {
  component: _pages_pageNotFound_js__WEBPACK_IMPORTED_MODULE_7__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}));

class App extends react__WEBPACK_IMPORTED_MODULE_3__["Component"] {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 124
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(fusion_plugin_react_helmet_async__WEBPACK_IMPORTED_MODULE_1__["Helmet"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 125
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
      rel: "stylesheet",
      href: cssBasic,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
      rel: "stylesheet",
      href: cssLayoutBasic,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 127
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("link", {
      rel: "stylesheet",
      href: cssLayout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 128
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MenuItems, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(MobileMenuItems, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 131
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_4__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
      className: "dynamic-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(DynamicContent, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(App, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}));

/***/ }),

/***/ 0:
/*!**************************************************************************************************************************************************!*\
  !*** multi ./node_modules/fusion-cli/entries/server-public-path.js (webpack)/hot/poll.js?1000 ./node_modules/fusion-cli/entries/server-entry.js ***!
  \**************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-cli/entries/server-public-path.js */"./node_modules/fusion-cli/entries/server-public-path.js");
__webpack_require__(/*! /Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/webpack/hot/poll.js?1000 */"./node_modules/webpack/hot/poll.js?1000");
module.exports = __webpack_require__(/*! /Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-cli/entries/server-entry.js */"./node_modules/fusion-cli/entries/server-entry.js");


/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),

/***/ "fusion-core":
/*!**********************************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-core/dist/index.js" ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-core/dist/index.js");

/***/ }),

/***/ "fusion-plugin-react-helmet-async":
/*!****************************************************************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-plugin-react-helmet-async/dist-node-cjs/index.js" ***!
  \****************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-plugin-react-helmet-async/dist-node-cjs/index.js");

/***/ }),

/***/ "fusion-plugin-react-router":
/*!**********************************************************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-plugin-react-router/dist-node-cjs/index.js" ***!
  \**********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-plugin-react-router/dist-node-cjs/index.js");

/***/ }),

/***/ "fusion-plugin-styletron-react":
/*!*************************************************************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-plugin-styletron-react/dist-node-cjs/index.js" ***!
  \*************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-plugin-styletron-react/dist-node-cjs/index.js");

/***/ }),

/***/ "fusion-react":
/*!***********************************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-react/dist/index.js" ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/fusion-react/dist/index.js");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),

/***/ "isomorphic-fetch":
/*!*******************************************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/isomorphic-fetch/fetch-npm-node.js" ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/isomorphic-fetch/fetch-npm-node.js");

/***/ }),

/***/ "koa-bodyparser":
/*!********************************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/koa-bodyparser/index.js" ***!
  \********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/koa-bodyparser/index.js");

/***/ }),

/***/ "koa-mount":
/*!***************************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/koa-mount/index.js" ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/koa-mount/index.js");

/***/ }),

/***/ "koa-static":
/*!****************************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/koa-static/index.js" ***!
  \****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/koa-static/index.js");

/***/ }),

/***/ "nedb":
/*!**********************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/nedb/index.js" ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/nedb/index.js");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!***********************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/react/index.js" ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/react/index.js");

/***/ }),

/***/ "semantic-ui-react":
/*!*************************************************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/semantic-ui-react/dist/commonjs/index.js" ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/semantic-ui-react/dist/commonjs/index.js");

/***/ }),

/***/ "source-map-support":
/*!*************************************************************************************************************************************!*\
  !*** external "/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/source-map-support/source-map-support.js" ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("/Users/sapi_mabur/Documents/playground/bangkit/bangkit-final/node_modules/source-map-support/source-map-support.js");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=server-main.js.map