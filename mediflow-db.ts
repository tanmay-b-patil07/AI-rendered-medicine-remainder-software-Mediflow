export type Frequency = "Daily" | "Every other day" | "Weekly" | "Custom";

export type Medicine = {
  id: string;
  name: string;
  dosageAmount: string;
  dosageUnit: string;
  times: string[];
  frequency: Frequency;
  startDate: string;
  endDate?: string;
  notes?: string;
  lastTakenAt?: string;
  dosageIntervalHours: number;
  stockQuantity: number;
  stockTotal: number;
  lowStockThreshold: number;
  criticalStockThreshold: number;
  refillReminderDate?: string;
  // pharmacy/prescription fields removed
  instructions?: string[];
  warnings?: string[];
  interactionChecked?: boolean;
  emailEnabled: boolean;
  gracePeriodMinutes: number;
  escalationMinutes: number;
  critical: boolean;
  color: string;
  archived: boolean;
  order: number;
};

export type MedicineHistory = {
  id: string;
  medicineId: string;
  dateTaken: string;
  timeTaken: string;
  status: "taken" | "missed" | "skipped";
};

export type InteractionSeverity = "severe" | "moderate" | "minor";

export type MedicineInteraction = {
  id: string;
  medicineAId: string;
  medicineBId: string;
  severity: InteractionSeverity;
  description: string;
  source: "openfda";
  checkedAt: string;
};

export type EmailQueueItem = {
  id: string;
  medicineId: string;
  scheduledTime: string;
  type: "missed" | "escalation" | "daily" | "weekly" | "snooze";
  status: "pending" | "sent" | "failed";
  recipients: string[];
  subject: string;
  html: string;
  retries: number;
  nextAttemptAt?: string;
  sentAt?: string;
  error?: string;
};

export type EmailLog = {
  id: string;
  queueId: string;
  status: "sent" | "failed";
  sentAt: string;
  recipients: string[];
  subject: string;
  error?: string;
};

export type UserProfile = {
  fullName: string;
  email: string;
  notificationEmails: string[];
  emailNotificationsEnabled: boolean;
  caregiverEmails: string[];
  anonymousSubject: boolean;
  quietHoursStart: string;
  quietHoursEnd: string;
  gracePeriodMinutes: number;
  escalationMinutes: number;
  dailySummaryTime: string;
  weeklySummaryDay: number;
  lastDailySummaryAt?: string;
  lastWeeklySummaryAt?: string;
  emailjsServiceId: string;
  emailjsTemplateId: string;
  emailjsPublicKey: string;
};

export type UserSettings = {
  viewMode: "view" | "edit";
  sortBy: "time" | "name" | "dosage";
  filter: "active" | "archived" | "upcoming" | "all";
  search: string;
  defaultDosageIntervalHours: number;
  defaultLowStockThreshold: number;
  defaultCriticalStockThreshold: number;
  defaultStockTotal: number;
};

export type MediflowDB = {
  medicines: Medicine[];
  history: MedicineHistory[];
  interactions: MedicineInteraction[];
  emailQueue: EmailQueueItem[];
  emailLogs: EmailLog[];
  user: UserProfile;
  settings: UserSettings;
  updatedAt: string;
};

const DB_KEY = "mediflow_db";
const BACKUP_KEY = "mediflow_db_backup";

const defaultDB: MediflowDB = {
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

const sampleMedicines: Medicine[] = [
  {
    id: "med-sample-1",
    name: "Atorvastatin",
    dosageAmount: "10",
    dosageUnit: "mg",
    times: ["08:00", "20:00"],
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
    instructions: ["With Food", "Take with Water"],
    warnings: ["May cause drowsiness"],
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
    times: ["07:30", "19:30"],
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
    instructions: ["After Meals", "Avoid Alcohol"],
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
    times: ["13:00"],
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
    instructions: ["With Food"],
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

const ensureArray = <T>(value: T[] | undefined) => (Array.isArray(value) ? value : []);
const encode = (value: string) => {
  if (typeof window === "undefined") return value;
  try {
    return btoa(value);
  } catch {
    return value;
  }
};

const decode = (value: string) => {
  if (typeof window === "undefined") return value;
  try {
    return atob(value);
  } catch {
    return value;
  }
};

const serializeUser = (user: UserProfile): UserProfile => ({
  ...user,
  email: encode(user.email),
  notificationEmails: user.notificationEmails.map(encode),
  caregiverEmails: user.caregiverEmails.map(encode)
});

const deserializeUser = (user: UserProfile): UserProfile => ({
  ...user,
  email: decode(user.email),
  notificationEmails: user.notificationEmails.map(decode),
  caregiverEmails: user.caregiverEmails.map(decode)
});
const normalizeMedicine = (medicine: Medicine): Medicine => ({
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

export const loadDB = (): MediflowDB => {
  if (typeof window === "undefined") return defaultDB;
  const raw = window.localStorage.getItem(DB_KEY);
  if (!raw) {
    const seeded = { ...defaultDB, medicines: sampleMedicines };
    saveDB(seeded);
    return seeded;
  }
  try {
    const parsed = JSON.parse(raw) as MediflowDB;
    const merged = {
      ...defaultDB,
      ...parsed,
      medicines: ensureArray(parsed.medicines).map(normalizeMedicine),
      history: ensureArray(parsed.history),
      interactions: ensureArray(parsed.interactions),
      emailQueue: ensureArray(parsed.emailQueue),
      emailLogs: ensureArray(parsed.emailLogs),
      user: deserializeUser({ ...defaultDB.user, ...parsed.user }),
      settings: {
        ...defaultDB.settings,
        ...parsed.settings,
        defaultDosageIntervalHours:
          parsed.settings?.defaultDosageIntervalHours ?? defaultDB.settings.defaultDosageIntervalHours,
        defaultLowStockThreshold:
          parsed.settings?.defaultLowStockThreshold ?? defaultDB.settings.defaultLowStockThreshold,
        defaultCriticalStockThreshold:
          parsed.settings?.defaultCriticalStockThreshold ?? defaultDB.settings.defaultCriticalStockThreshold,
        defaultStockTotal:
          parsed.settings?.defaultStockTotal ?? defaultDB.settings.defaultStockTotal
      }
    };
    if (merged.medicines.length === 0) {
      const seeded = { ...merged, medicines: sampleMedicines };
      saveDB(seeded);
      return seeded;
    }
    return merged;
  } catch {
    const seeded = { ...defaultDB, medicines: sampleMedicines };
    saveDB(seeded);
    return seeded;
  }
};

export const saveDB = (db: MediflowDB) => {
  if (typeof window === "undefined") return;
  const payload = { ...db, user: serializeUser(db.user), updatedAt: new Date().toISOString() };
  const serialized = JSON.stringify(payload);
  window.localStorage.setItem(DB_KEY, serialized);
  window.localStorage.setItem(BACKUP_KEY, serialized);
};

export const createMedicine = (db: MediflowDB, medicine: Medicine) => {
  const next = { ...db, medicines: [...db.medicines, medicine] };
  saveDB(next);
  return next;
};

export const updateMedicine = (db: MediflowDB, medicine: Medicine) => {
  const next = {
    ...db,
    medicines: db.medicines.map((item) => (item.id === medicine.id ? medicine : item))
  };
  saveDB(next);
  return next;
};

export const archiveMedicine = (db: MediflowDB, id: string) => {
  const next = {
    ...db,
    medicines: db.medicines.map((item) =>
      item.id === id ? { ...item, archived: true } : item
    )
  };
  saveDB(next);
  return next;
};

export const deleteMedicine = (db: MediflowDB, id: string) => {
  const next = {
    ...db,
    medicines: db.medicines.filter((item) => item.id !== id),
    history: db.history.filter((entry) => entry.medicineId !== id)
  };
  saveDB(next);
  return next;
};

export const bulkDelete = (db: MediflowDB, ids: string[]) => {
  const idSet = new Set(ids);
  const next = {
    ...db,
    medicines: db.medicines.filter((item) => !idSet.has(item.id)),
    history: db.history.filter((entry) => !idSet.has(entry.medicineId))
  };
  saveDB(next);
  return next;
};

export const addHistory = (db: MediflowDB, entry: MedicineHistory) => {
  const next = { ...db, history: [...db.history, entry] };
  saveDB(next);
  return next;
};

export const upsertInteraction = (db: MediflowDB, interaction: MedicineInteraction) => {
  const keyMatch = (item: MedicineInteraction) =>
    (item.medicineAId === interaction.medicineAId && item.medicineBId === interaction.medicineBId) ||
    (item.medicineAId === interaction.medicineBId && item.medicineBId === interaction.medicineAId);
  const existingIndex = db.interactions.findIndex(keyMatch);
  const nextInteractions = [...db.interactions];
  if (existingIndex >= 0) {
    nextInteractions[existingIndex] = interaction;
  } else {
    nextInteractions.push(interaction);
  }
  const next = { ...db, interactions: nextInteractions };
  saveDB(next);
  return next;
};

export const clearInteractions = (db: MediflowDB) => {
  const next = { ...db, interactions: [] };
  saveDB(next);
  return next;
};

export const updateSettings = (db: MediflowDB, settings: Partial<UserSettings>) => {
  const next = { ...db, settings: { ...db.settings, ...settings } };
  saveDB(next);
  return next;
};

export const updateUserProfile = (db: MediflowDB, user: Partial<UserProfile>) => {
  const next = { ...db, user: { ...db.user, ...user } };
  saveDB(next);
  return next;
};

export const enqueueEmail = (db: MediflowDB, item: EmailQueueItem) => {
  const next = { ...db, emailQueue: [...db.emailQueue, item] };
  saveDB(next);
  return next;
};

export const updateEmailQueue = (db: MediflowDB, item: EmailQueueItem) => {
  const next = {
    ...db,
    emailQueue: db.emailQueue.map((entry) => (entry.id === item.id ? item : entry))
  };
  saveDB(next);
  return next;
};

export const addEmailLog = (db: MediflowDB, log: EmailLog) => {
  const next = { ...db, emailLogs: [...db.emailLogs, log] };
  saveDB(next);
  return next;
};

export const resetMedicines = (db: MediflowDB, withSamples = true) => {
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

export const exportJSON = (db: MediflowDB) => {
  return JSON.stringify(db, null, 2);
};

export const importJSON = (raw: string) => {
  const parsed = JSON.parse(raw) as MediflowDB;
  const next: MediflowDB = {
    ...defaultDB,
    ...parsed,
    medicines: ensureArray(parsed.medicines).map(normalizeMedicine),
    history: ensureArray(parsed.history),
    interactions: ensureArray(parsed.interactions),
    emailQueue: ensureArray(parsed.emailQueue),
    emailLogs: ensureArray(parsed.emailLogs),
    user: deserializeUser({ ...defaultDB.user, ...parsed.user }),
    settings: {
      ...defaultDB.settings,
      ...parsed.settings,
      defaultDosageIntervalHours:
        parsed.settings?.defaultDosageIntervalHours ?? defaultDB.settings.defaultDosageIntervalHours,
      defaultLowStockThreshold:
        parsed.settings?.defaultLowStockThreshold ?? defaultDB.settings.defaultLowStockThreshold,
      defaultCriticalStockThreshold:
        parsed.settings?.defaultCriticalStockThreshold ?? defaultDB.settings.defaultCriticalStockThreshold,
      defaultStockTotal:
        parsed.settings?.defaultStockTotal ?? defaultDB.settings.defaultStockTotal
    },
      updatedAt: new Date().toISOString()
    };
  saveDB(next);
  return next;
};

const formatDate = (date: Date) => date.toISOString().slice(0, 10);

export const exportCSV = (history: MedicineHistory[], medicines: Medicine[]) => {
  const medMap = new Map(medicines.map((med) => [med.id, med.name]));
  const header = "medicineId,medicineName,dateTaken,timeTaken,status";
  const rows = history.map((entry) => {
    const name = medMap.get(entry.medicineId) ?? "Unknown";
    return `${entry.medicineId},${name},${entry.dateTaken},${entry.timeTaken},${entry.status}`;
  });
  return [header, ...rows].join("\n");
};

const today = () => formatDate(new Date());

export const ensureMissedForPastTimes = (db: MediflowDB) => {
  const now = new Date();
  const currentDate = today();
  const newEntries: MedicineHistory[] = [];

  db.medicines.forEach((med) => {
    if (med.archived) return;
    med.times.forEach((time) => {
      const [hours, minutes] = time.split(":").map(Number);
      if (Number.isNaN(hours) || Number.isNaN(minutes)) return;
      const scheduled = new Date();
      scheduled.setHours(hours, minutes, 0, 0);
      if (scheduled > now) return;

      const alreadyLogged = db.history.some(
        (entry) =>
          entry.medicineId === med.id &&
          entry.dateTaken === currentDate &&
          entry.timeTaken === time
      );
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
  const next = { ...db, history: [...db.history, ...newEntries] };
  saveDB(next);
  return next;
};
