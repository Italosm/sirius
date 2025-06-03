import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  const translateErrors = {
    'Invalid credentials.': 'Email ou senha inválidos',
  };
  const body = await req.json();

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/sessions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log('status:', response.status);
    console.log('data:', data);

    if (!response.ok) {
      const message = data.message as string;
      const translatedError =
        message in translateErrors ? translateErrors[message] : message;
      return NextResponse.json(
        { error: translatedError },
        { status: response.status }
      );
    }

    return NextResponse.json(data);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: 'Erro ao conectar com o backend' },
      { status: 500 }
    );
  }
}
