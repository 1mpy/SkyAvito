export async function regUser(params) {
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/auth/register`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        password: params.password,
        role: "user",
        email: params.email,
        name: params.name,
        surname: params.surname,
        phone: params.phone,
        city: params.city,
      }),
    }
  );
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function login(params) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      email: params.email,
      password: params.password,
    }),
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  localStorage.setItem("access_token", data.access_token);
  localStorage.setItem("refresh_token", data.refresh_token);
  return data;
}

export async function refresh(params) {
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_token: params.access_token,
      refresh_token: params.refresh_token,
    }),
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}


