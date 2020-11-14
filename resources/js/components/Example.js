import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useCookies } from 'react-cookie';

function Example() {
    const [token, setToken] = useState('');
    const [cookies] = useCookies([]);

    useEffect(() => {
        if (cookies.auth) {
            setToken(cookies.auth);
        }
    }, []);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card">
                        <div className="card-header">Example component</div>

                        <div className="card-body">
                            Token for API Requests:&nbsp;<kbd>{token}</kbd>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Example;

if (document.getElementById('app')) {
    ReactDOM.render(<Example />, document.getElementById('app'));
}
