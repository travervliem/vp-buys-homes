export type AttributionFields = {
  utm_source?: string
  utm_medium?: string
  utm_campaign?: string
  utm_term?: string
  utm_content?: string
  gclid?: string
  fbclid?: string
  referrer?: string
  landing_page?: string
}

export const ATTRIBUTION_STORAGE_KEY = 'vpbh_attribution'

export const EVENTS = {
  LEAD_PARTIAL: 'lead_submit_partial',
  LEAD_COMPLETE: 'lead_submit_complete',
  PHONE_CLICK: 'phone_click',
  VIEW_SITUATION: 'view_situation_page',
} as const

export type EventName = (typeof EVENTS)[keyof typeof EVENTS]
