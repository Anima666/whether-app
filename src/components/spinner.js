import React from 'react';

class Whether extends React.Component {
    render() {
        return <div class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
    }
}

export default Whether; 