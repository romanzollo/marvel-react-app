import { Link } from 'react-router-dom';

import ErrorMessage from '../errorMessage/ErrorMessage';

const Page404 = () => {
    return (
        <div>
            <ErrorMessage />
            <p
                style={{
                    textAlign: 'center',
                    fontWeight: 'bold',
                    fontSize: '24px',
                }}
            >
                Page does not exist
            </p>
            <Link
                to="/"
                style={{
                    display: 'block',
                    textAlign: 'center',
                    marginTop: '30px',
                    fontWeight: 'bold',
                    fontSize: '18px',
                    textTransform: 'uppercase',
                    color: '#9F0013',
                }}
            >
                Back to main page
            </Link>
        </div>
    );
};

export default Page404;
