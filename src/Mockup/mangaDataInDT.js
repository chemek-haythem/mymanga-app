// Function to convert price from USD to Tunisian Dinar (DT)
const convertToDT = (priceUSD) => {
    // Assuming an exchange rate of 1 USD = 2.8 DT (you can adjust this according to the current exchange rate)
    const exchangeRate = 2.8;
    const priceDT = (priceUSD * exchangeRate).toFixed(2); // Rounded to 2 decimal places
    return `${priceDT} DT`; // Concatenate with ' DT'
  };
  
  // Loop through the mangaData and update the prices to DT
  const mangaDataInDT = mangaData.map((manga) => ({
    ...manga,
    price: convertToDT(manga.price),
  }));
  
  export default mangaDataInDT;
  