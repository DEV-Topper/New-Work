import axios from "axios";

interface CryptoData {
  prices: [number, number][];
}

export async function fetchCryptoData(): Promise<CryptoData | null> {
  try {
    const response = await axios.get<CryptoData>(
      "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=30&interval=daily"
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching cryptocurrency data:", error);
    return null;
  }
}
