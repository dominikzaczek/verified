import { NextResponse } from 'next/server'

import matches from "@/static/matches";

export async function GET() {
  try {
    const sportTypes = matches.reduce((acc, current) => {
      if (!acc.includes(current.sport_type)) {
        acc.push(current.sport_type);
      }
      return acc;
    }, []);

    return NextResponse.json({ success: true, data: sportTypes })
  } catch (e) {
    return NextResponse.json({ success: false, error: e })
  }
}

