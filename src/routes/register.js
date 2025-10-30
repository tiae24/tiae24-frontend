import { useState } from 'react';

function Register() {
    let path = window.location.pathname;

    const base = "/tiae24-frontend";

    if (path.startsWith(base)) {
        path = path.slice(base.length);
    }

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const api = 'https://jsramverk-tiae24-b7ehgnarare5h5dg.northeurope-01.azurewebsites.net/reg';

    const submit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch(api, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name,
                    email,
                    password
                }),
            });

            if (!res.ok) {throw new Error('Failed Update');}
            alert('Post updated!');
        } catch (err) {
            alert('Error: ' + err.message);
        }
    };

    return (
        <>
            <div>
                <h2>Create</h2>
                <form onSubmit={submit} className="new-doc">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        name="name"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />

                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <input type="submit" value="Register" />
                </form>

            </div>
        </>
    );
}

export default Register;
