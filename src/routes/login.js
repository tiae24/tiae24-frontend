import { useState } from 'react';

function Login() {
    let path = window.location.pathname;

    const base = "/tiae24-frontend";

    if (path.startsWith(base)) {
        path = path.slice(base.length);
    }

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const api = 'https://jsramverk-tiae24-b7ehgnarare5h5dg.northeurope-01.azurewebsites.net/login';

    const submit = async (e) => {
        e.preventDefault();

        const res = await fetch(api, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();

        if (data.success) {
            alert("Logged in!");
            localStorage.setItem("jwt", data.token);
        } else {
            alert(data.message);
            localStorage.removeItem("jwt");
        }
    };

    return (
        <>
            <div>
                <h2>Login</h2>
                <form onSubmit={submit} className="new-doc">

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

                    <input type="submit" value="login" />
                </form>

            </div>
        </>
    );
}

export default Login;
