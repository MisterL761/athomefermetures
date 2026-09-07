export type IconName =
  | "thermometer"
  | "soundwave"
  | "shield"
  | "badge-check"
  | "clock"
  | "leaf"
  | "lock"
  | "ruler"
  | "droplet"
  | "wind"
  | "home"
  | "sun"
  | "sparkle"
  | "phone"
  | "pin"
  | "chevron-down"
  | "arrow-up-right"
  | "plus"
  | "menu"
  | "close"
  | "check"
  | "facebook"
  | "instagram"
  | "star"
  | "wrench"
  | "eye"
  | "download"
  | "cookie"
  | "sliders";

export const ICON_PATHS: Record<Exclude<IconName, "instagram">, string> = {
  thermometer:
    'M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /><circle cx="12" cy="12" r="3.5',
  soundwave: "M3 12h7l2-8 2 16 2-8h5",
  shield: 'M12 3l7 3v5c0 4.5-3 8-7 9-4-1-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4',
  "badge-check": 'M12 21s-7-4.6-7-10a7 7 0 0114 0c0 5.4-7 10-7 10z" /><path d="M9.5 11l2 2 3.5-3.5',
  clock: "M12 7v5l3.5 2M21 12a9 9 0 11-18 0 9 9 0 0118 0",
  leaf: "M5 20c9 0 14-5 14-14V4h-2C8 4 4 9 4 17v3z",
  lock: 'M6 11V8a6 6 0 0112 0v3" /><rect x="4" y="11" width="16" height="10" rx="2',
  ruler: "M4 17.5L17.5 4l2.5 2.5L6.5 20zM8 8l2 2M11 5l2 2M14 13l2 2M11 16l2 2",
  droplet: "M12 3s7 7.5 7 12a7 7 0 11-14 0c0-4.5 7-12 7-12z",
  wind: "M3 8h11a3 3 0 100-6M3 16h15a3 3 0 110 6M3 12h9",
  home: "M4 11l8-7 8 7v9a1 1 0 01-1 1h-4v-6H9v6H5a1 1 0 01-1-1z",
  sun: 'M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M5.6 18.4l2.1-2.1M16.3 7.7l2.1-2.1" /><circle cx="12" cy="12" r="4',
  sparkle: "M12 3l1.8 5.7L19.5 10l-5.7 1.8L12 17.5l-1.8-5.7L4.5 10l5.7-1.3z",
  phone:
    "M20 16.9v2.6a1.8 1.8 0 01-2 1.8 17.6 17.6 0 01-7.6-2.7 17.3 17.3 0 01-5.4-5.4A17.6 17.6 0 012.3 5.6 1.8 1.8 0 014 3.6h2.6a1.8 1.8 0 011.8 1.5c.1.8.3 1.6.5 2.4a1.8 1.8 0 01-.4 1.8L7.4 10.4a14.2 14.2 0 005.3 5.3l1-1.1a1.8 1.8 0 011.8-.4c.8.2 1.6.4 2.4.5a1.8 1.8 0 011.5 1.8z",
  pin: 'M12 21s7-6.4 7-11.5A7 7 0 105 9.5C5 14.6 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.5',
  "chevron-down": "M6 9l6 6 6-6",
  "arrow-up-right": "M7 17L17 7M9 7h8v8",
  plus: "M12 5v14M5 12h14",
  menu: "M4 7h16M4 12h16M4 17h16",
  close: "M6 6l12 12M18 6L6 18",
  check: "M5 13l4 4L19 7",
  facebook: "M13.5 21v-7h2.4l.4-3h-2.8V9.1c0-.9.2-1.5 1.5-1.5h1.4V4.9c-.3 0-1.2-.1-2.2-.1-2.2 0-3.7 1.3-3.7 3.8V11H8v3h2.5v7z",
  wrench: "M14 6a3.5 3.5 0 00-4.7 4.6L4 16v4h4l5.4-5.3A3.5 3.5 0 0018 10l-2 2-2-2 2-2z",
  star: "M12 2.5l2.9 6 6.6.9-4.8 4.6 1.1 6.6L12 17.5l-5.8 3.1 1.1-6.6-4.8-4.6 6.6-.9z",
  eye: 'M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" /><circle cx="12" cy="12" r="3',
  download: "M12 3v12m0 0l-4-4m4 4l4-4M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2",
  cookie:
    'M21 12a9 9 0 11-9-9c0 1.4.9 2.5 2 2.5a2.5 2.5 0 002.5-2.5A9 9 0 0121 12z" /><circle cx="9" cy="10" r="1.1" fill="currentColor" stroke="none" /><circle cx="14.5" cy="13.5" r="1.1" fill="currentColor" stroke="none" /><circle cx="9.5" cy="15.5" r="1.1" fill="currentColor" stroke="none" /><circle cx="15" cy="8.5" r="1.1" fill="currentColor" stroke="none',
  sliders: "M4 6h10m4 0h2M4 12h4m4 0h10M4 18h14m4 0h-2M8 4v4M16 10v4M18 16v4",
};
