export const getBgColor = () => {
  const bgArr = [
    "#b7c3c",
    "#ab8a8d",
    "#7f1c7f",
    "#7a5a5a",
    "#3dc330",
    "#5dc189",
    "#f5e109",
    "#f02c50",
    "#d4fe3f",
    "#92cc10",
  ];
  
  const randomBg = Math.floor(Math.random() * bgArr.length);
  const color = bgArr[randomBg];
  return color;
};

export const getAvatarName = (name) => {
  if(!name) return "?";
  
  return name.split(" ").map(word => word[0]).join("").toUpperCase();
}