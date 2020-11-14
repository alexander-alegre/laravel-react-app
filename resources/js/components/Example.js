import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useCookies } from 'react-cookie';
import Loading from './Loading';
import axios from 'axios';
import UpdateNameExample from './UpdateNameExample';

function Example() {
    const [loading, setLoading] = useState(true);
    const [token, setToken] = useState('');
    const [user, setUser] = useState({
        id: null,
        name: '',
        email: '',
        emailVerifiedAt: null,
        createdAt: '',
    });
    const [cookies] = useCookies([]);

    useEffect(() => {
        if (cookies.auth) {
            setToken(cookies.auth);
        }
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${cookies.auth}`,
        };
        console.log('fetching user', headers);
        // get user
        axios.post('https://localhost:8000/api/user', {}, {
            headers
        })
            .then(res => {
                if (res.status === 200) {
                    const { id, name, email, email_verified_at, created_at } = res.data;
                    setUser({
                        id,
                        name,
                        email,
                        emailVerifiedAt: email_verified_at,
                        createdAt: created_at,
                    });
                }

                setLoading(false);
            })
            .catch(err => console.error(err.message));
        console.log('done fetching user');
    }, []);

    return loading ? (<Loading />) : (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Hello <span className="text-capitalize">{user.name}</span></div>

                        <div className="card-body">
                            Token for API Requests:&nbsp;<kbd>{token}</kbd>
                        </div>
                    </div>
                </div>
            </div>
            <UpdateNameExample token={token} name={user.name} setUser={setUser} />
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
