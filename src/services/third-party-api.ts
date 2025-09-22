import axios from "axios";

export const getCountries = async () => {
    try {
        const response = await axios.get("https://aaapis.com/api/v1/info/countries/", {
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Token afcce566cae84ae0bd9bf35926423e71c8808620"
            }
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching countries:", error);
        throw error;
    }
}