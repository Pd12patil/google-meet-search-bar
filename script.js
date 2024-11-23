const participants = [
    { name: 'Krushna' , image: 'imgs/img4.jpg'},
    { name: 'Pratik' , image:'imgs/img2.jpg'},
    { name: 'Abhishek' ,image:'imgs/img1.jpg' },
    { name: 'Siddharth' ,image:'imgs/img2.jpg'},
    { name: 'Sanket' ,image:'imgs/img4.jpg'},
    { name: 'Aniket' ,image:'imgs/img1.jpg'},
    { name: 'Shantanu',image:'imgs/img2.jpg' },
    { name: 'Mahesh' ,image:'imgs/img4.jpg'},
    { name: 'Rushikesh',image:'imgs/img1.jpg' },
    { name: 'Prashannt',image:'imgs/img2.jpg' },
    { name: 'Pramod' ,image:'imgs/img4.jpg'},
    { name: 'Satyam',image:'imgs/img1.jpg' },
    { name: 'Rudransh' ,image:'imgs/img2.jpg'},
    { name: 'Shubham' ,image:'imgs/img4.jpg'},
    { name: 'Akshay' ,image:'imgs/img1.jpg'},
    { name: 'Mayuresh' ,image:'imgs/img2.jpg'},
    { name: 'Shivram' ,image:'imgs/img4.jpg'},
    { name: 'Sarthak' ,image:'imgs/img1.jpg'}
   
  ];
  
  
    
    const participantsContainer = document.getElementById('participants-container');
    
    function displayParticipants(participantList) {
      participantsContainer.innerHTML = '';
      participantList.forEach((participant) => {
        participantsContainer.innerHTML += `
          <div class='participant-card'>
            <img src="${participant.image}" alt="${participant.name}">
            <span>${participant.name}</span>
          </div>
        `;
      });
    }
    
    displayParticipants(participants);
    
    function filterParticipants() {
      const searchQuery = document.getElementById('search').value.toLowerCase();
      const filteredParticipants = participants.filter(participant => 
        participant.name.toLowerCase().includes(searchQuery)
      );
      displayParticipants(filteredParticipants);
    }
    