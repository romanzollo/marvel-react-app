import img from './error-cat.gif';
const ErrorMessage = () => {
    return (
        <img
            src={img}
            alt="Error"
            style={{
                display: 'block',
                width: 'auto',
                height: '200px',
                margin: '0 auto',
            }}
        />
    );
};

export default ErrorMessage;
