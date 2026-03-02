(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/components/CartDrawer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CartDrawer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function CartDrawer({ open, onClose }) {
    _s();
    const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "fixed inset-0 bg-black/30 backdrop-blur-sm z-50"
                }, void 0, false, {
                    fileName: "[project]/components/CartDrawer.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        x: "100%"
                    },
                    animate: {
                        x: 0
                    },
                    exit: {
                        x: "100%"
                    },
                    transition: {
                        type: "spring",
                        damping: 28,
                        stiffness: 300
                    },
                    className: "fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between px-6 py-5 border-b border-neutral-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-lg font-bold text-neutral-900",
                                    children: [
                                        "Your Cart ",
                                        totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-neutral-400 font-normal text-sm",
                                            children: [
                                                "(",
                                                totalItems,
                                                " items)"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CartDrawer.tsx",
                                            lineNumber: 39,
                                            columnNumber: 46
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CartDrawer.tsx",
                                    lineNumber: 38,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "w-8 h-8 flex items-center justify-center rounded-full hover:bg-neutral-100 transition-colors text-neutral-500",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-4 h-4",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: 2,
                                        viewBox: "0 0 24 24",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M6 18L18 6M6 6l12 12"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CartDrawer.tsx",
                                            lineNumber: 43,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CartDrawer.tsx",
                                        lineNumber: 42,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/CartDrawer.tsx",
                                    lineNumber: 41,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CartDrawer.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 overflow-y-auto px-6 py-4",
                            children: items.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col items-center justify-center h-full gap-4 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-7 h-7 text-neutral-400",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 1.5,
                                            viewBox: "0 0 24 24",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CartDrawer.tsx",
                                                    lineNumber: 54,
                                                    columnNumber: 23
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M3 6h18M16 10a4 4 0 0 1-8 0"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CartDrawer.tsx",
                                                    lineNumber: 55,
                                                    columnNumber: 23
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CartDrawer.tsx",
                                            lineNumber: 53,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/CartDrawer.tsx",
                                        lineNumber: 52,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-neutral-900",
                                                children: "Your cart is empty"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CartDrawer.tsx",
                                                lineNumber: 59,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-neutral-400 mt-1",
                                                children: "Add something to get started"
                                            }, void 0, false, {
                                                fileName: "[project]/components/CartDrawer.tsx",
                                                lineNumber: 60,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/CartDrawer.tsx",
                                        lineNumber: 58,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "mt-2 px-6 py-2.5 bg-neutral-900 text-white text-sm font-medium rounded-xl hover:bg-neutral-800 transition-colors",
                                        children: "Continue Shopping"
                                    }, void 0, false, {
                                        fileName: "[project]/components/CartDrawer.tsx",
                                        lineNumber: 62,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/CartDrawer.tsx",
                                lineNumber: 51,
                                columnNumber: 17
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-col gap-4",
                                children: items.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                        layout: true,
                                        initial: {
                                            opacity: 0,
                                            y: 8
                                        },
                                        animate: {
                                            opacity: 1,
                                            y: 0
                                        },
                                        exit: {
                                            opacity: 0,
                                            x: 20
                                        },
                                        className: "flex gap-4 p-3 rounded-2xl border border-neutral-100 bg-neutral-50",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-20 h-20 rounded-xl overflow-hidden shrink-0 bg-white",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                    src: item.image,
                                                    alt: item.productName,
                                                    className: "w-full h-full object-cover"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CartDrawer.tsx",
                                                    lineNumber: 79,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/CartDrawer.tsx",
                                                lineNumber: 78,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex-1 min-w-0",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-semibold text-neutral-900 truncate",
                                                        children: item.productName
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CartDrawer.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-neutral-500 mt-0.5",
                                                        children: [
                                                            item.color,
                                                            " · ",
                                                            item.size
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CartDrawer.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm font-bold text-neutral-900 mt-1",
                                                        children: [
                                                            "$",
                                                            item.price
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CartDrawer.tsx",
                                                        lineNumber: 86,
                                                        columnNumber: 25
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 mt-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>updateQuantity(item.variantId, item.quantity - 1),
                                                                className: "w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition-colors text-neutral-600",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-3 h-3",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: 2.5,
                                                                    viewBox: "0 0 24 24",
                                                                    strokeLinecap: "round",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M5 12h14"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CartDrawer.tsx",
                                                                        lineNumber: 94,
                                                                        columnNumber: 148
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CartDrawer.tsx",
                                                                    lineNumber: 94,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CartDrawer.tsx",
                                                                lineNumber: 90,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "text-sm font-semibold text-neutral-900 w-5 text-center",
                                                                children: item.quantity
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CartDrawer.tsx",
                                                                lineNumber: 96,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                onClick: ()=>updateQuantity(item.variantId, item.quantity + 1),
                                                                className: "w-6 h-6 rounded-full border border-neutral-200 flex items-center justify-center hover:bg-neutral-100 transition-colors text-neutral-600",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                    className: "w-3 h-3",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    strokeWidth: 2.5,
                                                                    viewBox: "0 0 24 24",
                                                                    strokeLinecap: "round",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                        d: "M12 5v14M5 12h14"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/CartDrawer.tsx",
                                                                        lineNumber: 101,
                                                                        columnNumber: 148
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/CartDrawer.tsx",
                                                                    lineNumber: 101,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/CartDrawer.tsx",
                                                                lineNumber: 97,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/CartDrawer.tsx",
                                                        lineNumber: 89,
                                                        columnNumber: 25
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/CartDrawer.tsx",
                                                lineNumber: 83,
                                                columnNumber: 23
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>removeFromCart(item.variantId),
                                                className: "self-start text-neutral-300 hover:text-red-400 transition-colors p-1",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                    className: "w-4 h-4",
                                                    fill: "none",
                                                    stroke: "currentColor",
                                                    strokeWidth: 2,
                                                    viewBox: "0 0 24 24",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 18L18 6M6 6l12 12"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/CartDrawer.tsx",
                                                        lineNumber: 112,
                                                        columnNumber: 27
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/CartDrawer.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 25
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/CartDrawer.tsx",
                                                lineNumber: 107,
                                                columnNumber: 23
                                            }, this)
                                        ]
                                    }, item.variantId, true, {
                                        fileName: "[project]/components/CartDrawer.tsx",
                                        lineNumber: 69,
                                        columnNumber: 21
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/CartDrawer.tsx",
                                lineNumber: 67,
                                columnNumber: 17
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/CartDrawer.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, this),
                        items.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-5 border-t border-neutral-100",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center justify-between mb-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-neutral-500",
                                            children: "Subtotal"
                                        }, void 0, false, {
                                            fileName: "[project]/components/CartDrawer.tsx",
                                            lineNumber: 125,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-lg font-bold text-neutral-900",
                                            children: [
                                                "$",
                                                totalPrice.toFixed(2)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/CartDrawer.tsx",
                                            lineNumber: 126,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CartDrawer.tsx",
                                    lineNumber: 124,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-xs text-neutral-400 mb-4 text-center",
                                    children: "Shipping & taxes calculated at checkout"
                                }, void 0, false, {
                                    fileName: "[project]/components/CartDrawer.tsx",
                                    lineNumber: 128,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/cart",
                                    onClick: onClose,
                                    className: "block w-full h-13 py-3.5 bg-neutral-900 text-white text-sm font-semibold rounded-xl text-center hover:bg-neutral-800 transition-colors",
                                    children: [
                                        "Checkout — $",
                                        totalPrice.toFixed(2)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/CartDrawer.tsx",
                                    lineNumber: 129,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "block w-full text-center text-sm text-neutral-400 hover:text-neutral-700 transition-colors mt-3",
                                    children: "Continue Shopping"
                                }, void 0, false, {
                                    fileName: "[project]/components/CartDrawer.tsx",
                                    lineNumber: 136,
                                    columnNumber: 17
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/CartDrawer.tsx",
                            lineNumber: 123,
                            columnNumber: 15
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/CartDrawer.tsx",
                    lineNumber: 29,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/CartDrawer.tsx",
        lineNumber: 16,
        columnNumber: 5
    }, this);
}
_s(CartDrawer, "dKnsPYpYZ+jyRgQGXU4ZJ7ofFBU=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"]
    ];
});
_c = CartDrawer;
var _c;
__turbopack_context__.k.register(_c, "CartDrawer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/data/mockProduct.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getProductByIdFromMock",
    ()=>getProductByIdFromMock,
    "mockProduct",
    ()=>mockProduct,
    "mockProducts",
    ()=>mockProducts
]);
const mockProducts = [
    // ── 1. Aether Runner Pro ──────────────────────────────────────
    {
        id: "aether-runner-pro",
        name: "Aether Runner Pro",
        brand: "AETHER",
        category: "Running",
        description: "Engineered for performance and refined for everyday wear. The Aether Runner Pro features a lightweight knit upper, responsive foam midsole, and a carbon-fiber heel plate — delivering elite energy return in a silhouette that moves from track to street effortlessly.",
        basePrice: 180,
        rating: 4.8,
        reviewCount: 2340,
        variants: [
            {
                id: "arp-blk-8",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 8",
                price: 180,
                stock: 5,
                images: [
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
                ]
            },
            {
                id: "arp-blk-9",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 9",
                price: 180,
                stock: 3,
                images: [
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
                ]
            },
            {
                id: "arp-blk-10",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 10",
                price: 180,
                stock: 0,
                images: [
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
                ]
            },
            {
                id: "arp-blk-11",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 11",
                price: 180,
                stock: 7,
                images: [
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
                ]
            },
            {
                id: "arp-wht-8",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 8",
                price: 190,
                stock: 4,
                images: [
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
                ]
            },
            {
                id: "arp-wht-9",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 9",
                price: 190,
                stock: 6,
                images: [
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
                ]
            },
            {
                id: "arp-wht-10",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 10",
                price: 190,
                stock: 2,
                images: [
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
                ]
            },
            {
                id: "arp-blu-8",
                color: "Ocean Blue",
                colorHex: "#2563eb",
                size: "US 8",
                price: 195,
                stock: 8,
                images: [
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"
                ]
            },
            {
                id: "arp-blu-9",
                color: "Ocean Blue",
                colorHex: "#2563eb",
                size: "US 9",
                price: 195,
                stock: 0,
                images: [
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"
                ]
            },
            {
                id: "arp-blu-10",
                color: "Ocean Blue",
                colorHex: "#2563eb",
                size: "US 10",
                price: 195,
                stock: 5,
                images: [
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"
                ]
            }
        ]
    },
    // ── 2. Stride Elite ───────────────────────────────────────────
    {
        id: "stride-elite",
        name: "Stride Elite",
        brand: "AETHER",
        category: "Running",
        description: "The Stride Elite redefines long-distance comfort. A dual-density foam stack absorbs impact while the breathable mesh upper keeps your foot cool and locked in — mile after mile.",
        basePrice: 160,
        rating: 4.6,
        reviewCount: 1850,
        variants: [
            {
                id: "se-blk-8",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 8",
                price: 160,
                stock: 6,
                images: [
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"
                ]
            },
            {
                id: "se-blk-9",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 9",
                price: 160,
                stock: 4,
                images: [
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"
                ]
            },
            {
                id: "se-blk-10",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 10",
                price: 160,
                stock: 2,
                images: [
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"
                ]
            },
            {
                id: "se-red-8",
                color: "Ember Red",
                colorHex: "#dc2626",
                size: "US 8",
                price: 170,
                stock: 5,
                images: [
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
                ]
            },
            {
                id: "se-red-9",
                color: "Ember Red",
                colorHex: "#dc2626",
                size: "US 9",
                price: 170,
                stock: 3,
                images: [
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
                ]
            },
            {
                id: "se-red-10",
                color: "Ember Red",
                colorHex: "#dc2626",
                size: "US 10",
                price: 170,
                stock: 0,
                images: [
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80"
                ]
            }
        ]
    },
    // ── 3. Apex Trainer ───────────────────────────────────────────
    {
        id: "apex-trainer",
        name: "Apex Trainer",
        brand: "AETHER",
        category: "Training",
        description: "Stability meets versatility. The Apex Trainer features a wide base platform for heavy lifts and a flexible forefoot for lateral movements — your one shoe for every gym session.",
        basePrice: 145,
        rating: 4.7,
        reviewCount: 980,
        variants: [
            {
                id: "at-blk-8",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 8",
                price: 145,
                stock: 10,
                images: [
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                ]
            },
            {
                id: "at-blk-9",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 9",
                price: 145,
                stock: 8,
                images: [
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                ]
            },
            {
                id: "at-blk-10",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 10",
                price: 145,
                stock: 6,
                images: [
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                ]
            },
            {
                id: "at-grn-8",
                color: "Forest Green",
                colorHex: "#16a34a",
                size: "US 8",
                price: 155,
                stock: 4,
                images: [
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80",
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
                ]
            },
            {
                id: "at-grn-9",
                color: "Forest Green",
                colorHex: "#16a34a",
                size: "US 9",
                price: 155,
                stock: 2,
                images: [
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80",
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
                ]
            },
            {
                id: "at-grn-10",
                color: "Forest Green",
                colorHex: "#16a34a",
                size: "US 10",
                price: 155,
                stock: 7,
                images: [
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80",
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
                ]
            }
        ]
    },
    // ── 4. Velocity X ─────────────────────────────────────────────
    {
        id: "velocity-x",
        name: "Velocity X",
        brand: "AETHER",
        category: "Running",
        description: "Our fastest shoe yet. The Velocity X uses a full-length carbon fibre plate and ultra-responsive ZeroG foam to return energy with every stride. Designed for race day, worn every day.",
        basePrice: 200,
        rating: 4.9,
        reviewCount: 3200,
        variants: [
            {
                id: "vx-blk-8",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 8",
                price: 200,
                stock: 3,
                images: [
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"
                ]
            },
            {
                id: "vx-blk-9",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 9",
                price: 200,
                stock: 5,
                images: [
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"
                ]
            },
            {
                id: "vx-blk-10",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 10",
                price: 200,
                stock: 0,
                images: [
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"
                ]
            },
            {
                id: "vx-wht-8",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 8",
                price: 210,
                stock: 4,
                images: [
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
                ]
            },
            {
                id: "vx-wht-9",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 9",
                price: 210,
                stock: 6,
                images: [
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
                ]
            },
            {
                id: "vx-wht-10",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 10",
                price: 210,
                stock: 2,
                images: [
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
                ]
            }
        ]
    },
    // ── 5. Urban Runner ───────────────────────────────────────────
    {
        id: "urban-runner",
        name: "Urban Runner",
        brand: "AETHER",
        category: "Men",
        description: "Where street style meets athletic performance. The Urban Runner features a premium suede and mesh upper with a cushioned EVA sole — built for the city, ready for anything.",
        basePrice: 135,
        rating: 4.5,
        reviewCount: 760,
        variants: [
            {
                id: "ur-blk-8",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 8",
                price: 135,
                stock: 8,
                images: [
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"
                ]
            },
            {
                id: "ur-blk-9",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 9",
                price: 135,
                stock: 5,
                images: [
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"
                ]
            },
            {
                id: "ur-blk-10",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 10",
                price: 135,
                stock: 3,
                images: [
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80",
                    "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=800&q=80"
                ]
            },
            {
                id: "ur-tan-8",
                color: "Desert Tan",
                colorHex: "#d4a57a",
                size: "US 8",
                price: 140,
                stock: 4,
                images: [
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
                ]
            },
            {
                id: "ur-tan-9",
                color: "Desert Tan",
                colorHex: "#d4a57a",
                size: "US 9",
                price: 140,
                stock: 6,
                images: [
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
                ]
            },
            {
                id: "ur-tan-10",
                color: "Desert Tan",
                colorHex: "#d4a57a",
                size: "US 10",
                price: 140,
                stock: 0,
                images: [
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
                ]
            }
        ]
    },
    // ── 6. Grace Runner (Women) ───────────────────────────────────
    {
        id: "grace-runner",
        name: "Grace Runner",
        brand: "AETHER",
        category: "Women",
        description: "Engineered specifically for the female foot — narrower heel, wider toe box, and a lighter construction. The Grace Runner delivers a smooth ride whether you're racing or exploring.",
        basePrice: 165,
        rating: 4.8,
        reviewCount: 1420,
        variants: [
            {
                id: "gr-wht-6",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 6",
                price: 165,
                stock: 7,
                images: [
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
                ]
            },
            {
                id: "gr-wht-7",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 7",
                price: 165,
                stock: 5,
                images: [
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
                ]
            },
            {
                id: "gr-wht-8",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 8",
                price: 165,
                stock: 3,
                images: [
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80",
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80"
                ]
            },
            {
                id: "gr-pnk-6",
                color: "Blush Pink",
                colorHex: "#f9a8d4",
                size: "US 6",
                price: 175,
                stock: 4,
                images: [
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"
                ]
            },
            {
                id: "gr-pnk-7",
                color: "Blush Pink",
                colorHex: "#f9a8d4",
                size: "US 7",
                price: 175,
                stock: 2,
                images: [
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"
                ]
            },
            {
                id: "gr-pnk-8",
                color: "Blush Pink",
                colorHex: "#f9a8d4",
                size: "US 8",
                price: 175,
                stock: 0,
                images: [
                    "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=800&q=80",
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80"
                ]
            }
        ]
    },
    // ── 7. Pro Lite (Sale) ─────────────────────────────────────────
    {
        id: "pro-lite",
        name: "Pro Lite",
        brand: "AETHER",
        category: "Sale",
        description: "Lightweight, fast, and affordable. The Pro Lite delivers a no-frills performance experience with a breathable mesh upper and responsive foam midsole. Now on sale.",
        basePrice: 150,
        rating: 4.3,
        reviewCount: 540,
        variants: [
            {
                id: "pl-blk-8",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 8",
                price: 99,
                stock: 6,
                images: [
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                ]
            },
            {
                id: "pl-blk-9",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 9",
                price: 99,
                stock: 4,
                images: [
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                ]
            },
            {
                id: "pl-blk-10",
                color: "Midnight Black",
                colorHex: "#1a1a1a",
                size: "US 10",
                price: 99,
                stock: 2,
                images: [
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
                    "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80"
                ]
            },
            {
                id: "pl-wht-8",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 8",
                price: 105,
                stock: 8,
                images: [
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80",
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
                ]
            },
            {
                id: "pl-wht-9",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 9",
                price: 105,
                stock: 5,
                images: [
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80",
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
                ]
            },
            {
                id: "pl-wht-10",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 10",
                price: 105,
                stock: 0,
                images: [
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80",
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
                ]
            }
        ]
    },
    // ── 8. Cloud Racer ────────────────────────────────────────────
    {
        id: "cloud-racer",
        name: "Cloud Racer",
        brand: "AETHER",
        category: "Running",
        description: "Inspired by cloud formations, the Cloud Racer uses multi-density foam pods to deliver a cushioned yet propulsive ride. The engineered knit upper wraps the foot like a second skin.",
        basePrice: 190,
        rating: 4.7,
        reviewCount: 2100,
        variants: [
            {
                id: "cr-wht-8",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 8",
                price: 190,
                stock: 6,
                images: [
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
                ]
            },
            {
                id: "cr-wht-9",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 9",
                price: 190,
                stock: 4,
                images: [
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
                ]
            },
            {
                id: "cr-wht-10",
                color: "Cloud White",
                colorHex: "#f0f0f0",
                size: "US 10",
                price: 190,
                stock: 2,
                images: [
                    "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=800&q=80",
                    "https://images.unsplash.com/photo-1584735175315-9d5df23860e6?w=800&q=80",
                    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80"
                ]
            },
            {
                id: "cr-blu-8",
                color: "Ocean Blue",
                colorHex: "#2563eb",
                size: "US 8",
                price: 200,
                stock: 5,
                images: [
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"
                ]
            },
            {
                id: "cr-blu-9",
                color: "Ocean Blue",
                colorHex: "#2563eb",
                size: "US 9",
                price: 200,
                stock: 3,
                images: [
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"
                ]
            },
            {
                id: "cr-blu-10",
                color: "Ocean Blue",
                colorHex: "#2563eb",
                size: "US 10",
                price: 200,
                stock: 0,
                images: [
                    "https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=800&q=80",
                    "https://images.unsplash.com/photo-1539185441755-769473a23570?w=800&q=80",
                    "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=800&q=80"
                ]
            }
        ]
    }
];
function getProductByIdFromMock(id) {
    return mockProducts.find((p)=>p.id === id);
}
const mockProduct = mockProducts[0];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SearchModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockProduct$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/data/mockProduct.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const suggestions = [
    "Runner Pro",
    "Midnight Black",
    "Cloud White",
    "Ocean Blue",
    "Training Shoes",
    "Sale"
];
function SearchModal({ open, onClose }) {
    _s();
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const inputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchModal.useEffect": ()=>{
            if (open) {
                setTimeout({
                    "SearchModal.useEffect": ()=>inputRef.current?.focus()
                }["SearchModal.useEffect"], 100);
            } else {
                setQuery("");
            }
        }
    }["SearchModal.useEffect"], [
        open
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchModal.useEffect": ()=>{
            function handleKey(e) {
                if (e.key === "Escape") onClose();
            }
            window.addEventListener("keydown", handleKey);
            return ({
                "SearchModal.useEffect": ()=>window.removeEventListener("keydown", handleKey)
            })["SearchModal.useEffect"];
        }
    }["SearchModal.useEffect"], [
        onClose
    ]);
    const results = query.length > 1 ? __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockProduct$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockProduct"].variants.filter((v)=>__TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockProduct$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockProduct"].name.toLowerCase().includes(query.toLowerCase()) || v.color.toLowerCase().includes(query.toLowerCase()) || v.size.toLowerCase().includes(query.toLowerCase())).filter((v, i, arr)=>arr.findIndex((x)=>x.color === v.color) === i).slice(0, 4) : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: open && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0
                    },
                    animate: {
                        opacity: 1
                    },
                    exit: {
                        opacity: 0
                    },
                    onClick: onClose,
                    className: "fixed inset-0 bg-black/20 backdrop-blur-sm z-50"
                }, void 0, false, {
                    fileName: "[project]/components/SearchModal.tsx",
                    lineNumber: 51,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: -20,
                        scale: 0.98
                    },
                    animate: {
                        opacity: 1,
                        y: 0,
                        scale: 1
                    },
                    exit: {
                        opacity: 0,
                        y: -10,
                        scale: 0.98
                    },
                    transition: {
                        duration: 0.2,
                        ease: [
                            0.4,
                            0,
                            0.2,
                            1
                        ]
                    },
                    className: "fixed top-4 left-1/2 -translate-x-1/2 w-full max-w-xl z-50 px-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "bg-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-100",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3 px-5 py-4 border-b border-neutral-100",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "w-5 h-5 text-neutral-400 shrink-0",
                                        fill: "none",
                                        stroke: "currentColor",
                                        strokeWidth: 1.8,
                                        viewBox: "0 0 24 24",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                cx: "11",
                                                cy: "11",
                                                r: "6"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchModal.tsx",
                                                lineNumber: 72,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M21 21l-4.35-4.35"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchModal.tsx",
                                                lineNumber: 73,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SearchModal.tsx",
                                        lineNumber: 71,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        ref: inputRef,
                                        type: "text",
                                        value: query,
                                        onChange: (e)=>setQuery(e.target.value),
                                        placeholder: "Search products, colors, sizes...",
                                        className: "flex-1 text-sm text-neutral-900 placeholder:text-neutral-400 outline-none bg-transparent"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchModal.tsx",
                                        lineNumber: 75,
                                        columnNumber: 17
                                    }, this),
                                    query && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setQuery(""),
                                        className: "text-neutral-400 hover:text-neutral-700 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-4 h-4",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 2,
                                            viewBox: "0 0 24 24",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchModal.tsx",
                                                lineNumber: 86,
                                                columnNumber: 23
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/SearchModal.tsx",
                                            lineNumber: 85,
                                            columnNumber: 21
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchModal.tsx",
                                        lineNumber: 84,
                                        columnNumber: 19
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: onClose,
                                        className: "text-xs text-neutral-400 hover:text-neutral-700 transition-colors border border-neutral-200 rounded-lg px-2 py-1",
                                        children: "ESC"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchModal.tsx",
                                        lineNumber: 90,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SearchModal.tsx",
                                lineNumber: 70,
                                columnNumber: 15
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-5 py-4",
                                children: [
                                    query.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3",
                                                children: "Popular Searches"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchModal.tsx",
                                                lineNumber: 99,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap gap-2",
                                                children: suggestions.map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>setQuery(s),
                                                        className: "px-3 py-1.5 text-sm text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded-lg transition-colors",
                                                        children: s
                                                    }, s, false, {
                                                        fileName: "[project]/components/SearchModal.tsx",
                                                        lineNumber: 102,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchModal.tsx",
                                                lineNumber: 100,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SearchModal.tsx",
                                        lineNumber: 98,
                                        columnNumber: 19
                                    }, this),
                                    query.length > 1 && results.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-neutral-400 text-center py-4",
                                        children: [
                                            'No results for "',
                                            query,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SearchModal.tsx",
                                        lineNumber: 115,
                                        columnNumber: 19
                                    }, this),
                                    results.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs font-semibold text-neutral-400 uppercase tracking-wider mb-3",
                                                children: "Results"
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchModal.tsx",
                                                lineNumber: 120,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-col gap-2",
                                                children: results.map((variant)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                        href: "/product",
                                                        onClick: onClose,
                                                        className: "flex items-center gap-3 p-2 rounded-xl hover:bg-neutral-50 transition-colors",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "w-12 h-12 rounded-lg overflow-hidden bg-neutral-100 shrink-0",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                                                    src: variant.images[0],
                                                                    alt: variant.color,
                                                                    className: "w-full h-full object-cover"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SearchModal.tsx",
                                                                    lineNumber: 130,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SearchModal.tsx",
                                                                lineNumber: 129,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-semibold text-neutral-900",
                                                                        children: __TURBOPACK__imported__module__$5b$project$5d2f$data$2f$mockProduct$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mockProduct"].name
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/SearchModal.tsx",
                                                                        lineNumber: 133,
                                                                        columnNumber: 29
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-neutral-500",
                                                                        children: [
                                                                            variant.color,
                                                                            " · from $",
                                                                            variant.price
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/SearchModal.tsx",
                                                                        lineNumber: 134,
                                                                        columnNumber: 29
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/SearchModal.tsx",
                                                                lineNumber: 132,
                                                                columnNumber: 27
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                className: "w-4 h-4 text-neutral-300 ml-auto",
                                                                fill: "none",
                                                                stroke: "currentColor",
                                                                strokeWidth: 2,
                                                                viewBox: "0 0 24 24",
                                                                strokeLinecap: "round",
                                                                strokeLinejoin: "round",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                    d: "M9 18l6-6-6-6"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/components/SearchModal.tsx",
                                                                    lineNumber: 137,
                                                                    columnNumber: 29
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/SearchModal.tsx",
                                                                lineNumber: 136,
                                                                columnNumber: 27
                                                            }, this)
                                                        ]
                                                    }, variant.id, true, {
                                                        fileName: "[project]/components/SearchModal.tsx",
                                                        lineNumber: 123,
                                                        columnNumber: 25
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/components/SearchModal.tsx",
                                                lineNumber: 121,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/SearchModal.tsx",
                                        lineNumber: 119,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/SearchModal.tsx",
                                lineNumber: 96,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/SearchModal.tsx",
                        lineNumber: 67,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/SearchModal.tsx",
                    lineNumber: 60,
                    columnNumber: 11
                }, this)
            ]
        }, void 0, true)
    }, void 0, false, {
        fileName: "[project]/components/SearchModal.tsx",
        lineNumber: 47,
        columnNumber: 5
    }, this);
}
_s(SearchModal, "AW2+Z89aCeMEMfdr5zHfNa5gRIU=");
_c = SearchModal;
var _c;
__turbopack_context__.k.register(_c, "SearchModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Navbar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/CartContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$WishlistContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/WishlistContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/context/AuthContext.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CartDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/CartDrawer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
const navLinks = [
    {
        label: "Men",
        href: "/men"
    },
    {
        label: "Women",
        href: "/women"
    },
    {
        label: "Running",
        href: "/running"
    },
    {
        label: "Training",
        href: "/training"
    },
    {
        label: "Sale",
        href: "/sale"
    }
];
function Navbar() {
    _s();
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [cartOpen, setCartOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [searchOpen, setSearchOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [accountOpen, setAccountOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const accountRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { totalItems } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"])();
    const { totalItems: wishlistCount } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$WishlistContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"])();
    const { user, logout } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    // Close account dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "Navbar.useEffect": ()=>{
            function handleClick(e) {
                if (accountRef.current && !accountRef.current.contains(e.target)) {
                    setAccountOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClick);
            return ({
                "Navbar.useEffect": ()=>document.removeEventListener("mousedown", handleClick)
            })["Navbar.useEffect"];
        }
    }["Navbar.useEffect"], []);
    function handleLogout() {
        logout();
        setAccountOpen(false);
        router.push("/");
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "w-full border-b border-neutral-200 bg-white sticky top-0 z-40",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "/",
                                className: "text-xl font-bold tracking-widest text-neutral-900",
                                children: "AETHER"
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 57,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                                className: "hidden md:flex items-center gap-8",
                                children: navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.href,
                                        className: `text-sm font-medium transition-colors duration-200 ${pathname === link.href ? "text-neutral-900 border-b-2 border-neutral-900 pb-0.5" : "text-neutral-500 hover:text-neutral-900"}`,
                                        children: link.label
                                    }, link.href, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 64,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 62,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setSearchOpen(true),
                                        className: "text-neutral-500 hover:text-neutral-900 transition-colors",
                                        "aria-label": "Search",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 1.8,
                                            viewBox: "0 0 24 24",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                    cx: "11",
                                                    cy: "11",
                                                    r: "6"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M21 21l-4.35-4.35"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 84,
                                                    columnNumber: 49
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 83,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 82,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/wishlist",
                                        className: "relative text-neutral-500 hover:text-neutral-900 transition-colors",
                                        "aria-label": "Wishlist",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: 1.8,
                                                viewBox: "0 0 24 24",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l7.78-7.78a5.5 5.5 0 0 0 0-7.78z"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 91,
                                                    columnNumber: 17
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 90,
                                                columnNumber: 15
                                            }, this),
                                            wishlistCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute -top-1.5 -right-1.5 bg-rose-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center",
                                                children: wishlistCount
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 94,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCartOpen(true),
                                        className: "relative text-neutral-500 hover:text-neutral-900 transition-colors",
                                        "aria-label": "Cart",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                className: "w-5 h-5",
                                                fill: "none",
                                                stroke: "currentColor",
                                                strokeWidth: 1.8,
                                                viewBox: "0 0 24 24",
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 103,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M3 6h18"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                        d: "M16 10a4 4 0 0 1-8 0"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 104,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 102,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                children: totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].span, {
                                                    initial: {
                                                        scale: 0
                                                    },
                                                    animate: {
                                                        scale: 1
                                                    },
                                                    exit: {
                                                        scale: 0
                                                    },
                                                    className: "absolute -top-1.5 -right-1.5 bg-neutral-900 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center",
                                                    children: totalItems
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 108,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 106,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 101,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "hidden md:block relative",
                                        ref: accountRef,
                                        children: user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setAccountOpen(!accountOpen),
                                                    className: "flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900 transition-colors",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-bold",
                                                            children: [
                                                                user.firstName[0],
                                                                user.lastName[0]
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/components/Navbar.tsx",
                                                            lineNumber: 124,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "hidden lg:block",
                                                            children: user.firstName
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.tsx",
                                                            lineNumber: 127,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                            className: `w-3.5 h-3.5 text-neutral-400 transition-transform ${accountOpen ? "rotate-180" : ""}`,
                                                            fill: "none",
                                                            stroke: "currentColor",
                                                            strokeWidth: 2,
                                                            viewBox: "0 0 24 24",
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                d: "M19 9l-7 7-7-7"
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Navbar.tsx",
                                                                lineNumber: 128,
                                                                columnNumber: 240
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/Navbar.tsx",
                                                            lineNumber: 128,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                                                    children: accountOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                                        initial: {
                                                            opacity: 0,
                                                            y: 8,
                                                            scale: 0.96
                                                        },
                                                        animate: {
                                                            opacity: 1,
                                                            y: 0,
                                                            scale: 1
                                                        },
                                                        exit: {
                                                            opacity: 0,
                                                            y: 8,
                                                            scale: 0.96
                                                        },
                                                        transition: {
                                                            duration: 0.15
                                                        },
                                                        className: "absolute right-0 top-full mt-2 w-52 bg-white rounded-2xl border border-neutral-200 shadow-xl overflow-hidden z-50",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "px-4 py-3 border-b border-neutral-100",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-sm font-bold text-neutral-900",
                                                                        children: [
                                                                            user.firstName,
                                                                            " ",
                                                                            user.lastName
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Navbar.tsx",
                                                                        lineNumber: 141,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                        className: "text-xs text-neutral-400 truncate",
                                                                        children: user.email
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/components/Navbar.tsx",
                                                                        lineNumber: 142,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Navbar.tsx",
                                                                lineNumber: 140,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "py-1",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/account",
                                                                        onClick: ()=>setAccountOpen(false),
                                                                        className: "flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-4 h-4 text-neutral-400",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: 1.8,
                                                                                viewBox: "0 0 24 24",
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                    d: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/components/Navbar.tsx",
                                                                                    lineNumber: 146,
                                                                                    columnNumber: 188
                                                                                }, this)
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Navbar.tsx",
                                                                                lineNumber: 146,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            "My Orders"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Navbar.tsx",
                                                                        lineNumber: 145,
                                                                        columnNumber: 27
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                                        href: "/account?tab=profile",
                                                                        onClick: ()=>setAccountOpen(false),
                                                                        className: "flex items-center gap-3 px-4 py-2.5 text-sm text-neutral-700 hover:bg-neutral-50 transition-colors",
                                                                        children: [
                                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                                className: "w-4 h-4 text-neutral-400",
                                                                                fill: "none",
                                                                                stroke: "currentColor",
                                                                                strokeWidth: 1.8,
                                                                                viewBox: "0 0 24 24",
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                children: [
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                        d: "M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/Navbar.tsx",
                                                                                        lineNumber: 150,
                                                                                        columnNumber: 188
                                                                                    }, this),
                                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                                                                        cx: "12",
                                                                                        cy: "7",
                                                                                        r: "4"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/components/Navbar.tsx",
                                                                                        lineNumber: 150,
                                                                                        columnNumber: 240
                                                                                    }, this)
                                                                                ]
                                                                            }, void 0, true, {
                                                                                fileName: "[project]/components/Navbar.tsx",
                                                                                lineNumber: 150,
                                                                                columnNumber: 29
                                                                            }, this),
                                                                            "Profile"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/components/Navbar.tsx",
                                                                        lineNumber: 149,
                                                                        columnNumber: 27
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/components/Navbar.tsx",
                                                                lineNumber: 144,
                                                                columnNumber: 25
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "border-t border-neutral-100 py-1",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    onClick: handleLogout,
                                                                    className: "flex items-center gap-3 w-full px-4 py-2.5 text-sm text-red-500 hover:bg-red-50 transition-colors",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                                            className: "w-4 h-4",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            strokeWidth: 1.8,
                                                                            viewBox: "0 0 24 24",
                                                                            strokeLinecap: "round",
                                                                            strokeLinejoin: "round",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                                                d: "M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/components/Navbar.tsx",
                                                                                lineNumber: 156,
                                                                                columnNumber: 171
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/components/Navbar.tsx",
                                                                            lineNumber: 156,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        "Sign Out"
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/components/Navbar.tsx",
                                                                    lineNumber: 155,
                                                                    columnNumber: 27
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/components/Navbar.tsx",
                                                                lineNumber: 154,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/components/Navbar.tsx",
                                                        lineNumber: 133,
                                                        columnNumber: 23
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Navbar.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: "/login",
                                            className: "text-sm font-semibold text-neutral-700 hover:text-neutral-900 transition-colors border border-neutral-200 px-4 py-1.5 rounded-xl hover:border-neutral-400",
                                            children: "Sign In"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 165,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        className: "md:hidden text-neutral-500 hover:text-neutral-900 transition-colors",
                                        onClick: ()=>setMenuOpen(!menuOpen),
                                        "aria-label": "Menu",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: 1.8,
                                            viewBox: "0 0 24 24",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: menuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M6 18L18 6M6 6l12 12"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 174,
                                                columnNumber: 29
                                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                d: "M4 6h16M4 12h16M4 18h16"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 174,
                                                columnNumber: 65
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 173,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 172,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 79,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 54,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AnimatePresence"], {
                        children: menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0,
                                height: 0
                            },
                            animate: {
                                opacity: 1,
                                height: "auto"
                            },
                            exit: {
                                opacity: 0,
                                height: 0
                            },
                            className: "md:hidden border-t border-neutral-200 bg-white overflow-hidden",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "px-6 py-4 flex flex-col gap-1",
                                children: [
                                    navLinks.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            href: link.href,
                                            onClick: ()=>setMenuOpen(false),
                                            className: `py-2.5 text-sm font-medium transition-colors ${pathname === link.href ? "text-neutral-900" : "text-neutral-500 hover:text-neutral-900"}`,
                                            children: link.label
                                        }, link.href, false, {
                                            fileName: "[project]/components/Navbar.tsx",
                                            lineNumber: 191,
                                            columnNumber: 19
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px bg-neutral-100 my-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 196,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/wishlist",
                                        onClick: ()=>setMenuOpen(false),
                                        className: "py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2",
                                        children: [
                                            "Wishlist ",
                                            wishlistCount > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-rose-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                                                children: wishlistCount
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 198,
                                                columnNumber: 50
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 197,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/cart",
                                        onClick: ()=>setMenuOpen(false),
                                        className: "py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors flex items-center gap-2",
                                        children: [
                                            "Cart ",
                                            totalItems > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "bg-neutral-900 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full",
                                                children: totalItems
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 201,
                                                columnNumber: 43
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 200,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "h-px bg-neutral-100 my-2"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Navbar.tsx",
                                        lineNumber: 203,
                                        columnNumber: 17
                                    }, this),
                                    user ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/account",
                                                onClick: ()=>setMenuOpen(false),
                                                className: "py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors",
                                                children: "My Orders"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 206,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>{
                                                    handleLogout();
                                                    setMenuOpen(false);
                                                },
                                                className: "py-2.5 text-sm font-medium text-red-500 text-left",
                                                children: "Sign Out"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 209,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/login",
                                                onClick: ()=>setMenuOpen(false),
                                                className: "py-2.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors",
                                                children: "Sign In"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 215,
                                                columnNumber: 21
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                href: "/register",
                                                onClick: ()=>setMenuOpen(false),
                                                className: "py-2.5 text-sm font-medium text-neutral-900 font-semibold",
                                                children: "Create Account"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Navbar.tsx",
                                                lineNumber: 216,
                                                columnNumber: 21
                                            }, this)
                                        ]
                                    }, void 0, true)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Navbar.tsx",
                                lineNumber: 189,
                                columnNumber: 15
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Navbar.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/Navbar.tsx",
                        lineNumber: 181,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 53,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$CartDrawer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: cartOpen,
                onClose: ()=>setCartOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 225,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                open: searchOpen,
                onClose: ()=>setSearchOpen(false)
            }, void 0, false, {
                fileName: "[project]/components/Navbar.tsx",
                lineNumber: 226,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s(Navbar, "meF61+EehYdd/AMPMyzBBJ27mko=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$CartContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCart"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$WishlistContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useWishlist"],
        __TURBOPACK__imported__module__$5b$project$5d2f$context$2f$AuthContext$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useAuth"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ProductCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProductCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
;
function ProductCard({ id, name, brand, price, originalPrice, image, colors, badge }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        whileHover: {
            y: -4
        },
        transition: {
            duration: 0.2
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: `/product/${id}`,
            className: "group block",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: image,
                            alt: name,
                            className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        }, void 0, false, {
                            fileName: "[project]/components/ProductCard.tsx",
                            lineNumber: 31,
                            columnNumber: 11
                        }, this),
                        badge && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: `absolute top-3 left-3 text-white text-[10px] font-bold px-2 py-1 rounded-lg ${badge === "Sale" ? "bg-rose-500" : badge === "New" ? "bg-emerald-600" : badge === "Best Seller" ? "bg-amber-500" : "bg-neutral-900"}`,
                            children: badge
                        }, void 0, false, {
                            fileName: "[project]/components/ProductCard.tsx",
                            lineNumber: 37,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductCard.tsx",
                    lineNumber: 30,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-[10px] font-bold tracking-widest text-neutral-400 uppercase",
                            children: brand
                        }, void 0, false, {
                            fileName: "[project]/components/ProductCard.tsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm font-semibold text-neutral-900 mt-0.5",
                            children: name
                        }, void 0, false, {
                            fileName: "[project]/components/ProductCard.tsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-neutral-400 mt-0.5",
                            children: [
                                colors,
                                " color",
                                colors !== 1 ? "s" : ""
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductCard.tsx",
                            lineNumber: 50,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-2 mt-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-sm font-bold text-neutral-900",
                                    children: [
                                        "$",
                                        price
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductCard.tsx",
                                    lineNumber: 52,
                                    columnNumber: 13
                                }, this),
                                originalPrice && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-xs text-neutral-400 line-through",
                                    children: [
                                        "$",
                                        originalPrice
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ProductCard.tsx",
                                    lineNumber: 54,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/ProductCard.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ProductCard.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ProductCard.tsx",
            lineNumber: 29,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ProductCard.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, this);
}
_c = ProductCard;
var _c;
__turbopack_context__.k.register(_c, "ProductCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b6151878._.js.map