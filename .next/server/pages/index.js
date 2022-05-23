"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ IndexPage),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

;// CONCATENATED MODULE: external "react/jsx-runtime"
const jsx_runtime_namespaceObject = require("react/jsx-runtime");
;// CONCATENATED MODULE: external "next-sanity"
const external_next_sanity_namespaceObject = require("next-sanity");
;// CONCATENATED MODULE: ./pages/index.js


function IndexPage({ users  }) {
    return /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)(jsx_runtime_namespaceObject.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("header", {
                children: /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h1", {
                    children: "Next.js + Sanity"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("main", {
                children: [
                    /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("h2", {
                        children: "Number of Users"
                    }),
                    users.length > 0 && /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("ul", {
                        children: users.map((user)=>{
                            /*#__PURE__*/ return jsx_runtime_namespaceObject.jsx("li", {
                                children: user === null || user === void 0 ? void 0 : user.name
                            }, user._id);
                        })
                    }),
                    !users.length > 0 && /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                        children: "No users to show"
                    }),
                    users.length > 0 && /*#__PURE__*/ (0,jsx_runtime_namespaceObject.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("div", {
                                children: "XD"
                            }),
                            /*#__PURE__*/ jsx_runtime_namespaceObject.jsx("p", {
                                children: "If i'm doing this correctly then the data will show up here when i've configured everything correctly"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
const client = (0,external_next_sanity_namespaceObject.createClient)({
    projectId: "3ho6qypw",
    dataset: "production",
    apiVersion: "2022-05-18",
    useCdn: false
});
async function getStaticProps() {
    const users = await client.fetch(`*[_type == "user"]`);
    return {
        props: {
            users
        }
    };
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(599));
module.exports = __webpack_exports__;

})();