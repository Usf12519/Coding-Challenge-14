// Task 2: Fetch Tickets Using Async/Await and Handle Errors
async fetchtickets () {
    const apiURL = `https://jsonplaceholder.typicode.com/posts`;
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);

        if (!response.ok) {
            throw new Error('Failed to fetch data from the API. Please try again later at another time.');
            
        }
    }
}
