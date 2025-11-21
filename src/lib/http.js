export const BASE_API_URL = import.meta.env.VITE_BASE_API_URL ?? "";

async function handleResponse(res) {
  const contentType = res.headers.get("content-type") || "";
  const data = contentType.includes("application/json")
    ? await res.json()
    : await res.text();

  if (!res.ok) {
    const error = new Error(data?.message || res.statusText);
    error.status = res.status;
    error.payload = data;
    throw error;
  }

  return data;
}

export async function http(path, { method = "GET", body, ...options } = {}) {
  const token = localStorage.getItem("token");

  const res = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
    body: body ? JSON.stringify(body) : undefined,
    ...options,
  });

  return handleResponse(res);
}
