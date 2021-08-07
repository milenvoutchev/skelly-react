import axios from "axios";
import { lightFormat as format } from "date-fns";

class Fmp {
    constructor() {
        this.get = axios.get;
        this.post = axios.post;

        if (!process.env.MIX_FMP_KEY) {

            return console.warn('Http initializing without token.');
        }

        this.token = process.env.MIX_FMP_KEY;
        this.cache = new Map();
    }

    async fetchHistoricalStockList(periodStart, periodEnd, symbols) {
        if (typeof symbols === 'string') {
            symbols = [symbols];
        }

        const startStr = format(new Date(periodStart), 'yyyy-MM-dd');
        const endStr = format(new Date(periodEnd), 'yyyy-MM-dd');

        const requestUri = `https://financialmodelingprep.com/api/v3/historical-price-full/${symbols.toString()}?serietype=line&from=${startStr}&to=${endStr}&apikey=${this.token}`;

        if (this.cache.has(requestUri)) {
            return this.cache.get(requestUri);
        }

        const response = await this.get(requestUri);

        if (!response.data?.historicalStockList) {
            throw new Error('Invalid response received');
        }

        this.cache.set(requestUri, response.data.historicalStockList);

        return response.data.historicalStockList;
    }

    async fetchDailyClosePrices(periodStart, periodEnd, symbols) {
        const historicalStockList = await this.fetchHistoricalStockList(periodStart, periodEnd, symbols);

        return Fmp.mapDailyClose(historicalStockList);
    }

    static mapDailyClose(historicalStockList = []) {
        const pricesByDate = new Map();

        for (const symbolData of historicalStockList) {
            const symbol = symbolData.symbol;

            symbolData.historical.forEach(historical => {
                const date = historical.date;
                const close = historical.close;

                if (!pricesByDate.has(date)) {
                    pricesByDate.set(date, {})
                }

                pricesByDate.set(date, {
                    ...pricesByDate.get(date),
                    [symbol]: close,
                })
            })
        }

        return pricesByDate;
    }
}

export default new Fmp();
