const formatDate = (date: Date): string => {
  //console.log("date : ", date.getDate());
  let datett = new Date(date);
  return `${datett.getDay()}/${datett.getMonth() + 1}/${datett.getFullYear()}`;
};

export default formatDate;
