const REFERER = "http://localhost:3001/api";

export const useRequest = () => {
  const getData = (url) => {
    return fetch(`${REFERER}${url}`).then((result) => result.json());
  };

  return { getData };
};
