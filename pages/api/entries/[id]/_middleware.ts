import { NextFetchEvent, NextRequest, NextResponse } from "next/server";

const middleware = (req: NextRequest, ev: NextFetchEvent) => {
//   if (req.page.name === "/api/entries") return NextResponse.next();

  const id = req.page.params?.id || "";

  const checkMongoIDRegExp = new RegExp("^[0-9a-fA-F]{24}$");

  if (!checkMongoIDRegExp.test(id)) {
    return new Response(
      JSON.stringify({ message: `${id} is not a valid id` }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
  return NextResponse.next();
};

export { middleware };
