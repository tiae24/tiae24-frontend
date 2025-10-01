import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Update from "./update";
import "@testing-library/jest-dom";

beforeEach(() => {

    window.location = new URL("http://localhost:3000/update/68d9df61fa323a8a44e5c655");
    jest.spyOn(global, "fetch").mockResolvedValue({
        ok: true,
        json: async () => ({
        doc: {
            title: "Testar",
            content: " Testar2"
        }
        }),
    });
});



test("Testing if the update form is working", async () => {
    render(<Update />);


    const titleInput = await screen.findByDisplayValue("Testar");
    const contentTextarea = await screen.findByDisplayValue("Testar2");

    expect(titleInput).toBeInTheDocument();
    expect(contentTextarea).toBeInTheDocument();


    await userEvent.type(titleInput, "NewTestar");
    await userEvent.type(contentTextarea, "NewTestar2");

    const button = screen.getByRole('button', { name: /skapa/i });
    await userEvent.click(button);


});
