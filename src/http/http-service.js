
const structureQueryParams = params => {
  let queryStrings = "?";
  const keys = Object.keys(params);
  keys.forEach((key, index) => {
    queryStrings += key + "=" + params[key];
    if (params[keys[index + 1]]) {
      queryStrings += "&";
    }
  });
  return queryStrings;
};
export const makeGetRequest = async (
  url,
  params = null
) => {
  let queryString = "";
  if (params) {
    queryString = structureQueryParams(params);
  }
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  
  return new Promise((resolve, reject) => {
    try {
      fetch(url + queryString, {
        method: "GET",
        headers: headers
      })
        .then(res => res.json())
        .then(jsonResponse => {
          if (jsonResponse.error === false) { // change this condition according to response structure
            resolve(jsonResponse);
          } else {
            console.log(jsonResponse);
            reject(jsonResponse);
          }
        })
        .catch(e => {
          console.log("XHR GET Error: ", e);
          reject(e);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};
export const makePostRequest = async (
  url,
  params = {}
) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "POST",
        headers: headers,
        body: JSON.stringify(params)
      })
        .then(
          res => res.json(),
          error => {
            reject(error);
          }
        )
        .then(
          jsonResponse => {
            if (jsonResponse.error === false) {
              resolve(jsonResponse);
            } else {
              console.log(jsonResponse);
              reject(jsonResponse);
            }
          },
          error => {
            reject(error);
          }
        )
        .catch(error => {
          reject(error);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};
export const makePutRequest = async (
  url,
  params = {}
) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "PUT",
        headers: headers,
        body: JSON.stringify(params)
      })
        .then(
          res => res.json(),
          error => {
            reject(error);
          }
        )
        .then(
          jsonResponse => {
            if (jsonResponse.error === false) {
              resolve(jsonResponse);
            } else {
              console.log(jsonResponse);
              reject(jsonResponse);
            }
          },
          error => {
            reject(error);
          }
        )
        .catch(error => {
          reject(error);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};
export const makeDeleteRequest = async (
  url,
  params = {}
) => {
  let headers = {
    Accept: "application/json",
    "Content-Type": "application/json"
  };
  
  return new Promise((resolve, reject) => {
    try {
      fetch(url, {
        method: "DELETE",
        headers: headers,
        body: JSON.stringify(params)
      })
        .then(
          res => res.json(),
          error => {
            reject(error);
          }
        )
        .then(
          jsonResponse => {
            if (jsonResponse.error === false) {
              resolve(jsonResponse);
            } else {
              console.log(jsonResponse);
              reject(jsonResponse);
            }
          },
          error => {
            reject(error);
          }
        )
        .catch(error => {
          reject(error);
        });
    } catch (e) {
      console.log(e);
      reject();
    }
  });
};