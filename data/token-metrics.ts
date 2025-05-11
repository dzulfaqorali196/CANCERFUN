export interface Metric {
  label: string;
  value: string;
}

export const tokenMetricsData: Metric[] = [
  {
    label: "Token Name",
    value: "CancerCoin Token",
  },
  {
    label: "Token Symbol",
    value: "BIO",
  },
  {
    label: "Total Supply",
    value: "1,000,000,000",
  },
  {
    label: "Initial Circulating Supply",
    value: "300,000,000",
  },
  {
    label: "Initial Market Cap",
    value: "$15,000,000",
  },
  {
    label: "Token Type",
    value: "SPL (Solana Program Library)",
  },
];
