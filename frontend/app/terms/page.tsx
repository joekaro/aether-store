import InfoPageLayout from "@/components/InfoPageLayout";

export default function TermsPage() {
  return (
    <InfoPageLayout
      title="Terms of Service"
      subtitle="By using our website or purchasing our products, you agree to these terms. Please read them carefully."
      breadcrumb="Terms of Service"
      sections={[
        { heading: "Acceptance of Terms", content: "By accessing or using the Aether website, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using this site." },
        { heading: "Products and Pricing", content: "We reserve the right to modify prices at any time without notice. All prices are listed in US dollars. We are not responsible for typographical errors in pricing. In the event of a pricing error, we reserve the right to cancel orders placed at the incorrect price." },
        { heading: "Order Acceptance", content: "Your receipt of an order confirmation does not constitute our acceptance of your order. We reserve the right to refuse or cancel any order for any reason, including limitations on quantities available for purchase, inaccuracies in product or pricing information, or suspected fraud." },
        { heading: "Intellectual Property", content: "All content on the Aether website, including text, graphics, logos, images, and software, is the property of Aether and is protected by intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission." },
        { heading: "Limitation of Liability", content: "Aether shall not be liable for any indirect, incidental, special, or consequential damages arising out of or in connection with your use of our products or website. Our total liability shall not exceed the amount you paid for the product giving rise to the claim." },
        { heading: "Governing Law", content: "These terms shall be governed by the laws of the State of California. Any disputes shall be resolved in the courts of San Francisco County, California." },
      ]}
    />
  );
}