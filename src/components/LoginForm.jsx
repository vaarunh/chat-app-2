import { useState } from 'react';
import axios from 'axios';

const projectID = 'f8728450-9fb6-4041-a3ef-55329560e884 ';

const Modal = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = { 'Project-ID': projectID, 'User-Name': username, 'User-Secret': password };

    try {
      await axios.get('https://api.chatengine.io/chats', { headers: authObject });

      localStorage.setItem('username', username);
      localStorage.setItem('password', password);

      window.location.reload();
      setError('');
    } catch (err) {
      setError('Oops, incorrect credentials.');
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">Chat Application</h1>
       
        <form onSubmit={handleSubmit}>
          <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} className="input" placeholder="Username" required />
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className="input" placeholder="Password" required />
          <div align="center">
            <button type="submit" className="button">
              <span>Start chatting</span>
            </button>
            
          </div>
        </form>
        <h3 align="center" className="error">{error}</h3>
        <br />
        <p className="test" align="center">Test Credentials     Username:test Password:pass</p>
        <h4 align="center" className="myName">Designed By <a href="https://github.com/varunherlekar" rel="noreferrer" target="_blank"> Varun Herlekar</a></h4>
      </div>
    </div>

  );
};

export default Modal;