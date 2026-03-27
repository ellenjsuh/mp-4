import {NextResponse} from "next/server";

export const dynamic = "force-dynamic";

const TASTE_API_KEY = process.env.API_KEY;

export async function GET(request:Request): Promise<NextResponse> {
    const {searchParams} = new URL(request.url);

    const query = searchParams.get("q");

    const type = searchParams.get("type");

    if(!query){
        return NextResponse.json({error:"No search query provided"},{status:400});
    }

    if(!type){
        return NextResponse.json({error:"No type provided"}, {status:400});
    }

    const encodedQuery = query.split(" ").join("+");

    const res = await fetch(
        `https://tastedive.com/api/similar?q=${encodedQuery}&type=${type}&k=${TASTE_API_KEY}`
    );

    if (res.status !== 200){
        return NextResponse.json({error:"Failed to fetch data"}, {status:500});
    }

    const data = await res.json();

    return NextResponse.json(data);
}