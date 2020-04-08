axios.get('http://localhost:3000/person')
.then(response =>{
    const listsHTML = document.querySelector('#contacts')
    console.log(response)
    response.data.forEach(item =>{
        const {name, address, email, phone, company} = item;
        const itemHTML= `
        Name: ${name}
        Address: ${address}
        `;
        listsHTML.innerHTML += itemHTML;
    })
})
.catch(error =>{
    alert(error)
})

document.getElementById('').addEventListener('click', (event) => {
    const name = document.getElementsByName('name')
})