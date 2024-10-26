import { createClient } from "@/utils/supabase/client";
import { IContactFormValues } from "@/interfaces/contact";

const supabase = createClient();

/**
 * Function to post contact information
 * @param req 
 * @param res 
 * @returns 
 */
export async function POST(req: Request, res: Response) {
    try {
        if (req.method !== 'POST') 
            return new Response('Method Not Allowed', { status: 405 });

        // 1. Read the request body (it's already a ReadableStream)
        const rawBody = await req.text(); // Get the body as text

        // 2. Parse the JSON body
        const requestBody: IContactFormValues = JSON.parse(rawBody);

        // 3. Post the contact information
        const { data, error } = await supabase
            .from('contact_information')
            .insert([requestBody])
            .select();

        // 4. Return the response
        if (error) return new Response('Internal Server Error 03', { status: 500 });
        return new Response(JSON.stringify(data), { status: 200 });

    } catch (error) {
        return new Response('Internal Server Error 02', { status: 500 });
    };
}