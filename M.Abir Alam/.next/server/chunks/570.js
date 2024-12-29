exports.id = 570;
exports.ids = [570];
exports.modules = {

/***/ 1570:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1791);
/* harmony import */ var react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5152);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];






// Dynamic import with ssr disabled
const ReactQuill = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(null, {
    loadableGenerated: {
        modules: [
            "admin\\BlogManager.tsx -> " + "react-quill"
        ]
    },
    ssr: false
});
const BlogManager = ({ token  })=>{
    const [blogs, setBlogs] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        title: "",
        description: "",
        topic: "",
        img: "",
        readTime: ""
    });
    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Fetch blogs
    const fetchBlogs = async ()=>{
        try {
            const response = await fetch("https://portfolio-dnjj.vercel.app/blogs", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Failed to fetch blogs");
            const data = await response.json();
            setBlogs(data);
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.message);
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (token) fetchBlogs();
    }, [
        token
    ]);
    // Handle form changes
    const handleInputChange = (e)=>{
        const { name , value  } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    // Handle ReactQuill changes
    const handleQuillChange = (value)=>{
        setFormData((prev)=>({
                ...prev,
                description: value
            }));
    };
    // Handle submit
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const url = isEditing ? `https://portfolio-dnjj.vercel.app/blogs/${editingId}` : "https://portfolio-dnjj.vercel.app/blogs";
            const method = isEditing ? "PUT" : "POST";
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formData)
            });
            if (!response.ok) throw new Error("Failed to save blog");
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(isEditing ? "Blog updated successfully" : "Blog created successfully");
            setFormData({
                title: "",
                description: "",
                topic: "",
                img: "",
                readTime: ""
            });
            setEditingId(null);
            setIsEditing(false);
            setShowForm(false);
            fetchBlogs();
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.message);
        }
    };
    // Handle edit
    const handleEdit = (blog)=>{
        setFormData(blog);
        setEditingId(blog._id || null);
        setIsEditing(true);
        setShowForm(true);
    };
    // Handle delete
    const handleDelete = async (id)=>{
        if (!window.confirm("Are you sure you want to delete this blog?")) return;
        try {
            const response = await fetch(`https://portfolio-dnjj.vercel.app/blogs/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Failed to delete blog");
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success("Blog deleted successfully");
            fetchBlogs();
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.message);
        }
    };
    // Custom toolbar for ReactQuill
    const modules = {
        toolbar: [
            [
                {
                    header: "1"
                },
                {
                    header: "2"
                },
                {
                    font: []
                }
            ],
            [
                {
                    list: "ordered"
                },
                {
                    list: "bullet"
                }
            ],
            [
                {
                    align: []
                }
            ],
            [
                "bold",
                "italic",
                "underline",
                "strike"
            ],
            [
                {
                    color: []
                },
                {
                    background: []
                }
            ],
            [
                "link"
            ],
            [
                "blockquote",
                "code-block"
            ],
            [
                "image"
            ]
        ]
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-2xl font-bold",
                        children: "Blog Management"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setShowForm(!showForm),
                        className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
                        children: showForm ? "Hide Form" : "Add New Blog"
                    })
                ]
            }),
            showForm && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
                onSubmit: handleSubmit,
                className: "mb-8 bg-white p-6 rounded-lg shadow-md",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "title",
                                value: formData.title,
                                onChange: handleInputChange,
                                placeholder: "Blog Title",
                                className: "border p-2 rounded",
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "topic",
                                value: formData.topic,
                                onChange: handleInputChange,
                                placeholder: "Topic eg. Web Development/technology/Self-improvement",
                                className: "border p-2 rounded",
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "url",
                                name: "img",
                                value: formData.img,
                                onChange: handleInputChange,
                                placeholder: "Image URL => use unsplash.com/s3.amazonaws.com/imgbb.com ",
                                className: "border p-2 rounded",
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "readTime",
                                value: formData.readTime,
                                onChange: handleInputChange,
                                placeholder: "Read Time eg. 5 mins",
                                className: "border p-2 rounded",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ReactQuill, {
                        value: formData.description,
                        onChange: handleQuillChange,
                        className: "mt-4",
                        placeholder: "Blog Description",
                        modules: modules
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4 flex gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600",
                                children: isEditing ? "Update Blog" : "Create Blog"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: ()=>setShowForm(false),
                                className: "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600",
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: blogs.map((blog)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white p-4 rounded-lg shadow-md",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between items-start mb-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "font-bold text-lg",
                                        children: blog.title
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>handleEdit(blog),
                                                className: "text-blue-500 hover:text-blue-600",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Edit2, {
                                                    size: 20
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>handleDelete(blog._id),
                                                className: "text-red-500 hover:text-red-600",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_4__.Trash2, {
                                                    size: 20
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: blog.img,
                                alt: blog.title,
                                className: "w-full h-40 object-cover rounded mb-2"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                className: "text-gray-600 text-sm mb-2",
                                children: blog.topic
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-gray-600 text-sm mb-2",
                                children: [
                                    "Read Time: ",
                                    blog.readTime
                                ]
                            })
                        ]
                    }, blog._id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BlogManager);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 1791:
/***/ (() => {



/***/ })

};
;