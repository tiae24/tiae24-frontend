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

    const api ='https://jsramverk-tiae24-b7ehgnarare5h5dg.northeurope-01.azurewebsites.net/graphql';

    let token = localStorage.getItem("jwt");

    console.log(token);

    useEffect(() => {
        const fetchDocument = async () => {
            try {
                const response = await fetch(api, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json',
                        'Accept': 'application/json',
                        'x-access-token': token,
                    },
                    body: JSON.stringify({
                        query: "{ accountDocument { _id title content allowed_users } }"
                    })

                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const result = await response.json();

                setData(result.data.accountDocument || []);
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
            <div class="outer-li">
                <li key={post._id}>
                    <Link to={`/update/${post._id}`}>
                        <strong>{post.title}</strong>: {post.content}
                    </Link>
                    <Link to={`/invite/${post._id}`}>
                        <div class="inner-div">
                            <strong>Invite</strong>
                        </div>
                    </Link>
                </li>
            </div>
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
