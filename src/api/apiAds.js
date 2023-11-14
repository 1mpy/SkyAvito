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

export async function newAd(params) {
  const accessToken = localStorage.getItem("access_token");
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
  if (response.status === 401) {
    if (sessionStorage.getItem("updatedToken") !== "true") {
      await newToken();
      await newAd(params);
    }
  } else {
    sessionStorage.setItem("updatedToken", "false");
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const data = await response.json();
    return data;
  }
}

export async function newComment(params, ad_id) {
  const accessToken = localStorage.getItem("access_token");
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
  if (response.status === 401) {
    if (sessionStorage.getItem("updatedToken") !== "true") {
      await newToken();
      await newComment(params, ad_id);
    }
  } else {
    sessionStorage.setItem("updatedToken", "false");
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const data = await response.json();
    return data;
  }
}
export async function newToken() {
  const refreshToken = localStorage.getItem("refresh_token");
  const accessToken = localStorage.getItem("access_token");
  sessionStorage.setItem("updatedToken", "true");
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
  return data;
}

export async function getCurrentUserAds(params) {
  let url = new URL("/ads/me", process.env.REACT_APP_API_URL);
  if (params?.sorting) url.searchParams.append("sorting", "new");
  if (params?.page) url.searchParams.append("page", params.page);

  const response = await fetch(url, {
    method: "GET",
  });
  if (response.status === 401) {
    if (sessionStorage.getItem("updatedToken") !== "true") {
      await newToken();
      await getCurrentUserAds(params);
    }
  } else {
    sessionStorage.setItem("updatedToken", "false");
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const data = await response.json();
    return data;
  }
}

export async function getUser() {
  let url = new URL(`/user`, process.env.REACT_APP_API_URL);
  const accessToken = localStorage.getItem("access_token");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  if (response.status === 401) {
    if (sessionStorage.getItem("updatedToken") !== "true") {
      await newToken();
      await getUser();
    }
  } else {
    sessionStorage.setItem("updatedToken", "false");
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const data = await response.json();
    return data;
  }
}

export async function patchUser(params) {
  let url = new URL(`/user`, process.env.REACT_APP_API_URL);
  const accessToken = localStorage.getItem("access_token");

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
  if (response.status === 401) {
    if (sessionStorage.getItem("updatedToken") !== "true") {
      await newToken();
      await patchUser(params);
    }
  } else {
    sessionStorage.setItem("updatedToken", "false");
    if (!response.ok) {
      throw new Error("Ошибка сервера");
    }
    const data = await response.json();
    return data;
  }
}

export async function postNewUserPhoto(formData) {
  const accessToken = localStorage.getItem("access_token");
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
  console.log("userPhoto", userPhoto);
  return userPhoto;
}

export async function getUserById(id) {
  let url = new URL(`/user/all`, process.env.REACT_APP_API_URL);
  // const accessToken = localStorage.getItem("access_token");

  const response = await fetch(url, {
    method: "GET",
    headers: {
      // Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
  // if (response.status === 401) {
  //   if (sessionStorage.getItem("updatedToken") !== "true") {
  //     await newToken();
  //     await getUser();
  //   }
  // } else {
  // sessionStorage.setItem("updatedToken", "false");
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  const filtered = data?.filter((el) => el.id === Number(id));
  return filtered?.length > 0 ? filtered[0] : null;
  // }
}
