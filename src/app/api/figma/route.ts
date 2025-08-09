import {NextResponse} from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {figmaUrl} = body;

        if (!figmaUrl) {
            return new NextResponse("Figma URL is required", {status: 400});
        }

        // TODO: Implement Figma API call

        return NextResponse.json({message: "Figma API response"});
    } catch (error) {
        console.error("[FIGMA_API_ERROR]", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}
