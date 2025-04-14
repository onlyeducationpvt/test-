// components/AboutHouseBazaar.tsx
import Image from "next/image";

export default function AboutHouseBazaar() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex justify-between items-start gap-4">
        <div>
          <h2 className="text-2xl font-semibold mb-4">About HouseBazaar</h2>
          <p className="text-gray-700 leading-relaxed">
            Housebazaar, an esteemed initiative of HomeBazaar.com, operates as a dedicated platform exclusively
            designed to promote our esteemed partner brands. With a commitment to facilitating effective and
            transparent promotion, our platform empowers brands to efficiently reach their target audience.
            Through a comprehensive range of tools, including targeted advertising campaigns and data-driven
            analytics, Housebazaar equips brands with the essential resources needed to optimize their promotional
            endeavours and drive substantial growth.
          </p>
        </div>
        <div className="min-w-[120px]">
          <Image
            src="/logo-homebazaar.png" // place logo image in public folder as "logo-homebazaar.png"
            alt="HomeBazaar Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
}
