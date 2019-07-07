import { writable } from "svelte/store";

export default writable(
  Array(10)
    .fill(1)
    .map((item, index) => ({
      id: index,
      title: `title-${index}`,
      status: false
    }))
);
