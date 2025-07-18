import { NextResponse } from "next/server";
import path from "path";
import { readFile } from "fs/promises";

export async function GET(
  _req: Request,
  context: {
    params: { factory: string; machine: string };
  }
) {
  try {
    const { factory, machine } = context.params;

    // Validate input
    if (
      !factory || !machine ||
      !/^[a-zA-Z0-9_-]+$/.test(factory) ||
      !/^[a-zA-Z0-9_-]+$/.test(machine)
    ) {
      return NextResponse.json({ error: "Invalid parameters" }, { status: 400 });
    }

    // Build file path
    const filePath = path.join(
      process.cwd(),
      "src",
      "mockdata",
      "factory",
      factory,
      `${machine}.json`
    );

    // Read and parse mock data
    const fileContents = await readFile(filePath, "utf-8");
    const data = JSON.parse(fileContents);

    return NextResponse.json(data);
  } catch (error) {
    console.error("Mock API error:", error);
    return NextResponse.json({ error: "Mock data not found" }, { status: 404 });
  }
}
