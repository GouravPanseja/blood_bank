function createDonorCard(data){
    const resultsContainer = document.querySelector('.results'); 

    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="Donor Image">
    <h3>${data.name}</h3>
    <p>Blood Group: ${data.bloodgroup}</p>
    <p>Location: ${data.city}</p>
    <div class="button-group">
        <button class="button">Request Blood</button>
    </div>
`;
    resultsContainer.appendChild(card); 
}