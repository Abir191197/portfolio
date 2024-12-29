"use strict";
exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 9046:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2423);
/* harmony import */ var lucide_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lucide_react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_3__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
"use client";




const ProjectManager = ({ token  })=>{
    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);
    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
        name: "",
        url: "",
        repo: "",
        img: "",
        year: "",
        tags: ""
    });
    const [isEditing, setIsEditing] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const [editingId, setEditingId] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);
    const [showForm, setShowForm] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    // Fetch projects
    const fetchProjects = async ()=>{
        try {
            const response = await fetch("https://portfolio-dnjj.vercel.app/projects", {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Failed to fetch projects");
            const data = await response.json();
            setProjects(data);
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error("Failed to fetch projects");
        }
    };
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        if (token) fetchProjects();
    }, [
        token
    ]);
    // Handle form input changes
    const handleInputChange = (e)=>{
        const { name , value  } = e.target;
        setFormData((prev)=>({
                ...prev,
                [name]: value
            }));
    };
    // Handle form submission
    const handleSubmit = async (e)=>{
        e.preventDefault();
        // Convert tags string to array
        const formattedData = {
            ...formData,
            tags: typeof formData.tags === "string" ? formData.tags.split(",").map((tag)=>tag.trim()) : formData.tags
        };
        try {
            const url = isEditing ? `https://portfolio-dnjj.vercel.app/projects/${editingId}` : "https://portfolio-dnjj.vercel.app/projects";
            const method = isEditing ? "PUT" : "POST";
            const response = await fetch(url, {
                method,
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(formattedData)
            });
            if (!response.ok) throw new Error("Failed to save project");
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success(isEditing ? "Project updated successfully" : "Project created successfully");
            fetchProjects();
            resetForm();
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.message);
        }
    };
    // Handle delete
    const handleDelete = async (id)=>{
        if (!window.confirm("Are you sure you want to delete this project?")) return;
        try {
            const response = await fetch(`https://portfolio-dnjj.vercel.app/projects/${id}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            if (!response.ok) throw new Error("Failed to delete project");
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.success("Project deleted successfully");
            fetchProjects();
        } catch (error) {
            react_hot_toast__WEBPACK_IMPORTED_MODULE_3__.toast.error(error.message);
        }
    };
    // Handle edit
    const handleEdit = (project)=>{
        setFormData({
            name: project.name,
            url: project.url,
            repo: project.repo,
            img: project.img || "",
            year: project.year,
            tags: Array.isArray(project.tags) ? project.tags.join(", ") : ""
        });
        setEditingId(project._id || null);
        setIsEditing(true);
        setShowForm(true);
    };
    // Reset form
    const resetForm = ()=>{
        setFormData({
            name: "",
            url: "",
            repo: "",
            img: "",
            year: "",
            tags: ""
        });
        setIsEditing(false);
        setEditingId(null);
        setShowForm(false);
    };
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h2", {
                        className: "text-2xl font-bold",
                        children: "Project Management"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                        onClick: ()=>setShowForm(!showForm),
                        className: "bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600",
                        children: showForm ? "Hide Form" : "Add New Project"
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
                                name: "name",
                                value: formData.name,
                                onChange: handleInputChange,
                                placeholder: "Project Name",
                                className: "border p-2 rounded",
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "url",
                                name: "url",
                                value: formData.url,
                                onChange: handleInputChange,
                                placeholder: "Project Live link",
                                className: "border p-2 rounded",
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "url",
                                name: "repo",
                                value: formData.repo,
                                onChange: handleInputChange,
                                placeholder: "Github Repository URL",
                                className: "border p-2 rounded",
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "url",
                                name: "img",
                                value: formData.img,
                                onChange: handleInputChange,
                                placeholder: "Cover Image URL (use unsplash.com/s3.amazonaws.com/imgbb.com)",
                                className: "border p-2 rounded"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "year",
                                value: formData.year,
                                onChange: handleInputChange,
                                placeholder: "Year",
                                className: "border p-2 rounded",
                                required: true
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                                type: "text",
                                name: "tags",
                                value: formData.tags,
                                onChange: handleInputChange,
                                placeholder: "Technology (comma-separated) eg. React, Node.js, MongoDB",
                                className: "border p-2 rounded",
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "mt-4 flex gap-2",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "submit",
                                className: "bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600",
                                children: isEditing ? "Update Project" : "Create Project"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                type: "button",
                                onClick: resetForm,
                                className: "bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600",
                                children: "Cancel"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "bg-white p-4 rounded-lg shadow-md",
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex justify-between items-start mb-2",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h3", {
                                        className: "font-bold text-lg",
                                        children: project.name
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>handleEdit(project),
                                                className: "text-blue-500 hover:text-blue-600",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_2__.Edit2, {
                                                    size: 20
                                                })
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                                onClick: ()=>handleDelete(project._id),
                                                className: "text-red-500 hover:text-red-600",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(lucide_react__WEBPACK_IMPORTED_MODULE_2__.Trash2, {
                                                    size: 20
                                                })
                                            })
                                        ]
                                    })
                                ]
                            }),
                            project.img && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                                src: project.img,
                                alt: project.name,
                                className: "w-full h-40 object-cover rounded mb-2"
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("p", {
                                className: "text-gray-600 text-sm mb-2",
                                children: [
                                    "Year: ",
                                    project.year
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex flex-wrap gap-1",
                                children: Array.isArray(project.tags) && project.tags.map((tag, index)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                        className: "bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded",
                                        children: tag
                                    }, index))
                            })
                        ]
                    }, project._id))
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ProjectManager);

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;