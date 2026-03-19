(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
"[project]/src/components/signup-form.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignupForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chrome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chrome$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chrome.js [app-client] (ecmascript) <export default as Chrome>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye.js [app-client] (ecmascript) <export default as Eye>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/eye-off.js [app-client] (ecmascript) <export default as EyeOff>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/mediflow-db.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/auth.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
const initialState = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    notificationEmail: "",
    extraEmails: [],
    enableEmailReminders: true
};
function SignupForm() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(initialState);
    const [showPassword, setShowPassword] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showConfirm, setShowConfirm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [isSubmitting, setIsSubmitting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [extraEmailInput, setExtraEmailInput] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const isValidEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "SignupForm.useMemo[isValidEmail]": ()=>{
            if (!form.email) return true;
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email);
        }
    }["SignupForm.useMemo[isValidEmail]"], [
        form.email
    ]);
    const validate = ()=>{
        const nextErrors = {};
        if (!form.fullName.trim()) nextErrors.fullName = "Full name is required.";
        if (!form.email.trim()) nextErrors.email = "Email is required.";
        if (form.email && !isValidEmail) nextErrors.email = "Enter a valid email address.";
        if (form.notificationEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.notificationEmail)) {
            nextErrors.notificationEmail = "Enter a valid notification email.";
        }
        if (!form.password) nextErrors.password = "Password is required.";
        if (form.password && form.password.length < 8) nextErrors.password = "Password must be at least 8 characters.";
        if (!form.confirmPassword) nextErrors.confirmPassword = "Confirm your password.";
        if (form.password && form.confirmPassword && form.password !== form.confirmPassword) {
            nextErrors.confirmPassword = "Passwords do not match.";
        }
        setErrors(nextErrors);
        return Object.keys(nextErrors).length === 0;
    };
    const handleChange = (field, value)=>{
        setForm((prev)=>({
                ...prev,
                [field]: value
            }));
    };
    const handleSubmit = (event)=>{
        event.preventDefault();
        if (!validate()) return;
        setIsSubmitting(true);
        const payload = {
            fullName: form.fullName.trim(),
            email: form.email.trim().toLowerCase(),
            notificationEmail: form.notificationEmail.trim().toLowerCase(),
            notificationEmails: [
                form.notificationEmail.trim().toLowerCase(),
                ...form.extraEmails.map((item)=>item.toLowerCase())
            ].filter(Boolean),
            emailRemindersEnabled: form.enableEmailReminders,
            createdAt: new Date().toISOString()
        };
        const storedUser = {
            id: `user-${crypto.randomUUID()}`,
            fullName: payload.fullName,
            email: payload.email,
            passwordHash: (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hashPassword"])(form.password),
            createdAt: payload.createdAt
        };
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveUser"])(storedUser);
        window.localStorage.setItem("mediflow_user", JSON.stringify(payload));
        window.localStorage.setItem("mediflow_authenticated", "true");
        const db = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["loadDB"])();
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$mediflow$2d$db$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["updateUserProfile"])(db, {
            fullName: payload.fullName,
            email: payload.email,
            notificationEmails: payload.notificationEmails,
            caregiverEmails: form.extraEmails.map((item)=>item.toLowerCase()),
            emailNotificationsEnabled: payload.emailRemindersEnabled
        });
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createSession"])(storedUser, true);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$auth$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["setFlash"])(`Welcome to MediFlow, ${payload.fullName}!`);
        router.push("/dashboard");
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-card p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap items-center justify-between gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold uppercase tracking-[0.3em] text-slate-500",
                                children: "Sign Up"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "mt-3 text-3xl font-semibold text-ink",
                                children: "Create your MediFlow account"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 110,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-3 text-sm text-subtle",
                                children: "Get personalized reminders, adherence insights, and family profiles in minutes."
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 111,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/signup-form.tsx",
                        lineNumber: 108,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        className: "inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chrome$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Chrome$3e$__["Chrome"], {
                                className: "h-4 w-4 text-ink"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 119,
                                columnNumber: 11
                            }, this),
                            "Google Sign-Up"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/signup-form.tsx",
                        lineNumber: 115,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/signup-form.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "mt-8 space-y-4",
                onSubmit: handleSubmit,
                noValidate: true,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-medium text-ink",
                                children: "Full Name"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 126,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "text",
                                value: form.fullName,
                                onChange: (event)=>handleChange("fullName", event.target.value),
                                placeholder: "Jordan Smith",
                                className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 127,
                                columnNumber: 11
                            }, this),
                            errors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-rose-600",
                                children: errors.fullName
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 134,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/signup-form.tsx",
                        lineNumber: 125,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-medium text-ink",
                                children: "Email"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 138,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                value: form.email,
                                onChange: (event)=>handleChange("email", event.target.value),
                                placeholder: "you@mediflow.com",
                                className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-rose-600",
                                children: errors.email
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 146,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/signup-form.tsx",
                        lineNumber: 137,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-medium text-ink",
                                children: "Notification Email"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 150,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "email",
                                value: form.notificationEmail,
                                onChange: (event)=>handleChange("notificationEmail", event.target.value),
                                placeholder: "alerts@mediflow.com",
                                className: "mt-2 w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 151,
                                columnNumber: 11
                            }, this),
                            errors.notificationEmail && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-rose-600",
                                children: errors.notificationEmail
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 159,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-subtle",
                                children: "This can be different from your login email."
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 161,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/signup-form.tsx",
                        lineNumber: 149,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-medium text-ink",
                                children: "Additional Emails (Caregivers)"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 167,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex gap-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        value: extraEmailInput,
                                        onChange: (event)=>setExtraEmailInput(event.target.value),
                                        placeholder: "caregiver@example.com",
                                        className: "w-full rounded-xl border border-slate-200 px-4 py-3 text-sm"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/signup-form.tsx",
                                        lineNumber: 169,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            if (!extraEmailInput.trim()) return;
                                            setForm((prev)=>({
                                                    ...prev,
                                                    extraEmails: [
                                                        ...prev.extraEmails,
                                                        extraEmailInput.trim()
                                                    ]
                                                }));
                                            setExtraEmailInput("");
                                        },
                                        className: "rounded-xl border border-slate-200 px-4 py-3 text-sm",
                                        children: "Add"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/signup-form.tsx",
                                        lineNumber: 176,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 168,
                                columnNumber: 11
                            }, this),
                            form.extraEmails.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-3 flex flex-wrap gap-2",
                                children: form.extraEmails.map((email)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setForm((prev)=>({
                                                    ...prev,
                                                    extraEmails: prev.extraEmails.filter((item)=>item !== email)
                                                })),
                                        className: "rounded-full border border-slate-200 px-3 py-1 text-xs text-slate-600",
                                        children: [
                                            email,
                                            " ×"
                                        ]
                                    }, email, true, {
                                        fileName: "[project]/src/components/signup-form.tsx",
                                        lineNumber: 194,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 192,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/signup-form.tsx",
                        lineNumber: 166,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        className: "flex items-center gap-2 text-sm text-slate-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                type: "checkbox",
                                checked: form.enableEmailReminders,
                                onChange: (event)=>handleChange("enableEmailReminders", event.target.checked),
                                className: "h-4 w-4 rounded border-slate-300"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            "Send me email reminders"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/signup-form.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-medium text-ink",
                                children: "Password"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 223,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-center rounded-xl border border-slate-200 px-3 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: showPassword ? "text" : "password",
                                        value: form.password,
                                        onChange: (event)=>handleChange("password", event.target.value),
                                        placeholder: "********",
                                        className: "w-full border-none bg-transparent text-sm outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/signup-form.tsx",
                                        lineNumber: 225,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowPassword((prev)=>!prev),
                                        "aria-label": "Toggle password visibility",
                                        className: "text-slate-400",
                                        children: showPassword ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/signup-form.tsx",
                                            lineNumber: 238,
                                            columnNumber: 31
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/signup-form.tsx",
                                            lineNumber: 238,
                                            columnNumber: 64
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/signup-form.tsx",
                                        lineNumber: 232,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 224,
                                columnNumber: 11
                            }, this),
                            errors.password && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-rose-600",
                                children: errors.password
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 241,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/signup-form.tsx",
                        lineNumber: 222,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "text-sm font-medium text-ink",
                                children: "Confirm Password"
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 245,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-2 flex items-center rounded-xl border border-slate-200 px-3 py-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: showConfirm ? "text" : "password",
                                        value: form.confirmPassword,
                                        onChange: (event)=>handleChange("confirmPassword", event.target.value),
                                        placeholder: "********",
                                        className: "w-full border-none bg-transparent text-sm outline-none"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/signup-form.tsx",
                                        lineNumber: 247,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setShowConfirm((prev)=>!prev),
                                        "aria-label": "Toggle confirm password visibility",
                                        className: "text-slate-400",
                                        children: showConfirm ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2d$off$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__EyeOff$3e$__["EyeOff"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/signup-form.tsx",
                                            lineNumber: 260,
                                            columnNumber: 30
                                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$eye$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Eye$3e$__["Eye"], {
                                            className: "h-4 w-4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/signup-form.tsx",
                                            lineNumber: 260,
                                            columnNumber: 63
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/signup-form.tsx",
                                        lineNumber: 254,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 246,
                                columnNumber: 11
                            }, this),
                            errors.confirmPassword && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "mt-2 text-xs text-rose-600",
                                children: errors.confirmPassword
                            }, void 0, false, {
                                fileName: "[project]/src/components/signup-form.tsx",
                                lineNumber: 264,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/signup-form.tsx",
                        lineNumber: 244,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "mt-2 w-full rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white disabled:opacity-70",
                        children: isSubmitting ? "Creating Account..." : "Create Account"
                    }, void 0, false, {
                        fileName: "[project]/src/components/signup-form.tsx",
                        lineNumber: 268,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/signup-form.tsx",
                lineNumber: 124,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/signup-form.tsx",
        lineNumber: 106,
        columnNumber: 5
    }, this);
}
_s(SignupForm, "Xnjjt03u87sJoiV1PEB31Vz6nMA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = SignupForm;
var _c;
__turbopack_context__.k.register(_c, "SignupForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
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
"[project]/src/app/signup/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SignupPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$signup$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/signup-form.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/theme-toggle.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
function SignupPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "min-h-screen bg-mist dark:bg-slate-950",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "sticky top-0 z-40 border-b border-white/40 bg-white/80 backdrop-blur",
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
                                    fileName: "[project]/src/app/signup/page.tsx",
                                    lineNumber: 14,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-sm font-semibold text-ink",
                                            children: "MediFlow"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/signup/page.tsx",
                                            lineNumber: 16,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            className: "text-xs text-subtle",
                                            children: "Account setup"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/signup/page.tsx",
                                            lineNumber: 17,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/signup/page.tsx",
                                    lineNumber: 15,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/signup/page.tsx",
                            lineNumber: 13,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$theme$2d$toggle$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/signup/page.tsx",
                                    lineNumber: 21,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "/#auth",
                                    className: "text-sm font-semibold text-ink",
                                    children: "Back to Sign In"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/signup/page.tsx",
                                    lineNumber: 22,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/signup/page.tsx",
                            lineNumber: 20,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/signup/page.tsx",
                    lineNumber: 12,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/signup/page.tsx",
                lineNumber: 11,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "relative overflow-hidden bg-gradient-to-br from-white via-[#e7f2f5] to-[#d7eef7] py-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "section-shell grid items-center gap-10 lg:grid-cols-[1.1fr,0.9fr]",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    y: 20
                                },
                                animate: {
                                    opacity: 1,
                                    y: 0
                                },
                                transition: {
                                    duration: 0.6
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm font-semibold uppercase tracking-[0.3em] text-slate-500",
                                        children: "MediFlow"
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/signup/page.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "mt-4 text-4xl font-semibold text-ink",
                                        style: {
                                            fontFamily: "var(--font-fraunces)"
                                        },
                                        children: "Build your personalized care plan in minutes."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/signup/page.tsx",
                                        lineNumber: 37,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "mt-4 text-subtle",
                                        children: "Join thousands of patients and caregivers who keep every dose on time with MediFlow."
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/signup/page.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "mt-8 grid gap-4 sm:grid-cols-2",
                                        children: [
                                            "Smart reminders",
                                            "Family profiles",
                                            "Refill alerts",
                                            "Provider reports"
                                        ].map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "glass-card px-4 py-3 text-sm font-semibold text-ink",
                                                children: item
                                            }, item, false, {
                                                fileName: "[project]/src/app/signup/page.tsx",
                                                lineNumber: 45,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/signup/page.tsx",
                                        lineNumber: 43,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/signup/page.tsx",
                                lineNumber: 31,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                initial: {
                                    opacity: 0,
                                    scale: 0.96
                                },
                                animate: {
                                    opacity: 1,
                                    scale: 1
                                },
                                transition: {
                                    duration: 0.6,
                                    delay: 0.1
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$signup$2d$form$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                    fileName: "[project]/src/app/signup/page.tsx",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/app/signup/page.tsx",
                                lineNumber: 52,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/signup/page.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute -left-24 top-24 h-40 w-40 rounded-full bg-sky/30 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/signup/page.tsx",
                        lineNumber: 60,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "pointer-events-none absolute -right-20 bottom-10 h-40 w-40 rounded-full bg-emerald-200/60 blur-3xl"
                    }, void 0, false, {
                        fileName: "[project]/src/app/signup/page.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/signup/page.tsx",
                lineNumber: 29,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/signup/page.tsx",
        lineNumber: 10,
        columnNumber: 5
    }, this);
}
_c = SignupPage;
var _c;
__turbopack_context__.k.register(_c, "SignupPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_336bfbb4._.js.map