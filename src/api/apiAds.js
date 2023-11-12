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
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
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
  if (!response.ok) {
    throw new Error("Ошибка сервера");
  }
  const data = await response.json();
  return data;
}
