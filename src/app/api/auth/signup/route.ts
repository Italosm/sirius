import { User } from '@/models/user/user-model';
import { NextRequest, NextResponse } from 'next/server';

interface SessionResponse {
  token: string;
  user: User;
}
interface ErrorResponse {
  status: number;
  message: string;
}

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    });

    const data: SessionResponse | ErrorResponse = await response.json();
    console.log('status:', response.status);
    console.log('data:', data);

    if (!response.ok) {
      return NextResponse.json(
        { error: data as ErrorResponse },
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
