import { connectToDb } from "@/app/_lib/mongoose";
import { findUserbyEmail } from "@/app/_model/userModel";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  await connectToDb();
  const { email } = await req.json();
  console.log("NASA API", email);

  const user = await findUserbyEmail(email);

  return NextResponse.json(user);
}
