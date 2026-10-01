import type { Metadata } from 'next'
import Link from 'next/link'
import { Hero } from '@/components/marketing/Hero'
import { SiteHeader } from '@/components/marketing/SiteHeader'
import { SiteFooter } from '@/components/marketing/SiteFooter'
import { MobileCTABar } from '@/components/marketing/MobileCTABar'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'How VP Buys Homes collects, uses, and shares information submitted through vpbuyshomes.com, and the choices you have.',
  alternates: { canonical: 'https://www.vpbuyshomes.com/privacy' },
}

// Update this date whenever the policy text changes.
const LAST_UPDATED = 'October 1, 2026'

function H2({ children }: { children: React.ReactNode }) {
  return <h2 className="font-display text-[26px] font-bold text-navy mt-10 mb-3 leading-[1.2]">{children}</h2>
}

function P({ children }: { children: React.ReactNode }) {
  return <p className="font-body text-[16px] text-ink-700 leading-[1.75] mb-4">{children}</p>
}

function UL({ children }: { children: React.ReactNode }) {
  return <ul className="font-body text-[16px] text-ink-700 leading-[1.75] mb-4 pl-6 list-disc">{children}</ul>
}

const linkClass = 'text-navy font-bold hover:text-amber-dark'

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />

      <Hero
        eyebrow="Legal"
        headline={<>Privacy <em>Policy</em></>}
        sub={`Last updated: ${LAST_UPDATED}`}
      />

      <Section tone="white" padding="lg" tight>
        <article>
          <P>
            This policy explains what information VP Equities LLC, doing business as VP Buys Homes (&ldquo;we&rdquo; or &ldquo;us&rdquo;),
            collects through vpbuyshomes.com (the &ldquo;Site&rdquo;), how we use it, and the choices you have. We buy houses for cash in Southeast Georgia.
          </P>

          <H2>Information we collect</H2>
          <P><strong>Information you give us.</strong> When you submit a form on the Site, we collect:</P>
          <UL>
            <li>Your name, phone number, and email address</li>
            <li>The address of the property you are considering selling</li>
            <li>Details you choose to share about the property and your situation, such as your reason for selling, expected price, the property&rsquo;s condition, ideal closing timeline, and any notes</li>
            <li>Photos of the property, if you choose to upload them. Photos are sent to us by email and are not added to our lead spreadsheet.</li>
          </UL>
          <P>We also keep what you tell us when you call, text, or email us.</P>
          <P>
            <strong>Partial submissions.</strong> The form has two steps. When you complete step 1 (name, phone number, and property address)
            and continue, we receive that information right away, even if you do not finish step 2.
          </P>
          <P>
            <strong>Information collected automatically.</strong> When you use the Site, our hosting provider and our systems receive standard technical
            information, such as your IP address, browser and device type, and the pages you request. We store your browser details and the page you submitted a
            form from with your submission, along with a randomly generated identifier that links the two steps of the form together.
          </P>
          <P>
            <strong>How you found us.</strong> If you arrive from an ad or a link, we keep the campaign details in the link (such as UTM parameters and Google or
            Facebook click IDs), the website that referred you, and the page you landed on, and we attach them to your submission so we know which marketing brought you in.
          </P>
          <P>
            <strong>Analytics and advertising tools.</strong> We may use tools from Google (Google Analytics and Google Ads conversion tracking) and
            Meta (Meta Pixel and Conversions API) to understand how people use the Site and to measure our advertising. When these tools are active,
            they may set cookies or use similar technologies, and they may receive information such as your IP address, browser, the pages you view,
            and form-submission events. For conversion measurement, we may send Meta hashed (one-way encrypted) versions of details you submit,
            such as your email address, phone number, name, and location, together with your IP address and browser information.
          </P>

          <H2>How we use information</H2>
          <UL>
            <li>To respond to your request, prepare and send you an offer, and contact you by phone, text, or email about your property</li>
            <li>To complete a sale if you accept our offer</li>
            <li>To keep records of inquiries and follow up with you</li>
            <li>To operate, secure, and improve the Site and to measure our marketing</li>
            <li>To comply with legal obligations and protect our rights</li>
          </UL>

          <H2>Who we share information with</H2>
          <P>We do not sell your personal information. We share it only as described here:</P>
          <UL>
            <li>
              <strong>Service providers</strong> that help us run the Site and handle inquiries: Vercel (website hosting), Resend (email delivery of
              form submissions to us), Google (Google Sheets, where we log inquiries), and Mapbox (address suggestions &mdash; the address text you
              type may be sent to Mapbox to suggest matching addresses).
            </li>
            <li><strong>Analytics and advertising providers</strong> described above (Google and Meta), when those tools are active.</li>
            <li><strong>Closing attorneys, title companies, and others involved in a sale</strong>, if you move forward, to the extent needed to complete the transaction.</li>
            <li><strong>Authorities and other parties</strong> when required by law or to protect rights, safety, or property.</li>
          </UL>

          <H2>Calls and text messages</H2>
          <P>
            If you give us your phone number, we may call or text you about your request. Message and data rates may apply. You can ask us to stop
            at any time by telling us, replying STOP to a text, or emailing leads@vpbuyshomes.com.
          </P>

          <H2>Cookies</H2>
          <P>
            The Site may use cookies and similar technologies, including those set by the analytics and advertising tools described above.
            You can block or delete cookies in your browser settings and use the opt-out controls offered by Google and Meta.
          </P>

          <H2>Your choices</H2>
          <P>
            You can ask us what personal information we hold about you, ask us to correct it, or ask us to delete it by contacting us using the details below.
            We may need to confirm your identity first, and we may keep information we are required or permitted to keep, such as records of a completed transaction.
          </P>

          <H2>Security and retention</H2>
          <P>
            We use reasonable safeguards to protect information, but no website or storage system is completely secure. We keep information for as long
            as we need it to respond to you, complete any transaction, and meet legal and record-keeping requirements.
          </P>

          <H2>Children</H2>
          <P>The Site is not intended for anyone under 18, and we do not knowingly collect information from children.</P>

          <H2>Changes to this policy</H2>
          <P>We may update this policy from time to time. The &ldquo;last updated&rdquo; date at the top shows when it last changed.</P>

          <H2>Contact us</H2>
          <P>VP Equities LLC, doing business as VP Buys Homes</P>
          <UL>
            <li>Phone: <a href="tel:+19125156060" className={linkClass}>(912) 515-6060</a></li>
            <li>Email: <a href="mailto:leads@vpbuyshomes.com" className={linkClass}>leads@vpbuyshomes.com</a></li>
          </UL>
          <P>
            You can also reach us through our <Link href="/contact" className={`${linkClass} underline underline-offset-4`}>contact page</Link>.
          </P>
        </article>
      </Section>

      <SiteFooter />
      <MobileCTABar />
    </>
  )
}
