import React from 'react';

const Loading = () => {
    return (
        <div className="text-center h1">
            <div className="spinner-border text-primary"
                 id="spinner" role="status">
                <span className="sr-only">Loading...</span>
            </div>
            <p className="text-primary">Loading...</p>
        </div>
    );
};

export default Loading;
