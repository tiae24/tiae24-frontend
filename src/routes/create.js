import { useState } from 'react';

function Create() {

    let path = window.location.pathname;

    const base = "/tiae24-frontend";
    if (path.startsWith(base)) {
        path = path.slice(base.length);
    }

    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const submit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://jsramverk-tiae24-b7ehgnarare5h5dg.northeurope-01.azurewebsites.net/create', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    title,
                    content
                }),
            });

            if (!res.ok) throw new Error('Failed Update');
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
                <label htmlFor="title">Titel</label>
                <input
                    type="text"
                    name="title"
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label htmlFor="content">Innehåll</label>
                <textarea
                    name="content"
                    id="content"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                ></textarea>

                <input type="submit" value="Skapa" />
            </form>

        </div>
        </>
    );
}

export default Create;