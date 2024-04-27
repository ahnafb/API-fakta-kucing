function changeBackground() {
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json(); // Mengubah respons menjadi objek JSON
        })
        .then(data => {
            const catImageUrl = data[0].url;
            document.body.style.backgroundImage = `url('${catImageUrl}')`;
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
        });
}

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('fetchButton').addEventListener('click', function () {
        fetch('https://catfact.ninja/fact')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json(); // Mengubah respons menjadi objek JSON
            })
            .then(data => {
                // Menampilkan fakta kucing di halaman HTML
                document.getElementById('factDisplay').textContent = data.fact;
                // Ganti latar belakang setiap kali tombol ditekan
                changeBackground();
            })
            .catch(error => {
                console.error('There was a problem with the fetch operation:', error);
            });
    });
});