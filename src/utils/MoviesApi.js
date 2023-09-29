import React from "react";
class MoviesApi extends React.Component {
  constructor(props) {
    super(props);
    this._baseUrl = props.baseUrl;
    this.headers = props.headers;
  }
  getFilms() {
    return this._request(`${this._baseUrl}`, {
      headers: this.headers,
    });

    // return fetch(`${this._baseUrl}users/me`, {
    //   headers: this.headers,
    // }).then(this._checkResponse);
  }

  _request(url, options) {
    return fetch(url, options).then(this._checkResponse);
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(res.status);
    }
  }
}
export const moviesApi = new MoviesApi({
  baseUrl: "https://api.nomoreparties.co/beatfilm-movies",
  headers: {
    "Accept": "application/json",
    "Content-Type": "application/json"
  },
});
