import InfoPageLayout from "@/components/InfoPageLayout";

export default function PrivacyPage() {
  return (
    <InfoPageLayout
      title="Privacy Policy"
      subtitle="We take your privacy seriously. This policy explains how Aether collects, uses, and protects your personal information."
      breadcrumb="Privacy Policy"
      sections={[
        { heading: "Information We Collect", content: "We collect information you provide directly to us, such as your name, email address, shipping address, and payment information when you make a purchase. We also collect information automatically when you visit our website, including your IP address, browser type, and pages visited." },
        { heading: "How We Use Your Information", content: "We use the information we collect to process your orders, send order confirmations and shipping updates, respond to your questions and requests, and improve our products and services. We do not sell your personal information to third parties." },
        { heading: "Data Security", content: "We implement industry-standard security measures to protect your personal information. All payment transactions are encrypted using SSL technology. However, no method of transmission over the internet is 100% secure." },
        { heading: "Cookies", content: "We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can control cookie settings through your browser preferences. Disabling cookies may affect some features of our website." },
        { heading: "Your Rights", content: "You have the right to access, correct, or delete your personal information at any time. To exercise these rights, please contact us at privacy@aether.com. We will respond to your request within 30 days." },
        { heading: "Contact Us", content: "If you have any questions about this Privacy Policy, please contact our privacy team at privacy@aether.com or write to us at Aether Inc., 123 Innovation Drive, San Francisco, CA 94105." },
      ]}
    />
  );
}