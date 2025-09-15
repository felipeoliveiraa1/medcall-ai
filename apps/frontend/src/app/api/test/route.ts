import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  return NextResponse.json({ message: 'API funcionando', timestamp: new Date().toISOString() });
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    return NextResponse.json({ 
      message: 'POST funcionando', 
      receivedData: body,
      timestamp: new Date().toISOString() 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Erro ao processar dados' }, { status: 400 });
  }
}
