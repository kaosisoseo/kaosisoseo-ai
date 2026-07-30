import ContactHero from "@/components/contact/ContactHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import FAQ from "@/components/contact/FAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <section className="py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:px-8">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>

      <FAQ />

      <ContactCTA />
    </>
  );
}