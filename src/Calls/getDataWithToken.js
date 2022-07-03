async function getData(url, token) {
  const response = await fetch(url, {
    method: "GET",
    headers: new Headers({
      token: token,
      "Content-Type": "application/x-www-form-urlencoded",
    }),
  });

  return await response.json();
}

export default getData;
