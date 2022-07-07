import React from 'react';

const Loader = ({color}) => {
    const styles = {
        border: `8px solid ${color ?? '#FFF'}`,
        borderColor: `${color ?? '#FFF'} transparent transparent transparent`
    }

    return (
        <div className="lds-ring">
            <div style={styles} />
            <div style={styles} />
            <div style={styles} />
            <div style={styles} />
        </div>
    );
};

export default Loader;