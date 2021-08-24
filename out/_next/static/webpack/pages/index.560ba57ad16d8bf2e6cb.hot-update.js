webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_ethereum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/ethereum.js */ \"./lib/ethereum.js\");\n/* harmony import */ var _components_layout_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/Header.js */ \"./pages/components/layout/Header.js\");\n/* harmony import */ var _components_layout_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/Footer.js */ \"./pages/components/layout/Footer.js\");\n\n\nvar _jsxFileName = \"/home/seven/Desktop/TradingTigers/airdrop/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const {\n    0: loadingMessage,\n    1: setLoadingMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('Please Connect Your Metamask!');\n  const {\n    0: claimMessage,\n    1: setClaimMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    payload: undefined,\n    type: undefined\n  });\n  const {\n    0: airdrop,\n    1: setAirdrop\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined);\n  const {\n    0: accounts,\n    1: setAccounts\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const init = async () => {\n      try {\n        const {\n          airdrop,\n          accounts\n        } = await Object(_lib_ethereum_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        setAirdrop(airdrop);\n        setAccounts(accounts);\n        setLoading(false);\n      } catch (e) {\n        setLoadingMessage(e);\n      }\n    };\n\n    init();\n  }, []);\n\n  const claimTokens = async e => {\n    e.preventDefault();\n    const address = e.target.elements[0].value.trim().toLowerCase();\n    setClaimMessage({\n      type: 'primary',\n      payload: 'Checking your address in whitelist...'\n    });\n\n    try {\n      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/authorization', {\n        address\n      });\n      setClaimMessage({\n        type: 'primary',\n        payload: `\n          Claiming token from Airdrop contract...\n          Address: ${response.data.address}\n          Total Amount: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.totalAllocation.toString())} TIGS\n          -> Basic: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.basicAllocation.toString())} TIGS\n          -> Bonus: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.bonusAllocation.toString())} TIGS\n        `\n      });\n      const receipt = await airdrop.methods.claimTokens(response.data.address, response.data.totalAllocation.toString(), response.data.signature).send({\n        from: accounts[0]\n      });\n      setClaimMessage({\n        type: 'primary',\n        payload: `Airdrop success!\nTokens successfully in tx ${receipt.transactionHash} \nAddress: ${response.data.address}\nTotal Amount: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.totalAllocation.toString())} TIGS\n-> Basic: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.basicAllocation.toString())} TIGS\n-> Bonus: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.bonusAllocation.toString())} TIGS\n        `\n      });\n    } catch (e) {\n      if (e.message === 'Request failed with status code 401') {\n        console.log(e);\n        setClaimMessage({\n          type: 'danger',\n          payload: `Airdrop failed Reason:\nAddress not registered`\n        });\n        return;\n      }\n\n      setClaimMessage({\n        type: 'danger',\n        payload: `Airdrop failed Reason:\nAirdrop already sent to ${address}`\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"body-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Header_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      navPosition: \"right\",\n      className: \"reveal-from-bottom is-revealed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"site-content\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"features-split section illustration-section-01\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card-body card-gray\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n              className: \"card-title\",\n              children: \"How to Get in the Airdrop?\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-text\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: [\"Step 1: Join our \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                    target: \"_blank\",\n                    href: \"https://t.me/tradingtigerschat\",\n                    children: \"Telegram chat!\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 118,\n                    columnNumber: 40\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 118,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 2: Write in the chat \\\"/JoinAirdrop 0x3a0E4Fc1Ff11b... (your BSC Address!)\\\"\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 119,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n              className: \"card-title\",\n              children: \"Claim your tokens!\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-text\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Attention: Those who have already registered on the old Airdrop page can now claim their tokens here.\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 125,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 126,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 1: Make sure you have configured the BSC network with Metamask\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 127,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 2: Enter your BSC address and click on Claim TIGS.\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 128,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 3: Confirm the transaction to claim your TIGS tokens. This will send a transaction to the Airdrop smart contract\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 129,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 124,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"features-split section illustration-section-01\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container text-center \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"section-inner\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-gray\",\n              children: loadingMessage\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 9\n      }, this) : null, loading ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"testimonial section illustration-section-02\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"section-inner\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n              className: \"form-inline\",\n              onSubmit: e => claimTokens(e),\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"text\",\n                className: \"form-control mb-2 mr-sm-2 col-sm-8\",\n                placeholder: \"BSC Address\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 152,\n                columnNumber: 13\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                type: \"submit\",\n                className: \"btn button-primary mb-2 col-sm-8\",\n                children: \"Claim TIGS\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 157,\n                columnNumber: 13\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 151,\n              columnNumber: 11\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 150,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 9\n      }, this) > /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"testimonial section illustration-section-02\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"section-inner\",\n            children: typeof claimMessage.payload !== 'undefined' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: `alert alert-${claimMessage.type}`,\n              role: \"alert\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                style: {\n                  whiteSpace: 'pre'\n                },\n                children: claimMessage.payload\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 173,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 172,\n              columnNumber: 15\n            }, this) : ''\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 170,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 169,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 168,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Footer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 183,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"RIECeCS+nRDeFGwEcGdN+XBgj+o=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsImxvYWRpbmdNZXNzYWdlIiwic2V0TG9hZGluZ01lc3NhZ2UiLCJjbGFpbU1lc3NhZ2UiLCJzZXRDbGFpbU1lc3NhZ2UiLCJwYXlsb2FkIiwidW5kZWZpbmVkIiwidHlwZSIsImFpcmRyb3AiLCJzZXRBaXJkcm9wIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsInVzZUVmZmVjdCIsImluaXQiLCJnZXRCbG9ja2NoYWluIiwiZSIsImNsYWltVG9rZW5zIiwicHJldmVudERlZmF1bHQiLCJhZGRyZXNzIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlIiwiYXhpb3MiLCJwb3N0IiwiZGF0YSIsIldlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJ0b3RhbEFsbG9jYXRpb24iLCJ0b1N0cmluZyIsImJhc2ljQWxsb2NhdGlvbiIsImJvbnVzQWxsb2NhdGlvbiIsInJlY2VpcHQiLCJtZXRob2RzIiwic2lnbmF0dXJlIiwic2VuZCIsImZyb20iLCJ0cmFuc2FjdGlvbkhhc2giLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Ysc0RBQVEsQ0FBQywrQkFBRCxDQUFwRDtBQUNBLFFBQU07QUFBQSxPQUFDRyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0os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QXpESixlQXdFRixxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBeEVFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUZGO0FBZ0ZEOztHQS9LdUJSLEk7O0tBQUFBLEkiLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IFdlYjMgZnJvbSAnd2ViMyc7XG5pbXBvcnQgZ2V0QmxvY2tjaGFpbiBmcm9tICcuLi9saWIvZXRoZXJldW0uanMnO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvbGF5b3V0L0hlYWRlci5qcyc7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvRm9vdGVyLmpzJztcblxuXG5cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2xvYWRpbmdNZXNzYWdlLCBzZXRMb2FkaW5nTWVzc2FnZV0gPSB1c2VTdGF0ZSgnUGxlYXNlIENvbm5lY3QgWW91ciBNZXRhbWFzayEnKTtcbiAgY29uc3QgW2NsYWltTWVzc2FnZSwgc2V0Q2xhaW1NZXNzYWdlXSA9IHVzZVN0YXRlKHtcbiAgICBwYXlsb2FkOiB1bmRlZmluZWQsXG4gICAgdHlwZTogdW5kZWZpbmVkXG4gIH0pO1xuICBjb25zdCBbYWlyZHJvcCwgc2V0QWlyZHJvcF0gPSB1c2VTdGF0ZSh1bmRlZmluZWQpO1xuICBjb25zdCBbYWNjb3VudHMsIHNldEFjY291bnRzXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBpbml0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgdHJ5IHsgXG4gICAgICAgIGNvbnN0IHsgYWlyZHJvcCwgYWNjb3VudHMgfSA9IGF3YWl0IGdldEJsb2NrY2hhaW4oKTtcbiAgICAgICAgc2V0QWlyZHJvcChhaXJkcm9wKTtcbiAgICAgICAgc2V0QWNjb3VudHMoYWNjb3VudHMpO1xuICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBzZXRMb2FkaW5nTWVzc2FnZShlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGluaXQoKTtcbiAgfSwgW10pO1xuXG5cblxuXG4gIGNvbnN0IGNsYWltVG9rZW5zID0gYXN5bmMgZSA9PiB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGFkZHJlc3MgPSBlLnRhcmdldC5lbGVtZW50c1swXS52YWx1ZS50cmltKCkudG9Mb3dlckNhc2UoKTtcbiAgICBzZXRDbGFpbU1lc3NhZ2Uoe1xuICAgICAgdHlwZTogJ3ByaW1hcnknLFxuICAgICAgcGF5bG9hZDogJ0NoZWNraW5nIHlvdXIgYWRkcmVzcyBpbiB3aGl0ZWxpc3QuLi4nXG4gICAgfSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcbiAgICAgICAgJy9hcGkvYXV0aG9yaXphdGlvbicsIFxuICAgICAgICB7XG4gICAgICAgICAgYWRkcmVzc1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgc2V0Q2xhaW1NZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ3ByaW1hcnknLFxuICAgICAgICBwYXlsb2FkOiBgXG4gICAgICAgICAgQ2xhaW1pbmcgdG9rZW4gZnJvbSBBaXJkcm9wIGNvbnRyYWN0Li4uXG4gICAgICAgICAgQWRkcmVzczogJHtyZXNwb25zZS5kYXRhLmFkZHJlc3N9XG4gICAgICAgICAgVG90YWwgQW1vdW50OiAke1dlYjMudXRpbHMuZnJvbVdlaShyZXNwb25zZS5kYXRhLnRvdGFsQWxsb2NhdGlvbi50b1N0cmluZygpKX0gVElHU1xuICAgICAgICAgIC0+IEJhc2ljOiAke1dlYjMudXRpbHMuZnJvbVdlaShyZXNwb25zZS5kYXRhLmJhc2ljQWxsb2NhdGlvbi50b1N0cmluZygpKX0gVElHU1xuICAgICAgICAgIC0+IEJvbnVzOiAke1dlYjMudXRpbHMuZnJvbVdlaShyZXNwb25zZS5kYXRhLmJvbnVzQWxsb2NhdGlvbi50b1N0cmluZygpKX0gVElHU1xuICAgICAgICBgXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlY2VpcHQgPSBhd2FpdCBhaXJkcm9wXG4gICAgICAgIC5tZXRob2RzXG4gICAgICAgIC5jbGFpbVRva2VucyhcbiAgICAgICAgICByZXNwb25zZS5kYXRhLmFkZHJlc3MsIFxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEudG90YWxBbGxvY2F0aW9uLnRvU3RyaW5nKCksXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS5zaWduYXR1cmVcbiAgICAgICAgKVxuICAgICAgICAuc2VuZCh7ZnJvbTogYWNjb3VudHNbMF19KTtcbiAgICAgIHNldENsYWltTWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdwcmltYXJ5JyxcbiAgICAgICAgcGF5bG9hZDogYEFpcmRyb3Agc3VjY2VzcyFcblRva2VucyBzdWNjZXNzZnVsbHkgaW4gdHggJHtyZWNlaXB0LnRyYW5zYWN0aW9uSGFzaH0gXG5BZGRyZXNzOiAke3Jlc3BvbnNlLmRhdGEuYWRkcmVzc31cblRvdGFsIEFtb3VudDogJHtXZWIzLnV0aWxzLmZyb21XZWkocmVzcG9uc2UuZGF0YS50b3RhbEFsbG9jYXRpb24udG9TdHJpbmcoKSl9IFRJR1Ncbi0+IEJhc2ljOiAke1dlYjMudXRpbHMuZnJvbVdlaShyZXNwb25zZS5kYXRhLmJhc2ljQWxsb2NhdGlvbi50b1N0cmluZygpKX0gVElHU1xuLT4gQm9udXM6ICR7V2ViMy51dGlscy5mcm9tV2VpKHJlc3BvbnNlLmRhdGEuYm9udXNBbGxvY2F0aW9uLnRvU3RyaW5nKCkpfSBUSUdTXG4gICAgICAgIGBcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgaWYoZS5tZXNzYWdlID09PSAnUmVxdWVzdCBmYWlsZWQgd2l0aCBzdGF0dXMgY29kZSA0MDEnKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUpXG4gICAgICAgIHNldENsYWltTWVzc2FnZSh7XG4gICAgICAgICAgdHlwZTogJ2RhbmdlcicsXG4gICAgICAgICAgcGF5bG9hZDogYEFpcmRyb3AgZmFpbGVkIFJlYXNvbjpcbkFkZHJlc3Mgbm90IHJlZ2lzdGVyZWRgXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZXRDbGFpbU1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgcGF5bG9hZDogYEFpcmRyb3AgZmFpbGVkIFJlYXNvbjpcbkFpcmRyb3AgYWxyZWFkeSBzZW50IHRvICR7YWRkcmVzc31gXG4gICAgICB9KTtcbiAgICB9XG4gIH07XG5cblxuXG5cblxuXG5cblxuXG4gIHJldHVybiAoXG4gICAgXG4gICAgPGRpdiBjbGFzc05hbWU9J2JvZHktd3JhcCc+XG4gICAgICA8SGVhZGVyIG5hdlBvc2l0aW9uPVwicmlnaHRcIiBjbGFzc05hbWU9XCJyZXZlYWwtZnJvbS1ib3R0b20gaXMtcmV2ZWFsZWRcIiAvPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPSdzaXRlLWNvbnRlbnQnPlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlcy1zcGxpdCBzZWN0aW9uIGlsbHVzdHJhdGlvbi1zZWN0aW9uLTAxXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ib2R5IGNhcmQtZ3JheVwiPlxuICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkhvdyB0byBHZXQgaW4gdGhlIEFpcmRyb3A/PC9oNT5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICA8bGk+U3RlcCAxOiBKb2luIG91ciA8YSB0YXJnZXQ9XCJfYmxhbmtcImhyZWY9XCJodHRwczovL3QubWUvdHJhZGluZ3RpZ2Vyc2NoYXRcIj5UZWxlZ3JhbSBjaGF0ITwvYT48L2xpPlxuICAgICAgICAgICAgICAgICAgPGxpPlN0ZXAgMjogV3JpdGUgaW4gdGhlIGNoYXQgXCIvSm9pbkFpcmRyb3AgMHgzYTBFNEZjMUZmMTFiLi4uICh5b3VyIEJTQyBBZGRyZXNzISlcIjwvbGk+XG4gICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGg1IGNsYXNzTmFtZT1cImNhcmQtdGl0bGVcIj5DbGFpbSB5b3VyIHRva2VucyE8L2g1PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC10ZXh0XCI+XG4gICAgICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5BdHRlbnRpb246IFRob3NlIHdobyBoYXZlIGFscmVhZHkgcmVnaXN0ZXJlZCBvbiB0aGUgb2xkIEFpcmRyb3AgcGFnZSBjYW4gbm93IGNsYWltIHRoZWlyIHRva2VucyBoZXJlLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxwPjwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlN0ZXAgMTogTWFrZSBzdXJlIHlvdSBoYXZlIGNvbmZpZ3VyZWQgdGhlIEJTQyBuZXR3b3JrIHdpdGggTWV0YW1hc2s8L2xpPlxuICAgICAgICAgICAgICAgICAgICA8bGk+U3RlcCAyOiBFbnRlciB5b3VyIEJTQyBhZGRyZXNzIGFuZCBjbGljayBvbiBDbGFpbSBUSUdTLjwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5TdGVwIDM6IENvbmZpcm0gdGhlIHRyYW5zYWN0aW9uIHRvIGNsYWltIHlvdXIgVElHUyB0b2tlbnMuIFRoaXMgd2lsbCBzZW5kIGEgdHJhbnNhY3Rpb24gdG8gdGhlIEFpcmRyb3Agc21hcnQgY29udHJhY3Q8L2xpPlxuICAgICAgICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICBcbiAgICAgIHtsb2FkaW5nID8gKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJmZWF0dXJlcy1zcGxpdCBzZWN0aW9uIGlsbHVzdHJhdGlvbi1zZWN0aW9uLTAxXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdjb250YWluZXIgdGV4dC1jZW50ZXIgJz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nc2VjdGlvbi1pbm5lcic+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtZ3JheVwiPntsb2FkaW5nTWVzc2FnZX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgKSA6IG51bGx9XG5cbiAgICAgIHtsb2FkaW5nID8gbnVsbCA6IChcbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVzdGltb25pYWwgc2VjdGlvbiBpbGx1c3RyYXRpb24tc2VjdGlvbi0wMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taW5uZXJcIj5cbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJmb3JtLWlubGluZVwiIG9uU3VibWl0PXtlID0+IGNsYWltVG9rZW5zKGUpfT5cbiAgICAgICAgICAgIDxpbnB1dCBcbiAgICAgICAgICAgICAgdHlwZT1cInRleHRcIiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9ybS1jb250cm9sIG1iLTIgbXItc20tMiBjb2wtc20tOFwiIFxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkJTQyBBZGRyZXNzXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8YnV0dG9uIFxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCIgXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJ0biBidXR0b24tcHJpbWFyeSBtYi0yIGNvbC1zbS04XCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgQ2xhaW0gVElHU1xuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgICA+XG4gICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGVzdGltb25pYWwgc2VjdGlvbiBpbGx1c3RyYXRpb24tc2VjdGlvbi0wMlwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24taW5uZXJcIj5cbiAgICAgICAgICAgIHt0eXBlb2YgY2xhaW1NZXNzYWdlLnBheWxvYWQgIT09ICd1bmRlZmluZWQnID8gIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0ke2NsYWltTWVzc2FnZS50eXBlfWB9IHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdwcmUnIH19PlxuICAgICAgICAgICAgICAgICAge2NsYWltTWVzc2FnZS5wYXlsb2FkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogJyd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICAgICAgKX1cbiAgICA8Rm9vdGVyIC8+XG4gICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})