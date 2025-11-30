type AdSlotProps = {
  id: string;
  label: string;
  description?: string;
  variant?: "banner" | "inline" | "sidebar";
};

export default function AdSlot({
  id,
  label,
  description,
  variant = "banner",
}: AdSlotProps) {
  const base =
    "border border-dashed border-gray-300 rounded-xl bg-gray-50 flex flex-col justify-center";
  const size =
    variant === "banner"
      ? "h-32 px-6"
      : variant === "sidebar"
      ? "h-48 px-4"
      : "h-32 px-4";

  return (
    <div className={`${base} ${size}`} data-ad-slot={id}>
      <div className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1">
        Ad Slot · {label}
      </div>
      <div className="text-sm text-gray-700">
        {description || "Reserved space for future ad integration."}
      </div>
      <div className="mt-2 text-[10px] text-gray-400">
        This is just a placeholder. In production, this will be wired to an ad
        network or a house sponsorship component.
      </div>
    </div>
  );
}
