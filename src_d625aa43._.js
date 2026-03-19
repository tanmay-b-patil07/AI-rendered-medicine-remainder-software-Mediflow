(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/theme-toggle.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/moon.js [app-client] (ecmascript) <export default as Moon>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sun.js [app-client] (ecmascript) <export default as Sun>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function ThemeToggle() {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("light");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            const stored = window.localStorage.getItem("mediflow_theme");
            const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)").matches;
            const nextTheme = stored ?? (prefersDark ? "dark" : "light");
            setTheme(nextTheme);
            document.documentElement.classList.toggle("dark", nextTheme === "dark");
        }
    }["ThemeToggle.useEffect"], []);
    const toggleTheme = ()=>{
        const nextTheme = theme === "dark" ? "light" : "dark";
        setTheme(nextTheme);
        document.documentElement.classList.toggle("dark", nextTheme === "dark");
        window.localStorage.setItem("mediflow_theme", nextTheme);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        type: "button",
        onClick: toggleTheme,
        className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-2 text-xs font-semibold text-slate-700 shadow-soft dark:border-slate-800 dark:bg-slate-900 dark:text-slate-100",
        "aria-label": "Toggle theme",
        children: [
            theme === "dark" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sun$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sun$3e$__["Sun"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/theme-toggle.tsx",
                lineNumber: 33,
                columnNumber: 27
            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$moon$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Moon$3e$__["Moon"], {
                className: "h-4 w-4"
            }, void 0, false, {
                fileName: "[project]/src/components/theme-toggle.tsx",
                lineNumber: 33,
                columnNumber: 57
            }, this),
            theme === "dark" ? "Light mode" : "Dark mode"
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/theme-toggle.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
_s(ThemeToggle, "lm84LOZxHN0YC4jzvAwAP/18Sno=");
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/auth.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearSession",
    ()=>clearSession,
    "createSession",
    ()=>createSession,
    "getSession",
    ()=>getSession,
    "getStoredUser",
    ()=>getStoredUser,
    "hashPassword",
    ()=>hashPassword,
    "isAuthenticated",
    ()=>isAuthenticated,
    "popFlash",
    ()=>popFlash,
    "saveUser",
    ()=>saveUser,
    "setFlash",
    ()=>setFlash,
    "verifyPassword",
    ()=>verifyPassword
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$dist$2f$bcrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/bcryptjs/dist/bcrypt.js [app-client] (ecmascript)");
"use client";
;
const USER_KEY = "mediflow_auth_user";
const SESSION_KEY = "mediflow_session";
const FLASH_KEY = "mediflow_flash";
const getStoredUser = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.localStorage.getItem(USER_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch  {
        return null;
    }
};
const saveUser = (user)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
};
const hashPassword = (password)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$dist$2f$bcrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].hashSync(password, 10);
};
const verifyPassword = (password, hash)=>{
    return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$bcryptjs$2f$dist$2f$bcrypt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].compareSync(password, hash);
};
const createSession = (user, remember)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const session = {
        isAuthenticated: true,
        userId: user.id,
        email: user.email,
        loginDate: new Date().toISOString(),
        token: crypto.randomUUID()
    };
    const storage = remember ? window.localStorage : window.sessionStorage;
    storage.setItem(SESSION_KEY, JSON.stringify(session));
    return session;
};
const getSession = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.localStorage.getItem(SESSION_KEY) ?? window.sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    try {
        return JSON.parse(raw);
    } catch  {
        return null;
    }
};
const clearSession = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.removeItem(SESSION_KEY);
    window.sessionStorage.removeItem(SESSION_KEY);
};
const isAuthenticated = ()=>{
    const session = getSession();
    const user = getStoredUser();
    if (!session || !user) return false;
    return session.userId === user.id && session.email === user.email;
};
const setFlash = (message)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    window.localStorage.setItem(FLASH_KEY, message);
};
const popFlash = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const message = window.localStorage.getItem(FLASH_KEY);
    if (message) window.localStorage.removeItem(FLASH_KEY);
    return message;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/auth-guard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AuthGuard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function AuthGuard({ children }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AuthGuard.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAuthenticated"])()) {
                router.replace("/?auth=required");
            }
        }
    }["AuthGuard.useEffect"], [
        router
    ]);
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isAuthenticated"])()) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-mist dark:bg-slate-950",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-shell flex min-h-screen items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-card px-6 py-4 text-sm text-subtle",
                    children: "Checking authentication..."
                }, void 0, false, {
                    fileName: "[project]/src/components/auth-guard.tsx",
                    lineNumber: 20,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/auth-guard.tsx",
                lineNumber: 19,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/auth-guard.tsx",
            lineNumber: 18,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
_s(AuthGuard, "vQduR7x+OPXj6PSmJyFnf+hU7bg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = AuthGuard;
var _c;
__turbopack_context__.k.register(_c, "AuthGuard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/mediflow-db.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addEmailLog",
    ()=>addEmailLog,
    "addHistory",
    ()=>addHistory,
    "archiveMedicine",
    ()=>archiveMedicine,
    "bulkDelete",
    ()=>bulkDelete,
    "clearInteractions",
    ()=>clearInteractions,
    "createMedicine",
    ()=>createMedicine,
    "deleteMedicine",
    ()=>deleteMedicine,
    "enqueueEmail",
    ()=>enqueueEmail,
    "ensureMissedForPastTimes",
    ()=>ensureMissedForPastTimes,
    "exportCSV",
    ()=>exportCSV,
    "exportJSON",
    ()=>exportJSON,
    "importJSON",
    ()=>importJSON,
    "loadDB",
    ()=>loadDB,
    "resetMedicines",
    ()=>resetMedicines,
    "saveDB",
    ()=>saveDB,
    "updateEmailQueue",
    ()=>updateEmailQueue,
    "updateMedicine",
    ()=>updateMedicine,
    "updateSettings",
    ()=>updateSettings,
    "updateUserProfile",
    ()=>updateUserProfile,
    "upsertInteraction",
    ()=>upsertInteraction
]);
const DB_KEY = "mediflow_db";
const BACKUP_KEY = "mediflow_db_backup";
const defaultDB = {
    medicines: [],
    history: [],
    interactions: [],
    emailQueue: [],
    emailLogs: [],
    user: {
        fullName: "",
        email: "",
        notificationEmails: [],
        emailNotificationsEnabled: true,
        caregiverEmails: [],
        anonymousSubject: false,
        quietHoursStart: "22:00",
        quietHoursEnd: "07:00",
        gracePeriodMinutes: 15,
        escalationMinutes: 60,
        dailySummaryTime: "07:30",
        weeklySummaryDay: 0,
        lastDailySummaryAt: "",
        lastWeeklySummaryAt: "",
        emailjsServiceId: "",
        emailjsTemplateId: "",
        emailjsPublicKey: ""
    },
    settings: {
        viewMode: "view",
        sortBy: "time",
        filter: "active",
        search: "",
        defaultDosageIntervalHours: 8,
        defaultLowStockThreshold: 0.25,
        defaultCriticalStockThreshold: 0.1,
        defaultStockTotal: 30
    },
    updatedAt: new Date().toISOString()
};
const sampleMedicines = [
    {
        id: "med-sample-1",
        name: "Atorvastatin",
        dosageAmount: "10",
        dosageUnit: "mg",
        times: [
            "08:00",
            "20:00"
        ],
        frequency: "Daily",
        startDate: new Date().toISOString().slice(0, 10),
        notes: "Take with food",
        lastTakenAt: undefined,
        dosageIntervalHours: 12,
        stockQuantity: 30,
        stockTotal: 30,
        lowStockThreshold: 0.25,
        criticalStockThreshold: 0.1,
        refillReminderDate: "",
        // pharmacy/prescription fields removed
        instructions: [
            "With Food",
            "Take with Water"
        ],
        warnings: [
            "May cause drowsiness"
        ],
        interactionChecked: false,
        emailEnabled: true,
        gracePeriodMinutes: 15,
        escalationMinutes: 60,
        critical: false,
        color: "#3b82f6",
        archived: false,
        order: 0
    },
    {
        id: "med-sample-2",
        name: "Metformin",
        dosageAmount: "500",
        dosageUnit: "mg",
        times: [
            "07:30",
            "19:30"
        ],
        frequency: "Daily",
        startDate: new Date().toISOString().slice(0, 10),
        notes: "Avoid on empty stomach",
        lastTakenAt: undefined,
        dosageIntervalHours: 12,
        stockQuantity: 60,
        stockTotal: 60,
        lowStockThreshold: 0.25,
        criticalStockThreshold: 0.1,
        refillReminderDate: "",
        // pharmacy/prescription fields removed
        instructions: [
            "After Meals",
            "Avoid Alcohol"
        ],
        warnings: [],
        interactionChecked: false,
        emailEnabled: true,
        gracePeriodMinutes: 15,
        escalationMinutes: 60,
        critical: true,
        color: "#22c55e",
        archived: false,
        order: 1
    },
    {
        id: "med-sample-3",
        name: "Vitamin D3",
        dosageAmount: "2000",
        dosageUnit: "IU",
        times: [
            "13:00"
        ],
        frequency: "Daily",
        startDate: new Date().toISOString().slice(0, 10),
        notes: "With lunch",
        lastTakenAt: undefined,
        dosageIntervalHours: 24,
        stockQuantity: 90,
        stockTotal: 90,
        lowStockThreshold: 0.25,
        criticalStockThreshold: 0.1,
        refillReminderDate: "",
        // pharmacy/prescription fields removed
        instructions: [
            "With Food"
        ],
        warnings: [],
        interactionChecked: false,
        emailEnabled: true,
        gracePeriodMinutes: 15,
        escalationMinutes: 60,
        critical: false,
        color: "#f97316",
        archived: false,
        order: 2
    }
];
const ensureArray = (value)=>Array.isArray(value) ? value : [];
const encode = (value)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return btoa(value);
    } catch  {
        return value;
    }
};
const decode = (value)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    try {
        return atob(value);
    } catch  {
        return value;
    }
};
const serializeUser = (user)=>({
        ...user,
        email: encode(user.email),
        notificationEmails: user.notificationEmails.map(encode),
        caregiverEmails: user.caregiverEmails.map(encode)
    });
const deserializeUser = (user)=>({
        ...user,
        email: decode(user.email),
        notificationEmails: user.notificationEmails.map(decode),
        caregiverEmails: user.caregiverEmails.map(decode)
    });
const normalizeMedicine = (medicine)=>({
        ...medicine,
        dosageIntervalHours: medicine.dosageIntervalHours ?? 8,
        stockQuantity: medicine.stockQuantity ?? 0,
        stockTotal: medicine.stockTotal ?? medicine.stockQuantity ?? 0,
        lowStockThreshold: medicine.lowStockThreshold ?? 0.25,
        criticalStockThreshold: medicine.criticalStockThreshold ?? 0.1,
        refillReminderDate: medicine.refillReminderDate ?? "",
        // pharmacy/prescription fields removed
        instructions: medicine.instructions ?? [],
        warnings: medicine.warnings ?? [],
        interactionChecked: medicine.interactionChecked ?? false,
        emailEnabled: medicine.emailEnabled ?? true,
        gracePeriodMinutes: medicine.gracePeriodMinutes ?? 15,
        escalationMinutes: medicine.escalationMinutes ?? 60,
        critical: medicine.critical ?? false
    });
const loadDB = ()=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const raw = window.localStorage.getItem(DB_KEY);
    if (!raw) {
        const seeded = {
            ...defaultDB,
            medicines: sampleMedicines
        };
        saveDB(seeded);
        return seeded;
    }
    try {
        const parsed = JSON.parse(raw);
        const merged = {
            ...defaultDB,
            ...parsed,
            medicines: ensureArray(parsed.medicines).map(normalizeMedicine),
            history: ensureArray(parsed.history),
            interactions: ensureArray(parsed.interactions),
            emailQueue: ensureArray(parsed.emailQueue),
            emailLogs: ensureArray(parsed.emailLogs),
            user: deserializeUser({
                ...defaultDB.user,
                ...parsed.user
            }),
            settings: {
                ...defaultDB.settings,
                ...parsed.settings,
                defaultDosageIntervalHours: parsed.settings?.defaultDosageIntervalHours ?? defaultDB.settings.defaultDosageIntervalHours,
                defaultLowStockThreshold: parsed.settings?.defaultLowStockThreshold ?? defaultDB.settings.defaultLowStockThreshold,
                defaultCriticalStockThreshold: parsed.settings?.defaultCriticalStockThreshold ?? defaultDB.settings.defaultCriticalStockThreshold,
                defaultStockTotal: parsed.settings?.defaultStockTotal ?? defaultDB.settings.defaultStockTotal
            }
        };
        if (merged.medicines.length === 0) {
            const seeded = {
                ...merged,
                medicines: sampleMedicines
            };
            saveDB(seeded);
            return seeded;
        }
        return merged;
    } catch  {
        const seeded = {
            ...defaultDB,
            medicines: sampleMedicines
        };
        saveDB(seeded);
        return seeded;
    }
};
const saveDB = (db)=>{
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const payload = {
        ...db,
        user: serializeUser(db.user),
        updatedAt: new Date().toISOString()
    };
    const serialized = JSON.stringify(payload);
    window.localStorage.setItem(DB_KEY, serialized);
    window.localStorage.setItem(BACKUP_KEY, serialized);
};
const createMedicine = (db, medicine)=>{
    const next = {
        ...db,
        medicines: [
            ...db.medicines,
            medicine
        ]
    };
    saveDB(next);
    return next;
};
const updateMedicine = (db, medicine)=>{
    const next = {
        ...db,
        medicines: db.medicines.map((item)=>item.id === medicine.id ? medicine : item)
    };
    saveDB(next);
    return next;
};
const archiveMedicine = (db, id)=>{
    const next = {
        ...db,
        medicines: db.medicines.map((item)=>item.id === id ? {
                ...item,
                archived: true
            } : item)
    };
    saveDB(next);
    return next;
};
const deleteMedicine = (db, id)=>{
    const next = {
        ...db,
        medicines: db.medicines.filter((item)=>item.id !== id),
        history: db.history.filter((entry)=>entry.medicineId !== id)
    };
    saveDB(next);
    return next;
};
const bulkDelete = (db, ids)=>{
    const idSet = new Set(ids);
    const next = {
        ...db,
        medicines: db.medicines.filter((item)=>!idSet.has(item.id)),
        history: db.history.filter((entry)=>!idSet.has(entry.medicineId))
    };
    saveDB(next);
    return next;
};
const addHistory = (db, entry)=>{
    const next = {
        ...db,
        history: [
            ...db.history,
            entry
        ]
    };
    saveDB(next);
    return next;
};
const upsertInteraction = (db, interaction)=>{
    const keyMatch = (item)=>item.medicineAId === interaction.medicineAId && item.medicineBId === interaction.medicineBId || item.medicineAId === interaction.medicineBId && item.medicineBId === interaction.medicineAId;
    const existingIndex = db.interactions.findIndex(keyMatch);
    const nextInteractions = [
        ...db.interactions
    ];
    if (existingIndex >= 0) {
        nextInteractions[existingIndex] = interaction;
    } else {
        nextInteractions.push(interaction);
    }
    const next = {
        ...db,
        interactions: nextInteractions
    };
    saveDB(next);
    return next;
};
const clearInteractions = (db)=>{
    const next = {
        ...db,
        interactions: []
    };
    saveDB(next);
    return next;
};
const updateSettings = (db, settings)=>{
    const next = {
        ...db,
        settings: {
            ...db.settings,
            ...settings
        }
    };
    saveDB(next);
    return next;
};
const updateUserProfile = (db, user)=>{
    const next = {
        ...db,
        user: {
            ...db.user,
            ...user
        }
    };
    saveDB(next);
    return next;
};
const enqueueEmail = (db, item)=>{
    const next = {
        ...db,
        emailQueue: [
            ...db.emailQueue,
            item
        ]
    };
    saveDB(next);
    return next;
};
const updateEmailQueue = (db, item)=>{
    const next = {
        ...db,
        emailQueue: db.emailQueue.map((entry)=>entry.id === item.id ? item : entry)
    };
    saveDB(next);
    return next;
};
const addEmailLog = (db, log)=>{
    const next = {
        ...db,
        emailLogs: [
            ...db.emailLogs,
            log
        ]
    };
    saveDB(next);
    return next;
};
const resetMedicines = (db, withSamples = true)=>{
    const next = {
        ...db,
        medicines: withSamples ? sampleMedicines : [],
        history: [],
        interactions: [],
        emailQueue: [],
        emailLogs: []
    };
    saveDB(next);
    return next;
};
const exportJSON = (db)=>{
    return JSON.stringify(db, null, 2);
};
const importJSON = (raw)=>{
    const parsed = JSON.parse(raw);
    const next = {
        ...defaultDB,
        ...parsed,
        medicines: ensureArray(parsed.medicines).map(normalizeMedicine),
        history: ensureArray(parsed.history),
        interactions: ensureArray(parsed.interactions),
        emailQueue: ensureArray(parsed.emailQueue),
        emailLogs: ensureArray(parsed.emailLogs),
        user: deserializeUser({
            ...defaultDB.user,
            ...parsed.user
        }),
        settings: {
            ...defaultDB.settings,
            ...parsed.settings,
            defaultDosageIntervalHours: parsed.settings?.defaultDosageIntervalHours ?? defaultDB.settings.defaultDosageIntervalHours,
            defaultLowStockThreshold: parsed.settings?.defaultLowStockThreshold ?? defaultDB.settings.defaultLowStockThreshold,
            defaultCriticalStockThreshold: parsed.settings?.defaultCriticalStockThreshold ?? defaultDB.settings.defaultCriticalStockThreshold,
            defaultStockTotal: parsed.settings?.defaultStockTotal ?? defaultDB.settings.defaultStockTotal
        },
        updatedAt: new Date().toISOString()
    };
    saveDB(next);
    return next;
};
const formatDate = (date)=>date.toISOString().slice(0, 10);
const exportCSV = (history, medicines)=>{
    const medMap = new Map(medicines.map((med)=>[
            med.id,
            med.name
        ]));
    const header = "medicineId,medicineName,dateTaken,timeTaken,status";
    const rows = history.map((entry)=>{
        const name = medMap.get(entry.medicineId) ?? "Unknown";
        return `${entry.medicineId},${name},${entry.dateTaken},${entry.timeTaken},${entry.status}`;
    });
    return [
        header,
        ...rows
    ].join("\n");
};
const today = ()=>formatDate(new Date());
const ensureMissedForPastTimes = (db)=>{
    const now = new Date();
    const currentDate = today();
    const newEntries = [];
    db.medicines.forEach((med)=>{
        if (med.archived) return;
        med.times.forEach((time)=>{
            const [hours, minutes] = time.split(":").map(Number);
            if (Number.isNaN(hours) || Number.isNaN(minutes)) return;
            const scheduled = new Date();
            scheduled.setHours(hours, minutes, 0, 0);
            if (scheduled > now) return;
            const alreadyLogged = db.history.some((entry)=>entry.medicineId === med.id && entry.dateTaken === currentDate && entry.timeTaken === time);
            if (!alreadyLogged) {
                newEntries.push({
                    id: `hist-${crypto.randomUUID()}`,
                    medicineId: med.id,
                    dateTaken: currentDate,
                    timeTaken: time,
                    status: "missed"
                });
            }
        });
    });
    if (!newEntries.length) return db;
    const next = {
        ...db,
        history: [
            ...db.history,
            ...newEntries
        ]
    };
    saveDB(next);
    return next;
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/app/settings/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SettingsPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2d$guard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/auth-guard.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mediflow-db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function SettingsPage() {
    _s();
    const [db, setDb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [testStatus, setTestStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SettingsPage.useEffect": ()=>{
            const loaded = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDB"])();
            const envServiceId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "";
            const envTemplateId = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "";
            const envPublicKey = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY ?? "";
            const next = {
                ...loaded,
                user: {
                    ...loaded.user,
                    emailjsServiceId: loaded.user.emailjsServiceId || envServiceId,
                    emailjsTemplateId: loaded.user.emailjsTemplateId || envTemplateId,
                    emailjsPublicKey: loaded.user.emailjsPublicKey || envPublicKey
                }
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(next);
            setDb(next);
        }
    }["SettingsPage.useEffect"], []);
    if (!db) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-mist dark:bg-slate-950",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-shell flex min-h-screen items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-card px-6 py-4 text-sm text-subtle",
                    children: "Loading settings..."
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 36,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/settings/page.tsx",
                lineNumber: 35,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 34,
            columnNumber: 7
        }, this);
    }
    const updateSetting = (key, value)=>{
        const next = {
            ...db,
            settings: {
                ...db.settings,
                [key]: value
            }
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(next);
        setDb(next);
    };
    const updateUser = (key, value)=>{
        const next = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUserProfile"])(db, {
            [key]: value
        });
        setDb(next);
    };
    const sendTestEmail = async ()=>{
        if (!db) return;
        if (!db.user.notificationEmails.length) {
            setTestStatus("Add a notification email first.");
            return;
        }
        if (!db.user.emailjsServiceId || !db.user.emailjsTemplateId || !db.user.emailjsPublicKey) {
            setTestStatus("EmailJS credentials are missing.");
            return;
        }
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send(db.user.emailjsServiceId, db.user.emailjsTemplateId, {
                to_email: db.user.notificationEmails.join(","),
                subject: "MediFlow Test Email",
                message_html: "<div style='font-family: Arial;'>This is a test email from MediFlow.</div>"
            }, db.user.emailjsPublicKey);
            setTestStatus("Test email sent.");
        } catch (error) {
            setTestStatus(error instanceof Error ? error.message : "Failed to send test email.");
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$auth$2d$guard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-mist dark:bg-slate-950",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                    className: "sticky top-0 z-40 border-b border-white/50 bg-white/80 backdrop-blur dark:border-slate-900/70 dark:bg-slate-950/70",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-shell flex items-center justify-between py-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex h-10 w-10 items-center justify-center rounded-2xl bg-ink text-white",
                                        children: "MF"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/settings/page.tsx",
                                        lineNumber: 86,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm font-semibold text-ink",
                                                children: "MediFlow"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/settings/page.tsx",
                                                lineNumber: 88,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-xs text-subtle",
                                                children: "Safety & Refill Settings"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/settings/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/settings/page.tsx",
                                        lineNumber: 87,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/settings/page.tsx",
                                lineNumber: 85,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                        fileName: "[project]/src/app/settings/page.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/dashboard",
                                        className: "text-sm font-semibold text-ink",
                                        children: "Back to Dashboard"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/settings/page.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/settings/page.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/settings/page.tsx",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 83,
                    columnNumber: 7
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                    className: "section-shell py-10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "glass-card p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-semibold text-ink",
                                    children: "Global Defaults"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 103,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-subtle",
                                    children: "These settings apply to new medicines. Existing medicines keep their saved values unless edited."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 104,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 grid gap-6 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "Default Dose Interval (hours)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 110,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: 1,
                                                    value: db.settings.defaultDosageIntervalHours,
                                                    onChange: (event)=>updateSetting("defaultDosageIntervalHours", Number(event.target.value)),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 109,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "Default Stock Total"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 120,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: 0,
                                                    value: db.settings.defaultStockTotal,
                                                    onChange: (event)=>updateSetting("defaultStockTotal", Number(event.target.value)),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 121,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 119,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "Low Stock Threshold (%)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 130,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: 1,
                                                    max: 100,
                                                    value: Math.round(db.settings.defaultLowStockThreshold * 100),
                                                    onChange: (event)=>updateSetting("defaultLowStockThreshold", Number(event.target.value) / 100),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 131,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 129,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "Critical Threshold (%)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 141,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: 1,
                                                    max: 100,
                                                    value: Math.round(db.settings.defaultCriticalStockThreshold * 100),
                                                    onChange: (event)=>updateSetting("defaultCriticalStockThreshold", Number(event.target.value) / 100),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 142,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 140,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 108,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 102,
                            columnNumber: 9
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 glass-card p-6",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-ink",
                                    children: "Email Notifications"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 155,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "mt-2 text-sm text-subtle",
                                    children: "Manage reminder emails, quiet hours, and EmailJS configuration."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 156,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 grid gap-6 md:grid-cols-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: db.user.emailNotificationsEnabled,
                                                    onChange: (event)=>updateUser("emailNotificationsEnabled", event.target.checked),
                                                    className: "h-4 w-4 rounded border-slate-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-slate-600",
                                                    children: "Enable email reminders"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 168,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 161,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "checkbox",
                                                    checked: db.user.anonymousSubject,
                                                    onChange: (event)=>updateUser("anonymousSubject", event.target.checked),
                                                    className: "h-4 w-4 rounded border-slate-300"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 171,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-sm text-slate-600",
                                                    children: "Use anonymous subject lines"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 177,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 170,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "Notification Emails (comma separated)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 180,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: db.user.notificationEmails.join(", "),
                                                    onChange: (event)=>updateUser("notificationEmails", event.target.value.split(",").map((item)=>item.trim()).filter(Boolean)),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 181,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 179,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "Caregiver Emails (comma separated)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 196,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: db.user.caregiverEmails.join(", "),
                                                    onChange: (event)=>updateUser("caregiverEmails", event.target.value.split(",").map((item)=>item.trim()).filter(Boolean)),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 197,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 195,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "Quiet Hours Start"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 212,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    value: db.user.quietHoursStart,
                                                    onChange: (event)=>updateUser("quietHoursStart", event.target.value),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 213,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 211,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "Quiet Hours End"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 221,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    value: db.user.quietHoursEnd,
                                                    onChange: (event)=>updateUser("quietHoursEnd", event.target.value),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 222,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 220,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "Default Grace Period (minutes)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 230,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: 1,
                                                    value: db.user.gracePeriodMinutes,
                                                    onChange: (event)=>updateUser("gracePeriodMinutes", Number(event.target.value)),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 229,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "Default Escalation (minutes)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 240,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: 1,
                                                    value: db.user.escalationMinutes,
                                                    onChange: (event)=>updateUser("escalationMinutes", Number(event.target.value)),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 241,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 239,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "Daily Summary Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 250,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "time",
                                                    value: db.user.dailySummaryTime,
                                                    onChange: (event)=>updateUser("dailySummaryTime", event.target.value),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 251,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 249,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "Weekly Summary Day (0=Sun)"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 259,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    min: 0,
                                                    max: 6,
                                                    value: db.user.weeklySummaryDay,
                                                    onChange: (event)=>updateUser("weeklySummaryDay", Number(event.target.value)),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 260,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 258,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 160,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 grid gap-6 md:grid-cols-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "EmailJS Service ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 273,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: db.user.emailjsServiceId,
                                                    onChange: (event)=>updateUser("emailjsServiceId", event.target.value),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 274,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 272,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "EmailJS Template ID"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 281,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: db.user.emailjsTemplateId,
                                                    onChange: (event)=>updateUser("emailjsTemplateId", event.target.value),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 282,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 280,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "text-sm font-medium text-ink",
                                                    children: "EmailJS Public Key"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 289,
                                                    columnNumber: 15
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: db.user.emailjsPublicKey,
                                                    onChange: (event)=>updateUser("emailjsPublicKey", event.target.value),
                                                    className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/settings/page.tsx",
                                                    lineNumber: 290,
                                                    columnNumber: 15
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 288,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 271,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-xs text-slate-600",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-ink",
                                            children: "EmailJS Template Variables"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 298,
                                            columnNumber: 13
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("pre", {
                                            className: "mt-3 whitespace-pre-wrap",
                                            children: `to_email: "user@example.com, caregiver@example.com"
subject: "Medicine Reminder: Metformin - 08:00"
message_html: "<div>HTML email body here</div>"`
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 299,
                                            columnNumber: 13
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 297,
                                    columnNumber: 11
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "mt-6 flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: sendTestEmail,
                                            className: "rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white",
                                            children: "Send Test Email"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 306,
                                            columnNumber: 13
                                        }, this),
                                        testStatus && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm text-subtle",
                                            children: testStatus
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/settings/page.tsx",
                                            lineNumber: 312,
                                            columnNumber: 28
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/settings/page.tsx",
                                    lineNumber: 305,
                                    columnNumber: 11
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/settings/page.tsx",
                            lineNumber: 154,
                            columnNumber: 9
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/settings/page.tsx",
                    lineNumber: 101,
                    columnNumber: 7
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/settings/page.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/settings/page.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
_s(SettingsPage, "vmPYaLwZFWknqbiOttefEAXHE4c=");
_c = SettingsPage;
var _c;
__turbopack_context__.k.register(_c, "SettingsPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d625aa43._.js.map