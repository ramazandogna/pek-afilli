// /pages/api/comment.ts
import { NextRequest, NextResponse } from 'next/server';
import { createComment } from '../../../lib/comments';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // Basit validasyon
    if (!body.author || !body.authorEmail || !body.content || !body.postId) {
      return NextResponse.json({ message: 'Tüm alanlar zorunludur!' }, { status: 400 });
    }

    // Yorum oluşturma işlemi
    const result = await createComment({body});

    // Hatanın kaynağını bulmak için günlük ekleyin
    console.log('GraphQL Response:', result);

    // Eğer burada bir hata alıyorsanız, bunun kaynağını tespit edin
    if (result.errors) {
      console.error('GraphQL Error:', result.errors);
      return NextResponse.json({ message: result.errors[0].message }, { status: 500 });
    }

    if (!result.data) {
      console.error('No data returned from GraphQL');
      return NextResponse.json({ message: 'GraphQL sunucusundan veri dönmedi.' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Yorum başarıyla oluşturuldu!' }, { status: 200 });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ message: 'İstek işlenirken bir hata oluştu' }, { status: 500 });
  }
}
