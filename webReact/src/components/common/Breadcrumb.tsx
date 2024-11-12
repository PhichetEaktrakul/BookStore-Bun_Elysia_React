import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb() {
    const location = useLocation();
    const pathnames = location.pathname.split('/').filter((x) => x);
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    {pathnames.map((value, index) => {
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        const isLast = index === pathnames.length - 1;
                        return (
                            <li key={to}>
                                {isLast ? (
                                    <span className="breadcrumb-last">{value}</span>
                                ) : (
                                    <Link to={to}>{value}</Link>
                                )}
                            </li>
                        );
                    })}
                </ol>
            </nav>
        </>
    );
}