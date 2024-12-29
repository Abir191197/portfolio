"use strict";
exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 2791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ThemeContext),
/* harmony export */   "f": () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const initialState = {
    isDark: false,
    toggleTheme: ()=>{},
    setIsDarkMode: (theme)=>{}
};
const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(initialState);
const ThemeProvider = ({ children  })=>{
    const [isDark, setIsDark] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();
    const toggleTheme = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(()=>{
        setIsDark((prev)=>!prev);
    }, []);
    const setIsDarkMode = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((theme)=>{
        setIsDark(theme);
    }, []);
    // SETTING THEMES ACCORDING TO DEVICE
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
            setIsDarkMode(true);
        }
        window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e)=>{
            setIsDarkMode(e.matches);
        });
    }, [
        setIsDarkMode
    ]);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (isDark === undefined) return;
        if (isDark) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [
        isDark
    ]);
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            isDark: isDark === undefined ? false : isDark,
            toggleTheme,
            setIsDarkMode
        },
        children: children
    });
};



/***/ })

};
;