export const getTransactions = async () => {
    try {
        const response = await fetch('http://localhost:8080/transactions');

        // Check if the response status is not OK (e.g., 404, 500)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching transactions:', error.message);
        throw error; // Re-throw the error if you want it to be handled by the caller
    }
};
