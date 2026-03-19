"use client";

import bcrypt from "bcryptjs";

export type StoredUser = {
  id: string;
  fullName: string;
  email: string;
  passwordHash: string;
  createdAt: string;
};

export type Session = {
  isAuthenticated: boolean;
  userId: string;
  email: string;
  loginDate: string;
  token: string;
};

const USER_KEY = "mediflow_auth_user";
const SESSION_KEY = "mediflow_session";
const FLASH_KEY = "mediflow_flash";

export const getStoredUser = (): StoredUser | null => {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as StoredUser;
  } catch {
    return null;
  }
};

export const saveUser = (user: StoredUser) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(USER_KEY, JSON.stringify(user));
};

export const hashPassword = (password: string) => {
  return bcrypt.hashSync(password, 10);
};

export const verifyPassword = (password: string, hash: string) => {
  return bcrypt.compareSync(password, hash);
};

export const createSession = (user: StoredUser, remember: boolean) => {
  if (typeof window === "undefined") return;
  const session: Session = {
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

export const getSession = (): Session | null => {
  if (typeof window === "undefined") return null;
  const raw =
    window.localStorage.getItem(SESSION_KEY) ?? window.sessionStorage.getItem(SESSION_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw) as Session;
  } catch {
    return null;
  }
};

export const clearSession = () => {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(SESSION_KEY);
  window.sessionStorage.removeItem(SESSION_KEY);
};

export const isAuthenticated = () => {
  const session = getSession();
  const user = getStoredUser();
  if (!session || !user) return false;
  return session.userId === user.id && session.email === user.email;
};

export const setFlash = (message: string) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(FLASH_KEY, message);
};

export const popFlash = () => {
  if (typeof window === "undefined") return null;
  const message = window.localStorage.getItem(FLASH_KEY);
  if (message) window.localStorage.removeItem(FLASH_KEY);
  return message;
};
