import { useState } from "react";
import { Heart, ArrowRight, X } from "lucide-react";
import { useDonate, DonateMode } from "@/context/DonateContext";
import { Button } from "@/components/ui/button";

const PRESET_AMOUNTS = [25, 50, 100, 250];

const IMPACT: Record<number, string> = {
  25: "Provides emergency hygiene supplies for one family.",
  50: "Covers a week of emergency meals for a household.",
  100: "Funds shelter referral support for one person in crisis.",
  250: "Supports a full month of care coordination for a family.",
};

export function DonateModal() {
  const { isOpen, defaultMode, closeDonate } = useDonate();
  const [mode, setMode] = useState<DonateMode>(defaultMode);
  const [selected, setSelected] = useState<number | "custom">(50);
  const [customAmount, setCustomAmount] = useState("");

  if (!isOpen) return null;

  const amount =
    selected === "custom"
      ? parseFloat(customAmount) || 0
      : selected;

  const impactText =
    selected !== "custom" && IMPACT[selected]
      ? IMPACT[selected]
      : amount > 0
      ? "Every dollar goes directly toward community support."
      : null;

  const paymentHref =
    `mailto:info@dreamscompassion.org?subject=${encodeURIComponent(
      `${mode === "monthly" ? "Monthly " : ""}Donation — $${amount}`
    )}&body=${encodeURIComponent(
      `I would like to make a ${mode === "monthly" ? "monthly" : "one-time"} donation of $${amount} to Dreams Compassion. Please send me payment instructions.`
    )}`;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      onClick={closeDonate}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-primary px-8 pt-8 pb-10 text-white relative overflow-hidden">
          <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/5" />
          <div className="absolute -bottom-10 -left-10 w-48 h-48 rounded-full bg-secondary/10" />
          <button
            onClick={closeDonate}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-3">
              <Heart className="w-5 h-5 text-secondary" fill="currentColor" />
              <span className="text-secondary font-bold text-xs uppercase tracking-widest">
                Make a difference
              </span>
            </div>
            <h2 className="text-2xl font-serif font-bold leading-snug">
              Your gift delivers hope<br />to those who need it most.
            </h2>
          </div>
        </div>

        <div className="px-8 py-6">
          <div className="flex rounded-full border border-border bg-background-alt p-1 mb-6">
            {(["one-time", "monthly"] as DonateMode[]).map((m) => (
              <button
                key={m}
                onClick={() => setMode(m)}
                className={`flex-1 py-2 rounded-full text-sm font-semibold transition-all ${
                  mode === m
                    ? "bg-primary text-white shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {m === "one-time" ? "One-time" : "Monthly"}
              </button>
            ))}
          </div>

          <p className="text-xs uppercase tracking-widest font-bold text-muted-foreground mb-3">
            Select an amount
          </p>
          <div className="grid grid-cols-4 gap-2 mb-3">
            {PRESET_AMOUNTS.map((amt) => (
              <button
                key={amt}
                onClick={() => setSelected(amt)}
                className={`py-3 rounded-xl text-sm font-bold transition-all border-2 ${
                  selected === amt
                    ? "border-primary bg-primary text-white"
                    : "border-border bg-white text-foreground hover:border-primary/50"
                }`}
              >
                ${amt}
              </button>
            ))}
          </div>

          <button
            onClick={() => setSelected("custom")}
            className={`w-full py-3 rounded-xl text-sm font-semibold transition-all border-2 mb-1 ${
              selected === "custom"
                ? "border-primary"
                : "border-border hover:border-primary/50"
            }`}
          >
            {selected === "custom" ? (
              <div className="flex items-center gap-1 justify-center">
                <span className="text-muted-foreground">$</span>
                <input
                  autoFocus
                  type="number"
                  min="1"
                  placeholder="Enter amount"
                  value={customAmount}
                  onChange={(e) => setCustomAmount(e.target.value)}
                  onClick={(e) => e.stopPropagation()}
                  className="w-32 bg-transparent outline-none text-center font-bold text-foreground placeholder:text-muted-foreground"
                />
              </div>
            ) : (
              <span className="text-muted-foreground">Other amount</span>
            )}
          </button>

          {impactText && (
            <p className="text-xs text-secondary font-medium mt-3 mb-4 text-center">
              {impactText}
            </p>
          )}

          <a
            href={paymentHref}
            className={`mt-4 inline-flex items-center justify-center gap-2 w-full py-4 rounded-full font-bold text-white transition-all text-sm ${
              amount > 0
                ? "bg-primary hover:bg-primary/90"
                : "bg-primary/40 pointer-events-none"
            }`}
          >
            <Heart className="w-4 h-4" fill="currentColor" />
            {mode === "monthly"
              ? `Give $${amount || "—"}/month`
              : `Donate $${amount || "—"}`}
            <ArrowRight className="w-4 h-4" />
          </a>

          <p className="text-center text-xs text-muted-foreground mt-3">
            Secure &amp; confidential · 100% goes to community support
          </p>
        </div>
      </div>
    </div>
  );
}
