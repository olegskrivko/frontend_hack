import React, { useState } from "react";

const Testapp = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch("https://backend-hack-0ulp.onrender.com/portfolio/regions"); 
            if (!response.ok) {
                throw new Error("Failed to fetch data");
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex flex-col items-center gap-4 p-5">
            <h1 className="text-2xl font-bold">Flask API Response</h1>
            <button 
                onClick={fetchData} 
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
                Fetch Data
            </button>

            {loading && <p>Loading...</p>}
            {error && <p className="text-red-500">Error: {error}</p>}
            {data && (
                <div className="bg-gray-100 p-4 rounded-lg">
                    <p><strong>Message:</strong> {JSON.stringify(data)}</p>
                </div>
            )}
        </div>
    );
};

export default Testapp;
