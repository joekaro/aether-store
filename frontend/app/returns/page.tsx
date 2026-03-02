import InfoPageLayout from "@/components/InfoPageLayout";

export default function ReturnsPage() {
  return (
    <InfoPageLayout
      title="Returns & Exchanges"
      subtitle="We want you to love your Aether shoes. If something isn't right, we'll make it right — free returns within 30 days."
      breadcrumb="Returns"
      sections={[
        { heading: "Return Policy", content: "We accept returns on unworn, unwashed items in their original packaging within 30 days of delivery. Items must be in their original condition with all tags attached. Sale items marked as Final Sale are not eligible for returns." },
        { heading: "How to Start a Return", content: "Visit our returns portal at returns.aether.com, enter your order number and email address, select the items you wish to return and the reason for return, print the prepaid return label, and drop your package at any authorised shipping location." },
        { heading: "Exchanges", content: "Want a different size or colour? We offer free exchanges within 30 days of delivery. Start an exchange through our returns portal and select the new item you would like. Your new item will be shipped once we receive your return." },
        { heading: "Refund Timeline", content: "Once we receive your return, we will inspect it and process your refund within 3–5 business days. Refunds are issued to the original payment method. Depending on your bank, it may take an additional 5–10 business days for the refund to appear on your statement." },
        { heading: "Damaged or Defective Items", content: "If you received a damaged or defective item, please contact us within 7 days of delivery at returns@aether.com with your order number and photos of the damage. We will send a replacement or issue a full refund at no cost to you." },
        { heading: "International Returns", content: "International customers are responsible for return shipping costs. We recommend using a tracked shipping service. Duties and taxes paid on original orders are non-refundable." },
      ]}
    />
  );
}