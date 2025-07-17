import { NextRequest, NextResponse } from "next/server";

type Params = {
  params: {
    factory: string;
    machine: string;
  };
};

export async function GET(req: NextRequest, { params }: Params) {
  const { factory, machine } = params;

  const mockData = {
    factory,
    machine,
    data: `Mock data for ${factory} - ${machine}`,
    timestamp: new Date().toISOString()
  };

  return NextResponse.json(mockData);
}
