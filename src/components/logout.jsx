import React from 'react';
import { useHistory } from 'react-router-dom';

function Logout(props) {
    const hist = useHistory()
    localStorage.removeItem("token")
    hist.push("/login")
    return (
        <div>
            
        </div>
    );
}

export default Logout;