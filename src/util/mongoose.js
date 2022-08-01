const multiToObject = (array) => array.map((item) => item.toObject());
const singleToObject = (item) => item.toObject();

module.exports = {
  multiToObject,
  singleToObject,
};
