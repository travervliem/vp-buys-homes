import { z } from 'zod'

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
})

// Partial lead: user submitted step 1 only. Email optional.
export const partialLeadSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  address: z.string().min(5),
  email: z.union([z.string().email(), z.literal('')]).optional().default(''),
  pageCity: z.string().optional().default(''),
  pageSituation: z.string().optional().default(''),
})

export type LeadInput = z.infer<typeof leadSchema>
export type PartialLeadInput = z.infer<typeof partialLeadSchema>
