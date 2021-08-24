webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ \"./node_modules/web3/lib/index.js\");\n/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _lib_ethereum_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/ethereum.js */ \"./lib/ethereum.js\");\n/* harmony import */ var _components_layout_Header_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/layout/Header.js */ \"./pages/components/layout/Header.js\");\n/* harmony import */ var _components_layout_Footer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/layout/Footer.js */ \"./pages/components/layout/Footer.js\");\n\n\nvar _jsxFileName = \"/home/seven/Desktop/TradingTigers/airdrop/pages/index.js\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  const {\n    0: loading,\n    1: setLoading\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(true);\n  const {\n    0: loadingMessage,\n    1: setLoadingMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])('Please Connect Your Metamask!');\n  const {\n    0: claimMessage,\n    1: setClaimMessage\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])({\n    payload: undefined,\n    type: undefined\n  });\n  const {\n    0: airdrop,\n    1: setAirdrop\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined);\n  const {\n    0: accounts,\n    1: setAccounts\n  } = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(undefined);\n  Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useEffect\"])(() => {\n    const init = async () => {\n      try {\n        const {\n          airdrop,\n          accounts\n        } = await Object(_lib_ethereum_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n        setAirdrop(airdrop);\n        setAccounts(accounts);\n        setLoading(false);\n      } catch (e) {\n        setLoadingMessage(e);\n      }\n    };\n\n    init();\n  }, []);\n\n  const claimTokens = async e => {\n    e.preventDefault();\n    const address = e.target.elements[0].value.trim().toLowerCase();\n    setClaimMessage({\n      type: 'primary',\n      payload: 'Checking your address in whitelist...'\n    });\n\n    try {\n      const response = await axios__WEBPACK_IMPORTED_MODULE_2___default.a.post('/api/authorization', {\n        address\n      });\n      setClaimMessage({\n        type: 'primary',\n        payload: `\n          Claiming token from Airdrop contract...\n          Address: ${response.data.address}\n          Total Amount: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.totalAllocation.toString())} TIGS\n          -> Basic: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.basicAllocation.toString())} TIGS\n          -> Bonus: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.bonusAllocation.toString())} TIGS\n        `\n      });\n      const receipt = await airdrop.methods.claimTokens(response.data.address, response.data.totalAllocation.toString(), response.data.signature).send({\n        from: accounts[0]\n      });\n      setClaimMessage({\n        type: 'primary',\n        payload: `Airdrop success!\nTokens successfully in tx ${receipt.transactionHash} \nAddress: ${response.data.address}\nTotal Amount: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.totalAllocation.toString())} TIGS\n-> Basic: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.basicAllocation.toString())} TIGS\n-> Bonus: ${web3__WEBPACK_IMPORTED_MODULE_3___default.a.utils.fromWei(response.data.bonusAllocation.toString())} TIGS\n        `\n      });\n    } catch (e) {\n      if (e.message === 'Request failed with status code 401') {\n        console.log(e);\n        setClaimMessage({\n          type: 'danger',\n          payload: `Airdrop failed Reason:\nAddress not registered`\n        });\n        return;\n      }\n\n      setClaimMessage({\n        type: 'danger',\n        payload: `Airdrop failed Reason:\nAirdrop already sent to ${address}`\n      });\n    }\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: \"body-wrap\",\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Header_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n      navPosition: \"right\",\n      className: \"reveal-from-bottom is-revealed\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 110,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"main\", {\n      className: \"site-content\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"features-split section illustration-section-01\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"card-body card-gray\",\n            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n              className: \"card-title\",\n              children: \"How to Get in the Airdrop?\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 115,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-text\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: [\"Step 1: Join our \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n                    target: \"_blank\",\n                    href: \"https://t.me/tradingtigerschat\",\n                    children: \"Telegram chat!\"\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 118,\n                    columnNumber: 40\n                  }, this)]\n                }, void 0, true, {\n                  fileName: _jsxFileName,\n                  lineNumber: 118,\n                  columnNumber: 19\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 2: Write in the chat \\\"/JoinAirdrop 0x3a0E4Fc1Ff11b... (your BSC Address!)\\\"\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 119,\n                  columnNumber: 19\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 117,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 116,\n              columnNumber: 15\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h5\", {\n              className: \"card-title\",\n              children: \"Claim your tokens!\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 122,\n              columnNumber: 17\n            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-text\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Attention: Those who have already registered on the old Airdrop page can now claim their tokens here.\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 125,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {}, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 126,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 1: Make sure you have configured the BSC network with Metamask\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 127,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 2: Enter your BSC address and click on Claim TIGS.\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 128,\n                  columnNumber: 21\n                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"li\", {\n                  children: \"Step 3: Confirm the transaction to claim your TIGS tokens. This will send a transaction to the Airdrop smart contract\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 129,\n                  columnNumber: 21\n                }, this)]\n              }, void 0, true, {\n                fileName: _jsxFileName,\n                lineNumber: 124,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 123,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 114,\n            columnNumber: 13\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 113,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 112,\n        columnNumber: 9\n      }, this), loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"features-split section illustration-section-01\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container text-center \",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"section-inner\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: \"card-gray\",\n              children: loadingMessage\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 140,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 139,\n            columnNumber: 11\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 138,\n          columnNumber: 9\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 137,\n        columnNumber: 9\n      }, this) : null, loading ? null : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"section\", {\n        className: \"testimonial section illustration-section-02\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"container\",\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            className: \"section-inner\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"form\", {\n              className: \"form-inline\",\n              onSubmit: e => claimTokens(e),\n              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"input\", {\n                type: \"text\",\n                className: \"form-control mb-2 mr-sm-2 col-sm-8\",\n                placeholder: \"BSC Address\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 152,\n                columnNumber: 13\n              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n                type: \"submit\",\n                className: \"btn button-primary mb-2 col-sm-8\",\n                children: \"Claim TIGS\"\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 157,\n                columnNumber: 13\n              }, this)]\n            }, void 0, true, {\n              fileName: _jsxFileName,\n              lineNumber: 151,\n              columnNumber: 11\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 150,\n            columnNumber: 13\n          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n            children: typeof claimMessage.payload !== 'undefined' ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n              className: `alert alert-${claimMessage.type}`,\n              role: \"alert\",\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n                style: {\n                  whiteSpace: 'pre'\n                },\n                children: claimMessage.payload\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 168,\n                columnNumber: 17\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 167,\n              columnNumber: 15\n            }, this) : ''\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 165,\n            columnNumber: 11\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 149,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 148,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_layout_Footer_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 178,\n        columnNumber: 5\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 111,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 109,\n    columnNumber: 5\n  }, this);\n}\n\n_s(Home, \"RIECeCS+nRDeFGwEcGdN+XBgj+o=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanM/NDRkOCJdLCJuYW1lcyI6WyJIb21lIiwibG9hZGluZyIsInNldExvYWRpbmciLCJ1c2VTdGF0ZSIsImxvYWRpbmdNZXNzYWdlIiwic2V0TG9hZGluZ01lc3NhZ2UiLCJjbGFpbU1lc3NhZ2UiLCJzZXRDbGFpbU1lc3NhZ2UiLCJwYXlsb2FkIiwidW5kZWZpbmVkIiwidHlwZSIsImFpcmRyb3AiLCJzZXRBaXJkcm9wIiwiYWNjb3VudHMiLCJzZXRBY2NvdW50cyIsInVzZUVmZmVjdCIsImluaXQiLCJnZXRCbG9ja2NoYWluIiwiZSIsImNsYWltVG9rZW5zIiwicHJldmVudERlZmF1bHQiLCJhZGRyZXNzIiwidGFyZ2V0IiwiZWxlbWVudHMiLCJ2YWx1ZSIsInRyaW0iLCJ0b0xvd2VyQ2FzZSIsInJlc3BvbnNlIiwiYXhpb3MiLCJwb3N0IiwiZGF0YSIsIldlYjMiLCJ1dGlscyIsImZyb21XZWkiLCJ0b3RhbEFsbG9jYXRpb24iLCJ0b1N0cmluZyIsImJhc2ljQWxsb2NhdGlvbiIsImJvbnVzQWxsb2NhdGlvbiIsInJlY2VpcHQiLCJtZXRob2RzIiwic2lnbmF0dXJlIiwic2VuZCIsImZyb20iLCJ0cmFuc2FjdGlvbkhhc2giLCJtZXNzYWdlIiwiY29uc29sZSIsImxvZyIsIndoaXRlU3BhY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1lLFNBQVNBLElBQVQsR0FBZ0I7QUFBQTs7QUFDN0IsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLElBQUQsQ0FBdEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ0Ysc0RBQVEsQ0FBQywrQkFBRCxDQUFwRDtBQUNBLFFBQU07QUFBQSxPQUFDRyxZQUFEO0FBQUEsT0FBZUM7QUFBZixNQUFrQ0os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STs7S0FBQUEsSSIsImZpbGUiOiIuL3BhZ2VzL2luZGV4LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XG5pbXBvcnQgV2ViMyBmcm9tICd3ZWIzJztcbmltcG9ydCBnZXRCbG9ja2NoYWluIGZyb20gJy4uL2xpYi9ldGhlcmV1bS5qcyc7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4vY29tcG9uZW50cy9sYXlvdXQvSGVhZGVyLmpzJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi9jb21wb25lbnRzL2xheW91dC9Gb290ZXIuanMnO1xuXG5cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbbG9hZGluZ01lc3NhZ2UsIHNldExvYWRpbmdNZXNzYWdlXSA9IHVzZVN0YXRlKCdQbGVhc2UgQ29ubmVjdCBZb3VyIE1ldGFtYXNrIScpO1xuICBjb25zdCBbY2xhaW1NZXNzYWdlLCBzZXRDbGFpbU1lc3NhZ2VdID0gdXNlU3RhdGUoe1xuICAgIHBheWxvYWQ6IHVuZGVmaW5lZCxcbiAgICB0eXBlOiB1bmRlZmluZWRcbiAgfSk7XG4gIGNvbnN0IFthaXJkcm9wLCBzZXRBaXJkcm9wXSA9IHVzZVN0YXRlKHVuZGVmaW5lZCk7XG4gIGNvbnN0IFthY2NvdW50cywgc2V0QWNjb3VudHNdID0gdXNlU3RhdGUodW5kZWZpbmVkKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGluaXQgPSBhc3luYyAoKSA9PiB7XG4gICAgICB0cnkgeyBcbiAgICAgICAgY29uc3QgeyBhaXJkcm9wLCBhY2NvdW50cyB9ID0gYXdhaXQgZ2V0QmxvY2tjaGFpbigpO1xuICAgICAgICBzZXRBaXJkcm9wKGFpcmRyb3ApO1xuICAgICAgICBzZXRBY2NvdW50cyhhY2NvdW50cyk7XG4gICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIHNldExvYWRpbmdNZXNzYWdlKGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgaW5pdCgpO1xuICB9LCBbXSk7XG5cblxuXG5cbiAgY29uc3QgY2xhaW1Ub2tlbnMgPSBhc3luYyBlID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgYWRkcmVzcyA9IGUudGFyZ2V0LmVsZW1lbnRzWzBdLnZhbHVlLnRyaW0oKS50b0xvd2VyQ2FzZSgpO1xuICAgIHNldENsYWltTWVzc2FnZSh7XG4gICAgICB0eXBlOiAncHJpbWFyeScsXG4gICAgICBwYXlsb2FkOiAnQ2hlY2tpbmcgeW91ciBhZGRyZXNzIGluIHdoaXRlbGlzdC4uLidcbiAgICB9KTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0KFxuICAgICAgICAnL2FwaS9hdXRob3JpemF0aW9uJywgXG4gICAgICAgIHtcbiAgICAgICAgICBhZGRyZXNzXG4gICAgICAgIH1cbiAgICAgICk7XG4gICAgICBzZXRDbGFpbU1lc3NhZ2Uoe1xuICAgICAgICB0eXBlOiAncHJpbWFyeScsXG4gICAgICAgIHBheWxvYWQ6IGBcbiAgICAgICAgICBDbGFpbWluZyB0b2tlbiBmcm9tIEFpcmRyb3AgY29udHJhY3QuLi5cbiAgICAgICAgICBBZGRyZXNzOiAke3Jlc3BvbnNlLmRhdGEuYWRkcmVzc31cbiAgICAgICAgICBUb3RhbCBBbW91bnQ6ICR7V2ViMy51dGlscy5mcm9tV2VpKHJlc3BvbnNlLmRhdGEudG90YWxBbGxvY2F0aW9uLnRvU3RyaW5nKCkpfSBUSUdTXG4gICAgICAgICAgLT4gQmFzaWM6ICR7V2ViMy51dGlscy5mcm9tV2VpKHJlc3BvbnNlLmRhdGEuYmFzaWNBbGxvY2F0aW9uLnRvU3RyaW5nKCkpfSBUSUdTXG4gICAgICAgICAgLT4gQm9udXM6ICR7V2ViMy51dGlscy5mcm9tV2VpKHJlc3BvbnNlLmRhdGEuYm9udXNBbGxvY2F0aW9uLnRvU3RyaW5nKCkpfSBUSUdTXG4gICAgICAgIGBcbiAgICAgIH0pO1xuICAgICAgY29uc3QgcmVjZWlwdCA9IGF3YWl0IGFpcmRyb3BcbiAgICAgICAgLm1ldGhvZHNcbiAgICAgICAgLmNsYWltVG9rZW5zKFxuICAgICAgICAgIHJlc3BvbnNlLmRhdGEuYWRkcmVzcywgXG4gICAgICAgICAgcmVzcG9uc2UuZGF0YS50b3RhbEFsbG9jYXRpb24udG9TdHJpbmcoKSxcbiAgICAgICAgICByZXNwb25zZS5kYXRhLnNpZ25hdHVyZVxuICAgICAgICApXG4gICAgICAgIC5zZW5kKHtmcm9tOiBhY2NvdW50c1swXX0pO1xuICAgICAgc2V0Q2xhaW1NZXNzYWdlKHtcbiAgICAgICAgdHlwZTogJ3ByaW1hcnknLFxuICAgICAgICBwYXlsb2FkOiBgQWlyZHJvcCBzdWNjZXNzIVxuVG9rZW5zIHN1Y2Nlc3NmdWxseSBpbiB0eCAke3JlY2VpcHQudHJhbnNhY3Rpb25IYXNofSBcbkFkZHJlc3M6ICR7cmVzcG9uc2UuZGF0YS5hZGRyZXNzfVxuVG90YWwgQW1vdW50OiAke1dlYjMudXRpbHMuZnJvbVdlaShyZXNwb25zZS5kYXRhLnRvdGFsQWxsb2NhdGlvbi50b1N0cmluZygpKX0gVElHU1xuLT4gQmFzaWM6ICR7V2ViMy51dGlscy5mcm9tV2VpKHJlc3BvbnNlLmRhdGEuYmFzaWNBbGxvY2F0aW9uLnRvU3RyaW5nKCkpfSBUSUdTXG4tPiBCb251czogJHtXZWIzLnV0aWxzLmZyb21XZWkocmVzcG9uc2UuZGF0YS5ib251c0FsbG9jYXRpb24udG9TdHJpbmcoKSl9IFRJR1NcbiAgICAgICAgYFxuICAgICAgfSk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBpZihlLm1lc3NhZ2UgPT09ICdSZXF1ZXN0IGZhaWxlZCB3aXRoIHN0YXR1cyBjb2RlIDQwMScpIHtcbiAgICAgICAgY29uc29sZS5sb2coZSlcbiAgICAgICAgc2V0Q2xhaW1NZXNzYWdlKHtcbiAgICAgICAgICB0eXBlOiAnZGFuZ2VyJyxcbiAgICAgICAgICBwYXlsb2FkOiBgQWlyZHJvcCBmYWlsZWQgUmVhc29uOlxuQWRkcmVzcyBub3QgcmVnaXN0ZXJlZGBcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHNldENsYWltTWVzc2FnZSh7XG4gICAgICAgIHR5cGU6ICdkYW5nZXInLFxuICAgICAgICBwYXlsb2FkOiBgQWlyZHJvcCBmYWlsZWQgUmVhc29uOlxuQWlyZHJvcCBhbHJlYWR5IHNlbnQgdG8gJHthZGRyZXNzfWBcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcblxuXG5cblxuXG5cblxuXG5cbiAgcmV0dXJuIChcbiAgICBcbiAgICA8ZGl2IGNsYXNzTmFtZT0nYm9keS13cmFwJz5cbiAgICAgIDxIZWFkZXIgbmF2UG9zaXRpb249XCJyaWdodFwiIGNsYXNzTmFtZT1cInJldmVhbC1mcm9tLWJvdHRvbSBpcy1yZXZlYWxlZFwiIC8+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9J3NpdGUtY29udGVudCc+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZlYXR1cmVzLXNwbGl0IHNlY3Rpb24gaWxsdXN0cmF0aW9uLXNlY3Rpb24tMDFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLWJvZHkgY2FyZC1ncmF5XCI+XG4gICAgICAgICAgICAgIDxoNSBjbGFzc05hbWU9XCJjYXJkLXRpdGxlXCI+SG93IHRvIEdldCBpbiB0aGUgQWlyZHJvcD88L2g1PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmQtdGV4dFwiPlxuICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgIDxsaT5TdGVwIDE6IEpvaW4gb3VyIDxhIHRhcmdldD1cIl9ibGFua1wiaHJlZj1cImh0dHBzOi8vdC5tZS90cmFkaW5ndGlnZXJzY2hhdFwiPlRlbGVncmFtIGNoYXQhPC9hPjwvbGk+XG4gICAgICAgICAgICAgICAgICA8bGk+U3RlcCAyOiBXcml0ZSBpbiB0aGUgY2hhdCBcIi9Kb2luQWlyZHJvcCAweDNhMEU0RmMxRmYxMWIuLi4gKHlvdXIgQlNDIEFkZHJlc3MhKVwiPC9saT5cbiAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8aDUgY2xhc3NOYW1lPVwiY2FyZC10aXRsZVwiPkNsYWltIHlvdXIgdG9rZW5zITwvaDU+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkLXRleHRcIj5cbiAgICAgICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgICAgICAgPGxpPkF0dGVudGlvbjogVGhvc2Ugd2hvIGhhdmUgYWxyZWFkeSByZWdpc3RlcmVkIG9uIHRoZSBvbGQgQWlyZHJvcCBwYWdlIGNhbiBub3cgY2xhaW0gdGhlaXIgdG9rZW5zIGhlcmUuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPHA+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8bGk+U3RlcCAxOiBNYWtlIHN1cmUgeW91IGhhdmUgY29uZmlndXJlZCB0aGUgQlNDIG5ldHdvcmsgd2l0aCBNZXRhbWFzazwvbGk+XG4gICAgICAgICAgICAgICAgICAgIDxsaT5TdGVwIDI6IEVudGVyIHlvdXIgQlNDIGFkZHJlc3MgYW5kIGNsaWNrIG9uIENsYWltIFRJR1MuPC9saT5cbiAgICAgICAgICAgICAgICAgICAgPGxpPlN0ZXAgMzogQ29uZmlybSB0aGUgdHJhbnNhY3Rpb24gdG8gY2xhaW0geW91ciBUSUdTIHRva2Vucy4gVGhpcyB3aWxsIHNlbmQgYSB0cmFuc2FjdGlvbiB0byB0aGUgQWlyZHJvcCBzbWFydCBjb250cmFjdDwvbGk+XG4gICAgICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICAgICAge2xvYWRpbmcgPyAoXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImZlYXR1cmVzLXNwbGl0IHNlY3Rpb24gaWxsdXN0cmF0aW9uLXNlY3Rpb24tMDFcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2NvbnRhaW5lciB0ZXh0LWNlbnRlciAnPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzZWN0aW9uLWlubmVyJz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZC1ncmF5XCI+e2xvYWRpbmdNZXNzYWdlfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICApIDogbnVsbH1cblxuICAgICAge2xvYWRpbmcgPyBudWxsIDogKFxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXN0aW1vbmlhbCBzZWN0aW9uIGlsbHVzdHJhdGlvbi1zZWN0aW9uLTAyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1pbm5lclwiPlxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT1cImZvcm0taW5saW5lXCIgb25TdWJtaXQ9e2UgPT4gY2xhaW1Ub2tlbnMoZSl9PlxuICAgICAgICAgICAgPGlucHV0IFxuICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiIFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2wgbWItMiBtci1zbS0yIGNvbC1zbS04XCIgXG4gICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQlNDIEFkZHJlc3NcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDxidXR0b24gXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIiBcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuIGJ1dHRvbi1wcmltYXJ5IG1iLTIgY29sLXNtLThcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBDbGFpbSBUSUdTXG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIHt0eXBlb2YgY2xhaW1NZXNzYWdlLnBheWxvYWQgIT09ICd1bmRlZmluZWQnID8gIChcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BhbGVydCBhbGVydC0ke2NsYWltTWVzc2FnZS50eXBlfWB9IHJvbGU9XCJhbGVydFwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIHN0eWxlPXt7IHdoaXRlU3BhY2U6ICdwcmUnIH19PlxuICAgICAgICAgICAgICAgICAge2NsYWltTWVzc2FnZS5wYXlsb2FkfVxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApIDogJyd9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgIFxuICAgICAgKX1cbiAgICA8Rm9vdGVyIC8+XG4gICAgPC9tYWluPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ })

})