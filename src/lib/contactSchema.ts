import { z } from "zod";

/** Internal routing desks by enquiry type. */
export const ROUTING: Record<string, string> = {
  General: "support@evenor.org",
  "Sales & Quotation": "sales@evenor.org",
  "Tender Submission": "tenders@evenor.org",
  "Partnership Proposal": "partners@evenor.org",
  "Investor Enquiry": "joachim@evenor.org",
  Ventures: "partners@evenor.org",
  "Executive Office": "joachim@evenor.org",
};

export const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(120),
  organisation: z.string().trim().max(200).optional().or(z.literal("")),
  country: z.string().trim().max(100).optional().or(z.literal("")),
  enquiry_type: z.string().min(1, "Please select an enquiry type"),
  email: z.string().trim().email("Please enter a valid email").max(254),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(5, "Please share a few more words")
    .max(5000, "Message is too long"),
});

export type ContactInput = z.infer<typeof contactSchema>;

/** Shape a validated enquiry into the `contacts` table payload. */
export const toContactRow = (d: ContactInput) => ({
  name: d.name,
  organisation: d.organisation || null,
  country: d.country || null,
  enquiry_type: d.enquiry_type,
  email: d.email,
  phone: d.phone || null,
  message: d.message,
});
