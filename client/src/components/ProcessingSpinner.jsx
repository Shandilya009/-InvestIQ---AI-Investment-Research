function ProcessingSpinner({ message }) {
    return (
        <div className="loading-card">

            <div className="spinner"></div>

            <h2>AI is analyzing...</h2>

            <p>{message}</p>

        </div>
    );
}

export default ProcessingSpinner;