import { NextResponse, type NextRequest } from "next/server";
import { fetchDelegate } from "@/app/api/common/delegates/getDelegates";
import { authenticateApiUser } from "@/app/lib/middleware/auth";
import { withUserId } from "../../apiUtils";

export async function GET(request: NextRequest) {
  const authResponse = await authenticateApiUser(request);

  if (!authResponse.authenticated) {
    return new Response(authResponse.reason, { status: 401 });
  }

  return await withUserId(authResponse.userId as string, async () => {
    try {
      const addressOrENSName = request.nextUrl.pathname.split("/")[4];
      const delegate = await fetchDelegate(addressOrENSName);
      return NextResponse.json(delegate);
    } catch (e: any) {
      return new Response("Internal server error: " + e.toString(), {
        status: 500,
      });
    }
  });
}
