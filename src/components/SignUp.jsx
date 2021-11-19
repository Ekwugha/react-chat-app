import { useState } from 'react';
import axios from 'axios';


const [username, setUsername] = useState('');
const [password, setPassword] = useState('');
const [firstname, setFirst] = useState('');
const [lastname, setLast] = useState('');
const [error, setError] = useState('');

// function to handle the submit
const handleSubmit = async (e) => {
    e.preventDefault();

    //header for authentication
    const authObject = {'Private-Key': process.env.REACT_APP_PROJECT_ID}
    
    // post request to create user
    try {
        await axios.post('https://api.chatengine.io/users/',
        { headers: authObject,
         body: {
            'username': username,
            'secret': password
            }
        });
        // login the user
        localStorage.setItem('username', username)
        localStorage.setItem('password', password)

        window.location.reload()
     } catch (error) {
         console.log(error)
         setError('Incorrect credentials, try again')
     }
                        
}


