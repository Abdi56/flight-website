document.addEventListener('DOMContentLoaded', () => {
    const mockData = [
        {
            id: 1,
            name: 'Flight A123',
            status: 'On Time',
            departure: '10:00 AM',
            arrival: '12:00 PM',
        },
        {
            id: 2,
            name: 'Flight B456',
            status: 'Delayed',
            departure: '2:00 PM',
            arrival: '4:00 PM',
        },
        // Add more sample flight data here
    ];

    const flightList = document.getElementById('flight-list');
    const flightDetail = document.getElementById('flight-detail');

    function displayFlights(flights) {
        flightList.innerHTML = '';
        flights.forEach(flight => {
            const flightItem = document.createElement('div');
            flightItem.className = 'flight-item';
            flightItem.innerHTML = `<p>${flight.name}</p><p>${flight.status}</p>`;
            flightItem.addEventListener('click', () => displayFlightDetail(flight));
            flightList.appendChild(flightItem);
        });
    }

    function displayFlightDetail(flight) {
        flightDetail.innerHTML = `
            <h2>${flight.name}</h2>
            <p>Status: ${flight.status}</p>
            <p>Departure: ${flight.departure}</p>
            <p>Arrival: ${flight.arrival}</p>
        `;
    }
