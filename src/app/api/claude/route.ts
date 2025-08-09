import {NextResponse} from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {prompt} = body;

        if (!prompt) {
            return new NextResponse("Prompt is required", {status: 400});
        }

        // TODO: Implement Claude API call

        return NextResponse.json({message: "Claude API response"});
    } catch (error) {
        console.error("[CLAUDE_API_ERROR]", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}
