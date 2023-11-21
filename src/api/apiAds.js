import { isExpired } from "../utils/utils";

export async function newToken() {
  if (sessionStorage.getItem("updatingToken") === "true") return;
  const refreshToken = localStorage.getItem("refresh_token");

  const accessToken = localStorage.getItem("access_token");
  sessionStorage.setItem("updatingToken", "true");
  const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      access_token: accessToken,
      refresh_token: refreshToken,
    }),
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  if (data) {
    if (data.access_token)
      localStorage.setItem("access_token", data.access_token);
    if (data.refresh_token)
      localStorage.setItem("refresh_token", data.refresh_token);
  }
  sessionStorage.setItem("updatingToken", "false");
  return data;
}

export async function getAds(params) {
  let url = new URL("/ads", process.env.REACT_APP_API_URL); //query-параметры
  if (params?.user_id) url.searchParams.append("user_id", params.user_id);
  if (params?.sorting) url.searchParams.append("sorting", "new");
  if (params?.page) url.searchParams.append("page", params.page);

  const response = await fetch(url, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function getAdComments(params, ad_id) {
  let url = new URL(`/ads/${ad_id}/comments`, process.env.REACT_APP_API_URL);
  if (params?.user_id) url.searchParams.append("user_id", params.user_id);
  if (params?.page) url.searchParams.append("page", params.page);

  const response = await fetch(url, {
    method: "GET",
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function newComment(params, ad_id) {
  let accessToken = localStorage.getItem("access_token");
  if (isExpired(accessToken)) {
    await newToken();
    accessToken = localStorage.getItem("access_token");
  }
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/ads/${ad_id}/comments`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        text: params.text,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}



export async function newAd(params) {
  let accessToken = localStorage.getItem("access_token");
  if (isExpired(accessToken)) {
    await newToken();
    accessToken = localStorage.getItem("access_token");
  }
  const response = await fetch(`${process.env.REACT_APP_API_URL}/adstext`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: params.title,
      description: params.description,
      price: params.price,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function getCurrentUserAds(params) {
  let url = new URL("/ads/me", process.env.REACT_APP_API_URL);
  if (params?.sorting) url.searchParams.append("sorting", "new");
  if (params?.page) url.searchParams.append("page", params.page);

  const response = await fetch(url, {
    method: "GET",
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function getUser() {
  let url = new URL(`/user`, process.env.REACT_APP_API_URL);
  let accessToken = localStorage.getItem("access_token");
  if (isExpired(accessToken)) {
    await newToken();
    accessToken = localStorage.getItem("access_token");
  }

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function patchUser(params) {
  let url = new URL(`/user`, process.env.REACT_APP_API_URL);
  let accessToken = localStorage.getItem("access_token");
  if (isExpired(accessToken)) {
    await newToken();
    accessToken = localStorage.getItem("access_token");
  }

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      role: "user",
      name: params.name,
      surname: params.surname,
      phone: params.phone,
      city: params.city,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}

export async function postNewUserPhoto(formData) {
  let accessToken = localStorage.getItem("access_token");
  if (isExpired(accessToken)) {
    await newToken();
    accessToken = localStorage.getItem("access_token");
  }
  const response = await fetch(`${process.env.REACT_APP_API_URL}/user/avatar`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
    body: formData,
  });
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const userPhoto = await response.json();
  return userPhoto;
}

export async function postNewAdPhoto(formData, ad_id) {
  let accessToken = localStorage.getItem("access_token");
  if (isExpired(accessToken)) {
    await newToken();
    accessToken = localStorage.getItem("access_token");
  }
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/ads/${ad_id}/image`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
      body: formData,
    }
  );
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const userPhoto = await response.json();
  return userPhoto;
}

export async function getUserById(id) {
  let url = new URL(`/user/all`, process.env.REACT_APP_API_URL);

  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  const filtered = data?.filter((el) => el.id === Number(id));
  return filtered?.length > 0 ? filtered[0] : null;
  // }
}

export async function delAd(ad_id) {
  let accessToken = localStorage.getItem("access_token");
  if (isExpired(accessToken)) {
    await newToken();
    accessToken = localStorage.getItem("access_token");
  }
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/ads/${ad_id}`,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
}

export async function patchAd(params, ad_id) {
  let url = new URL(`/ads/${ad_id}`, process.env.REACT_APP_API_URL);
  let accessToken = localStorage.getItem("access_token");
  if (isExpired(accessToken)) {
    await newToken();
    accessToken = localStorage.getItem("access_token");
  }

  const response = await fetch(url, {
    method: "PATCH",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: params.title,
      description: params.description,
      price: params.price,
    }),
  });

  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}


export async function delPhoto(ad_id, params) {
  let accessToken = localStorage.getItem("access_token");
  let url = new URL(`/ads/${ad_id}/image`, process.env.REACT_APP_API_URL); 
  if (params?.file_url) url.searchParams.append("file_url", params.file_url);
  if (isExpired(accessToken)) {
    await newToken();
    accessToken = localStorage.getItem("access_token");
  }
  const response = await fetch(
    url,
    {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
}