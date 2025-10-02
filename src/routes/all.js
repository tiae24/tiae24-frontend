import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function All() {
    let path = window.location.pathname;

    const base = "/tiae24-frontend";

    if (path.startsWith(base)) {
        path = path.slice(base.length);
    }

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await fetch('https://jsramverk-tiae24-b7ehgnarare5h5dg.northeurope-01.azurewebsites.net/posts');

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const result = await response.json();

                setData(result.data || []);
            } catch (error) {
                console.error('Error', error);
            } finally {
                setLoading(false);
            }
        };

        fetchDocument();
    }, []);

    if (loading) {
        return <div>Loading the document</div>;
    }

    const result = [];

    for (let i = 0; i < data.length; i++) {
        const post = data[i];

        result.push(
            <li key={post._id}>
                <Link to={`/update/${post._id}`}>
                    <strong>{post.title}</strong>: {post.content}
                </Link>
            </li>
        );
    }

    return (
        <div class="all-data">
            <h2>All Data</h2>
            <ul>{result}</ul>
        </div>
    );
}

export default All;
