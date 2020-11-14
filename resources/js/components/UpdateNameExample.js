import React, { useState } from 'react';
import axios from 'axios';

const UpdateNameExample = ({ token, name, setUser }) => {
    const [loading, setLoading] = useState(false);
    const [fullName, setFullName] = useState(name);
    const handleUpdateClick = () => {
        if (fullName.length > 2) {
            const headers = {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`,
            };
            console.log('updating name', headers);
            setLoading(true);
            // get user
            axios.post('https://localhost:8000/api/updateName', {
                name: fullName
            }, {
                headers
            })
                .then(res => {
                    console.log('res:', res);
                    if (res.status === 200) {
                        const { id, name, email, email_verified_at, created_at } = res.data.user;
                        setUser({
                            id,
                            name,
                            email,
                            emailVerifiedAt: email_verified_at,
                            createdAt: created_at,
                        });
                        setFullName(name);
                    }

                    setLoading(false);
                })
                .catch(err => console.error(err.message));
        }
    }
    return (
        <div>
            <h1>Update your name</h1>
            <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="form-control"
                    id="name"
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                />
            </div>
            <button type="button" className="btn btn-primary" disabled={loading} onClick={handleUpdateClick}>
                {loading ? 'Loading ⏳' : 'Update'}
            </button>
        </div>
    );
};

export default UpdateNameExample;
