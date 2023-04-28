const everythingAfterZipCodeRegex = /[0-9]{2}-[0-9]{3}.*$/;

const getCity = (address: string): string => {
  const cityWithZipCode = address.match(everythingAfterZipCodeRegex);
  if (cityWithZipCode) return cityWithZipCode[0].slice(7);
  return address.substring(address.lastIndexOf(',') + 2, address.length);
};

export default getCity;
