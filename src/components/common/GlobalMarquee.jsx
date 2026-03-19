
export default function GlobalMarquee() {
  return (
    <div className="bg-gradient-to-r from-orange-500 to-blue-900 text-white shadow-sm overflow-hidden">
      <div className="marquee-container relative w-full">
        <div className="marquee inline-flex whitespace-nowrap text-sm font-medium tracking-wide py-2">
          <span className="mx-16">
            This is a private consultancy self-registration portal for obtaining import export code. Portal fees are consultancy in nature.
          </span>
          <span className="mx-16">
            This is a private consultancy self-registration portal for obtaining import export code. Portal fees are consultancy in nature.
          </span>
        </div>
      </div>
    </div>
  );
}