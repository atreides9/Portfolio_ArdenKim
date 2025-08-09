import {NextResponse} from "next/server";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const {event, payload} = body;

        if (!event) {
            return new NextResponse("Event is required", {status: 400});
        }

        // TODO: Implement analytics tracking

        return NextResponse.json({message: "Analytics event tracked"});
    } catch (error) {
        console.error("[ANALYTICS_API_ERROR]", error);
        return new NextResponse("Internal Server Error", {status: 500});
    }
}
