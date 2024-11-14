import { Link, useLocation } from 'react-router-dom';

export default function Breadcrumb() {
    // Retrieves the current location path
    const location = useLocation();
    
    // Splits the path into segments, removing any empty values
    const pathnames = location.pathname.split('/').filter((x) => x);
    
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol>
                    {/* Always includes a link to the Home route */}
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    
                    {/* Map through each path segment to create a link for each breadcrumb level */}
                    {pathnames.map((value, index) => {
                        // Constructs the path for each segment up to the current level
                        const to = `/${pathnames.slice(0, index + 1).join('/')}`;
                        
                        // Checks if the current item is the last in the breadcrumb
                        const isLast = index === pathnames.length - 1;
                        
                        return (
                            <li key={to}>
                                {isLast ? (
                                    // Displays the last breadcrumb as plain text
                                    <span className="breadcrumb-last">{value}</span>
                                ) : (
                                    // Other segments are displayed as links
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