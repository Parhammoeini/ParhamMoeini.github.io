document.addEventListener('DOMContentLoaded', () => {
    // Replace 'https://api.example.com/data' with your API endpoint
    const apiURL = 'https://zenquotes.io/api/quotes';

    fetch(apiURL)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // Process and display the data
            const dataList = document.getElementById('data-list');
            data.forEach(item => {
                const listItem = document.createElement('li');
                listItem.textContent = item.name; // Adjust according to your data structure
                dataList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
});
