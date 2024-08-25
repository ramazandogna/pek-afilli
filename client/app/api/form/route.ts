// /pages/api/form.ts
export async function POST(request: Request) {
    try {
      const body = await request.json();

      if (!body.firstName || !body.email || !body.message) {
        return new Response(
          JSON.stringify({ data: 'First name, email, and message fields are required!' }),
          { status: 400 }
        );
      }

      // Form işleme kodu burada yer alacak
      console.log('Form data:', body); // Günlükle

      return new Response(JSON.stringify({ data: 'Form submitted successfully' }), { status: 200 });
    } catch (error) {
      console.error('Error:', error);
      return new Response(JSON.stringify({ data: 'Error processing request' }), { status: 500 });
    }
  }
