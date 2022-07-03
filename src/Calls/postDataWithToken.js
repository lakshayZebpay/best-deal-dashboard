async function postData(url, data = {}, token) {
  const response = await fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      token: token,
      "Content-Type": "application/json",
    },
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  });

  return response.json();
}

export default postData;
