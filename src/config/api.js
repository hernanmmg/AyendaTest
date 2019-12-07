const baseURL = "http://rubytify-ayenda.herokuapp.com/api/v1";

const callApi = async (endpoint, options = {}) => {
  options.headers = {
    "Content-Type": "application/json",
    Accept: "application/json"
  };

  const response = await fetch(baseURL + endpoint);
  const data = await response.json();
  return data.data;
};

export default callApi;
