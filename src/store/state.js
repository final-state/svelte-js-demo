export default {
  list: Array(10)
    .fill(1)
    .map((item, index) => ({
      id: index,
      title: `title-${index}`,
      status: false
    }))
};
