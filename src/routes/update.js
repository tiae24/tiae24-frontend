import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';


function Update() {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const { id } = useParams();


    useEffect(() => {
        const fetchPost = async () => {
            const res = await fetch(`https://jsramverk-tiae24-b7ehgnarare5h5dg.northeurope-01.azurewebsites.net/${id}`);
            const data = await res.json();
            setTitle(data.doc.title);
            setContent(data.doc.content);
            console.log(data);
        };

    
        fetchPost();
    }, [id]);

    const submit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('https://jsramverk-tiae24-b7ehgnarare5h5dg.northeurope-01.azurewebsites.net/update', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    id,
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
            <h2>Dokument</h2>
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

export default Update;