export const generateLayoutLg = ({ resourceList }) => {
    console.log(resourceList)
  return resourceList.map((item, index) => {
    return {
      x: ((index + 3) % 3) * 4,
      y: 0,
      w: 4,
      h: item.photo.orientation === "lan" ? 5 : 8.5,
      i: item.id,
    };
  });
}; // endof generateLayoutLg

export const generateLayoutSm = ({ resourceList }) => {
  return resourceList.map((item, index) => {
    return {
      x: ((index + 2) % 2) * 3,
      y: 0,
      w: 3,
      h: item.photo.orientation === "lan" ? 5 : 8.5,
      i: item.id,
    };
  });
}; // endof generateLayoutSm
