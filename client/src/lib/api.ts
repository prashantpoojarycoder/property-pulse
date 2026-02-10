const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

export async function api<T>(
  path: string,
  options: RequestInit = {}
): Promise<T> {
  const token = localStorage.getItem("token");
  const isFormData = options.body instanceof FormData;

  const res = await fetch(`${API_URL}${path}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    credentials: "include",
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "API request failed");
  }

  return res.json();
}

// 🔐 Auth
export async function login(email: string, password: string) {
  return api<{ token: string; user: any }>("/api/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
}

export async function register(data: {
  name: string;
  email: string;
  password: string;
}) {
  return api("/api/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
}

// 🏠 Properties
export async function getProperties(params?: {
  page?: number;
  limit?: number;
  city?: string;
  minPrice?: number;
  maxPrice?: number;
  propertyType?: string;
  commercialType?: string;
  bedrooms?: number;
  search?: string;
}) {
  const qs = new URLSearchParams(params as any).toString();
  return api(`/api/properties?${qs}`);
}

export async function getPropertyById(id: string) {
  return api(`/api/properties/${id}`);
}

export async function createProperty(data: FormData) {
  console.log("Creating property with data:", data);
  return api("/api/properties", {
    method: "POST",
    body: data,   // FormData
  });
}

