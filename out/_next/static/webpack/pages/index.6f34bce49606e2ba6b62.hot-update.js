webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_ethereum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/ethereum.js */ \"./lib/ethereum.js\");\n/* harmony import */ var _components_layout_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/Header.js */ \"./pages/components/layout/Header.js\");\n/* harmony import */ var _components_layout_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/Footer.js */ \"./pages/components/layout/Footer.js\");\n\n\nvar _jsxFileName = \"/home/seven/Desktop/TradingTigers/airdrop/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const {\n    0: loadingMessage,\n    1: setLoadingMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('Please Connect Your Metamask!');\n  const {\n    0: claimMessage,\n    1: setClaimMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    payload: undefined,\n    type: undefined\n  });\n  const {\n    0: airdrop,\n    1: setAirdrop\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined);\n  const {\n    0: accounts,\n    1: setAccounts\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const init = async () => {\n      try {\n        const {\n          airdrop,\n          accounts\n        } = await Object(_lib_ethereum_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        setAirdrop(airdrop);\n        setAccounts(accounts);\n        setLoading(false);\n      } catch (e) {\n        setLoadingMessage(e);\n      }\n    };\n\n    init();\n  }, []);\n\n  const claimTokens = async e => {\n    e.preventDefault();\n    const address = e.target.elements[0].value.trim().toLowerCase();\n    setClaimMessage({\n      type: 'primary',\n      payload: 'Checking your address in whitelist...'\n    });\n\n    try {\n      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/authorization', {\n        address\n      });\n      setClaimMessage({\n        type: 'primary',\n        payload: `\n          Claiming token from Airdrop contract...\n          Address: ${response.data.address}\n          Total Amount: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.totalAllocation.toString())} TIGS\n          -> Basic: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.basicAllocation.toString())} TIGS\n          -> Bonus: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.bonusAllocation.toString())} TIGS\n        `\n      });\n      const receipt = await airdrop.methods.claimTokens(response.data.address, response.data.totalAllocation.toString(), response.data.signature).send({\n        from: accounts[0]\n      });\n      setClaimMessage({\n        type: 'primary',\n        payload: `Airdrop success!\nTokens successfully in tx ${receipt.transactionHash} \nAddress: ${response.data.address}\nTotal Amount: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.totalAllocation.toString())} TIGS\n-> Basic: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.basicAllocation.toString())} TIGS\n-> Bonus: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.bonusAllocation.toString())} TIGS\n        `\n      });\n    } catch (e) {\n      if (e.message === 'Request failed with status code 401') {\n        console.log(e);\n        setClaimMessage({\n          type: 'danger',\n          payload: `Airdrop failed Reason:\nAddress not registered`\n        });\n        return;\n      }\n\n      setClaimMessage({\n        type: 'danger',\n        payload: `Airdrop failed Reason:\nAirdrop already sent to ${address}`\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"body-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Header_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      navPosition: \"right\",\n      className: \"reveal-from-bottom is-revealed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"site-content\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"features-split section illustration-section-01\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card-body card-gray\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n              className: \"card-title\",\n              children: \"How to Get in the Airdrop?\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-text\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: [\"Step 1: Join our \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                    target: \"_blank\",\n                    href: \"https://t.me/tradingtigerschat\",\n                    children: \"Telegram chat!\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 118,\n                    columnNumber: 40\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 118,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 2: Write in the chat \\\"/JoinAirdrop 0x3a0E4Fc1Ff11b... (your BSC Address!)\\\"\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 119,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n              className: \"card-title\",\n              children: \"Claim your tokens!\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-text\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Attention: Those who have already registered on the old Airdrop page can now claim their tokens here.\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 125,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 126,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 1: Make sure you have configured the BSC network with Metamask\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 127,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 2: Enter your BSC address and click on Claim TIGS.\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 128,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 3: Confirm the transaction to claim your TIGS tokens. This will send a transaction to the Airdrop smart contract\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 129,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 124,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"features-split section illustration-section-01\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container text-center \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"col-sm-12 card-gray\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-gray\",\n              children: loadingMessage\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 9\n      }, this) : null, loading ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"testimonial section illustration-section-02\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"testimonial-inner section-inner\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n              className: \"form-inline\",\n              onSubmit: e => claimTokens(e),\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"text\",\n                className: \"form-control mb-2 mr-sm-2 col-sm-8\",\n                placeholder: \"BSC Address\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 152,\n                columnNumber: 13\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                type: \"submit\",\n                className: \"btn button-primary mb-2 col-sm-8\",\n                children: \"Claim TIGS\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 157,\n                columnNumber: 13\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 151,\n              columnNumber: 11\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 150,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: typeof claimMessage.payload !== 'undefined' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: `alert alert-${claimMessage.type}`,\n              role: \"alert\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                style: {\n                  whiteSpace: 'pre'\n                },\n                children: claimMessage.payload\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 168,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 167,\n              columnNumber: 15\n            }, this) : ''\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 165,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Footer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"RIECeCS+nRDeFGwEcGdN+XBgj+o=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsImxvYWRpbmdNZXNzYWdlIiwic2V0TG9hZGluZ01lc3NhZ2UiLCJjbGFpbU1lc3NhZ2UiLCJzZXRDbGFpbU1lc3NhZ2UiLCJwYXlsb2FkIiwidW5kZWZpbmVkIiwidHlwZSIsImFpcmRyb3AiLCJzZXRBaXJkcm9wIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsInVzZUVmZmVjdCIsImluaXQiLCJnZXRCbG9ja2NoYWluIiwiZSIsImNsYWltVG9rZW5zIiwicHJldmVudERlZmF1bHQiLCJhZGRyZXNzIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlIiwiYXhpb3MiLCJwb3N0IiwiZGF0YSIsIldlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJ0b3RhbEFsbG9jYXRpb24iLCJ0b1N0cmluZyIsImJhc2ljQWxsb2NhdGlvbiIsImJvbnVzQWxsb2NhdGlvbiIsInJlY2VpcHQiLCJtZXRob2RzIiwic2lnbmF0dXJlIiwic2VuZCIsImZyb20iLCJ0cmFuc2FjdGlvbkhhc2giLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Ysc0RBQVEsQ0FBQywrQkFBRCxDQUFwRDtBQUNBLFFBQU07QUFBQSxPQUFDRyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0os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UixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcbmltcG9ydCBXZWIzIGZyb20gJ3dlYjMnO1xuaW1wb3J0IGdldEJsb2NrY2hhaW4gZnJvbSAnLi4vbGliL2V0aGVyZXVtLmpzJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9IZWFkZXIuanMnO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0Zvb3Rlci5qcyc7XG5cblxuXG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtsb2FkaW5nTWVzc2FnZSwgc2V0TG9hZGluZ01lc3NhZ2VdID0gdXNlU3RhdGUoJ1BsZWFzZSBDb25uZWN0IFlvdXIgTWV0YW1hc2shJyk7XG4gIGNvbnN0IFtjbGFpbU1lc3NhZ2UsIHNldENsYWltTWVzc2FnZV0gPSB1c2VTdGF0ZSh7XG4gICAgcGF5bG9hZDogdW5kZWZpbmVkLFxuICAgIHR5cGU6IHVuZGVmaW5lZFxuICB9KTtcbiAgY29uc3QgW2FpcmRyb3AsIHNldEFpcmRyb3BdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcbiAgY29uc3QgW2FjY291bnRzLCBzZXRBY2NvdW50c10gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgaW5pdCA9IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7IFxuICAgICAgICBjb25zdCB7IGFpcmRyb3AsIGFjY291bnRzIH0gPSBhd2FpdCBnZXRCbG9ja2NoYWluKCk7XG4gICAgICAgIHNldEFpcmRyb3AoYWlyZHJvcCk7XG4gICAgICAgIHNldEFjY291bnRzKGFjY291bnRzKTtcbiAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgc2V0TG9hZGluZ01lc3NhZ2UoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBpbml0KCk7XG4gIH0sIFtdKTtcblxuXG5cblxuICBjb25zdCBjbGFpbVRva2VucyA9IGFzeW5jIGUgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBhZGRyZXNzID0gZS50YXJnZXQuZWxlbWVudHNbMF0udmFsdWUudHJpbSgpLnRvTG93ZXJDYXNlKCk7XG4gICAgc2V0Q2xhaW1NZXNzYWdlKHtcbiAgICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICAgIHBheWxvYWQ6ICdDaGVja2luZyB5b3VyIGFkZHJlc3MgaW4gd2hpdGVsaXN0Li4uJ1xuICAgIH0pO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXG4gICAgICAgICcvYXBpL2F1dGhvcml6YXRpb24nLCBcbiAgICAgICAge1xuICAgICAgICAgIGFkZHJlc3NcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIHNldENsYWltTWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICAgICAgcGF5bG9hZDogYFxuICAgICAgICAgIENsYWltaW5nIHRva2VuIGZyb20gQWlyZHJvcCBjb250cmFjdC4uLlxuICAgICAgICAgIEFkZHJlc3M6ICR7cmVzcG9uc2UuZGF0YS5hZGRyZXNzfVxuICAgICAgICAgIFRvdGFsIEFtb3VudDogJHtXZWIzLnV0aWxzLmZyb21XZWkocmVzcG9uc2UuZGF0YS50b3RhbEFsbG9jYXRpb24udG9TdHJpbmcoKSl9IFRJR1NcbiAgICAgICAgICAtPiBCYXNpYzogJHtXZWIzLnV0aWxzLmZyb21XZWkocmVzcG9uc2UuZGF0YS5iYXNpY0FsbG9jYXRpb24udG9TdHJpbmcoKSl9IFRJR1NcbiAgICAgICAgICAtPiBCb251czogJHtXZWIzLnV0aWxzLmZyb21XZWkocmVzcG9uc2UuZGF0YS5ib251c0FsbG9jYXRpb24udG9TdHJpbmcoKSl9IFRJR1NcbiAgICAgICAgYFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZWNlaXB0ID0gYXdhaXQgYWlyZHJvcFxuICAgICAgICAubWV0aG9kc1xuICAgICAgICAuY2xhaW1Ub2tlbnMoXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5hZGRyZXNzLCBcbiAgICAgICAgICByZXNwb25zZS5kYXRhLnRvdGFsQWxsb2NhdGlvbi50b1N0cmluZygpLFxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEuc2lnbmF0dXJlXG4gICAgICAgIClcbiAgICAgICAgLnNlbmQoe2Zyb206IGFjY291bnRzWzBdfSk7XG4gICAgICBzZXRDbGFpbU1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAncHJpbWFyeScsXG4gICAgICAgIHBheWxvYWQ6IGBBaXJkcm9wIHN1Y2Nlc3MhXG5Ub2tlbnMgc3VjY2Vzc2Z1bGx5IGluIHR4ICR7cmVjZWlwdC50cmFuc2FjdGlvbkhhc2h9IFxuQWRkcmVzczogJHtyZXNwb25zZS5kYXRhLmFkZHJlc3N9XG5Ub3RhbCBBbW91bnQ6ICR7V2ViMy51dGlscy5mcm9tV2VpKHJlc3BvbnNlLmRhdGEudG90YWxBbGxvY2F0aW9uLnRvU3RyaW5nKCkpfSBUSUdTXG4tPiBCYXNpYzogJHtXZWIzLnV0aWxzLmZyb21XZWkocmVzcG9uc2UuZGF0YS5iYXNpY0FsbG9jYXRpb24udG9TdHJpbmcoKSl9IFRJR1Ncbi0+IEJvbnVzOiAke1dlYjMudXRpbHMuZnJvbVdlaShyZXNwb25zZS5kYXRhLmJvbnVzQWxsb2NhdGlvbi50b1N0cmluZygpKX0gVElHU1xuICAgICAgICBgXG4gICAgICB9KTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGlmKGUubWVzc2FnZSA9PT0gJ1JlcXVlc3QgZmFpbGVkIHdpdGggc3RhdHVzIGNvZGUgNDAxJykge1xuICAgICAgICBjb25zb2xlLmxvZyhlKVxuICAgICAgICBzZXRDbGFpbU1lc3NhZ2Uoe1xuICAgICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICAgIHBheWxvYWQ6IGBBaXJkcm9wIGZhaWxlZCBSZWFzb246XG5BZGRyZXNzIG5vdCByZWdpc3RlcmVkYFxuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2V0Q2xhaW1NZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgIHBheWxvYWQ6IGBBaXJkcm9wIGZhaWxlZCBSZWFzb246XG5BaXJkcm9wIGFscmVhZHkgc2VudCB0byAke2FkZHJlc3N9YFxuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG5cblxuXG5cblxuXG5cblxuICByZXR1cm4gKFxuICAgIFxuICAgIDxkaXYgY2xhc3NOYW1lPSdib2R5LXdyYXAnPlxuICAgICAgPEhlYWRlciBuYXZQb3NpdGlvbj1cInJpZ2h0XCIgY2xhc3NOYW1lPVwicmV2ZWFsLWZyb20tYm90dG9tIGlzLXJldmVhbGVkXCIgLz5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT0nc2l0ZS1jb250ZW50Jz5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZXMtc3BsaXQgc2VjdGlvbiBpbGx1c3RyYXRpb24tc2VjdGlvbi0wMVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtYm9keSBjYXJkLWdyYXlcIj5cbiAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5Ib3cgdG8gR2V0IGluIHRoZSBBaXJkcm9wPzwvaDU+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgPGxpPlN0ZXAgMTogSm9pbiBvdXIgPGEgdGFyZ2V0PVwiX2JsYW5rXCJocmVmPVwiaHR0cHM6Ly90Lm1lL3RyYWRpbmd0aWdlcnNjaGF0XCI+VGVsZWdyYW0gY2hhdCE8L2E+PC9saT5cbiAgICAgICAgICAgICAgICAgIDxsaT5TdGVwIDI6IFdyaXRlIGluIHRoZSBjaGF0IFwiL0pvaW5BaXJkcm9wIDB4M2EwRTRGYzFGZjExYi4uLiAoeW91ciBCU0MgQWRkcmVzcyEpXCI8L2xpPlxuICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+Q2xhaW0geW91ciB0b2tlbnMhPC9oNT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgICAgPHVsPlxuICAgICAgICAgICAgICAgICAgICA8bGk+QXR0ZW50aW9uOiBUaG9zZSB3aG8gaGF2ZSBhbHJlYWR5IHJlZ2lzdGVyZWQgb24gdGhlIG9sZCBBaXJkcm9wIHBhZ2UgY2FuIG5vdyBjbGFpbSB0aGVpciB0b2tlbnMgaGVyZS48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8cD48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5TdGVwIDE6IE1ha2Ugc3VyZSB5b3UgaGF2ZSBjb25maWd1cmVkIHRoZSBCU0MgbmV0d29yayB3aXRoIE1ldGFtYXNrPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlN0ZXAgMjogRW50ZXIgeW91ciBCU0MgYWRkcmVzcyBhbmQgY2xpY2sgb24gQ2xhaW0gVElHUy48L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+U3RlcCAzOiBDb25maXJtIHRoZSB0cmFuc2FjdGlvbiB0byBjbGFpbSB5b3VyIFRJR1MgdG9rZW5zLiBUaGlzIHdpbGwgc2VuZCBhIHRyYW5zYWN0aW9uIHRvIHRoZSBBaXJkcm9wIHNtYXJ0IGNvbnRyYWN0PC9saT5cbiAgICAgICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICAgICB7bG9hZGluZyA/IChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZmVhdHVyZXMtc3BsaXQgc2VjdGlvbiBpbGx1c3RyYXRpb24tc2VjdGlvbi0wMVwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nY29udGFpbmVyIHRleHQtY2VudGVyICc+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbC1zbS0xMiBjYXJkLWdyYXknPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWdyYXlcIj57bG9hZGluZ01lc3NhZ2V9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICkgOiBudWxsfVxuXG4gICAgICB7bG9hZGluZyA/IG51bGwgOiAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRlc3RpbW9uaWFsIHNlY3Rpb24gaWxsdXN0cmF0aW9uLXNlY3Rpb24tMDJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbC1pbm5lciBzZWN0aW9uLWlubmVyXCI+XG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPVwiZm9ybS1pbmxpbmVcIiBvblN1Ym1pdD17ZSA9PiBjbGFpbVRva2VucyhlKX0+XG4gICAgICAgICAgICA8aW5wdXQgXG4gICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCIgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbCBtYi0yIG1yLXNtLTIgY29sLXNtLThcIiBcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJCU0MgQWRkcmVzc1wiXG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPGJ1dHRvbiBcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG4gYnV0dG9uLXByaW1hcnkgbWItMiBjb2wtc20tOFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIENsYWltIFRJR1NcbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAge3R5cGVvZiBjbGFpbU1lc3NhZ2UucGF5bG9hZCAhPT0gJ3VuZGVmaW5lZCcgPyAgKFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGFsZXJ0IGFsZXJ0LSR7Y2xhaW1NZXNzYWdlLnR5cGV9YH0gcm9sZT1cImFsZXJ0XCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gc3R5bGU9e3sgd2hpdGVTcGFjZTogJ3ByZScgfX0+XG4gICAgICAgICAgICAgICAgICB7Y2xhaW1NZXNzYWdlLnBheWxvYWR9XG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkgOiAnJ31cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgXG4gICAgICApfVxuICAgIDxGb290ZXIgLz5cbiAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})