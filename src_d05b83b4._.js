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
"[project]/src/app/dashboard/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check.js [app-client] (ecmascript) <export default as CheckCircle2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/grip-vertical.js [app-client] (ecmascript) <export default as GripVertical>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pencil.js [app-client] (ecmascript) <export default as Pencil>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pill.js [app-client] (ecmascript) <export default as Pill>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/settings.js [app-client] (ecmascript) <export default as Settings>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/cloud-upload.js [app-client] (ecmascript) <export default as UploadCloud>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Line.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/LineChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/theme-toggle.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@emailjs/browser/es/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mediflow-db.ts [app-client] (ecmascript)");
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
const STAT_CARD_STYLE = "glass-card p-4 md:p-5";
const COLOR_OPTIONS = [
    "#3b82f6",
    "#22c55e",
    "#0ea5e9",
    "#f97316",
    "#a855f7",
    "#ef4444"
];
const initialFormState = {
    name: "",
    dosageAmount: "",
    dosageUnit: "mg",
    times: [
        "08:00"
    ],
    frequency: "Daily",
    startDate: new Date().toISOString().slice(0, 10),
    endDate: "",
    notes: "",
    dosageIntervalHours: 8,
    stockQuantity: 30,
    stockTotal: 30,
    lowStockThreshold: 0.25,
    criticalStockThreshold: 0.1,
    refillReminderDate: "",
    emailEnabled: true,
    gracePeriodMinutes: 15,
    escalationMinutes: 60,
    critical: false,
    color: COLOR_OPTIONS[0]
};
const getToday = ()=>new Date().toISOString().slice(0, 10);
const getNextDose = (medicines)=>{
    const now = new Date();
    const times = medicines.filter((med)=>!med.archived).flatMap((med)=>med.times.map((time)=>{
            const [hours, minutes] = time.split(":").map(Number);
            const date = new Date();
            date.setHours(hours, minutes, 0, 0);
            return date;
        })).filter((date)=>date > now).sort((a, b)=>a.getTime() - b.getTime());
    if (!times.length) return "No upcoming doses";
    const next = times[0];
    const diffMs = next.getTime() - now.getTime();
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor(diffMs / (1000 * 60) % 60);
    return `${hours}h ${minutes}m`;
};
const formatDuration = (ms)=>{
    const totalMinutes = Math.max(0, Math.floor(ms / (1000 * 60)));
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;
    return `${hours}h ${minutes}m`;
};
const getLastTakenAt = (medicine, history)=>{
    if (medicine.lastTakenAt) return new Date(medicine.lastTakenAt);
    const latest = history.filter((entry)=>entry.medicineId === medicine.id && entry.status === "taken").sort((a, b)=>`${b.dateTaken}T${b.timeTaken}`.localeCompare(`${a.dateTaken}T${a.timeTaken}`))[0];
    if (!latest) return null;
    return new Date(`${latest.dateTaken}T${latest.timeTaken}`);
};
const getNextSafeAt = (medicine, history)=>{
    const lastTaken = getLastTakenAt(medicine, history);
    if (!lastTaken) return null;
    const nextSafe = new Date(lastTaken.getTime() + medicine.dosageIntervalHours * 60 * 60 * 1000);
    return nextSafe;
};
const getCountdownLabel = (medicine, history)=>{
    const nextSafe = getNextSafeAt(medicine, history);
    if (!nextSafe) return "Ready now";
    const now = new Date();
    if (nextSafe <= now) return "Ready now";
    return `Next dose available in ${formatDuration(nextSafe.getTime() - now.getTime())}`;
};
const severityRank = {
    severe: 3,
    moderate: 2,
    minor: 1
};
const classifySeverity = (text)=>{
    const lower = text.toLowerCase();
    if (lower.includes("contraindicated") || lower.includes("do not") || lower.includes("avoid")) {
        return "severe";
    }
    if (lower.includes("caution") || lower.includes("monitor") || lower.includes("adjust")) {
        return "moderate";
    }
    return "minor";
};
const fetchInteractionText = async (drugA, drugB)=>{
    const base = "https://api.fda.gov/drug/label.json";
    const searchA = `drug_interactions:\"${drugB}\" AND (openfda.generic_name:\"${drugA}\" OR openfda.brand_name:\"${drugA}\")`;
    const url = `${base}?search=${encodeURIComponent(searchA)}&limit=1`;
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    const text = data?.results?.[0]?.drug_interactions?.[0];
    return text ?? null;
};
const fetchFdaSuggestions = async (query)=>{
    const base = "https://api.fda.gov/drug/label.json";
    const search = `openfda.brand_name:\"${query}\" OR openfda.generic_name:\"${query}\"`;
    const url = `${base}?search=${encodeURIComponent(search)}&limit=10`;
    const response = await fetch(url);
    if (!response.ok) return [];
    const data = await response.json();
    const results = data?.results ?? [];
    const names = [];
    results.forEach((item)=>{
        if (item.openfda?.brand_name) names.push(...item.openfda.brand_name);
        if (item.openfda?.generic_name) names.push(...item.openfda.generic_name);
    });
    return Array.from(new Set(names)).slice(0, 10);
};
const fetchFdaDetails = async (name)=>{
    const base = "https://api.fda.gov/drug/label.json";
    const search = `openfda.brand_name:\"${name}\" OR openfda.generic_name:\"${name}\"`;
    const url = `${base}?search=${encodeURIComponent(search)}&limit=1`;
    const response = await fetch(url);
    if (!response.ok) return null;
    const data = await response.json();
    const item = data?.results?.[0];
    if (!item) return null;
    return {
        name,
        brandNames: item.openfda?.brand_name ?? [],
        genericNames: item.openfda?.generic_name ?? [],
        manufacturer: item.openfda?.manufacturer_name ?? [],
        activeIngredients: item.active_ingredient ?? [],
        dosageAndAdministration: item.dosage_and_administration?.[0],
        warnings: item.warnings?.[0],
        indications: item.indications_and_usage?.[0],
        adverseReactions: item.adverse_reactions?.[0],
        drugInteractions: item.drug_interactions?.[0],
        contraindications: item.contraindications?.[0],
        storage: item.storage_and_handling?.[0],
        boxedWarning: item.boxed_warning?.[0]
    };
};
const getMaxDoseFromText = (text)=>{
    if (!text) return null;
    const match = text.toLowerCase().match(/maximum[^\\d]*(\\d+(?:\\.\\d+)?)/);
    return match ? Number(match[1]) : null;
};
const isQuietHours = (now, start, end)=>{
    const [startH, startM] = start.split(":").map(Number);
    const [endH, endM] = end.split(":").map(Number);
    const startDate = new Date(now);
    const endDate = new Date(now);
    startDate.setHours(startH, startM, 0, 0);
    endDate.setHours(endH, endM, 0, 0);
    if (startDate <= endDate) {
        return now >= startDate && now <= endDate;
    }
    return now >= startDate || now <= endDate;
};
const getQuietHoursEnd = (now, end)=>{
    const [endH, endM] = end.split(":").map(Number);
    const endDate = new Date(now);
    endDate.setHours(endH, endM, 0, 0);
    if (endDate <= now) {
        endDate.setDate(endDate.getDate() + 1);
    }
    return endDate;
};
const buildReminderSubject = (medicine, time, anonymous)=>{
    const name = anonymous ? "Scheduled dose" : medicine.name;
    return `Medicine Reminder: ${name} - ${time}`;
};
const buildReminderHtml = (params)=>{
    const { userName, medicine, time, now, deepLink, snoozeLink, urgency, instructions } = params;
    const urgencyColor = urgency === "urgent" ? "#ef4444" : urgency === "important" ? "#f59e0b" : "#22c55e";
    return `
  <div style="font-family: Arial, sans-serif; padding: 16px; background: #f8fafc;">
    <div style="max-width: 560px; margin: 0 auto; background: #ffffff; border-radius: 16px; padding: 24px; border: 1px solid #e2e8f0;">
      <h2 style="margin: 0 0 12px; color: #0f172a;">Hello ${userName || "there"},</h2>
      <p style="margin: 0 0 12px; color: #334155;">
        <strong style="color:${urgencyColor};">REMINDER:</strong> You have a missed medicine dose.
      </p>
      <ul style="margin: 0 0 12px; padding-left: 18px; color: #334155;">
        <li><strong>Medicine:</strong> ${medicine.name}</li>
        <li><strong>Dosage:</strong> ${medicine.dosageAmount} ${medicine.dosageUnit}</li>
        <li><strong>Scheduled Time:</strong> ${time}</li>
        <li><strong>Current Time:</strong> ${now.toLocaleTimeString()}</li>
      </ul>
      ${instructions?.length ? `<p style="margin: 0 0 12px; color: #334155;"><strong>Instructions:</strong> ${instructions.join(", ")}</p>` : ""}
      <p style="margin: 0 0 16px; color: #334155;">Please take your medicine as soon as possible.</p>
      <div style="display:flex; gap:12px; flex-wrap:wrap;">
        <a href="${deepLink}" style="display:inline-block; padding: 10px 16px; background: #0f172a; color: #fff; text-decoration: none; border-radius: 999px; font-size: 14px;">Mark as taken</a>
        <a href="${snoozeLink}" style="display:inline-block; padding: 10px 16px; background: #e2e8f0; color: #0f172a; text-decoration: none; border-radius: 999px; font-size: 14px;">Remind me in 30 min</a>
      </div>
      <p style="margin-top: 16px; color: #64748b; font-size: 12px;">
        MediFlow - Your Health, Our Priority
      </p>
      <p style="margin-top: 8px; color: #94a3b8; font-size: 11px;">
        <a href="${deepLink}" style="color:#94a3b8;">Unsubscribe</a>
      </p>
    </div>
  </div>
  `;
};
const buildAdherenceSeries = (range, history, medicines, selectedMedicineId)=>{
    const today = new Date();
    const labels = [];
    for(let i = range - 1; i >= 0; i -= 1){
        const date = new Date(today);
        date.setDate(today.getDate() - i);
        const iso = date.toISOString().slice(0, 10);
        labels.push({
            label: date.toLocaleDateString(undefined, {
                month: "short",
                day: "numeric"
            }),
            date: iso
        });
    }
    const activeMeds = medicines.filter((med)=>!med.archived);
    const perDayExpected = selectedMedicineId === "all" ? activeMeds.reduce((acc, med)=>acc + med.times.length, 0) : activeMeds.find((med)=>med.id === selectedMedicineId)?.times.length ?? 0;
    return labels.map((entry)=>{
        const filtered = history.filter((item)=>item.dateTaken === entry.date && (selectedMedicineId === "all" || item.medicineId === selectedMedicineId));
        const taken = filtered.filter((item)=>item.status === "taken").length;
        const total = perDayExpected || filtered.length || 1;
        return {
            label: entry.label,
            value: Math.round(taken / total * 100)
        };
    });
};
function DashboardPage() {
    _s();
    const [db, setDb] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [range, setRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("7");
    const [customRange, setCustomRange] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        start: "",
        end: ""
    });
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [settingsOpen, setSettingsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [modalOpen, setModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialFormState);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [toasts, setToasts] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [overdoseWarning, setOverdoseWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [interactionWarning, setInteractionWarning] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [interactionLoading, setInteractionLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fdaSuggestions, setFdaSuggestions] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [fdaLoading, setFdaLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [fdaDetailsMap, setFdaDetailsMap] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [infoModal, setInfoModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedIds, setSelectedIds] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [draggingId, setDraggingId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [selectedMedicineId, setSelectedMedicineId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("all");
    const fileInputRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const initial = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureMissedForPastTimes"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDB"])());
            setDb(initial);
        }
    }["DashboardPage.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!db) return;
            const snoozeMinutes = Number(searchParams.get("snooze"));
            const medId = searchParams.get("med");
            const time = searchParams.get("time");
            if (!snoozeMinutes || !medId || !time) return;
            const med = db.medicines.find({
                "DashboardPage.useEffect.med": (item)=>item.id === medId
            }["DashboardPage.useEffect.med"]);
            if (!med) return;
            const queueId = `snooze-${medId}-${getToday()}-${time}`;
            const existing = db.emailQueue.some({
                "DashboardPage.useEffect.existing": (item)=>item.id === queueId
            }["DashboardPage.useEffect.existing"]);
            if (existing) return;
            const now = new Date();
            const recipients = Array.from(new Set([
                ...db.user.notificationEmails,
                ...db.user.caregiverEmails
            ].filter(Boolean)));
            const queued = {
                id: queueId,
                medicineId: medId,
                scheduledTime: time,
                type: "snooze",
                status: "pending",
                recipients,
                subject: buildReminderSubject(med, time, db.user.anonymousSubject),
                html: buildReminderHtml({
                    userName: db.user.fullName,
                    medicine: med,
                    time,
                    now,
                    deepLink: `${window.location.origin}/dashboard?take=${medId}&time=${time}`,
                    snoozeLink: `${window.location.origin}/dashboard?snooze=30&med=${medId}&time=${time}`,
                    urgency: med.critical ? "urgent" : "important",
                    instructions: med.instructions
                }),
                retries: 0,
                nextAttemptAt: new Date(now.getTime() + snoozeMinutes * 60 * 1000).toISOString()
            };
            const nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueEmail"])(db, queued);
            setDb(nextDb);
        }
    }["DashboardPage.useEffect"], [
        db,
        searchParams
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!db) return;
            const interval = window.setInterval({
                "DashboardPage.useEffect.interval": ()=>{
                    setDb({
                        "DashboardPage.useEffect.interval": (prev)=>prev ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ensureMissedForPastTimes"])(prev) : prev
                    }["DashboardPage.useEffect.interval"]);
                }
            }["DashboardPage.useEffect.interval"], 60000);
            return ({
                "DashboardPage.useEffect": ()=>window.clearInterval(interval)
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], [
        db
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!db) return;
            runEmailScheduler();
            const interval = window.setInterval({
                "DashboardPage.useEffect.interval": ()=>{
                    runEmailScheduler();
                }
            }["DashboardPage.useEffect.interval"], 60000);
            return ({
                "DashboardPage.useEffect": ()=>window.clearInterval(interval)
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], [
        db
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            const query = form.name.trim();
            if (query.length < 2) {
                setFdaSuggestions([]);
                return;
            }
            let active = true;
            const timer = window.setTimeout({
                "DashboardPage.useEffect.timer": async ()=>{
                    setFdaLoading(true);
                    const suggestions = await fetchFdaSuggestions(query);
                    if (active) setFdaSuggestions(suggestions);
                    setFdaLoading(false);
                }
            }["DashboardPage.useEffect.timer"], 400);
            return ({
                "DashboardPage.useEffect": ()=>{
                    active = false;
                    window.clearTimeout(timer);
                }
            })["DashboardPage.useEffect"];
        }
    }["DashboardPage.useEffect"], [
        form.name
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "DashboardPage.useEffect": ()=>{
            if (!db) return;
            const takeId = searchParams.get("take");
            const time = searchParams.get("time");
            if (!takeId || !time) return;
            handleHistoryUpdate(takeId, time, "taken");
        }
    }["DashboardPage.useEffect"], [
        db,
        searchParams
    ]);
    const addToast = (toast)=>{
        const id = crypto.randomUUID();
        setToasts((prev)=>[
                ...prev,
                {
                    ...toast,
                    id
                }
            ]);
        window.setTimeout(()=>{
            setToasts((prev)=>prev.filter((item)=>item.id !== id));
        }, 3000);
    };
    const runInteractionCheck = async (baseDb, medicine)=>{
        const existing = baseDb.medicines.filter((med)=>med.id !== medicine.id && !med.archived);
        if (!existing.length) return {
            nextDb: baseDb,
            interactions: []
        };
        setInteractionLoading(true);
        const results = await Promise.all(existing.map(async (other)=>{
            try {
                const text = await fetchInteractionText(medicine.name, other.name);
                if (!text) return null;
                const severity = classifySeverity(text);
                const interaction = {
                    id: `int-${crypto.randomUUID()}`,
                    medicineAId: medicine.id,
                    medicineBId: other.id,
                    severity,
                    description: text,
                    source: "openfda",
                    checkedAt: new Date().toISOString()
                };
                return interaction;
            } catch  {
                return null;
            }
        }));
        let nextDb = baseDb;
        const found = results.filter(Boolean);
        found.forEach((interaction)=>{
            nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["upsertInteraction"])(nextDb, interaction);
        });
        const updatedMeds = nextDb.medicines.map((med)=>med.id === medicine.id ? {
                ...med,
                interactionChecked: true
            } : med);
        nextDb = {
            ...nextDb,
            medicines: updatedMeds
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(nextDb);
        setInteractionLoading(false);
        return {
            nextDb,
            interactions: found
        };
    };
    const sendEmailViaEmailJS = async (item)=>{
        if (!db) throw new Error("Database not ready.");
        const { emailjsServiceId, emailjsTemplateId, emailjsPublicKey } = db.user;
        if (!emailjsServiceId || !emailjsTemplateId || !emailjsPublicKey) {
            throw new Error("EmailJS credentials are missing.");
        }
        const templateParams = {
            to_email: item.recipients.join(","),
            subject: item.subject,
            message_html: item.html
        };
        await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emailjs$2f$browser$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].send(emailjsServiceId, emailjsTemplateId, templateParams, emailjsPublicKey);
    };
    const processEmailQueue = async (baseDb)=>{
        const now = new Date();
        const due = baseDb.emailQueue.filter((item)=>{
            if (item.status !== "pending") return false;
            if (!item.nextAttemptAt) return true;
            return new Date(item.nextAttemptAt) <= now;
        });
        const limited = due.slice(0, 3);
        let nextDb = baseDb;
        for (const item of limited){
            try {
                await sendEmailViaEmailJS(item);
                const updatedItem = {
                    ...item,
                    status: "sent",
                    sentAt: new Date().toISOString()
                };
                nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateEmailQueue"])(nextDb, updatedItem);
                const log = {
                    id: `log-${crypto.randomUUID()}`,
                    queueId: item.id,
                    status: "sent",
                    sentAt: updatedItem.sentAt ?? new Date().toISOString(),
                    recipients: item.recipients,
                    subject: item.subject
                };
                nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEmailLog"])(nextDb, log);
            } catch (error) {
                const retries = item.retries + 1;
                const updatedItem = {
                    ...item,
                    status: retries >= 3 ? "failed" : "pending",
                    retries,
                    nextAttemptAt: new Date(Date.now() + 5 * 60 * 1000).toISOString(),
                    error: error instanceof Error ? error.message : "Unknown error"
                };
                nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateEmailQueue"])(nextDb, updatedItem);
                const log = {
                    id: `log-${crypto.randomUUID()}`,
                    queueId: item.id,
                    status: "failed",
                    sentAt: new Date().toISOString(),
                    recipients: item.recipients,
                    subject: item.subject,
                    error: updatedItem.error
                };
                nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addEmailLog"])(nextDb, log);
            }
        }
        return nextDb;
    };
    const queueReminderEmail = (baseDb, medicine, time, type)=>{
        const date = getToday();
        const id = `${type}-${medicine.id}-${date}-${time}`;
        const exists = baseDb.emailQueue.some((item)=>item.id === id);
        if (exists) return baseDb;
        const now = new Date();
        const isQuiet = isQuietHours(now, baseDb.user.quietHoursStart, baseDb.user.quietHoursEnd);
        const nextAttemptAt = isQuiet ? getQuietHoursEnd(now, baseDb.user.quietHoursEnd).toISOString() : undefined;
        const deepLink = `${window.location.origin}/dashboard?take=${medicine.id}&time=${time}`;
        const snoozeLink = `${window.location.origin}/dashboard?snooze=30&med=${medicine.id}&time=${time}`;
        const urgency = medicine.critical ? "urgent" : type === "escalation" ? "important" : "gentle";
        const recipients = Array.from(new Set([
            ...baseDb.user.notificationEmails,
            ...baseDb.user.caregiverEmails
        ].filter(Boolean)));
        const item = {
            id,
            medicineId: medicine.id,
            scheduledTime: time,
            type,
            status: "pending",
            recipients,
            subject: buildReminderSubject(medicine, time, baseDb.user.anonymousSubject),
            html: buildReminderHtml({
                userName: baseDb.user.fullName,
                medicine,
                time,
                now,
                deepLink,
                snoozeLink,
                urgency,
                instructions: medicine.instructions
            }),
            retries: 0,
            nextAttemptAt
        };
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueEmail"])(baseDb, item);
    };
    const runEmailScheduler = async ()=>{
        if (!db) return;
        if (!db.user.emailNotificationsEnabled) return;
        if (![
            ...db.user.notificationEmails,
            ...db.user.caregiverEmails
        ].filter(Boolean).length) return;
        let nextDb = db;
        const now = new Date();
        const today = getToday();
        nextDb.medicines.forEach((medicine)=>{
            if (medicine.archived || !medicine.emailEnabled) return;
            medicine.times.forEach((time)=>{
                const [hours, minutes] = time.split(":").map(Number);
                const scheduled = new Date();
                scheduled.setHours(hours, minutes, 0, 0);
                const grace = (medicine.gracePeriodMinutes ?? nextDb.user.gracePeriodMinutes) * 60 * 1000;
                const escalation = (medicine.escalationMinutes ?? nextDb.user.escalationMinutes) * 60 * 1000;
                const taken = nextDb.history.some((entry)=>entry.medicineId === medicine.id && entry.dateTaken === today && entry.timeTaken === time && entry.status === "taken");
                if (taken) return;
                if (now.getTime() >= scheduled.getTime() + grace) {
                    nextDb = queueReminderEmail(nextDb, medicine, time, "missed");
                }
                if (now.getTime() >= scheduled.getTime() + escalation) {
                    nextDb = queueReminderEmail(nextDb, medicine, time, "escalation");
                }
            });
        });
        const dailyTime = db.user.dailySummaryTime;
        if (dailyTime) {
            const [h, m] = dailyTime.split(":").map(Number);
            const dailyAt = new Date();
            dailyAt.setHours(h, m, 0, 0);
            const lastDaily = db.user.lastDailySummaryAt ? db.user.lastDailySummaryAt.slice(0, 10) : "";
            if (now >= dailyAt && lastDaily !== today) {
                const summaryHtml = `
          <div style="font-family: Arial, sans-serif; padding: 16px;">
            <h2>Daily Summary</h2>
            <p>Today's medications:</p>
            <ul>${db.medicines.filter((med)=>!med.archived).map((med)=>`<li>${med.name} - ${med.times.join(", ")}</li>`).join("")}</ul>
          </div>`;
                const recipients = Array.from(new Set([
                    ...db.user.notificationEmails,
                    ...db.user.caregiverEmails
                ].filter(Boolean)));
                const item = {
                    id: `daily-${today}`,
                    medicineId: "daily-summary",
                    scheduledTime: dailyTime,
                    type: "daily",
                    status: "pending",
                    recipients,
                    subject: "Daily Medication Summary",
                    html: summaryHtml,
                    retries: 0
                };
                nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueEmail"])(nextDb, item);
                nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUserProfile"])(nextDb, {
                    lastDailySummaryAt: now.toISOString()
                });
            }
        }
        const weeklyDay = db.user.weeklySummaryDay;
        if (now.getDay() === weeklyDay) {
            const lastWeekly = db.user.lastWeeklySummaryAt ? db.user.lastWeeklySummaryAt.slice(0, 10) : "";
            if (lastWeekly !== today) {
                const weeklyHtml = `
          <div style="font-family: Arial, sans-serif; padding: 16px;">
            <h2>Weekly Adherence Report</h2>
            <p>Check your adherence stats in the MediFlow dashboard.</p>
          </div>`;
                const recipients = Array.from(new Set([
                    ...db.user.notificationEmails,
                    ...db.user.caregiverEmails
                ].filter(Boolean)));
                const item = {
                    id: `weekly-${today}`,
                    medicineId: "weekly-summary",
                    scheduledTime: db.user.dailySummaryTime,
                    type: "weekly",
                    status: "pending",
                    recipients,
                    subject: "Weekly Medication Report",
                    html: weeklyHtml,
                    retries: 0
                };
                nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["enqueueEmail"])(nextDb, item);
                nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUserProfile"])(nextDb, {
                    lastWeeklySummaryAt: now.toISOString()
                });
            }
        }
        nextDb = await processEmailQueue(nextDb);
        setDb(nextDb);
    };
    const recheckAllInteractions = async ()=>{
        if (!db) return;
        setInteractionLoading(true);
        let nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clearInteractions"])(db);
        for (const med of nextDb.medicines){
            const result = await runInteractionCheck(nextDb, med);
            nextDb = result.nextDb;
        }
        nextDb = {
            ...nextDb,
            medicines: nextDb.medicines.map((med)=>({
                    ...med,
                    interactionChecked: true
                }))
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(nextDb);
        setDb(nextDb);
        setInteractionLoading(false);
        addToast({
            type: "success",
            message: "Interaction scan completed."
        });
    };
    const openAddModal = ()=>{
        setForm({
            ...initialFormState,
            dosageIntervalHours: db?.settings.defaultDosageIntervalHours ?? initialFormState.dosageIntervalHours,
            stockTotal: db?.settings.defaultStockTotal ?? initialFormState.stockTotal,
            stockQuantity: db?.settings.defaultStockTotal ?? initialFormState.stockQuantity,
            lowStockThreshold: db?.settings.defaultLowStockThreshold ?? initialFormState.lowStockThreshold,
            criticalStockThreshold: db?.settings.defaultCriticalStockThreshold ?? initialFormState.criticalStockThreshold,
            gracePeriodMinutes: db?.user.gracePeriodMinutes ?? initialFormState.gracePeriodMinutes,
            escalationMinutes: db?.user.escalationMinutes ?? initialFormState.escalationMinutes,
            emailEnabled: true,
            critical: false
        });
        setErrors({});
        setModalOpen(true);
    };
    const openEditModal = (medicine)=>{
        setForm({
            id: medicine.id,
            name: medicine.name,
            dosageAmount: medicine.dosageAmount,
            dosageUnit: medicine.dosageUnit,
            times: medicine.times.length ? medicine.times : [
                "08:00"
            ],
            frequency: medicine.frequency,
            startDate: medicine.startDate,
            endDate: medicine.endDate ?? "",
            notes: medicine.notes ?? "",
            dosageIntervalHours: medicine.dosageIntervalHours ?? 8,
            stockQuantity: medicine.stockQuantity ?? 0,
            stockTotal: medicine.stockTotal ?? medicine.stockQuantity ?? 0,
            lowStockThreshold: medicine.lowStockThreshold ?? 0.25,
            criticalStockThreshold: medicine.criticalStockThreshold ?? 0.1,
            refillReminderDate: medicine.refillReminderDate ?? "",
            emailEnabled: medicine.emailEnabled ?? true,
            gracePeriodMinutes: medicine.gracePeriodMinutes ?? 15,
            escalationMinutes: medicine.escalationMinutes ?? 60,
            critical: medicine.critical ?? false,
            color: medicine.color
        });
        setErrors({});
        setModalOpen(true);
    };
    const validateForm = ()=>{
        const nextErrors = {};
        if (!form.name.trim()) nextErrors.name = "Medicine name is required.";
        if (!form.dosageAmount.trim()) nextErrors.dosageAmount = "Dosage amount is required.";
        if (!form.dosageUnit.trim()) nextErrors.dosageUnit = "Dosage unit is required.";
        if (!form.startDate) nextErrors.startDate = "Start date is required.";
        if (form.times.length === 0 || form.times.some((time)=>!time)) {
            nextErrors.times = "Add at least one valid time.";
        }
        if (!form.dosageIntervalHours || Number(form.dosageIntervalHours) <= 0) {
            nextErrors.dosageIntervalHours = "Set a valid interval in hours.";
        }
        if (Number(form.stockTotal) < Number(form.stockQuantity)) {
            nextErrors.stockTotal = "Total stock cannot be less than current stock.";
        }
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };
    const handleSubmit = async ()=>{
        if (!db) return;
        if (!validateForm()) return;
        setIsSubmitting(true);
        const payload = {
            id: form.id ?? `med-${crypto.randomUUID()}`,
            name: form.name.trim(),
            dosageAmount: form.dosageAmount.trim(),
            dosageUnit: form.dosageUnit.trim(),
            times: form.times,
            frequency: form.frequency,
            startDate: form.startDate,
            endDate: form.endDate || undefined,
            notes: form.notes.trim() || undefined,
            lastTakenAt: form.id ? db.medicines.find((med)=>med.id === form.id)?.lastTakenAt : undefined,
            dosageIntervalHours: Number(form.dosageIntervalHours) || 8,
            stockQuantity: Number(form.stockQuantity) || 0,
            stockTotal: Number(form.stockTotal) || Number(form.stockQuantity) || 0,
            lowStockThreshold: Number(form.lowStockThreshold) || 0.25,
            criticalStockThreshold: Number(form.criticalStockThreshold) || 0.1,
            refillReminderDate: form.refillReminderDate || "",
            emailEnabled: form.emailEnabled,
            gracePeriodMinutes: Number(form.gracePeriodMinutes) || 15,
            escalationMinutes: Number(form.escalationMinutes) || 60,
            critical: form.critical,
            color: form.color,
            archived: form.id ? db.medicines.find((med)=>med.id === form.id)?.archived ?? false : false,
            order: form.id ? db.medicines.find((med)=>med.id === form.id)?.order ?? db.medicines.length : db.medicines.length
        };
        let nextDb = form.id ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateMedicine"])(db, payload) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createMedicine"])(db, payload);
        setDb(nextDb);
        setModalOpen(false);
        if (!form.id) {
            const { nextDb: checkedDb, interactions } = await runInteractionCheck(nextDb, payload);
            nextDb = checkedDb;
            setDb(nextDb);
            const hasRisk = interactions.some((item)=>item.severity !== "minor");
            if (hasRisk) {
                setInteractionWarning({
                    medicineId: payload.id,
                    interactions
                });
            } else if (interactions.length) {
                addToast({
                    type: "info",
                    message: "Minor interactions detected. Monitor as needed."
                });
            }
        }
        setIsSubmitting(false);
        addToast({
            type: "success",
            message: form.id ? "Medicine updated." : "Medicine added."
        });
    };
    const handleFdaSelect = async (name)=>{
        setForm((prev)=>({
                ...prev,
                name
            }));
        setFdaSuggestions([]);
        if (fdaDetailsMap[name]) return;
        setFdaLoading(true);
        const details = await fetchFdaDetails(name);
        if (details) {
            setFdaDetailsMap((prev)=>({
                    ...prev,
                    [name]: details
                }));
        }
        setFdaLoading(false);
    };
    const handleArchive = (id)=>{
        if (!db) return;
        setDb((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["archiveMedicine"])(db, id));
        addToast({
            type: "success",
            message: "Medicine archived."
        });
    };
    const handleDelete = (id)=>{
        if (!db) return;
        if (!window.confirm("Delete this medicine? This action cannot be undone.")) return;
        setDb((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteMedicine"])(db, id));
        addToast({
            type: "success",
            message: "Medicine deleted."
        });
    };
    const handleBulkDelete = ()=>{
        if (!db) return;
        if (!selectedIds.length) return;
        if (!window.confirm("Delete selected medicines? This action cannot be undone.")) return;
        setDb((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["bulkDelete"])(db, selectedIds));
        setSelectedIds([]);
        addToast({
            type: "success",
            message: "Selected medicines deleted."
        });
    };
    const toggleSelection = (id)=>{
        setSelectedIds((prev)=>prev.includes(id) ? prev.filter((item)=>item !== id) : [
                ...prev,
                id
            ]);
    };
    const handleHistoryUpdate = (medicineId, timeTaken, status)=>{
        if (!db) return;
        const medicine = db.medicines.find((med)=>med.id === medicineId);
        if (!medicine) return;
        if (status === "taken") {
            const lastTaken = getLastTakenAt(medicine, db.history);
            if (lastTaken) {
                const nextSafeAt = getNextSafeAt(medicine, db.history);
                if (nextSafeAt && new Date() < nextSafeAt) {
                    setOverdoseWarning({
                        medicineId,
                        timeTaken,
                        lastTakenAt: lastTaken,
                        nextSafeAt
                    });
                    return;
                }
            }
        }
        const entry = {
            id: `hist-${crypto.randomUUID()}`,
            medicineId,
            dateTaken: getToday(),
            timeTaken,
            status
        };
        let nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHistory"])(db, entry);
        if (status === "taken") {
            const updatedMeds = nextDb.medicines.map((med)=>{
                if (med.id !== medicineId) return med;
                const nextStock = Math.max(0, (med.stockQuantity ?? 0) - 1);
                return {
                    ...med,
                    stockQuantity: nextStock,
                    lastTakenAt: new Date().toISOString()
                };
            });
            nextDb = {
                ...nextDb,
                medicines: updatedMeds,
                emailQueue: nextDb.emailQueue.filter((item)=>!(item.medicineId === medicineId && item.scheduledTime === timeTaken && item.status === "pending"))
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(nextDb);
            setDb(nextDb);
        } else {
            setDb(nextDb);
        }
        addToast({
            type: "success",
            message: `Marked as ${status}.`
        });
    };
    const overrideTake = ()=>{
        if (!db || !overdoseWarning) return;
        const { medicineId, timeTaken } = overdoseWarning;
        const entry = {
            id: `hist-${crypto.randomUUID()}`,
            medicineId,
            dateTaken: getToday(),
            timeTaken,
            status: "taken"
        };
        let nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["addHistory"])(db, entry);
        const updatedMeds = nextDb.medicines.map((med)=>{
            if (med.id !== medicineId) return med;
            const nextStock = Math.max(0, (med.stockQuantity ?? 0) - 1);
            return {
                ...med,
                stockQuantity: nextStock,
                lastTakenAt: new Date().toISOString()
            };
        });
        nextDb = {
            ...nextDb,
            medicines: updatedMeds
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(nextDb);
        setDb(nextDb);
        setOverdoseWarning(null);
        addToast({
            type: "error",
            message: "Override used. Contact your doctor if needed."
        });
    };
    const handleInteractionDecision = (keep)=>{
        if (!db || !interactionWarning) return;
        if (!keep) {
            let nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["deleteMedicine"])(db, interactionWarning.medicineId);
            nextDb = {
                ...nextDb,
                interactions: nextDb.interactions.filter((item)=>item.medicineAId !== interactionWarning.medicineId && item.medicineBId !== interactionWarning.medicineId)
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(nextDb);
            setDb(nextDb);
            addToast({
                type: "info",
                message: "Medicine removed due to interaction risk."
            });
        } else {
            addToast({
                type: "error",
                message: "Interaction acknowledged. Consult your doctor."
            });
        }
        setInteractionWarning(null);
    };
    const handleExportJSON = ()=>{
        if (!db) return;
        const blob = new Blob([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportJSON"])(db)
        ], {
            type: "application/json"
        });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = `mediflow-backup-${getToday()}.json`;
        anchor.click();
        URL.revokeObjectURL(url);
    };
    const handleExportCSV = ()=>{
        if (!db) return;
        const blob = new Blob([
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["exportCSV"])(db.history, db.medicines)
        ], {
            type: "text/csv"
        });
        const url = URL.createObjectURL(blob);
        const anchor = document.createElement("a");
        anchor.href = url;
        anchor.download = `mediflow-history-${getToday()}.csv`;
        anchor.click();
        URL.revokeObjectURL(url);
    };
    const handleImport = (event)=>{
        const file = event.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = ()=>{
            try {
                const content = String(reader.result ?? "");
                const nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["importJSON"])(content);
                setDb(nextDb);
                addToast({
                    type: "success",
                    message: "Backup imported successfully."
                });
            } catch  {
                addToast({
                    type: "error",
                    message: "Failed to import backup."
                });
            }
        };
        reader.readAsText(file);
    };
    const handleDragStart = (id)=>{
        setDraggingId(id);
    };
    const handleDrop = (id)=>{
        if (!db || !draggingId || draggingId === id) return;
        const meds = [
            ...db.medicines
        ];
        const fromIndex = meds.findIndex((med)=>med.id === draggingId);
        const toIndex = meds.findIndex((med)=>med.id === id);
        if (fromIndex === -1 || toIndex === -1) return;
        const [moved] = meds.splice(fromIndex, 1);
        meds.splice(toIndex, 0, moved);
        const reordered = meds.map((med, index)=>({
                ...med,
                order: index
            }));
        const nextDb = {
            ...db,
            medicines: reordered
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(nextDb);
        setDb(nextDb);
        setDraggingId(null);
    };
    const activeDb = db ?? {
        medicines: [],
        history: [],
        interactions: [],
        settings: {
            viewMode: "view",
            sortBy: "time",
            filter: "active",
            search: ""
        },
        updatedAt: ""
    };
    const filteredMedicines = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[filteredMedicines]": ()=>{
            const { filter, search, sortBy } = activeDb.settings;
            const today = getToday();
            let meds = [
                ...activeDb.medicines
            ];
            if (filter === "active") meds = meds.filter({
                "DashboardPage.useMemo[filteredMedicines]": (med)=>!med.archived
            }["DashboardPage.useMemo[filteredMedicines]"]);
            if (filter === "archived") meds = meds.filter({
                "DashboardPage.useMemo[filteredMedicines]": (med)=>med.archived
            }["DashboardPage.useMemo[filteredMedicines]"]);
            if (filter === "upcoming") {
                meds = meds.filter({
                    "DashboardPage.useMemo[filteredMedicines]": (med)=>!med.archived && (!med.endDate || med.endDate >= today)
                }["DashboardPage.useMemo[filteredMedicines]"]);
            }
            if (search) {
                meds = meds.filter({
                    "DashboardPage.useMemo[filteredMedicines]": (med)=>med.name.toLowerCase().includes(search.toLowerCase())
                }["DashboardPage.useMemo[filteredMedicines]"]);
            }
            if (sortBy === "name") meds.sort({
                "DashboardPage.useMemo[filteredMedicines]": (a, b)=>a.name.localeCompare(b.name)
            }["DashboardPage.useMemo[filteredMedicines]"]);
            if (sortBy === "dosage") {
                meds.sort({
                    "DashboardPage.useMemo[filteredMedicines]": (a, b)=>a.dosageAmount.localeCompare(b.dosageAmount)
                }["DashboardPage.useMemo[filteredMedicines]"]);
            }
            if (sortBy === "time") {
                meds.sort({
                    "DashboardPage.useMemo[filteredMedicines]": (a, b)=>(a.times[0] ?? "").localeCompare(b.times[0] ?? "")
                }["DashboardPage.useMemo[filteredMedicines]"]);
            }
            return meds;
        }
    }["DashboardPage.useMemo[filteredMedicines]"], [
        activeDb.medicines,
        activeDb.settings
    ]);
    const chartRange = range === "custom" && customRange.start && customRange.end ? Math.max(1, Math.ceil((new Date(customRange.end).getTime() - new Date(customRange.start).getTime()) / (1000 * 60 * 60 * 24)) + 1) : range === "7" ? 7 : range === "30" ? 30 : 90;
    const chartData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[chartData]": ()=>buildAdherenceSeries(chartRange, activeDb.history, activeDb.medicines, selectedMedicineId)
    }["DashboardPage.useMemo[chartData]"], [
        chartRange,
        activeDb.history,
        activeDb.medicines,
        selectedMedicineId
    ]);
    const stats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[stats]": ()=>{
            const active = activeDb.medicines.filter({
                "DashboardPage.useMemo[stats].active": (med)=>!med.archived
            }["DashboardPage.useMemo[stats].active"]);
            const total = active.reduce({
                "DashboardPage.useMemo[stats].total": (acc, med)=>acc + med.times.length
            }["DashboardPage.useMemo[stats].total"], 0);
            const today = getToday();
            const todays = activeDb.history.filter({
                "DashboardPage.useMemo[stats].todays": (entry)=>entry.dateTaken === today
            }["DashboardPage.useMemo[stats].todays"]);
            const taken = todays.filter({
                "DashboardPage.useMemo[stats]": (entry)=>entry.status === "taken"
            }["DashboardPage.useMemo[stats]"]).length;
            const missed = todays.filter({
                "DashboardPage.useMemo[stats]": (entry)=>entry.status === "missed"
            }["DashboardPage.useMemo[stats]"]).length;
            const adherenceRate = total ? Math.round(taken / total * 100) : 0;
            return {
                total,
                taken,
                missed,
                adherenceRate,
                activeCount: active.length
            };
        }
    }["DashboardPage.useMemo[stats]"], [
        activeDb.history,
        activeDb.medicines
    ]);
    const interactionSeverityMap = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[interactionSeverityMap]": ()=>{
            const map = new Map();
            activeDb.interactions.forEach({
                "DashboardPage.useMemo[interactionSeverityMap]": (interaction)=>{
                    const currentA = map.get(interaction.medicineAId);
                    if (!currentA || severityRank[interaction.severity] > severityRank[currentA]) {
                        map.set(interaction.medicineAId, interaction.severity);
                    }
                    const currentB = map.get(interaction.medicineBId);
                    if (!currentB || severityRank[interaction.severity] > severityRank[currentB]) {
                        map.set(interaction.medicineBId, interaction.severity);
                    }
                }
            }["DashboardPage.useMemo[interactionSeverityMap]"]);
            return map;
        }
    }["DashboardPage.useMemo[interactionSeverityMap]"], [
        activeDb.interactions
    ]);
    const upcomingToday = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "DashboardPage.useMemo[upcomingToday]": ()=>{
            const today = getToday();
            return activeDb.medicines.filter({
                "DashboardPage.useMemo[upcomingToday]": (med)=>!med.archived
            }["DashboardPage.useMemo[upcomingToday]"]).flatMap({
                "DashboardPage.useMemo[upcomingToday]": (med)=>med.times.map({
                        "DashboardPage.useMemo[upcomingToday]": (time)=>{
                            const status = activeDb.history.find({
                                "DashboardPage.useMemo[upcomingToday]": (entry)=>entry.medicineId === med.id && entry.dateTaken === today && entry.timeTaken === time
                            }["DashboardPage.useMemo[upcomingToday]"])?.status ?? "upcoming";
                            return {
                                id: `${med.id}-${time}`,
                                medId: med.id,
                                name: med.name,
                                dosage: `${med.dosageAmount} ${med.dosageUnit}`,
                                time,
                                status
                            };
                        }
                    }["DashboardPage.useMemo[upcomingToday]"])
            }["DashboardPage.useMemo[upcomingToday]"]);
        }
    }["DashboardPage.useMemo[upcomingToday]"], [
        activeDb.history,
        activeDb.medicines
    ]);
    if (!db) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-mist dark:bg-slate-950",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-shell flex min-h-screen items-center justify-center",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-card px-6 py-4 text-sm text-subtle",
                    children: "Loading your dashboard..."
                }, void 0, false, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 1176,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 1175,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/app/dashboard/page.tsx",
            lineNumber: 1174,
            columnNumber: 7
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1187,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-ink",
                                            children: "MediFlow"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1189,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-subtle",
                                            children: "Home Dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1190,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1188,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 1186,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white shadow-soft",
                                    onClick: openAddModal,
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                                className: "h-4 w-4"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1199,
                                                columnNumber: 17
                                            }, this),
                                            " Add New Medicine"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1198,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1194,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1202,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft dark:bg-slate-900",
                                    onClick: ()=>setSettingsOpen((prev)=>!prev),
                                    "aria-label": "Dashboard settings",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                        className: "h-4 w-4 text-slate-700 dark:text-slate-100"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1208,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1203,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            className: "flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft dark:bg-slate-900",
                                            onClick: ()=>setMenuOpen((prev)=>!prev),
                                            "aria-label": "User menu",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-sm font-bold",
                                                children: "JS"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1216,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1211,
                                            columnNumber: 15
                                        }, this),
                                        menuOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute right-0 mt-3 w-40 rounded-xl border border-slate-200 bg-white p-2 shadow-soft dark:border-slate-800 dark:bg-slate-900",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                                    href: "/settings",
                                                    className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$settings$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Settings$3e$__["Settings"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1224,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Settings"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1220,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-slate-700 hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                                            className: "h-4 w-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1227,
                                                            columnNumber: 21
                                                        }, this),
                                                        " Logout"
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1226,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1219,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1210,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 1193,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 1185,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 1184,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "section-shell space-y-10 py-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glass-card p-4 text-sm text-subtle",
                        children: "Drug information sourced from openFDA. Always consult a healthcare provider."
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 1237,
                        columnNumber: 9
                    }, this),
                    settingsOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glass-card p-5",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex flex-wrap items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `rounded-full px-4 py-2 text-xs font-semibold ${activeDb.settings.viewMode === "view" ? "bg-ink text-white" : "border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-200"}`,
                                    onClick: ()=>setDb((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSettings"])(activeDb, {
                                            viewMode: "view"
                                        })),
                                    children: "View mode"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1243,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: `rounded-full px-4 py-2 text-xs font-semibold ${activeDb.settings.viewMode === "edit" ? "bg-ink text-white" : "border border-slate-200 text-slate-600 dark:border-slate-700 dark:text-slate-200"}`,
                                    onClick: ()=>setDb((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSettings"])(activeDb, {
                                            viewMode: "edit"
                                        })),
                                    children: "Edit mode"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1253,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-subtle",
                                            children: "Filter"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1264,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: activeDb.settings.filter,
                                            onChange: (event)=>setDb((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSettings"])(activeDb, {
                                                    filter: event.target.value
                                                })),
                                            className: "rounded-full border border-slate-200 bg-white px-3 py-2 text-xs dark:border-slate-700 dark:bg-slate-900",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "active",
                                                    children: "Active"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1272,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "archived",
                                                    children: "Archived"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1273,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "upcoming",
                                                    children: "Upcoming"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1274,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "all",
                                                    children: "All"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1275,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1265,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1263,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-xs text-subtle",
                                            children: "Sort by"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1279,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: activeDb.settings.sortBy,
                                            onChange: (event)=>setDb((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSettings"])(activeDb, {
                                                    sortBy: event.target.value
                                                })),
                                            className: "rounded-full border border-slate-200 bg-white px-3 py-2 text-xs dark:border-slate-700 dark:bg-slate-900",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "time",
                                                    children: "Time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1287,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "name",
                                                    children: "Name"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1288,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "dosage",
                                                    children: "Dosage"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1289,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1280,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1278,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    value: activeDb.settings.search,
                                    onChange: (event)=>setDb((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateSettings"])(activeDb, {
                                            search: event.target.value
                                        })),
                                    placeholder: "Search medicine",
                                    className: "w-48 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs dark:border-slate-700 dark:bg-slate-900"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1292,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleExportJSON,
                                    className: "inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1302,
                                            columnNumber: 17
                                        }, this),
                                        " Export JSON"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1298,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        if (!db) return;
                                        if (!window.confirm("Reset all medicines and history? Settings will be kept.")) return;
                                        const nextDb = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["resetMedicines"])(db, true);
                                        setDb(nextDb);
                                        setSelectedIds([]);
                                        addToast({
                                            type: "success",
                                            message: "Medicines reset to defaults."
                                        });
                                    },
                                    className: "inline-flex items-center gap-2 rounded-full border border-rose-200 px-3 py-2 text-xs text-rose-600",
                                    children: "Reset medicines"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1304,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleExportCSV,
                                    className: "inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1321,
                                            columnNumber: 17
                                        }, this),
                                        " Export CSV"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1317,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>fileInputRef.current?.click(),
                                    className: "inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-200",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$cloud$2d$upload$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__UploadCloud$3e$__["UploadCloud"], {
                                            className: "h-3 w-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1327,
                                            columnNumber: 17
                                        }, this),
                                        " Import Backup"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1323,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: recheckAllInteractions,
                                    disabled: interactionLoading,
                                    className: "inline-flex items-center gap-2 rounded-full border border-slate-200 px-3 py-2 text-xs text-slate-600 disabled:opacity-60 dark:border-slate-700 dark:text-slate-200",
                                    children: interactionLoading ? "Checking..." : "Check Interactions"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1329,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    ref: fileInputRef,
                                    type: "file",
                                    accept: "application/json",
                                    className: "hidden",
                                    onChange: handleImport
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1336,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 1242,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 1241,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid gap-4 md:grid-cols-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: STAT_CARD_STYLE,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-wide text-subtle",
                                        children: "Active Medicines"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1349,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-3xl font-semibold text-ink",
                                        children: stats.activeCount
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1350,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 1348,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: STAT_CARD_STYLE,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-wide text-subtle",
                                        children: "Today Adherence"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1353,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-3xl font-semibold text-ink",
                                        children: [
                                            stats.adherenceRate,
                                            "%"
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1354,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 1352,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: STAT_CARD_STYLE,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-wide text-subtle",
                                        children: "Streak"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1357,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-3xl font-semibold text-ink",
                                        children: "12 days"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1358,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 1356,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: STAT_CARD_STYLE,
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs uppercase tracking-wide text-subtle",
                                        children: "Next Dose"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1361,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-3 text-3xl font-semibold text-ink",
                                        children: getNextDose(activeDb.medicines)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1362,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 1360,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 1347,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "grid gap-6 lg:grid-cols-[2fr,1fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center justify-between gap-4",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                        className: "text-lg font-semibold text-ink",
                                                        children: "Adherence Overview"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1370,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-subtle",
                                                        children: "Track doses taken across your chosen timeframe."
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1371,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1369,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex flex-wrap items-center gap-3",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                        value: selectedMedicineId,
                                                        onChange: (event)=>setSelectedMedicineId(event.target.value),
                                                        className: "rounded-full border border-slate-200 bg-white px-3 py-2 text-xs dark:border-slate-700 dark:bg-slate-900",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                value: "all",
                                                                children: "All medicines"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 1379,
                                                                columnNumber: 19
                                                            }, this),
                                                            activeDb.medicines.map((med)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                                    value: med.id,
                                                                    children: med.name
                                                                }, med.id, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1381,
                                                                    columnNumber: 21
                                                                }, this))
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1374,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2 rounded-full bg-slate-100 p-1 dark:bg-slate-900",
                                                        children: [
                                                            "7",
                                                            "30",
                                                            "90",
                                                            "custom"
                                                        ].map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: `rounded-full px-3 py-1 text-sm ${range === option ? "bg-white shadow-soft dark:bg-slate-800" : "text-slate-500"}`,
                                                                onClick: ()=>setRange(option),
                                                                children: option === "custom" ? "Custom" : `${option} days`
                                                            }, option, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 1388,
                                                                columnNumber: 21
                                                            }, this))
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1386,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1373,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1368,
                                        columnNumber: 13
                                    }, this),
                                    range === "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 flex flex-wrap items-center gap-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: customRange.start,
                                                onChange: (event)=>setCustomRange((prev)=>({
                                                            ...prev,
                                                            start: event.target.value
                                                        })),
                                                className: "rounded-full border border-slate-200 bg-white px-3 py-2 text-xs dark:border-slate-700 dark:bg-slate-900"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1403,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                type: "date",
                                                value: customRange.end,
                                                onChange: (event)=>setCustomRange((prev)=>({
                                                            ...prev,
                                                            end: event.target.value
                                                        })),
                                                className: "rounded-full border border-slate-200 bg-white px-3 py-2 text-xs dark:border-slate-700 dark:bg-slate-900"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1409,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1402,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 h-64",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                                            width: "100%",
                                            height: "100%",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$LineChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LineChart"], {
                                                data: chartData,
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                                        dataKey: "label",
                                                        stroke: "#94a3b8",
                                                        fontSize: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1420,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                                        domain: [
                                                            0,
                                                            100
                                                        ],
                                                        stroke: "#94a3b8",
                                                        fontSize: 12
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1421,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                                        contentStyle: {
                                                            borderRadius: 12,
                                                            borderColor: "#e2e8f0"
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1422,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Line$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                                                        type: "monotone",
                                                        dataKey: "value",
                                                        stroke: "#3b82f6",
                                                        strokeWidth: 3,
                                                        dot: {
                                                            r: 4
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1423,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1419,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1418,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1417,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-6 grid gap-3 sm:grid-cols-3",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl bg-slate-50 p-3 dark:bg-slate-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase text-subtle",
                                                        children: "Total Doses"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1429,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-semibold text-ink",
                                                        children: stats.total
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1430,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1428,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl bg-slate-50 p-3 dark:bg-slate-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase text-subtle",
                                                        children: "Taken"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1433,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-semibold text-ink",
                                                        children: stats.taken
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1434,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1432,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "rounded-xl bg-slate-50 p-3 dark:bg-slate-900",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs uppercase text-subtle",
                                                        children: "Missed"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1437,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-lg font-semibold text-ink",
                                                        children: stats.missed
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1438,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1436,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1427,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 1367,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "glass-card p-6",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-lg font-semibold text-ink",
                                        children: "Upcoming Today"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1444,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-4 space-y-3",
                                        children: [
                                            upcomingToday.map((dose)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "rounded-xl border border-slate-100 bg-white p-4 dark:border-slate-800 dark:bg-slate-900",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-ink",
                                                                            children: dose.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 1450,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-sm text-subtle",
                                                                            children: dose.dosage
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 1451,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1449,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "text-xs text-slate-500",
                                                                    children: dose.time
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1453,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1448,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-3 flex items-center justify-between",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: `inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${dose.status === "taken" ? "bg-green-50 text-green-700" : dose.status === "missed" ? "bg-rose-50 text-rose-700" : dose.status === "skipped" ? "bg-amber-50 text-amber-700" : "bg-blue-50 text-blue-700"}`,
                                                                    children: [
                                                                        dose.status === "taken" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle2$3e$__["CheckCircle2"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 1467,
                                                                            columnNumber: 51
                                                                        }, this),
                                                                        dose.status === "missed" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 1468,
                                                                            columnNumber: 52
                                                                        }, this),
                                                                        dose.status === "upcoming" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 1469,
                                                                            columnNumber: 54
                                                                        }, this),
                                                                        dose.status === "skipped" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                                                            className: "h-3 w-3"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 1470,
                                                                            columnNumber: 53
                                                                        }, this),
                                                                        dose.status
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1456,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center gap-2",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "rounded-full bg-ink px-3 py-1 text-xs font-semibold text-white",
                                                                            onClick: ()=>handleHistoryUpdate(dose.medId, dose.time, "taken"),
                                                                            children: "Mark as Taken"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 1474,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                            className: "rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-200",
                                                                            onClick: ()=>handleHistoryUpdate(dose.medId, dose.time, "skipped"),
                                                                            children: "Skip"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 1480,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1473,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1455,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, dose.id, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1447,
                                                    columnNumber: 17
                                                }, this)),
                                            !upcomingToday.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-subtle",
                                                children: "No doses scheduled today."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1490,
                                                columnNumber: 41
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1445,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 1443,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 1366,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: "glass-card p-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap items-center justify-between gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "text-lg font-semibold text-ink",
                                                children: "Medicines"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1498,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "text-sm text-subtle",
                                                children: "Click a card to edit, or drag to reorder."
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1499,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1497,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2",
                                        children: [
                                            activeDb.settings.viewMode === "edit" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "rounded-full border border-slate-200 px-3 py-1 text-xs text-rose-600 dark:border-slate-700",
                                                onClick: handleBulkDelete,
                                                children: [
                                                    "Bulk delete (",
                                                    selectedIds.length,
                                                    ")"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1503,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                className: "rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600 dark:border-slate-700 dark:text-slate-200",
                                                onClick: openAddModal,
                                                children: "Add medicine"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                lineNumber: 1510,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1501,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 1496,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3",
                                children: [
                                    filteredMedicines.map((med)=>{
                                        const stockPercent = med.stockTotal ? med.stockQuantity / med.stockTotal * 100 : 0;
                                        const isCritical = stockPercent <= med.criticalStockThreshold * 100;
                                        const isLow = !isCritical && stockPercent <= med.lowStockThreshold * 100;
                                        const alertClass = isCritical ? "border-rose-300" : isLow ? "border-amber-300" : "border-slate-100";
                                        const interactionSeverity = interactionSeverityMap.get(med.id);
                                        const daysRemaining = med.times.length ? Math.floor((med.stockQuantity || 0) / med.times.length) : 0;
                                        const runOutDate = daysRemaining > 0 ? new Date(Date.now() + daysRemaining * 24 * 60 * 60 * 1000) : null;
                                        const fdaDetails = fdaDetailsMap[med.name];
                                        const maxDose = getMaxDoseFromText(fdaDetails?.dosageAndAdministration);
                                        const enteredDose = Number(med.dosageAmount);
                                        const exceedsDose = maxDose ? enteredDose > maxDose : false;
                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: `rounded-2xl border ${alertClass} bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-soft dark:border-slate-800 dark:bg-slate-900`,
                                            draggable: activeDb.settings.viewMode === "edit",
                                            onDragStart: ()=>handleDragStart(med.id),
                                            onDragOver: (event)=>event.preventDefault(),
                                            onDrop: ()=>handleDrop(med.id),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center justify-between",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "flex h-9 w-9 items-center justify-center rounded-xl",
                                                                    style: {
                                                                        backgroundColor: `${med.color}22`,
                                                                        color: med.color
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pill$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pill$3e$__["Pill"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                                        lineNumber: 1550,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1549,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "font-semibold text-ink",
                                                                            children: med.name
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 1553,
                                                                            columnNumber: 25
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                                            className: "text-xs text-subtle",
                                                                            children: [
                                                                                med.dosageAmount,
                                                                                " ",
                                                                                med.dosageUnit
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                                            lineNumber: 1554,
                                                                            columnNumber: 25
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1552,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1548,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                activeDb.settings.viewMode === "edit" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                    type: "checkbox",
                                                                    checked: selectedIds.includes(med.id),
                                                                    onChange: ()=>toggleSelection(med.id)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1559,
                                                                    columnNumber: 25
                                                                }, this),
                                                                activeDb.settings.viewMode === "edit" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$grip$2d$vertical$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__GripVertical$3e$__["GripVertical"], {
                                                                    className: "h-4 w-4 text-slate-400"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1566,
                                                                    columnNumber: 25
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                    className: "text-slate-500 hover:text-ink",
                                                                    onClick: ()=>openEditModal(med),
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pencil$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pencil$3e$__["Pencil"], {
                                                                        className: "h-4 w-4"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                                        lineNumber: 1569,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1568,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1557,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1547,
                                                    columnNumber: 19
                                                }, this),
                                                interactionSeverity && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-3 inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: interactionSeverity === "severe" ? "text-rose-700" : interactionSeverity === "moderate" ? "text-amber-700" : "text-emerald-700",
                                                        children: [
                                                            interactionSeverity,
                                                            " interaction"
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1575,
                                                        columnNumber: 21
                                                    }, this)
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1574,
                                                    columnNumber: 19
                                                }, this),
                                                med.critical && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 inline-flex items-center rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold text-rose-700",
                                                    children: "Critical medicine"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1589,
                                                    columnNumber: 19
                                                }, this),
                                                exceedsDose && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-2 rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-xs text-rose-700",
                                                    children: "Entered dose may exceed FDA guidance. Review official dosing instructions."
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1594,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 rounded-xl bg-slate-50 p-3 dark:bg-slate-950",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-xs text-subtle",
                                                            children: "Schedule"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1599,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "text-sm font-medium text-ink",
                                                            children: med.times.join(" • ")
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1600,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-xs text-subtle",
                                                            children: [
                                                                "Frequency: ",
                                                                med.frequency
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1601,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-xs text-subtle",
                                                            children: getCountdownLabel(med, activeDb.history)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1602,
                                                            columnNumber: 21
                                                        }, this),
                                                        med.notes && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-xs text-subtle",
                                                            children: med.notes
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1603,
                                                            columnNumber: 35
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1598,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "flex items-center justify-between text-xs text-subtle",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: "Stock"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1607,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        med.stockQuantity,
                                                                        "/",
                                                                        med.stockTotal
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1608,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1606,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                            className: "mt-2 h-2 w-full rounded-full bg-slate-100",
                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: `h-2 rounded-full ${isCritical ? "bg-rose-500" : isLow ? "bg-amber-400" : "bg-emerald-500"}`,
                                                                style: {
                                                                    width: `${Math.max(4, stockPercent)}%`
                                                                }
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 1611,
                                                                columnNumber: 23
                                                            }, this)
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1610,
                                                            columnNumber: 21
                                                        }, this),
                                                        runOutDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-2 text-xs text-subtle",
                                                            children: [
                                                                "Est. run-out: ",
                                                                runOutDate.toLocaleDateString()
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1617,
                                                            columnNumber: 23
                                                        }, this),
                                                        med.refillReminderDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                            className: "mt-1 text-xs text-subtle",
                                                            children: [
                                                                "Refill on ",
                                                                med.refillReminderDate
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1622,
                                                            columnNumber: 23
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1605,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "mt-4 flex flex-wrap items-center gap-2 text-xs",
                                                    children: [
                                                        !med.archived && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "rounded-full border border-slate-200 px-3 py-1 text-slate-600 dark:border-slate-700 dark:text-slate-200",
                                                            onClick: ()=>handleArchive(med.id),
                                                            children: "Archive"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1627,
                                                            columnNumber: 23
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "rounded-full border border-slate-200 px-3 py-1 text-slate-600 dark:border-slate-700 dark:text-slate-200",
                                                            onClick: async ()=>{
                                                                const details = fdaDetailsMap[med.name] ?? await fetchFdaDetails(med.name);
                                                                if (details) {
                                                                    setFdaDetailsMap((prev)=>({
                                                                            ...prev,
                                                                            [med.name]: details
                                                                        }));
                                                                    setInfoModal(details);
                                                                }
                                                            },
                                                            children: "FDA Info"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1634,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "rounded-full border border-slate-200 px-3 py-1 text-slate-600 dark:border-slate-700 dark:text-slate-200",
                                                            onClick: ()=>{
                                                                if (!db) return;
                                                                const updated = db.medicines.map((item)=>item.id === med.id ? {
                                                                        ...item,
                                                                        stockQuantity: item.stockTotal
                                                                    } : item);
                                                                const nextDb = {
                                                                    ...db,
                                                                    medicines: updated
                                                                };
                                                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveDB"])(nextDb);
                                                                setDb(nextDb);
                                                                addToast({
                                                                    type: "success",
                                                                    message: "Stock refilled."
                                                                });
                                                            },
                                                            children: "Refill"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1646,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                            className: "rounded-full border border-rose-200 px-3 py-1 text-rose-600",
                                                            onClick: ()=>handleDelete(med.id),
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                                    className: "mr-1 inline h-3 w-3"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                                    lineNumber: 1665,
                                                                    columnNumber: 23
                                                                }, this),
                                                                " Delete"
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1661,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1625,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, med.id, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1539,
                                            columnNumber: 17
                                        }, this);
                                    }),
                                    !filteredMedicines.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "rounded-2xl border border-dashed border-slate-200 p-6 text-center text-sm text-subtle",
                                        children: "No medicines found. Add your first medicine to get started."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                        lineNumber: 1672,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/dashboard/page.tsx",
                                lineNumber: 1518,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 1495,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 1236,
                columnNumber: 7
            }, this),
            modalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/50 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-card w-full max-w-2xl max-h-[85vh] overflow-y-auto p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-ink",
                                    children: form.id ? "Edit Medicine" : "Add Medicine"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1684,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setModalOpen(false),
                                    className: "text-sm text-slate-500",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1685,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 1683,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 grid gap-4 md:grid-cols-2",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Medicine Name"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1691,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            value: form.name,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        name: event.target.value
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm",
                                            placeholder: "Metformin"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1692,
                                            columnNumber: 17
                                        }, this),
                                        fdaLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-subtle",
                                            children: "Searching FDA database..."
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1698,
                                            columnNumber: 32
                                        }, this),
                                        fdaSuggestions.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 max-h-40 overflow-y-auto rounded-xl border border-slate-200 bg-white text-sm shadow-soft",
                                            children: fdaSuggestions.map((suggestion)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    onClick: ()=>handleFdaSelect(suggestion),
                                                    className: "block w-full px-4 py-2 text-left hover:bg-slate-50",
                                                    children: suggestion
                                                }, suggestion, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1702,
                                                    columnNumber: 23
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1700,
                                            columnNumber: 19
                                        }, this),
                                        errors.name && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-rose-600",
                                            children: errors.name
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1713,
                                            columnNumber: 33
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1690,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Dosage"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1716,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex gap-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    value: form.dosageAmount,
                                                    onChange: (event)=>setForm((prev)=>({
                                                                ...prev,
                                                                dosageAmount: event.target.value
                                                            })),
                                                    className: "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm",
                                                    placeholder: "500"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1718,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                    value: form.dosageUnit,
                                                    onChange: (event)=>setForm((prev)=>({
                                                                ...prev,
                                                                dosageUnit: event.target.value
                                                            })),
                                                    className: "rounded-xl border border-slate-200 px-4 py-3 text-sm",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "mg",
                                                            children: "mg"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1729,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "ml",
                                                            children: "ml"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1730,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "tablets",
                                                            children: "tablets"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1731,
                                                            columnNumber: 21
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                            value: "capsules",
                                                            children: "capsules"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                                            lineNumber: 1732,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1724,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1717,
                                            columnNumber: 17
                                        }, this),
                                        errors.dosageAmount && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-rose-600",
                                            children: errors.dosageAmount
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1735,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1715,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Dose Interval (hours)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1738,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 1,
                                            value: form.dosageIntervalHours,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        dosageIntervalHours: Number(event.target.value)
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm",
                                            placeholder: "8"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1739,
                                            columnNumber: 17
                                        }, this),
                                        errors.dosageIntervalHours && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-rose-600",
                                            children: errors.dosageIntervalHours
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1748,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1737,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Time slots"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1752,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 space-y-2",
                                            children: [
                                                form.times.map((time, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "flex items-center gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                                type: "time",
                                                                value: time,
                                                                onChange: (event)=>{
                                                                    const next = [
                                                                        ...form.times
                                                                    ];
                                                                    next[index] = event.target.value;
                                                                    setForm((prev)=>({
                                                                            ...prev,
                                                                            times: next
                                                                        }));
                                                                },
                                                                className: "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 1756,
                                                                columnNumber: 23
                                                            }, this),
                                                            form.times.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                                className: "rounded-full border border-slate-200 px-3 py-2 text-xs text-slate-500",
                                                                onClick: ()=>setForm((prev)=>({
                                                                            ...prev,
                                                                            times: prev.times.filter((_, itemIndex)=>itemIndex !== index)
                                                                        })),
                                                                children: "Remove"
                                                            }, void 0, false, {
                                                                fileName: "[project]/src/app/dashboard/page.tsx",
                                                                lineNumber: 1767,
                                                                columnNumber: 25
                                                            }, this)
                                                        ]
                                                    }, `${time}-${index}`, true, {
                                                        fileName: "[project]/src/app/dashboard/page.tsx",
                                                        lineNumber: 1755,
                                                        columnNumber: 21
                                                    }, this)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    className: "rounded-full border border-slate-200 px-3 py-2 text-xs text-slate-600",
                                                    onClick: ()=>setForm((prev)=>({
                                                                ...prev,
                                                                times: [
                                                                    ...prev.times,
                                                                    "12:00"
                                                                ]
                                                            })),
                                                    children: "Add time"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1781,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1753,
                                            columnNumber: 17
                                        }, this),
                                        errors.times && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-rose-600",
                                            children: errors.times
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1788,
                                            columnNumber: 34
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1751,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Frequency"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1791,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: form.frequency,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        frequency: event.target.value
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Daily",
                                                    children: "Daily"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1797,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Every other day",
                                                    children: "Every other day"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1798,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Weekly",
                                                    children: "Weekly"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1799,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "Custom",
                                                    children: "Custom"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1800,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1792,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1790,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Start Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1804,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: form.startDate,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        startDate: event.target.value
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1805,
                                            columnNumber: 17
                                        }, this),
                                        errors.startDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-rose-600",
                                            children: errors.startDate
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1811,
                                            columnNumber: 38
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1803,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "End Date (optional)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1814,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: form.endDate,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        endDate: event.target.value
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1815,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1813,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Current Stock"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1823,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 0,
                                            value: form.stockQuantity,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        stockQuantity: Number(event.target.value)
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm",
                                            placeholder: "30"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1824,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1822,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Total Stock"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1834,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 0,
                                            value: form.stockTotal,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        stockTotal: Number(event.target.value)
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm",
                                            placeholder: "30"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1835,
                                            columnNumber: 17
                                        }, this),
                                        errors.stockTotal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-xs text-rose-600",
                                            children: errors.stockTotal
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1843,
                                            columnNumber: 39
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1833,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Low Stock Threshold (%)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1846,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 1,
                                            max: 100,
                                            value: Math.round(form.lowStockThreshold * 100),
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        lowStockThreshold: Number(event.target.value) / 100
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1847,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1845,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Critical Threshold (%)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1859,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 1,
                                            max: 100,
                                            value: Math.round(form.criticalStockThreshold * 100),
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        criticalStockThreshold: Number(event.target.value) / 100
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1860,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1858,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Grace Period (minutes)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1872,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 1,
                                            value: form.gracePeriodMinutes,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        gracePeriodMinutes: Number(event.target.value)
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1873,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1871,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Escalation (minutes)"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1884,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: 1,
                                            value: form.escalationMinutes,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        escalationMinutes: Number(event.target.value)
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1885,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1883,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: form.emailEnabled,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        emailEnabled: event.target.checked
                                                    })),
                                            className: "h-4 w-4 rounded border-slate-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1896,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-slate-600",
                                            children: "Enable email alerts for this medicine"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1902,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1895,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "checkbox",
                                            checked: form.critical,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        critical: event.target.checked
                                                    })),
                                            className: "h-4 w-4 rounded border-slate-300"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1905,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "text-sm text-slate-600",
                                            children: "Mark as critical medicine"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1911,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1904,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Refill Reminder Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1914,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: form.refillReminderDate,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        refillReminderDate: event.target.value
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1915,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1913,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Notes / Instructions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1923,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: form.notes,
                                            onChange: (event)=>setForm((prev)=>({
                                                        ...prev,
                                                        notes: event.target.value
                                                    })),
                                            className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm",
                                            rows: 3
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1924,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1922,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "md:col-span-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "text-sm font-medium text-ink",
                                            children: "Color tag"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1932,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "mt-2 flex flex-wrap gap-3",
                                            children: COLOR_OPTIONS.map((color)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    type: "button",
                                                    className: `h-9 w-9 rounded-full border-2 ${form.color === color ? "border-ink" : "border-transparent"}`,
                                                    style: {
                                                        backgroundColor: color
                                                    },
                                                    onClick: ()=>setForm((prev)=>({
                                                                ...prev,
                                                                color
                                                            }))
                                                }, color, false, {
                                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                                    lineNumber: 1935,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 1933,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1931,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 1689,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex items-center justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full border border-slate-200 px-5 py-2 text-sm text-slate-600",
                                    onClick: ()=>setModalOpen(false),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1947,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full border border-slate-200 px-5 py-2 text-sm text-slate-600",
                                    onClick: async ()=>{
                                        const details = await fetchFdaDetails(form.name);
                                        if (details) setInfoModal(details);
                                    },
                                    children: "View FDA Info"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1953,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white",
                                    onClick: handleSubmit,
                                    disabled: isSubmitting,
                                    children: isSubmitting ? "Saving..." : "Save changes"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1962,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 1946,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 1682,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 1681,
                columnNumber: 9
            }, this),
            overdoseWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-rose-900/60 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-card w-full max-w-xl border border-rose-200 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-ink",
                            children: "Overdose Protection"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 1977,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-sm text-subtle",
                            children: [
                                "You took this medicine ",
                                formatDuration(Date.now() - overdoseWarning.lastTakenAt.getTime()),
                                " ago. Taking it again now may cause an overdose."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 1978,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-2 text-sm text-subtle",
                            children: [
                                "Please wait until ",
                                overdoseWarning.nextSafeAt.toLocaleTimeString(),
                                "."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 1982,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex items-center justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full border border-slate-200 px-5 py-2 text-sm text-slate-600",
                                    onClick: ()=>setOverdoseWarning(null),
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1986,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full bg-rose-600 px-5 py-2 text-sm font-semibold text-white",
                                    onClick: overrideTake,
                                    children: "Override (Contact your doctor)"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 1992,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 1985,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 1976,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 1975,
                columnNumber: 9
            }, this),
            interactionWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-card w-full max-w-2xl border border-amber-200 p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-ink",
                            children: "Drug Interaction Alert"
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 2006,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "mt-3 text-sm text-subtle",
                            children: "Potential interactions were found with your current medicines. Please review before continuing."
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 2007,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 space-y-3",
                            children: interactionWarning.interactions.map((interaction)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-slate-200 bg-white p-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide text-subtle",
                                            children: [
                                                interaction.severity,
                                                " interaction"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2013,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2 text-sm text-slate-700",
                                            children: interaction.description
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2016,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, interaction.id, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2012,
                                    columnNumber: 17
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 2010,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 flex items-center justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full border border-slate-200 px-5 py-2 text-sm text-slate-600",
                                    onClick: ()=>handleInteractionDecision(false),
                                    children: "Remove Medicine"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2021,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "rounded-full bg-amber-600 px-5 py-2 text-sm font-semibold text-white",
                                    onClick: ()=>handleInteractionDecision(true),
                                    children: "Acknowledge & Keep"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2027,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 2020,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 2005,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 2004,
                columnNumber: 9
            }, this),
            infoModal && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "glass-card w-full max-w-3xl max-h-[85vh] overflow-y-auto p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-semibold text-ink",
                                    children: "Medicine Information"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2042,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setInfoModal(null),
                                    className: "text-sm text-slate-500",
                                    children: "Close"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2043,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 2041,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-4 space-y-4 text-sm text-slate-700",
                            children: [
                                infoModal.boxedWarning && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "rounded-xl border border-rose-200 bg-rose-50 p-4 text-rose-800",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs font-semibold uppercase tracking-wide",
                                            children: "Black Box Warning"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2050,
                                            columnNumber: 19
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "mt-2",
                                            children: infoModal.boxedWarning
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2051,
                                            columnNumber: 19
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2049,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide text-subtle",
                                            children: "Active Ingredients"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2055,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: infoModal.activeIngredients.join(", ") || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2056,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2054,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide text-subtle",
                                            children: "Brand Names"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2059,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: infoModal.brandNames.join(", ") || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2060,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2058,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide text-subtle",
                                            children: "Generic Names"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2063,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: infoModal.genericNames.join(", ") || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2064,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2062,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide text-subtle",
                                            children: "Manufacturer"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2067,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: infoModal.manufacturer.join(", ") || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2068,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2066,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide text-subtle",
                                            children: "Indications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2071,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: infoModal.indications || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2072,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2070,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide text-subtle",
                                            children: "Dosage & Administration"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2075,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: infoModal.dosageAndAdministration || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2076,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2074,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide text-subtle",
                                            children: "Warnings"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2079,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: infoModal.warnings || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2080,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2078,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide text-subtle",
                                            children: "Adverse Reactions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2083,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: infoModal.adverseReactions || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2084,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2082,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide text-subtle",
                                            children: "Drug Interactions"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2087,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: infoModal.drugInteractions || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2088,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2086,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide text-subtle",
                                            children: "Contraindications"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2091,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: infoModal.contraindications || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2092,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2090,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs uppercase tracking-wide text-subtle",
                                            children: "Storage & Handling"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2095,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: infoModal.storage || "Not provided"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/dashboard/page.tsx",
                                            lineNumber: 2096,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/dashboard/page.tsx",
                                    lineNumber: 2094,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/dashboard/page.tsx",
                            lineNumber: 2047,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/dashboard/page.tsx",
                    lineNumber: 2040,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 2039,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed right-6 top-24 z-50 space-y-2",
                children: toasts.map((toast)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `rounded-xl px-4 py-3 text-sm text-white shadow-soft ${toast.type === "success" ? "bg-emerald-500" : toast.type === "error" ? "bg-rose-500" : "bg-slate-700"}`,
                        children: toast.message
                    }, toast.id, false, {
                        fileName: "[project]/src/app/dashboard/page.tsx",
                        lineNumber: 2105,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/dashboard/page.tsx",
                lineNumber: 2103,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/dashboard/page.tsx",
        lineNumber: 1183,
        columnNumber: 5
    }, this);
}
_s(DashboardPage, "MvFNZe6yzzHXFYlt7jdczSyvSpE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = DashboardPage;
var _c;
__turbopack_context__.k.register(_c, "DashboardPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_d05b83b4._.js.map