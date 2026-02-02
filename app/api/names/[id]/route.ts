import data from "@/app/api/db";

export async function PUT(request: Request, context:{ params: { id: string } }) {
    const id = +context.params.id;
    const { name } = await request.json();
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) {
        return new Response(JSON.stringify({ error: "Not Found" }), {
            headers: { "Content-Type": "application/json" },
            status: 404,
        });
    }
    data[index].name = name;
    return new Response(JSON.stringify(data[index]), {
        headers: { "Content-Type": "application/json" },
    });

}

export async function DELETE(request: Request, context:{ params: { id: string } }) {
    const id = +context.params.id;
    const index = data.findIndex((item) => item.id === id);
    if (index === -1) {
        return new Response(JSON.stringify({ error: "Not Found" }), {
            headers: { "Content-Type": "application/json" },
            status: 404,
        });
    }
    const deletedItem = data.splice(index, 1)[0];
    return new Response(JSON.stringify(deletedItem), {
        headers: { "Content-Type": "application/json" },
    });
}   