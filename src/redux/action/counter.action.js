export const addAction = (payload) => {
  return { type: "increase", payload: payload };
};

export const minusAction = (payload) => {
  return { type: "decrease", payload: payload };
};
