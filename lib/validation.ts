import { z } from 'zod'

// Attribution: first-touch UTM/click params captured client-side from the
// landing URL. Forwarded with the lead so we can credit the source channel
// in the Google Sheet, in lead emails, and in Meta CAPI events.
export const attributionSchema = z
  .object({
    utm_source: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_campaign: z.string().optional(),
    utm_term: z.string().optional(),
    utm_content: z.string().optional(),
    gclid: z.string().optional(),
    fbclid: z.string().optional(),
    referrer: z.string().optional(),
    landing_page: z.string().optional(),
  })
  .partial()
  .optional()
  .default({})

// Photo attachment shape — base64 (no data: prefix) so the email sender can
// pass it straight to Resend as `attachments[].content`.
export const photoSchema = z.object({
  name: z.string().optional(),
  type: z.string().optional(),
  base64: z.string(),
})

// Full lead: user completed both steps.
export const leadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  address: z.string().min(5),
  email: z.string().email(),
  reasonForSelling: z.string().optional().default(''),
  expectedPrice: z.string().optional().default(''),
  roofAge: z.string().optional().default(''),
  hvacAge: z.string().optional().default(''),
  timeline: z.string().optional().default(''),
  notes: z.string().optional().default(''),
  // Page-context tagging — captured client-side so we can attribute leads to the
  // landing page that generated them. Distinct from `city` (parsed from address).
  pageCity: z.string().optional().default(''),
  pageSituation: z.string().optional().default(''),
  attribution: attributionSchema,
  eventId: z.string().optional().default(''),
  photos: z.array(photoSchema).max(6).optional().default([]),
})

// Partial lead: user submitted step 1 only. Email optional.
export const partialLeadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  address: z.string().min(5),
  email: z.union([z.string().email(), z.literal('')]).optional().default(''),
  pageCity: z.string().optional().default(''),
  pageSituation: z.string().optional().default(''),
  attribution: attributionSchema,
  eventId: z.string().optional().default(''),
})

export type LeadInput = z.infer<typeof leadSchema>
export type PartialLeadInput = z.infer<typeof partialLeadSchema>
