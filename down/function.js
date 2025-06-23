function checkStatus() {
    fetch('/down/switch.json')
        .then(response => response.json())
        .then(data => {
            if (data.status === 'off') {
                // Set the background color to white
                document.body.style.backgroundColor = 'white';
                // Clear existing content
                document.body.innerHTML = '';
                
                // Create a new element to display the message
                const message = document.createElement('div');
                message.textContent = 'Site Is Down';
                message.style.position = 'fixed';
                message.style.top = '50%';
                message.style.left = '50%';
                message.style.transform = 'translate(-50%, -50%)';
                message.style.fontSize = '50px';
                message.style.color = 'black';
                message.style.fontWeight = 'bold';
                message.style.textAlign = 'center';
                message.style.ZIndex = '999999999999':

                // Append the message to the body
                document.body.appendChild(message);
            }
        })
        .catch(error => console.error('Error fetching switch.json:', error));
}
checkStatus();
