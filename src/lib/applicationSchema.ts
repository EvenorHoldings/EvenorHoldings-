import { z } from "zod";

export const applicationSchema = z.object({
  full_name: z.string().trim().min(1, "Full name is required").max(120),
  email: z.string().trim().email("Please enter a valid email").max(254),
  phone: z.string().trim().max(40).optional().or(z.literal("")),
  role_slug: z.string().min(1, "Please select a role"),
  role_title: z.string().min(1).max(200),
  location: z.string().trim().max(120).optional().or(z.literal("")),
  years_experience: z.string().trim().max(40).optional().or(z.literal("")),
  portfolio_url: z
    .string()
    .trim()
    .max(300)
    .url("Please enter a valid link (including https://)")
    .optional()
    .or(z.literal("")),
  cover_note: z
    .string()
    .trim()
    .min(5, "Please tell us a little more")
    .max(5000, "Your note is too long"),
});

export type ApplicationInput = z.infer<typeof applicationSchema>;

export const toApplicationRow = (d: ApplicationInput) => ({
  full_name: d.full_name,
  email: d.email,
  phone: d.phone || null,
  role_slug: d.role_slug,
  role_title: d.role_title,
  location: d.location || null,
  years_experience: d.years_experience || null,
  portfolio_url: d.portfolio_url || null,
  cover_note: d.cover_note,
});
