import api from "./api";

export interface RegisterData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface LoginResponse {
  message: string;
  token?: string;
  refreshToken?: string;
  first_name: string;
  last_name: string;
  email: string;
  id: string;
}

export interface TokenResponse {
  message: string;
  token?: string;
  refreshToken?: string;
}

export const register = async (data: RegisterData): Promise<void> => {
  await api.post("/auth/register", data);
};

export const login = async (data: LoginData): Promise<LoginResponse> => {
  const response = await api.post("/auth/login", data);
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("refreshToken", response.data.refreshToken);
    const user = {
      first_name: response.data.first_name,
      last_name: response.data.last_name,
      email: response.data.email,
      id: response.data.id,
    };
    localStorage.setItem("user", JSON.stringify(user));
  }
  return response.data;
};

export const refresh = async (): Promise<TokenResponse> => {
  const refreshToken = localStorage.getItem("refreshToken");
  const response = await api.post("/auth/refresh", { refreshToken });
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("refreshToken", response.data.refreshToken);
  return response.data.token;
};

export const logout = async (): Promise<void> => {
  await api.post("/auth/logout");
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};

export const deleteProfile = async (userId: string): Promise<void> => {
  await api.delete("/profile/" + userId);
  localStorage.removeItem("token");
  localStorage.removeItem("refreshToken");
};
