export const findEmployee = (query, data) => {
  return data.filter((item) =>
    `${item.name} ${item.surname}`.toUpperCase()?.includes(query?.toUpperCase())
  );
};
