import { describe, it, expect } from "vitest";
import { contactSchema, toContactRow, ROUTING } from "@/lib/contactSchema";

const valid = {
  name: "  Amina Hassan ",
  organisation: "",
  country: "Tanzania",
  enquiry_type: "Tender Submission",
  email: " amina@example.co.tz ",
  phone: "",
  message: "We would like Evenor to bid on a corridor logistics tender.",
  consent: true as const,
};

describe("contactSchema", () => {
  it("accepts a valid enquiry and trims whitespace", () => {
    const r = contactSchema.safeParse(valid);
    expect(r.success).toBe(true);
    if (r.success) {
      expect(r.data.name).toBe("Amina Hassan");
      expect(r.data.email).toBe("amina@example.co.tz");
    }
  });

  it("rejects a missing name", () => {
    const r = contactSchema.safeParse({ ...valid, name: "   " });
    expect(r.success).toBe(false);
    if (!r.success) expect(r.error.issues[0].message).toBe("Name is required");
  });

  it("rejects a malformed email", () => {
    const r = contactSchema.safeParse({ ...valid, email: "not-an-email" });
    expect(r.success).toBe(false);
  });

  it("rejects an email over 254 characters", () => {
    const long = `${"a".repeat(250)}@example.com`;
    expect(contactSchema.safeParse({ ...valid, email: long }).success).toBe(false);
  });

  it("rejects a message shorter than 5 characters", () => {
    const r = contactSchema.safeParse({ ...valid, message: "hi" });
    expect(r.success).toBe(false);
  });

  it("rejects a message over 5000 characters", () => {
    const r = contactSchema.safeParse({ ...valid, message: "x".repeat(5001) });
    expect(r.success).toBe(false);
  });

  it("requires an enquiry type", () => {
    expect(contactSchema.safeParse({ ...valid, enquiry_type: "" }).success).toBe(false);
  });

  it("rejects an enquiry without POPIA consent", () => {
    expect(contactSchema.safeParse({ ...valid, consent: false }).success).toBe(false);
  });

  it("maps optional empty fields to null in the database row", () => {
    const parsed = contactSchema.parse(valid);
    const row = toContactRow(parsed);
    expect(row.organisation).toBeNull();
    expect(row.phone).toBeNull();
    expect(row.country).toBe("Tanzania");
  });

  it("has a routing desk for every enquiry type option", () => {
    for (const [type, email] of Object.entries(ROUTING)) {
      expect(contactSchema.safeParse({ ...valid, enquiry_type: type }).success).toBe(true);
      expect(email).toMatch(/@evenor\.org$/);
    }
  });
});
