import { cryptoAssets } from "./data";

export async function FetchCrypto() {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            "X-API-KEY": import.meta.env.VITE_COINSTATS_API_KEY,
        },
    };

    try {
        const response = await fetch(
            "https://openapiv1.coinstats.app/coins",
            options
        );
        if (!response.ok) {
            throw new Error(`Error: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch crypto data:", error);
        throw error;
    }
}

export function fakeFetchAssets() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets);
        }, 1);
    });
}
