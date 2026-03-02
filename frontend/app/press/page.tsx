import InfoPageLayout from "@/components/InfoPageLayout";

export default function PressPage() {
  return (
    <InfoPageLayout
      title="Press & Media"
      subtitle="Find official Aether press releases, brand assets, and media contacts below."
      breadcrumb="Press"
      sections={[
        { heading: "Media Contact", content: "For press enquiries, interview requests, or brand partnerships, please contact our media team at press@aether.com. We aim to respond to all press enquiries within 48 hours on business days." },
        { heading: "Brand Assets", content: "Official Aether logos, product images, and brand guidelines are available for download by accredited media. Please email press@aether.com with your publication details to request access to our media kit." },
        { heading: "Recent Coverage", content: "Aether has been featured in Runner's World, TechCrunch, Fast Company, The New York Times, and Forbes. Our Velocity X model was named 'Best Running Shoe of the Year' by Runner's World in 2024." },
        { heading: "Press Releases", content: "Our latest press release covers the launch of the Aether Runner Pro 2.0 and our expansion into 15 new international markets. Previous press releases are available upon request from our media team." },
        { heading: "Partnerships", content: "Aether partners with elite athletes, running clubs, and fitness organisations globally. For partnership and sponsorship enquiries, please contact partnerships@aether.com with details about your organisation and proposed collaboration." },
      ]}
    />
  );
}