import { NextResponse } from 'next/server';
import { generateMessage } from '@/utils/openai';

export async function POST(request: Request) {
  try {
    const { product } = await request.json();

    if (!product) {
      return NextResponse.json(
        { error: 'Product name is required' },
        { status: 400 }
      );
    }

    const message = await generateMessage(product);
    return NextResponse.json({ message });
    
  } catch (error) {
    console.error('Message generation error:', error);
    return NextResponse.json(
      { error: 'Failed to generate message' },
      { status: 500 }
    );
  }
} 