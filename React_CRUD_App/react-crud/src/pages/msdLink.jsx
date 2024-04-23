import { useState, useEffect } from 'react';

export const MsdLink = () => {
    const [apiData, setApiData] = useState(null);
    const [loading, setLoading] = useState(true);
    // const [inputUrl, setinputUrl] = useState(true);
    const [page, setPage] = useState(1); // Current page number
    const perPage = 100

    useEffect(() => {
        fetchDataFromAPI(`https://www.msdiconnect.com/wp-json/wp/v2/pages?per_page=${perPage}&page=${page}`)
            .then(data => {
               setApiData(prevData => {
                if (prevData === null) {
                    return data;
                }
                return [...prevData, ...data];
            }
            );
                setLoading(false);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, [page]);

    const handleNextPage = () => {
        setPage(prevPage => prevPage + 1); // Increment page number
    };
    // const handleChange = (e) => {    
    //     setinputUrl(e.target.value);
    // }
    return (
        <div>
         {/* <button onClick={() => exportToExcel(apiData)}>Export to Excel</button> */}

            <div>
            {/* <input type="text" onChange={handleChange} /> */}
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    apiData?.length > 0 ? (
                        <div>
                            {apiData.map((item, index) => (
                                <p key={index}>{item.link}</p>
                            ))}
                            <button onClick={handleNextPage}>Load More</button>
                        </div>
                    ) : (
                        <p>No data available</p>
                    )
                )}
            </div>
           
        </div>
    );
}

async function fetchDataFromAPI(apiUrl) {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error('Failed to fetch data from API');
        }
        const data = await response.json();
        return data;
        // console.log(data)
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

function exportToExcel(data) {
    if (!Array.isArray(data)) {
        console.error('Data is not in the expected format.');
        return;
    }

    // Log the data to inspect its structure
    console.log('Data:', data);

    // Ensure each item in data is an array
    const validData = data.filter(row => Array.isArray(row));

    if (validData.length === 0) {
        console.error('Data does not contain any valid rows.');
        return;
    }

    const csvContent = "data:text/csv;charset=utf-8,"
        + validData.map(row => row.join(",")).join("\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "data_export.csv");
    document.body.appendChild(link);
    link.click();
}



