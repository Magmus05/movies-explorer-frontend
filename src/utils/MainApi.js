// export const baseUrl = "https://api.magmus-dip.nomoredomainsicu.ru";
export const baseUrl = "http://localhost:3001";
export function register(name, email, password) {
  console.log({ name: name, email: email, password: password });
  return fetch(`${baseUrl}/signup`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: name, email: email, password: password }),
  }).then((res) => checkResponse(res));
}

export function authorize(email, password) {
  console.log({ email: email, password: password });
  return fetch(`${baseUrl}/signin`, {
    method: "POST",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: email, password: password }),
  }).then((res) => checkResponse(res));
}

export function checkToken() {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      // Authorization: `Bearer ${'jwt'}`, //`Bearer ${'jwt'}`, если храним локально jwt
    },
  }).then(checkResponse);
}

export function logout() {
  return fetch(`${baseUrl}/signout`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

export function getUserInformation() {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  }).then(checkResponse);
}

export function updateProfileData(newName, newEmail) {
  console.log({
    name: newName,
    email: newEmail,
  });
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    credentials: "include",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: newName,
      email: newEmail,
    }),
  }).then(checkResponse);
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(res);
  }
}
