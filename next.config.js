module.exports = {
  async rewrites() {
    return [
      { source: "/", destination: "/api" },
      { source: "/v1", destination: "/api/v1" },
      { source: "/v1/exchanges/all", destination: "/api/v1/exchanges/all" },
      { source: "/v1/coins/ticker", destination: "/api/v1/coins/ticker" },
      { source: "/v1/coins/tickers", destination: "/api/v1/coins/tickers" },
      { source: "/v1/coins/available-pairs", destination: "/api/v1/coins/available-pairs" }
    ]
  },
}
