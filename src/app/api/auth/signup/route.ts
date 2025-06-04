import { NextRequest, NextResponse } from 'next/server';
export interface User {
  user_id: string;
  name: string;
  email: string;
  isActive: boolean;
  email_verified: boolean;
  role: string[];
  avatar: null;
  clinic?: Clinic;
  createdAt: Date;
  updatedAt: Date;
}

export interface Clinic {
  clinic_id: string;
  name: string;
  doc: string;
  email: string;
  instagram: string;
  slogan: string;
  stripeSubscriptionStatus: string;
  stripeCustomerId: null;
  stripeSubscriptionId: null;
  current_period_end: null;
  school_clinic: boolean;
  phone: string[];
  whatsapp: string[];
  address: string;
  cep: string;
  city: string;
  state: string;
  logo: string;
  s3_logo: null;
  complement: null;
  neighborhood: string;
  number: null;
  createdAt: Date;
  updatedAt: Date;
}
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
