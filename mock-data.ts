export type DoseStatus = "upcoming" | "taken" | "missed";

export type Medicine = {
  id: string;
  name: string;
  dosage: string;
  schedule: string[];
  nextDose: string;
  dailyDoses: number;
  statuses: DoseStatus[];
  history: { date: string; status: DoseStatus }[];
};

export const defaultMedicines: Medicine[] = [
  {
    id: "med-1",
    name: "Atorvastatin",
    dosage: "10mg � 1 tablet",
    schedule: ["8:00 AM", "8:00 PM"],
    nextDose: "8:00 PM",
    dailyDoses: 2,
    statuses: ["taken", "upcoming"],
    history: [
      { date: "Mon", status: "taken" },
      { date: "Tue", status: "taken" },
      { date: "Wed", status: "taken" }
    ]
  },
  {
    id: "med-2",
    name: "Metformin",
    dosage: "500mg � 1 tablet",
    schedule: ["7:30 AM", "7:30 PM"],
    nextDose: "7:30 PM",
    dailyDoses: 2,
    statuses: ["missed", "upcoming"],
    history: [
      { date: "Mon", status: "taken" },
      { date: "Tue", status: "missed" },
      { date: "Wed", status: "taken" }
    ]
  },
  {
    id: "med-3",
    name: "Vitamin D3",
    dosage: "2000 IU � 1 capsule",
    schedule: ["1:00 PM"],
    nextDose: "1:00 PM",
    dailyDoses: 1,
    statuses: ["upcoming"],
    history: [
      { date: "Mon", status: "taken" },
      { date: "Tue", status: "taken" },
      { date: "Wed", status: "taken" }
    ]
  }
];

export const getAdherenceData = (range: "7" | "30") => {
  if (range === "30") {
    return [
      { label: "Week 1", value: 86 },
      { label: "Week 2", value: 92 },
      { label: "Week 3", value: 88 },
      { label: "Week 4", value: 94 }
    ];
  }
  return [
    { label: "Mon", value: 84 },
    { label: "Tue", value: 90 },
    { label: "Wed", value: 88 },
    { label: "Thu", value: 96 },
    { label: "Fri", value: 92 },
    { label: "Sat", value: 86 },
    { label: "Sun", value: 94 }
  ];
};
