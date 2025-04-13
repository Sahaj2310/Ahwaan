import connectToDatabase from "../../../chatbotapi/mongodb";
import Report from "../../../models/report"; // Ensure Report model is defined correctly

export async function POST(request) {
  try {
    console.log("Connecting to chatbot database...");
    const db = await connectToDatabase("chatbot");

    // Use the connection's model instead of global model
    const ReportModel = db.model("Report", Report.schema);

    const body = await request.json();

    const newReport = new ReportModel({
      category: body.category,
      subject: body.subject,
      description: body.description,
      location: body.location,
      priority: body.priority,
      attachments: body.attachments,
    });

    await newReport.save();

    console.log("Report saved successfully");
    return new Response(JSON.stringify({ success: true, message: "Report submitted successfully!" }), { status: 201 });
  } catch (error) {
    console.error("Error in POST handler:", error);
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 500 });
  }
}