/* eslint-disable */
import { useState } from 'react';

function Invite() {
    let path = window.location.pathname;
    const parts = path.split('/');
    const postId = parts[3];
    const id  = postId

    console.log("ID:", id)

    const base = "/tiae24-frontend";

    if (path.startsWith(base)) {
        path = path.slice(base.length);
    }

    const [email, setEmail] = useState("");

    let token = localStorage.getItem("jwt");

    const api = 'https://jsramverk-tiae24-b7ehgnarare5h5dg.northeurope-01.azurewebsites.net/invite';


    const submit = async (e) => {
        e.preventDefault();

        const res = await fetch('https://jsramverk-tiae24-b7ehgnarare5h5dg.northeurope-01.azurewebsites.net/graphql', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'x-access-token': token,
            },
            body: JSON.stringify({
                query: `{ document(_id: \"${id}\") { _id title content allowed_users } }`
            })

        });
        const data = await res.json();
        console.log(data);

        const old_list = data.data.document.allowed_users;
        const title = data.data.document.title;
        const content = data.data.document.content;

        
        if (!old_list.includes(email)){
            old_list.push(email);
        }

        console.log("list:", old_list)

        const updateRes = await fetch('https://jsramverk-tiae24-b7ehgnarare5h5dg.northeurope-01.azurewebsites.net/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id,
                    title,
                    content,
                    allowed_users: old_list
                }),
            });

        try {
            const inviteRes = await fetch(api, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email,
                }),
            });

            if (!inviteRes.ok) throw new Error('Failed Update');
                alert('Email Sent!');
        } catch (err) {
            alert('Error: ' + err.message);
        }

};

    return (
        <>
            <div>
                <h2>Invite</h2>
                <form onSubmit={submit} className="new-doc">

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input type="submit" value="Invite" />
                </form>

            </div>
        </>
    );
}

export default Invite;
