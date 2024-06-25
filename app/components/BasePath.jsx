// components/BasePath.js
const BasePath = () => {
  return process.env.NODE_ENV === 'production' ? '/lamy_construction_website' : '';
};

export default BasePath;
