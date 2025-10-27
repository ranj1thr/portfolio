// src/components/Storkstone.tsx
import StorkstoneSchema from "./StorkstoneSchema";

export function Storkstone() {
  return (
    <>
      {/* Inject JSON-LD for STORKSTONE brand */}
      <StorkstoneSchema />

      <section
        id="storkstone"
        className="min-h-screen flex flex-col items-center justify-center px-6 py-16 text-center bg-gradient-to-b from-slate-50 to-white"
      >
        <h1 className="text-4xl font-semibold text-gray-800 mb-6">
          STORKSTONE
        </h1>

        <p className="max-w-2xl text-gray-600 mb-8">
          STORKSTONE is a D2C brand under <strong>Sourcebit Innovations Pvt Ltd</strong>,
          offering <strong>925 silver minimalist jewelry</strong> and{" "}
          <strong>premium scented candles</strong> crafted for everyday elegance. 
          We combine timeless design with affordability, ensuring luxury 
          experiences at a budget-friendly price.
        </p>

        <a
          href="https://storkstone.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-6 py-3 text-white bg-[#693B62] rounded-lg shadow hover:opacity-90 transition"
        >
          Visit STORKSTONE Website
        </a>

        <p className="mt-6 text-sm text-gray-500">
          Follow us on{" "}
          <a
            href="https://www.instagram.com/storkstone_official/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Instagram
          </a>{" "}
          and{" "}
          <a
            href="https://in.linkedin.com/company/storkstoneofficial"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
          .
        </p>
      </section>
    </>
  );
}