export async function GET(req) {
    return new Response(JSON.stringify({
        name : "jeff",
        booty: "true"
    }), { status: 200 })
}
export async function POST(req) {
    p_req = JSON.parse(req);
    return new Response(JSON.stringify({
        name: "Bogb",
        booty: "false"
    }), {status: 200})
}