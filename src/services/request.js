const getSearchParamsString = (params) =>
  new URLSearchParams(params).toString();

export const request = async ({
  endpoint,
  method,
  body,
  params,
  headers = {},
  ...args
}) => {
  const searchParams = params ? `?${getSearchParamsString(params)}` : "";
  const API = `${import.meta.env.VITE_BASE_API}${endpoint}/${searchParams}`;

  // eslint-disable-next-line no-useless-catch
  try {
    const fetchResponse = await fetch(API, {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      ...args,
    });

    const res = await fetchResponse.json();
    const errors = res?.errors;

    if (errors) {
      if (
        (typeof errors === typeof [] && errors?.length) ||
        (typeof errors === typeof {} && Object.keys(errors).length) ||
        (typeof errors === typeof "" && !!errors)
      ) {
        throw errors;
      }
    }

    return res;
  } catch (error) {
    throw error;
  }
};

export default {
  request,
  put: (endpoint, { ...args } = {}) =>
    request({ endpoint, method: "PUT", ...args }),
  post: (endpoint, { ...args } = {}) =>
    request({ endpoint, method: "POST", ...args }),
  get: (endpoint, { ...args } = {}) =>
    request({ endpoint, method: "GET", ...args }),
  delete: (endpoint, { ...args } = {}) =>
    request({ endpoint, method: "DELETE", ...args }),
  patch: (endpoint, { ...args } = {}) =>
    request({ endpoint, method: "PATCH", ...args }),
};
