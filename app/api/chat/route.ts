import { NextResponse } from "next/server";
import { patelligenceBrand, matchIntent } from "@/lib/chat-knowledge";

// POST /api/chat
// Body: { message: string }
// Returns: { reply: string, suggestions?: string[] }
//
// Pattern-matches the user's message against the Patelligence knowledge base.
// To upgrade to a real LLM later (OpenAI/Anthropic), replace the body of
// POST() with a model call and pass the brand's intents as system context —
// the front-end contract stays the same.
export async function POST(req: Request) {
  try {
    const { message } = (await req.json()) as { message?: string };

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Missing 'message' in request body." },
        { status: 400 }
      );
    }

    const intent = matchIntent(message, patelligenceBrand);

    if (intent) {
      return NextResponse.json({
        reply: intent.response,
        suggestions: intent.suggestions ?? [],
      });
    }

    return NextResponse.json({
      reply: patelligenceBrand.fallbackContact,
      suggestions: ["What does Patelligence do?", "Pricing", "Book a demo"],
    });
  } catch {
    return NextResponse.json(
      { error: "Failed to process chat request." },
      { status: 500 }
    );
  }
}
