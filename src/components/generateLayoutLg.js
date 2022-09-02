export const generateLayoutLg = ({resourceList}) => {
  return resourceList.map((item, index) => {
    return {
      x: ((index + 3) % 3) * 4,
      y: 0,
      w: 4,
      h: item.photo.orientation === "lan" ? 3 : 5,
      i: item.id,
    };
  });
}; // endof generateLayout
