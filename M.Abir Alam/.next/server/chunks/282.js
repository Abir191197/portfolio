"use strict";
exports.id = 282;
exports.ids = [282];
exports.modules = {

/***/ 9912:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ projectVariants),
/* harmony export */   "Ji": () => (/* binding */ fadeIn),
/* harmony export */   "Ym": () => (/* binding */ slideIn),
/* harmony export */   "iM": () => (/* binding */ slideUp),
/* harmony export */   "v5": () => (/* binding */ getSectionAnimation)
/* harmony export */ });
/* unused harmony export sectionVariants */
/**
 * Make component fade in from opacity 0 to opacity 1
 * @param {number} [delay=0] - in seconds
 * @returns {Variants} Variants
 */ const fadeIn = (delay = 0)=>({
        hidden: {
            opacity: 0
        },
        show: {
            opacity: 1,
            transition: {
                type: "spring",
                duration: 1.25,
                delay
            }
        }
    });
/**
 * Makes component slide in from given direction
 * @param {number} [object.delay=0] - delay in seconds
 * @param {Direction} [object.direction="up"] - The direction from which the component should slide in
 * @param {number} [object.offset=10] - The offset from which components should slide in
 * @param {number} [object.duration] - Transition's duration
 * @returns {Variants} Variants
 */ const slideIn = ({ delay =0 , direction ="up" , offset =10  })=>{
    return {
        hidden: {
            y: direction === "down" ? -offset : direction === "up" ? offset : 0,
            x: direction === "left" ? -offset : direction === "right" ? offset : 0,
            opacity: 0
        },
        show: {
            y: 0,
            x: 0,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 300,
                damping: 20,
                delay
            }
        }
    };
};
/**
 * Slide's component in up direction
 * @param {number} [object.delay=0] - The transition's delay
 * @param {number} [object.duration=1.25] - Duration of transition
 * @param {number} [object.offset=20] -  The offset from which components should slide in
 * @returns {Variants} Variants
 */ // slideIn({
//   delay,
//   duration,
//   offset,
// });
const slideUp = ({ delay =0 , duration =1.25 , offset =20  })=>({
        hidden: {
            y: offset,
            opacity: 0
        },
        show: {
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                delay,
                duration
            }
        }
    });
// * SECTION VARIANTS
// * For sections
const sectionVariants = slideUp({
    delay: 0.5,
    duration: 1.75,
    offset: 50
});
const getSectionAnimation = {
    variants: sectionVariants,
    initial: "hidden",
    whileInView: "show",
    viewport: {
        once: true
    }
};
// * For projects
const projectVariants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    show: (i)=>({
            opacity: 1,
            y: 0,
            transition: {
                type: "spring",
                stiffness: 150,
                damping: 20,
                delay: 0.2 * i
            }
        })
};


/***/ }),

/***/ 7543:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4790);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




// For separating animation props from button props
const buttonProps = [
    "center",
    "children",
    "className",
    "size",
    "variant",
    "type",
    "href"
];
const Button = (props)=>{
    const { className , children , type ="button" , variant ="solid" , size ="sm" , center =false , ...rest } = props;
    const classes = `${size === "sm" ? "p-2 px-4 text-sm border-[1.5px] " : "text-sm p-4 px-6 border-2"} block ${center ? "mx-auto" : ""} w-fit font-mono capitalize rounded border-accent text-accent hover:bg-accent-light focus:outline-none focus:bg-accent-light duration-150 cursor-pointer ${className}`;
    // TODO: Needs to improve this framer motion logic
    if (props.type === "link") {
        const { sameTab , ...motionProps } = props;
        (0,_utils_helper__WEBPACK_IMPORTED_MODULE_3__/* .removeKeys */ .lu)(motionProps, buttonProps);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.span, {
            ...motionProps,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                className: classes,
                href: props.href,
                target: sameTab ? "_self" : "_blank",
                rel: "noopener noreferrer",
                children: children
            })
        });
    }
    if (type == "button") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
            type: type,
            className: classes,
            onClick: props.onClick,
            children: children
        });
    }
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 4378:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _context_theme_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2791);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
([_iconify_react__WEBPACK_IMPORTED_MODULE_1__, framer_motion__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const DarkModeButton = ({ className , onClick , ...rest })=>{
    const { isDark , toggleTheme  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_context_theme_context__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z);
    const clickHandler = (e)=>{
        onClick && onClick(e);
        toggleTheme();
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.button, {
        className: `rounded-lg p-1 hover:text-accent focus:text-accent focus:outline-none focus:bg-bg-secondary cursor-pointer w-fit ${className} duration-200`,
        onClick: clickHandler,
        ...rest,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
            icon: isDark ? "carbon:sun" : "ph:moon",
            width: "26",
            height: "26"
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DarkModeButton);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7493:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);


const HeroImage = ({ src , alt  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative group w-64 h-64 sm:w-auto sm:h-auto",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {
                src: src,
                alt: alt,
                width: 300,
                height: 300,
                className: "rounded shadow-xl"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "absolute inset-0 border-[3px] z-[-1] rounded border-accent translate-x-6 translate-y-6 group-hover:translate-x-4 group-hover:translate-y-4 duration-150 hidden sm:block"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (HeroImage);


/***/ }),

/***/ 8644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const Link = ({ href , className ="" , children , onClick =()=>{} , withPadding =false , ...rest })=>{
    if (withPadding) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            href: href,
            className: `group ${className}`,
            onClick: onClick,
            ...rest,
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("span", {
                className: "relative w-fit",
                children: [
                    children,
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:w-full bg-accent duration-300 ease-in-scroll"
                    })
                ]
            })
        });
    }
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
        href: href,
        className: `relative ${className} group`,
        onClick: onClick,
        ...rest,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                className: "absolute -bottom-0.5 left-0 h-[1px] w-0 group-hover:w-full group-focus:outline-none group-focus:w-full bg-accent duration-300 ease-in-scroll"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Link);


/***/ }),

/***/ 1395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const ListItem = ({ children , className =""  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        className: `before:content-['▹'] flex before:mr-3 before:text-accent before:block ${className}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ListItem);


/***/ }),

/***/ 6382:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const NavButton = ({ onClick , className , navbarCollapsed  })=>{
    const classes = `bg-accent h-0.5 w-7 duration-200 ${navbarCollapsed ? "absolute" : ""}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        className: `${className} w-7 h-7 group transition focus:outline-none`,
        onClick: onClick,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: `space-y-1.5 flex flex-col items-end relative ${navbarCollapsed ? "space-y-0 rotate-90 duration-300 delay-100" : "group-hover:space-y-1 group-focus:space-y-1"}`,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${classes} ${navbarCollapsed ? "rotate-45" : ""}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${classes} w-6 ${navbarCollapsed ? "opacity-0" : "opacity-100"}`
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: `${classes} ${navbarCollapsed ? "-rotate-45" : "w-5"}`
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NavButton);


/***/ }),

/***/ 9385:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_4__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_3__]);
framer_motion__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];





const ProjectCard = ({ name , url , repo , year , img , tags =[] , ...motionProps })=>{
    const [imageError, setImageError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const handleClick = (e)=>{
        const isLink = e.target.closest("a");
        if (!isLink && url) {
            window.open(url, "_blank", "noopener noreferrer");
        }
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.div, {
        className: "w-full h-[450px]" // Fixed height for consistency
        ,
        ...motionProps,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "group bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer h-full flex flex-col overflow-hidden",
            onClick: handleClick,
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative h-[200px] w-full overflow-hidden bg-gray-100 dark:bg-gray-700",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                        src: img,
                        alt: `${name} project thumbnail`,
                        fill: true,
                        className: "object-cover transition-transform duration-300 group-hover:scale-105",
                        onError: ()=>setImageError(true),
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                        priority: true
                    })
                }),
                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex flex-col flex-grow p-6",
                    children: [
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex items-center justify-between gap-2 mb-4",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                    className: "font-semibold text-lg text-gray-800 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors line-clamp-1",
                                    children: name
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                    className: "flex items-center gap-3 ml-2",
                                    children: [
                                        repo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: repo,
                                            className: "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            "aria-label": "View source code",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Github, {
                                                className: "h-5 w-5"
                                            })
                                        }),
                                        url && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                            href: url,
                                            className: "text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors p-1",
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            "aria-label": "Visit live project",
                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__.ExternalLink, {
                                                className: "h-5 w-5"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "flex-grow",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap gap-2 mb-4",
                                children: tags.map((tag)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "px-3 py-1 text-xs font-medium rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300",
                                        children: tag
                                    }, tag))
                            })
                        }),
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "pt-4 border-t border-gray-200 dark:border-gray-700",
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-sm text-gray-500 dark:text-gray-400",
                                children: year
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectCard);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7386:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);


const SEO = (seoData)=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                children: seoData.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "title",
                content: seoData.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "author",
                content: seoData.author
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "description",
                content: seoData.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                name: "keywords",
                content: seoData.keywords.join(", ")
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("link", {
                rel: "canonical",
                href: seoData.url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:type",
                content: "website"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:url",
                content: seoData.url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:title",
                content: seoData.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:description",
                content: seoData.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:image",
                content: seoData.image
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "og:site_name",
                content: seoData.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:card",
                content: "summary_large_image"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:url",
                content: seoData.url
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:title",
                content: seoData.title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:description",
                content: seoData.description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                property: "twitter:image",
                content: seoData.image
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SEO);


/***/ }),

/***/ 9805:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);
// src/components/ShowLottie.js (or ShowLottie.tsx)


const Player = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(null, {
    loadableGenerated: {
        modules: [
            "..\\components\\ShowLottie.tsx -> " + "@lottiefiles/react-lottie-player"
        ]
    },
    ssr: false
});
const ShowLottie = ({ path , className =""  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: `max-w-sm md:max-w-md ${className}`,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Player, {
            autoplay: true,
            loop: true,
            src: path
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ShowLottie);


/***/ }),

/***/ 6073:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__]);
framer_motion__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];




const Sidebar = ({ children , className ="" , side ="left"  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
        variants: (0,_animations__WEBPACK_IMPORTED_MODULE_3__/* .fadeIn */ .Ji)(2.75),
        initial: "hidden",
        animate: "show",
        className: `fixed bottom-0 flex-col items-center hidden md:flex ${className} ${side === "left" ? "left-6 xl:left-12" : "right-6 xl:right-12"}`,
        children: [
            children,
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "bg-slate-500 h-24 w-0.5 mt-5"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Sidebar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 33:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var ___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4790);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_2__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, ___WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const Skill = ({ lottie , title , skills , points , className ="" , ...rest })=>{
    return /*#__PURE__*/ _jsxs(motion.div, {
        className: `flex gap-8 sm:gap-10 flex-col lg:flex-row items-center ${className}`,
        ...rest,
        children: [
            /*#__PURE__*/ _jsxs("div", {
                className: "space-y-14 lg:w-1/2",
                children: [
                    /*#__PURE__*/ _jsx("h3", {
                        className: "capitalize text-2xl sm:text-3xl text-center mb-5",
                        children: title
                    }),
                    /*#__PURE__*/ _jsx("div", {
                        className: "flex gap-2 justify-center flex-wrap",
                        children: skills.map(({ name , icon  })=>/*#__PURE__*/ _jsx(SkillIcon, {
                                src: icon,
                                name: name
                            }, getId()))
                    }, getId()),
                    /*#__PURE__*/ _jsx("ul", {
                        className: "text-base space-y-2",
                        children: points.map((point)=>/*#__PURE__*/ _jsx(ListItem, {
                                children: point
                            }, getId()))
                    })
                ]
            }),
            /*#__PURE__*/ _jsx(ShowLottie, {
                path: lottie,
                className: "md:min-h-[448px] md:min-w-[448px]"
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (Skill)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6120:
/***/ ((module, __unused_webpack___webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const SkillIcon = ({ src , name  })=>{
    return /*#__PURE__*/ _jsxs("div", {
        className: "text-2xl relative bg-bg-secondary shadow-md dark:shadow-xl rounded-full h-14 w-14 sm:h-16 sm:w-16 grid place-items-center group",
        children: [
            /*#__PURE__*/ _jsx(Icon, {
                icon: src,
                width: "32",
                height: "32"
            }),
            /*#__PURE__*/ _jsxs("div", {
                className: "opacity-0 invisible w-max group-hover:opacity-100 group-hover:visible absolute -top-8 rounded capitalize bg-slate-900/75 dark:bg-slate-700/90 text-white dark:text-slate-100 py-1 px-2 text-sm duration-200",
                children: [
                    name,
                    /*#__PURE__*/ _jsx("svg", {
                        className: "absolute text-slate-900/75 dark:text-slate-700/90 h-2 w-full left-0 top-full",
                        x: "0px",
                        y: "0px",
                        viewBox: "0 0 255 255",
                        xmlSpace: "preserve",
                        children: /*#__PURE__*/ _jsx("polygon", {
                            className: "fill-current",
                            points: "0,0 127.5,127.5 255,0"
                        })
                    })
                ]
            })
        ]
    });
};
/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ((/* unused pure expression or super */ null && (SkillIcon)));

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6453:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5566);
/* harmony import */ var _SocialLink__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5616);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_iconify_react__WEBPACK_IMPORTED_MODULE_1__]);
_iconify_react__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SocialIcon = ({ icon , url  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialLink__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {
            href: url,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_1__.Icon, {
                icon: icon,
                width: 24,
                height: 24
            })
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialIcon);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 5616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);

const SocialLink = ({ href , children , className =""  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
        href: href,
        target: "_blank",
        className: `block text-sm p-2.5 hover:text-accent hover:-translate-y-1 focus:outline-none focus:text-accent focus:-translate-y-1 duration-200 ${className}`,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialLink);


/***/ }),

/***/ 6476:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__]);
framer_motion__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const Wrapper = ({ children , as ="section" , className ="" , id ="" , animate =true , ...rest })=>{
    if (animate) {
        const MotionTag = (0,framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion)(as);
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MotionTag, {
            id: id,
            className: `py-24 md:py-32 ${className}`,
            ...rest,
            children: children
        });
    }
    if (as === "section") {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.section, {
            id: id,
            className: `py-24 md:py-32 ${className}`,
            ...rest,
            children: children
        });
    }
    const CustomTag = `${as}`;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(CustomTag, {
        id: id,
        className: `py-24 md:py-32 ${className}`,
        ...rest,
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Wrapper);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9176:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HC": () => (/* reexport safe */ _ListItem__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "HJ": () => (/* reexport safe */ _SEO__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "IW": () => (/* reexport safe */ _SocialLink__WEBPACK_IMPORTED_MODULE_13__.Z),
/* harmony export */   "QZ": () => (/* reexport safe */ _SocialIcon__WEBPACK_IMPORTED_MODULE_12__.Z),
/* harmony export */   "YE": () => (/* reexport safe */ _Sidebar__WEBPACK_IMPORTED_MODULE_9__.Z),
/* harmony export */   "ZG": () => (/* reexport safe */ _HeroImage__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "fe": () => (/* reexport safe */ _NavButton__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "ib": () => (/* reexport safe */ _DarkModeButton__WEBPACK_IMPORTED_MODULE_1__.Z),
/* harmony export */   "im": () => (/* reexport safe */ _Wrapper__WEBPACK_IMPORTED_MODULE_14__.Z),
/* harmony export */   "rU": () => (/* reexport safe */ _Link__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "t": () => (/* reexport safe */ _ProjectCard__WEBPACK_IMPORTED_MODULE_6__.Z),
/* harmony export */   "y2": () => (/* reexport safe */ _ShowLottie__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "zx": () => (/* reexport safe */ _Button__WEBPACK_IMPORTED_MODULE_0__.Z)
/* harmony export */ });
/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7543);
/* harmony import */ var _DarkModeButton__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4378);
/* harmony import */ var _HeroImage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7493);
/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8644);
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1395);
/* harmony import */ var _NavButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6382);
/* harmony import */ var _ProjectCard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9385);
/* harmony import */ var _SEO__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7386);
/* harmony import */ var _ShowLottie__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(9805);
/* harmony import */ var _Sidebar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(6073);
/* harmony import */ var _Skill__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(33);
/* harmony import */ var _SkillIcon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(6120);
/* harmony import */ var _SocialIcon__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(6453);
/* harmony import */ var _SocialLink__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(5616);
/* harmony import */ var _Wrapper__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(6476);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Button__WEBPACK_IMPORTED_MODULE_0__, _DarkModeButton__WEBPACK_IMPORTED_MODULE_1__, _ProjectCard__WEBPACK_IMPORTED_MODULE_6__, _Sidebar__WEBPACK_IMPORTED_MODULE_9__, _Skill__WEBPACK_IMPORTED_MODULE_10__, _SkillIcon__WEBPACK_IMPORTED_MODULE_11__, _SocialIcon__WEBPACK_IMPORTED_MODULE_12__, _Wrapper__WEBPACK_IMPORTED_MODULE_14__]);
([_Button__WEBPACK_IMPORTED_MODULE_0__, _DarkModeButton__WEBPACK_IMPORTED_MODULE_1__, _ProjectCard__WEBPACK_IMPORTED_MODULE_6__, _Sidebar__WEBPACK_IMPORTED_MODULE_9__, _Skill__WEBPACK_IMPORTED_MODULE_10__, _SkillIcon__WEBPACK_IMPORTED_MODULE_11__, _SocialIcon__WEBPACK_IMPORTED_MODULE_12__, _Wrapper__WEBPACK_IMPORTED_MODULE_14__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);

















__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8682:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _iconify_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5566);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _iconify_react__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _iconify_react__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);




const AdvancedSkillTimeline = ({ skills  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "relative mx-auto px-4 md:px-8 py-16",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "absolute left-1/2 transform -translate-x-1/2 h-full",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "h-full w-px border-l-2 border-accent border-dashed"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        className: "absolute -top-8 left-1/2 transform -translate-x-1/2",
                        animate: {
                            y: [
                                0,
                                20,
                                0
                            ]
                        },
                        transition: {
                            duration: 2,
                            repeat: Infinity
                        }
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "relative",
                children: skills.map((skill, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 0.6,
                            delay: index * 0.2
                        },
                        className: "mb-24",
                        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: `flex justify-center items-start gap-8 md:gap-16 relative ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}`,
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "absolute left-1/2 transform -translate-x-1/2 mt-6",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                        className: "w-6 h-6 bg-accent rounded-full shadow-md border-2 border-white"
                                    })
                                }),
                                /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {
                                    whileHover: {
                                        scale: 1.05
                                    },
                                    className: `w-full md:w-[500px] bg-bg-secondary rounded-xl shadow-lg 
                           border border-gray-200 dark:border-gray-700 p-6 transition-transform 
                           ${index % 2 === 0 ? "md:mr-[55%]" : "md:ml-[55%]"}`,
                                    children: [
                                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                            className: "flex items-center gap-4 mb-6",
                                            children: [
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                    className: "p-3 bg-accent/10 "
                                                }),
                                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                                    className: "text-2xl font-bold text-",
                                                    children: skill.title
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                            className: "flex flex-wrap gap-3 mb-6",
                                            children: skill.softwareSkills.map((software)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                    className: "group relative",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                            className: "p-2.5 bg-bg hover:bg-bg-secondary rounded-lg shadow transition-all duration-300",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                                                icon: software.icon,
                                                                className: "w-8 h-8 text-accent"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "absolute -top-10 left-1/2 transform -translate-x-1/2 hidden group-hover:block bg-accent text-white text-xs py-1.5 px-3 rounded-full whitespace-nowrap z-20 animate-fade-in",
                                                            children: software.name
                                                        })
                                                    ]
                                                }, software.name))
                                        }),
                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                            className: "space-y-3",
                                            children: skill.points.map((point, idx)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
                                                    initial: {
                                                        opacity: 0,
                                                        x: index % 2 === 0 ? -20 : 20
                                                    },
                                                    whileInView: {
                                                        opacity: 1,
                                                        x: 0
                                                    },
                                                    transition: {
                                                        delay: idx * 0.1
                                                    },
                                                    className: "flex items-start gap-3 group",
                                                    children: [
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "mt-1.5",
                                                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_iconify_react__WEBPACK_IMPORTED_MODULE_3__.Icon, {
                                                                icon: "ph:check-circle-fill",
                                                                className: "w-5 h-5 text-accent group-hover:text-accent-light transition-colors duration-300"
                                                            })
                                                        }),
                                                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                                            className: "text-text-secondary text-sm leading-relaxed",
                                                            children: point
                                                        })
                                                    ]
                                                }, idx))
                                        })
                                    ]
                                })
                            ]
                        })
                    }, skill.id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdvancedSkillTimeline);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2904:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9912);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9176);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4790);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7347);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_3__]);
_components__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






const About = ()=>{
    const { title , img , list  } = _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__/* .aboutSection */ .$1;
    // To avoid hydration error
    const [domLoaded, setDomLoaded] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        setDomLoaded(true);
    }, []);
    return domLoaded ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_3__/* .Wrapper */ .im, {
        id: "about",
        ..._animations__WEBPACK_IMPORTED_MODULE_2__/* .getSectionAnimation */ .v5,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "heading-secondary",
                children: title
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("main", {
                className: "flex gap-16 items-center lg:items-start flex-col lg:flex-row",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "space-y-4 lg:w-3/5",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "Hello! I'm M. Abir Alam, a passionate Full Stack Developer with a Bachelor's degree in Computer Science and Engineering from United International University. I specialize in building responsive web applications that combine modern front-end interfaces with scalable back-end solutions."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "My journey in software development has been marked by successful projects like UniVerseHub, an educational platform where I implemented comprehensive study planning features and group collaboration tools. I've also developed innovative solutions for e-commerce platforms and service-based applications, focusing on user experience and technical excellence."
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                children: "I'm particularly proud of receiving recognition as 1st Runner-Up in multiple UIU CSE Project Shows, which reflects my commitment to delivering high-quality software solutions. Currently, I'm focused on expanding my expertise in modern web technologies like TypeScript, React.js, and Node.js while building efficient, user-centered applications that solve real-world problems."
                            }),
                            list && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: list.title
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "text-sm gap-1 grid grid-cols-2 w-2/3",
                                        children: list.items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .ListItem */ .HC, {
                                                children: item
                                            }, (0,_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getId */ .zv)()))
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .HeroImage */ .ZG, {
                        src: img,
                        alt: _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__/* .author.name */ .v.name
                    })
                ]
            })
        ]
    }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {});
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (About);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8402:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ containers_Blog)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/utils/fetchBlogs.ts
var fetchBlogs = __webpack_require__(5776);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/BlogCard.tsx



// Function to truncate text while keeping HTML tags intact
const truncateText = (html, wordLimit)=>{
    const div = document.createElement("div");
    div.innerHTML = html;
    const textContent = div.innerText || div.textContent || "";
    const words = textContent.split(" ");
    // If the number of words exceeds the limit, truncate the text
    if (words.length > wordLimit) {
        const truncatedText = words.slice(0, wordLimit).join(" ") + "...";
        div.innerHTML = truncatedText; // Set the truncated content back to div
        return div.innerHTML;
    }
    return html; // Return original HTML if word count is within limit
};
const BlogCard = ({ id , title , description , topic , img , readTime , date  })=>{
    const router = (0,router_.useRouter)();
    const handleReadMore = ()=>{
        router.push(`/Blog/${id}`); // Redirect to the single blog page
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                    src: img,
                    alt: title,
                    className: "w-full h-48 object-cover"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-6",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center space-x-4 mb-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-sm text-blue-600 dark:text-blue-400 font-medium",
                                children: topic
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-sm text-gray-500 dark:text-gray-400",
                                children: readTime
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                        className: "text-xl font-bold mb-2 text-gray-900 dark:text-white",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-gray-600 dark:text-gray-300 mb-4 line-clamp-3",
                        dangerouslySetInnerHTML: {
                            __html: truncateText(description, 20)
                        }
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                className: "text-sm text-gray-500 dark:text-gray-400",
                                children: new Date(date).toLocaleDateString()
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                onClick: handleReadMore,
                                className: "text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium text-sm transition-colors",
                                children: "Read More →"
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const components_BlogCard = (BlogCard);

;// CONCATENATED MODULE: ./src/containers/Blog.tsx
"use client";


 // Assuming this function fetches the blogs

const Blog = ()=>{
    const [blogPosts, setBlogPosts] = (0,external_react_.useState)([]);
    const [loading, setLoading] = (0,external_react_.useState)(true);
    (0,external_react_.useEffect)(()=>{
        const getBlogs = async ()=>{
            const blogs = await (0,fetchBlogs/* fetchBlogs */.J)();
            setBlogPosts(blogs);
            setLoading(false);
        };
        getBlogs();
    }, []);
    if (loading) {
        return /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: "text-center py-20",
            children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                className: "text-lg font-medium",
                children: "Loading blog posts..."
            })
        });
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("section", {
        id: "Blog",
        className: "py-20 px-4 bg-gray-50 dark:bg-gray-900",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-6xl mx-auto",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "text-center mb-16",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-3xl font-bold text-gray-900 dark:text-white mb-4",
                            children: "Latest Blog Posts"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "text-gray-600 dark:text-gray-300 max-w-2xl mx-auto",
                            children: "Discover professional insights, tutorials, and personal projects related to web development and design."
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "grid md:grid-cols-2 lg:grid-cols-3 gap-8",
                    children: blogPosts.map((post)=>/*#__PURE__*/ jsx_runtime_.jsx(components_BlogCard, {
                            id: post._id,
                            title: post.title,
                            description: post.description,
                            topic: post.topic,
                            img: post.img,
                            readTime: post.readTime,
                            date: post.date
                        }, post._id))
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "text-center mt-12",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        href: "/Blog/AllBlog",
                        className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium transition-colors shadow-lg hover:shadow-blue-500/25",
                        children: "View All Posts"
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const containers_Blog = (Blog);


/***/ }),

/***/ 7835:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7347);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Email = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Sidebar */ .YE, {
        side: "right",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .SocialLink */ .IW, {
            href: `mailto:${_utils_portfolio__WEBPACK_IMPORTED_MODULE_2__/* .author.email */ .v.email}`,
            className: "[writing-mode:vertical-lr] font-mono tracking-widest text-xs",
            children: _utils_portfolio__WEBPACK_IMPORTED_MODULE_2__/* .author.email */ .v.email
        })
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Email);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2464:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7212);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7347);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_SocialLinks__WEBPACK_IMPORTED_MODULE_1__]);
_SocialLinks__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const Footer = ()=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: "max-w-lg mx-auto text-center font-mono mb-5 text-xs",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialLinks__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z, {
                className: "flex md:hidden justify-center gap-3 mb-3"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                href: _utils_portfolio__WEBPACK_IMPORTED_MODULE_2__/* .footerSection.link */ .jI.link,
                target: "_blank",
                rel: "noopener noreferrer",
                className: "hover:text-accent transition",
                children: _utils_portfolio__WEBPACK_IMPORTED_MODULE_2__/* .footerSection.title */ .jI.title
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 9436:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6197);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9176);
/* harmony import */ var _hooks_use_window_width__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7509);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4790);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7347);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_1__, _components__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);







const Hero = ()=>{
    const { cta , subtitle , title , tagline , description , specialText  } = _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__/* .heroSection */ .uH;
    const windowWidth = (0,_hooks_use_window_width__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z)();
    const md = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_4__/* .getBreakpointsWidth */ .ad)("md");
    const DEFAULT_ANIMATION_DELAY = windowWidth <= md ? 0.9 : 1.7;
    const getAnimationDelay = (i, increment = 0.15)=>DEFAULT_ANIMATION_DELAY + increment * i;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_2__/* .Wrapper */ .im, {
        id: "hero",
        className: "min-h-screen h-full flex flex-col justify-center gap-6 xs:gap-7 mt-12 xs:mt-0",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
                variants: (0,_animations__WEBPACK_IMPORTED_MODULE_6__/* .slideUp */ .iM)({
                    delay: getAnimationDelay(0)
                }),
                initial: "hidden",
                animate: "show",
                className: "text-sm md:text-base text-accent font-mono",
                children: subtitle
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "text-4xl md:text-7xl font-bold tracking-tighter max-w-5xl",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.h1, {
                        variants: (0,_animations__WEBPACK_IMPORTED_MODULE_6__/* .slideUp */ .iM)({
                            delay: getAnimationDelay(1)
                        }),
                        initial: "hidden",
                        animate: "show",
                        className: "text-slate-900 dark:text-slate-200 capitalize mb-2 leading-[1.1]",
                        children: title
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.h1, {
                        variants: (0,_animations__WEBPACK_IMPORTED_MODULE_6__/* .slideUp */ .iM)({
                            delay: getAnimationDelay(2)
                        }),
                        initial: "hidden",
                        animate: "show",
                        className: "leading-[1.2]",
                        children: tagline
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
                variants: (0,_animations__WEBPACK_IMPORTED_MODULE_6__/* .slideUp */ .iM)({
                    delay: getAnimationDelay(3)
                }),
                initial: "hidden",
                animate: "show",
                className: "max-w-xl text-base md:text-lg",
                children: description
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_1__.motion.p, {
                variants: (0,_animations__WEBPACK_IMPORTED_MODULE_6__/* .slideUp */ .iM)({
                    delay: getAnimationDelay(4)
                }),
                initial: "hidden",
                animate: "show",
                className: "text-xs md:text-sm font-mono text-accent",
                children: specialText
            }),
            cta && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_2__/* .Button */ .zx, {
                size: "lg",
                type: "link",
                variants: (0,_animations__WEBPACK_IMPORTED_MODULE_6__/* .slideUp */ .iM)({
                    delay: getAnimationDelay(5)
                }),
                initial: "hidden",
                animate: "show",
                href: cta?.url ?? "#",
                className: `mt-5 xs:mt-8 md:mt-10 ${cta.hideInDesktop ? "md:hidden" : ""}`,
                sameTab: cta?.sameTab,
                children: cta.title
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Hero);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 6860:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7835);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2464);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(3218);
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(2105);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Email__WEBPACK_IMPORTED_MODULE_2__, _Footer__WEBPACK_IMPORTED_MODULE_3__, _Navbar__WEBPACK_IMPORTED_MODULE_4__, _Social__WEBPACK_IMPORTED_MODULE_5__]);
([_Email__WEBPACK_IMPORTED_MODULE_2__, _Footer__WEBPACK_IMPORTED_MODULE_3__, _Navbar__WEBPACK_IMPORTED_MODULE_4__, _Social__WEBPACK_IMPORTED_MODULE_5__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);






const Layout = ({ children , className =""  })=>{
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Navbar__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("main", {
                className: `mx-auto px-6 sm:px-8 md:px-28 lg:px-20 xl:px-0 max-w-screen-lg ${className}`,
                children: children
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Footer__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Social__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_Email__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3218:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6197);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9176);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9912);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7347);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4790);
/* harmony import */ var _hooks_use_window_width__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7509);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_3__]);
([framer_motion__WEBPACK_IMPORTED_MODULE_2__, _components__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);








/**
 * Hides the navbar while scrolling down
 * @param {Object} config
 * @param {String} [config.id=navbar] - id of navbar
 * @param {Number} [config.offset=100] - offset of navbar in px
 */ const hideNavWhileScrolling = ({ id ="navbar" , offset =100 , when =true  })=>{
    const nav = document.getElementById(id);
    if (!nav) return;
    let prevScrollPos = window.pageYOffset;
    window.onscroll = ()=>{
        if (when) {
            let curScrollPos = window.pageYOffset;
            if (prevScrollPos < curScrollPos) nav.style.top = `-${offset}px`;
            else nav.style.top = "0";
            prevScrollPos = curScrollPos;
        }
    };
};
const NavItem = ({ href , children , onClick , index , delay  })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.li, {
        className: "group",
        variants: (0,_animations__WEBPACK_IMPORTED_MODULE_4__/* .slideIn */ .Ym)({
            delay: delay + index / 10,
            direction: "down"
        }),
        initial: "hidden",
        animate: "show",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Link */ .rU, {
            href: href || `/#${children}`,
            className: "p-2 hover:text-accent duration-500 block",
            onClick: onClick,
            withPadding: true,
            children: children
        })
    });
};
const Navbar = ()=>{
    const { cta , navLinks  } = _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__/* .navbarSection */ .vy;
    const [navbarCollapsed, setNavbarCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const windowWidth = (0,_hooks_use_window_width__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)();
    const md = (0,_utils_helper__WEBPACK_IMPORTED_MODULE_6__/* .getBreakpointsWidth */ .ad)("md");
    const ANIMATION_DELAY = windowWidth <= md ? 0 : 0.8;
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        hideNavWhileScrolling({
            when: !navbarCollapsed
        });
    }, [
        navbarCollapsed
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.header, {
        variants: (0,_animations__WEBPACK_IMPORTED_MODULE_4__/* .fadeIn */ .Ji)(0.5),
        initial: "hidden",
        animate: "show",
        id: "navbar",
        className: "px-8 md:px-6 xl:px-12 py-4 fixed inset-x-0 top-0 right-0 flex justify-between items-end z-50 duration-500 backdrop-blur-lg",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                className: "font-signature text-accent capitalize text-2xl relative group top-1",
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                    href: "/#hero",
                    className: "block",
                    children: [
                        _utils_portfolio__WEBPACK_IMPORTED_MODULE_5__/* .author.name */ .v.name,
                        /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "absolute bottom-1.5 left-0 h-[1px] w-0 group-hover:w-full bg-accent duration-300"
                        })
                    ]
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .NavButton */ .fe, {
                onClick: ()=>{
                    setNavbarCollapsed((prev)=>!prev);
                },
                navbarCollapsed: navbarCollapsed,
                className: "md:invisible"
            }),
            (navbarCollapsed || windowWidth > md) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("nav", {
                className: `capitalize absolute text-sm duration-200 md:bg-transparent z-50 w-[90%] left-1/2 -translate-x-1/2 top-full h-max rounded-xl shadow-xl p-6 bg-bg-secondary md:blocks md:static md:w-auto md:left-auto md:transform-none md:top-auto md:rounded-none md:shadow-none md:p-0 md:h-auto`,
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("ul", {
                    className: `list-style-none flex flex-col gap-3 lg:gap-5 xl:gap-6 md:flex-row items-stretch md:items-center`,
                    children: [
                        navLinks.map(({ name , url  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NavItem, {
                                href: url,
                                index: i,
                                delay: ANIMATION_DELAY,
                                onClick: ()=>setNavbarCollapsed(false),
                                children: name
                            }, i)),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex justify-between gap-5 xl:gap-6 items-center",
                            children: [
                                cta && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .Button */ .zx, {
                                    type: "link",
                                    href: cta.url,
                                    sameTab: cta?.sameTab,
                                    variants: (0,_animations__WEBPACK_IMPORTED_MODULE_4__/* .slideIn */ .Ym)({
                                        delay: ANIMATION_DELAY + navLinks.length / 10,
                                        direction: "down"
                                    }),
                                    initial: "hidden",
                                    animate: "show",
                                    children: cta.title
                                }),
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_3__/* .DarkModeButton */ .ib, {
                                    onClick: ()=>setNavbarCollapsed(false),
                                    variants: (0,_animations__WEBPACK_IMPORTED_MODULE_4__/* .slideIn */ .Ym)({
                                        delay: ANIMATION_DELAY + (navLinks.length + 1) / 10,
                                        direction: "down"
                                    }),
                                    initial: "hidden",
                                    animate: "show"
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Navbar);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7317:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9648);
/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6197);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9176);
/* harmony import */ var _utils_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(2974);
/* harmony import */ var _utils_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(4790);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(9912);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([axios__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__]);
([axios__WEBPACK_IMPORTED_MODULE_2__, framer_motion__WEBPACK_IMPORTED_MODULE_3__, _components__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);









const Projects = ()=>{
    const [projectsSection, setProjectsSection] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [showMore, setShowMore] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // Axios GET request to fetch all projects
        axios__WEBPACK_IMPORTED_MODULE_2__["default"].get("https://portfolio-dnjj.vercel.app/projects", {
            headers: {
                email: "ardhrubo908@gmail.com",
                password: "abir908"
            }
        }).then((response)=>{
            console.log("Projects fetched successfully:", response.data);
            // Assuming the API response contains a projects array
            const fetchedProjects = response.data;
            // Mapping the fetched data to match the required format
            const updatedProjectsSection = {
                title: "My Projects",
                projects: fetchedProjects.map((project)=>({
                        id: project._id,
                        name: project.name,
                        url: project.url,
                        repo: project.repo,
                        img: project.img || "",
                        year: project.year,
                        tags: project.tags
                    }))
            };
            setProjectsSection(updatedProjectsSection); // Update state with fetched data
        }).catch((error)=>{
            console.error("Error fetching projects:", error);
        });
    }, []); // Empty dependency array means this effect will run once when the component mounts
    // If the data is not yet fetched, show a loading state
    if (!projectsSection) {
        return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            children: "Loading projects..."
        });
    }
    const { projects , title  } = projectsSection;
    const topProjects = projects.slice(0, _utils_config__WEBPACK_IMPORTED_MODULE_7__/* .PROJECTS_INITIALLY */ .tp);
    const visibleProjects = showMore ? projects : topProjects;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_4__/* .Wrapper */ .im, {
        id: "projects",
        animate: false,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(framer_motion__WEBPACK_IMPORTED_MODULE_3__.motion.h2, {
                ..._animations__WEBPACK_IMPORTED_MODULE_6__/* .getSectionAnimation */ .v5,
                className: "heading-secondary text-center !mb-12",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-auto-250 xs:grid-cols-auto-300 gap-6 place-items-center",
                children: (0,_utils_helper__WEBPACK_IMPORTED_MODULE_5__/* .sortByYear */ .z_)(visibleProjects).map((project, i)=>{
                    return /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(_components__WEBPACK_IMPORTED_MODULE_4__/* .ProjectCard */ .t, {
                        description: undefined,
                        ...project,
                        key: project.id,
                        variants: _animations__WEBPACK_IMPORTED_MODULE_6__/* .projectVariants */ .G,
                        initial: "hidden",
                        whileInView: "show",
                        custom: i
                    });
                })
            }),
            projects.length > _utils_config__WEBPACK_IMPORTED_MODULE_7__/* .PROJECTS_INITIALLY */ .tp && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_4__/* .Button */ .zx, {
                size: "lg",
                className: "!mt-20",
                center: true,
                onClick: ()=>setShowMore((prev)=>!prev),
                children: showMore ? "Show less" : "Show more"
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Projects);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7527:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var _animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9912);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7347);
/* harmony import */ var _components_skillTimeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8682);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__, _components_skillTimeline__WEBPACK_IMPORTED_MODULE_4__]);
([_components__WEBPACK_IMPORTED_MODULE_1__, _components_skillTimeline__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);





const Skills = ()=>{
    const { title , skills  } = _utils_portfolio__WEBPACK_IMPORTED_MODULE_3__/* .skillsSection */ .LO;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components__WEBPACK_IMPORTED_MODULE_1__/* .Wrapper */ .im, {
        as: "section",
        id: "skills",
        ..._animations__WEBPACK_IMPORTED_MODULE_2__/* .getSectionAnimation */ .v5,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                className: "heading-secondary text-center mb-16 text-accent",
                children: title
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_skillTimeline__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {
                skills: skills
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Skills);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 2105:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7212);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__, _SocialLinks__WEBPACK_IMPORTED_MODULE_2__]);
([_components__WEBPACK_IMPORTED_MODULE_1__, _SocialLinks__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);



const Social = ()=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .Sidebar */ .YE, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_SocialLinks__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z, {})
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Social);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7212:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9176);
/* harmony import */ var _utils_portfolio__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7347);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components__WEBPACK_IMPORTED_MODULE_1__]);
_components__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];



const SocialLinks = ({ className =""  })=>{
    const { socialLinks  } = _utils_portfolio__WEBPACK_IMPORTED_MODULE_2__/* .socialSection */ .u9;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
        className: className,
        children: socialLinks.map(({ icon , url  }, i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components__WEBPACK_IMPORTED_MODULE_1__/* .SocialIcon */ .QZ, {
                icon: icon,
                url: url
            }, url))
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SocialLinks);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 8282:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ar": () => (/* reexport safe */ _Layout__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "CL": () => (/* reexport safe */ _About__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "VM": () => (/* reexport safe */ _Hero__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "nA": () => (/* reexport safe */ _Skills__WEBPACK_IMPORTED_MODULE_8__.Z),
/* harmony export */   "pj": () => (/* reexport safe */ _Projects__WEBPACK_IMPORTED_MODULE_7__.Z)
/* harmony export */ });
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2904);
/* harmony import */ var _Blog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8402);
/* harmony import */ var _Email__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7835);
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2464);
/* harmony import */ var _Hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9436);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6860);
/* harmony import */ var _Navbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(3218);
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(7317);
/* harmony import */ var _Skills__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(7527);
/* harmony import */ var _Social__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2105);
/* harmony import */ var _SocialLinks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(7212);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_About__WEBPACK_IMPORTED_MODULE_0__, _Email__WEBPACK_IMPORTED_MODULE_2__, _Footer__WEBPACK_IMPORTED_MODULE_3__, _Hero__WEBPACK_IMPORTED_MODULE_4__, _Layout__WEBPACK_IMPORTED_MODULE_5__, _Navbar__WEBPACK_IMPORTED_MODULE_6__, _Projects__WEBPACK_IMPORTED_MODULE_7__, _Skills__WEBPACK_IMPORTED_MODULE_8__, _Social__WEBPACK_IMPORTED_MODULE_9__, _SocialLinks__WEBPACK_IMPORTED_MODULE_10__]);
([_About__WEBPACK_IMPORTED_MODULE_0__, _Email__WEBPACK_IMPORTED_MODULE_2__, _Footer__WEBPACK_IMPORTED_MODULE_3__, _Hero__WEBPACK_IMPORTED_MODULE_4__, _Layout__WEBPACK_IMPORTED_MODULE_5__, _Navbar__WEBPACK_IMPORTED_MODULE_6__, _Projects__WEBPACK_IMPORTED_MODULE_7__, _Skills__WEBPACK_IMPORTED_MODULE_8__, _Social__WEBPACK_IMPORTED_MODULE_9__, _SocialLinks__WEBPACK_IMPORTED_MODULE_10__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);













__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7509:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const useWindowWidth = ()=>{
    const [windowWidth, setWindowWidth] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    if (false) {}
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        setWindowWidth(window.innerWidth);
    }, []);
    return windowWidth;
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (useWindowWidth);


/***/ }),

/***/ 2974:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mH": () => (/* binding */ resumeFileName),
/* harmony export */   "tp": () => (/* binding */ PROJECTS_INITIALLY)
/* harmony export */ });
/* unused harmony export blurImageURL */
const PROJECTS_INITIALLY = 6;
const resumeFileName = "resume.pdf";
const blurImageURL = "";


/***/ }),

/***/ 5776:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "J": () => (/* binding */ fetchBlogs),
/* harmony export */   "p": () => (/* binding */ fetchSingleBlog)
/* harmony export */ });
const fetchBlogs = async ()=>{
    try {
        const response = await fetch("https://portfolio-dnjj.vercel.app/blogs");
        if (!response.ok) throw new Error("Failed to fetch blogs");
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};
const fetchSingleBlog = async (id)=>{
    const response = await fetch(`https://portfolio-dnjj.vercel.app/blogs/${id}`); // Your backend API URL
    try {
        if (!response.ok) {
            throw new Error("Failed to fetch blog");
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return [];
    }
};


/***/ }),

/***/ 4790:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ad": () => (/* binding */ getBreakpointsWidth),
/* harmony export */   "lu": () => (/* binding */ removeKeys),
/* harmony export */   "z_": () => (/* binding */ sortByYear),
/* harmony export */   "zv": () => (/* binding */ getId)
/* harmony export */ });
/* harmony import */ var _tailwind_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8010);
/* harmony import */ var _tailwind_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_tailwind_config__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8842);
/* harmony import */ var tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1__);


const fullConfig = tailwindcss_resolveConfig__WEBPACK_IMPORTED_MODULE_1___default()((_tailwind_config__WEBPACK_IMPORTED_MODULE_0___default()));
/**
 * Returns the breakpoint's width
 * @param breakpoint - Configured breakpoints: xs sm md lg xl 2xl
 * @returns width - Width of the breakpoint
 */ const getBreakpointsWidth = (breakpoint)=>{
    // @ts-ignore
    return +fullConfig?.theme?.screens[breakpoint].slice(0, -2);
// ! Property 'sm' does not exist on type 'ResolvableTo<ScreensConfig>'
};
/**
 * Returns a unique id
 * @returns {String} Unique id format id123..
 */ const getId = ()=>`id${Math.random().toString(16).slice(2)}`;
/**
 * Returns the projects by sorting them by year (descending)
 * @param {ProjectType[]} projects array of projects
 * @returns {ProjectType[]} array of sorted projects
 */ const sortByYear = (projects)=>{
    return projects.sort((a, b)=>b.year - a.year);
};
/**
 * Modifies the given object by removing the given keys
 * @param object object from which keys need to be removed
 * @param keys array of keys which needs to be removed from the object
 */ const removeKeys = (object, keys)=>{
    keys.forEach((field)=>delete object[field]);
};


/***/ }),

/***/ 7347:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$1": () => (/* binding */ aboutSection),
/* harmony export */   "LO": () => (/* binding */ skillsSection),
/* harmony export */   "dx": () => (/* binding */ contactSection),
/* harmony export */   "ec": () => (/* binding */ educationSection),
/* harmony export */   "hD": () => (/* binding */ seoData),
/* harmony export */   "jI": () => (/* binding */ footerSection),
/* harmony export */   "u9": () => (/* binding */ socialSection),
/* harmony export */   "uH": () => (/* binding */ heroSection),
/* harmony export */   "v": () => (/* binding */ author),
/* harmony export */   "vy": () => (/* binding */ navbarSection)
/* harmony export */ });
/* unused harmony exports socialLinks, experienceSection */
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2974);
/* harmony import */ var _helper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4790);


/*
 * =========================
 * AUTHOR INFO
 * =========================
 */ const socialLinks = {
    instagram: "https://www.instagram.com/abir_ar_rafi_dhrubo/",
    twitter: "https://twitter.com",
    github: "https://github.com/abir191197",
    linkedin: "https://www.linkedin.com/in/abir197"
};
const author = {
    name: "M.Abir Alam",
    email: "ardhrubo908@gmail.com"
};
const seoData = {
    title: "M.Abir Alam | Full-Stack Developer",
    description: "M.Abir Alam is a full-stack developer who specializes in building (and occasionally designing) exceptional visual interfaces.",
    author: author.name,
    image: "https://i.ibb.co.com/sQh2Q2G/Screenshot-2024-12-29-064337.png",
    url: "https://abiralam.vercel.app/",
    keywords: [
        "M.Abir Alam",
        "M.Abir Alam",
        "@M.Abir Alam",
        "M.Abir Alam",
        "Portfolio",
        "Abir Portfolio ",
        "M.Abir Alam Portfolio"
    ]
};
/*
 * =========================
 * SECTIONS
 * =========================
 */ // Navbar Section
const navbarSection = {
    navLinks: [
        {
            name: "about",
            url: "/#about"
        },
        {
            name: "skills",
            url: "/#skills"
        },
        {
            name: "education",
            url: "/#education"
        },
        {
            name: "projects",
            url: "/#projects"
        },
        {
            name: "Blog",
            url: "/#Blog"
        }
    ],
    cta: {
        title: "resume",
        url: `/${_config__WEBPACK_IMPORTED_MODULE_1__/* .resumeFileName */ .mH}`
    }
};
// * Hero Section 
const heroSection = {
    subtitle: "Welcome, I'm",
    title: "M. Abir Alam",
    tagline: "Full Stack Developer transforming ideas into elegant solutions",
    description: "I'm a Software Engineer specializing in building exceptional digital experiences. With a strong foundation in both frontend and backend technologies, I focus on creating efficient, scalable, and user-centric web applications using modern tech stacks.",
    specialText: "React.js • TypeScript • Node.js • Express.js • MongoDB • PostgreSQL",
    cta: {
        title: "View Resume",
        url: `/${_config__WEBPACK_IMPORTED_MODULE_1__/* .resumeFileName */ .mH}`,
        hideInDesktop: true
    }
};
// * About Section
const aboutSection = {
    title: "About Me",
    list: {
        title: "Core Technologies & Expertise:",
        items: [
            "Frontend Development with React.js & Next.js",
            "Backend Architecture with Node.js & Express.js",
            "Database Design with MongoDB & PostgreSQL",
            "State Management using Redux & RTK Query",
            "UI/UX Implementation with Tailwind CSS",
            "API Development & Integration"
        ]
    },
    img: "/M.Abir_Alam.png"
};
// * Skills Section
const skillsSection = {
    title: "Professional Skills",
    skills: [
        {
            id: (0,_helper__WEBPACK_IMPORTED_MODULE_0__/* .getId */ .zv)(),
            title: "Frontend Development",
            lottie: {
                light: "/lotties/frontend.json",
                dark: "/lotties/frontend-dark.json"
            },
            points: [
                "Developing responsive and interactive web applications using React.js and Next.js",
                "Implementing efficient state management solutions with Redux and RTK Query",
                "Creating modern user interfaces with Tailwind CSS and custom styling",
                "Building type-safe applications using TypeScript for enhanced code quality"
            ],
            softwareSkills: [
                {
                    name: "React.js",
                    icon: "logos:react"
                },
                {
                    name: "Next.js",
                    icon: "logos:nextjs-icon"
                },
                {
                    name: "TypeScript",
                    icon: "vscode-icons:file-type-typescript-official"
                },
                {
                    name: "Redux",
                    icon: "logos:redux"
                },
                {
                    name: "Tailwind CSS",
                    icon: "logos:tailwindcss-icon"
                },
                {
                    name: "JavaScript",
                    icon: "vscode-icons:file-type-js-official"
                }
            ]
        },
        {
            id: (0,_helper__WEBPACK_IMPORTED_MODULE_0__/* .getId */ .zv)(),
            title: "Backend Development",
            lottie: {
                light: "/lotties/backend.json",
                dark: "/lotties/backend-dark.json"
            },
            points: [
                "Designing and implementing RESTful APIs using Node.js and Express.js",
                "Developing robust database solutions with MongoDB and PostgreSQL",
                "Creating efficient data models using Mongoose ODM and Prisma ORM",
                "Implementing secure authentication and authorization systems"
            ],
            softwareSkills: [
                {
                    name: "Node.js",
                    icon: "logos:nodejs"
                },
                {
                    name: "Express.js",
                    icon: "logos:express"
                },
                {
                    name: "MongoDB",
                    icon: "logos:mongodb"
                },
                {
                    name: "PostgreSQL",
                    icon: "logos:postgresql"
                },
                {
                    name: "Mongoose",
                    icon: "devicon:mongoose-wordmark"
                },
                {
                    name: "Prisma",
                    icon: "vscode-icons:file-type-prisma"
                }
            ]
        },
        {
            id: (0,_helper__WEBPACK_IMPORTED_MODULE_0__/* .getId */ .zv)(),
            title: "Development Tools & Practices",
            lottie: {
                light: "/lotties/tools.json",
                dark: "/lotties/tools-dark.json"
            },
            points: [
                "Version control and collaboration using Git and GitHub",
                "API testing and documentation with Postman",
                "UI/UX design and prototyping with Figma",
                "Following Software Development Life Cycle (SDLC) best practices"
            ],
            softwareSkills: [
                {
                    name: "Git",
                    icon: "logos:git"
                },
                {
                    name: "GitHub",
                    icon: "logos:github"
                },
                {
                    name: "Postman",
                    icon: "logos:postman"
                },
                {
                    name: "Figma",
                    icon: "logos:figma"
                },
                {
                    name: "VS Code",
                    icon: "logos:visual-studio-code"
                }
            ]
        }
    ]
};
// * Experience Section
const experienceSection = {
    title: "My Education and Achievements",
    experiences: [
        {
            company: "Bachelor of Science",
            companyUrl: "https://about.airmenus.in",
            role: "BSCSE",
            started: "Oct 2022",
            upto: "Present",
            tasks: [
                "Built 15+ dynamic web applications using React and Next.js, resulting in a 15% increase in user engagement.                      Collaborated closely 'with' the design team to implement pixel-perfect UI/UX designs, consistently delivering projects           on-time.",
                "Developed and maintained responsive web applications for clients in the food and hospitality industry, enhancing their           online presence and customer engagement. Implemented Tailwind CSS to streamline the development process, reducing CSS            codebase by 20%",
                "Collaborated with clients to gather project requirements and translate them into actionable technical tasks, ensuring            client expectations were met or exceeded."
            ]
        },
        {
            company: "HSC",
            companyUrl: "https://starkcon.com",
            role: "StarkCon Cairo Fellow",
            started: "January 2023",
            upto: "March 2023",
            tasks: [
                "Selected for the first cohort of StarkCon Cairo Fellow program and got trained on blockchain, Cairo and started building on StarkNet. ",
                "Underwent a 5 week program under mentorship of professionals from StarkNet ecosystem. ",
                "Learnt how to setup Cairo environment, blockchain, basics of ZK and Cairo, writing smart contracts and Starklings.",
                "Earned an exclusive NFT as proof of completion and custom swag kit."
            ]
        },
        {
            company: "Yellow Fryum",
            companyUrl: "https://yellowfryum.com",
            role: "Frontend Developer & Research Intern",
            started: "March 2022",
            upto: "May 2022",
            tasks: [
                "Spearheaded the design and development of a responsive landing page using ReactJS and Tailwind CSS, resulting in a               40% increase in page load speed",
                "Worked closely with a cross-functional team of 5 interns to ideate and implement UI/UX improvements, resulting in a 20%          boost in user engagement and a 15% increase in conversion rates.",
                "Conducted user research and usability testing, gathering feedback from over 100+ users, which directly influenced                design decisions and led to a 30% improvement in user satisfaction scores.",
                "Met project deadlines consistently, delivering good-quality code and designs on time."
            ]
        },
        {
            company: "Google Cloud India",
            companyUrl: "https://cloud.google.com/",
            role: "Google Cloud Ready Facilitator",
            started: "March 2022",
            upto: "June 2022",
            tasks: [
                "Selected as Google Cloud Facilitator for my institution.",
                "Enrolled 600+ students from mine as well as students all across India.",
                "Trained and helped them complete skill badges and quests in the domains of Cloud Infrastructure, Cloud Native Application Development, Big Data and Machine Learning, Security, Machine Learning & AI",
                "At the end of program, approximately 550 students completed their milestones and gained significant knowledge in their respective tracks",
                "The institution as a whole achieved Milestone 3 out of 4 which is a big feat with its first year in the GCRF program."
            ]
        }
    ]
};
//* Education Section
const educationSection = {
    title: "My Education and Achievements",
    education: [
        {
            institution: "United International University",
            institutionUrl: "https://www.uiu.ac.bd/",
            degree: "Bachelor of Science in Computer Science and Engineering (BSCSE)",
            started: "January 2019",
            upto: "January 2024",
            achievements: [
                "Completed core courses in Algorithms, Data Structures, Software Engineering, and AI.",
                "1st Runner-Up, UIU CSE Project Show (Software Engineering Lab, Summer 2024).",
                "1st Runner-Up, UIU CSE Project Show (Final Year Project, Spring 2024)."
            ]
        },
        {
            institution: "Rajbari Govt. College",
            institutionUrl: "https://www.rajbarigovtcollege.edu.bd/",
            degree: "Higher Secondary Certificate (HSC) in Science",
            started: "July 2016",
            upto: "June 2018",
            achievements: []
        },
        {
            institution: "Kumarkhali M. N. Secondary School",
            institutionUrl: "https://bn.wikipedia.org/wiki/%E0%A6%95%E0%A7%81%E0%A6%AE%E0%A6%BE%E0%A6%B0%E0%A6%96%E0%A6%BE%E0%A6%B2%E0%A7%80_%E0%A6%8F%E0%A6%AE.%E0%A6%8F%E0%A6%A8._%E0%A6%AA%E0%A6%BE%E0%A6%87%E0%A6%B2%E0%A6%9F_%E0%A6%AE%E0%A6%BE%E0%A6%A7%E0%A7%8D%E0%A6%AF%E0%A6%AE%E0%A6%BF%E0%A6%95_%E0%A6%AC%E0%A6%BF%E0%A6%A6%E0%A7%8D%E0%A6%AF%E0%A6%BE%E0%A6%B2%E0%A6%AF%E0%A6%BC",
            degree: "Secondary School Certificate (SSC) in Science",
            started: "January 2011",
            upto: "December 2015",
            achievements: []
        }
    ]
};
// * Projects Section
const contactSection = {
    title: "Get in Touch",
    subtitle: "What's Next?",
    paragraphs: [
        "I'm currently seeking remote job opportunities or exciting new challenges",
        "Whether you have a project in mind, want to collaborate, or just say hello—my inbox is always open!"
    ],
    link: `mailto:ardhrubo908@gmail.com`
};
// Social Links Section
const socialSection = {
    socialLinks: [
        {
            icon: "tabler:brand-github",
            url: socialLinks.github
        },
        {
            icon: "mdi:instagram",
            url: socialLinks.instagram
        },
        {
            icon: "lucide:twitter",
            url: socialLinks.twitter
        },
        {
            icon: "lucide:linkedin",
            url: socialLinks.linkedin
        }
    ]
};
// Footer Section
const footerSection = {
    title: "Design Inspiration @Brittany Chiang",
    link: "https://github.com/bchiang7"
};


/***/ }),

/***/ 8010:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/** @type {import('tailwindcss').Config} */ 
module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}"
    ],
    darkMode: "class",
    theme: {
        extend: {
            fontFamily: {
                signature: [
                    "Agustina",
                    "sans-serif"
                ],
                sans: [
                    "Inter",
                    "sans-serif"
                ],
                mono: [
                    "Roboto Mono",
                    "monospace"
                ]
            },
            screens: {
                xs: "375px"
            },
            colors: {
                bg: "var(--color-bg)",
                "bg-secondary": "var(--color-bg-secondary)",
                accent: "var(--color-accent)",
                "accent-light": "var(--color-accent-light)",
                text: "var(--color-text)",
                "text-secondary": "var(--color-text-secondary)",
                "dark-1": "var(--color-dark-1)",
                "dark-2": "var(--color-dark-2)",
                "dark-3": "var(--color-dark-3)",
                success: "#22c55e",
                warning: "#f59e0b",
                danger: "#ef4444",
                info: "#3b82f6",
                // New gradient colors for timeline
                "timeline-start": "var(--color-accent)",
                "timeline-end": "var(--color-accent-light)"
            },
            spacing: {
                128: "32rem",
                144: "36rem"
            },
            animation: {
                "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
                "fade-in": "fadeIn 0.3s ease-in-out",
                "float": "float 3s ease-in-out infinite",
                "rocket-flame": "rocketFlame 1s ease-in-out infinite"
            },
            keyframes: {
                fadeIn: {
                    "0%": {
                        opacity: "0",
                        transform: "translateY(-10px)"
                    },
                    "100%": {
                        opacity: "1",
                        transform: "translateY(0)"
                    }
                },
                float: {
                    "0%, 100%": {
                        transform: "translateY(0)"
                    },
                    "50%": {
                        transform: "translateY(-10px)"
                    }
                },
                rocketFlame: {
                    "0%, 100%": {
                        transform: "scaleY(1)"
                    },
                    "50%": {
                        transform: "scaleY(1.2)"
                    }
                }
            },
            transitionTimingFunction: {
                "in-scroll": "cubic-bezier(0.645, 0.045, 0.355, 1)"
            },
            gridTemplateColumns: {
                "auto-300": "repeat(auto-fill, minmax(300px, 1fr))",
                "auto-250": "repeat(auto-fill, minmax(250px, 1fr))"
            },
            boxShadow: {
                primary: "0 4px 6px rgba(0, 0, 0, 0.1)",
                "primary-hover": "0 6px 10px rgba(0, 0, 0, 0.15)",
                "timeline": "0 0 15px var(--color-accent-light)",
                "card": "0 4px 20px rgba(0, 0, 0, 0.1)",
                "card-hover": "0 8px 30px rgba(0, 0, 0, 0.15)"
            },
            borderRadius: {
                "xl": "1.25rem"
            }
        }
    },
    plugins: [
        __webpack_require__(8961),
        __webpack_require__(9920),
        __webpack_require__(2039),
        __webpack_require__(5718)
    ]
};


/***/ })

};
;