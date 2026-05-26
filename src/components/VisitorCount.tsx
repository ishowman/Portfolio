import { getOrCreateFingerprint } from "@/lib/fingerprint";
import { UserRound } from "lucide-react";
import { useEffect, useState } from "react";
import { Skeleton } from "./ui/skeleton";

const VisitorCount = () => {
  const [count, setCount] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;

    const track = async () => {
      const visitor_id = getOrCreateFingerprint();

      try {
        const res = await fetch("/api/visitors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ visitor_id }),
        });

        if (!res.ok) {
          return;
        }

        const data = (await res.json()) as { count?: number };
        if (active && typeof data.count === "number") {
          setCount(data.count);
        }
      } catch {
        // Keep the footer quiet if the API is unavailable.
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    };

    track();

    return () => {
      active = false;
    };
  }, []);

  const getOrdinal = (n: number) => {
    const v = n % 100;
    if (v >= 11 && v <= 13) return "th";
    switch (n % 10) {
      case 1:
        return "st";
      case 2:
        return "nd";
      case 3:
        return "rd";
      default:
        return "th";
    }
  };

  return (
    <div className="flex items-center justify-center rounded-lg">
      {loading ? (
        <div className="flex items-center gap-2" aria-busy="true">
          <Skeleton className="size-4 rounded-full" />
          <div className="space-y-1">
            <Skeleton className="h-3 w-28" />
            <Skeleton className="h-3 w-20" />
          </div>
        </div>
      ) : count === null ? (
        <p className="text-sm text-muted-foreground">
          <span className="inline-block align-middle tracking-[0.35em]">
            ...
          </span>
        </p>
      ) : (
        <div className="flex items-center gap-2">
          <UserRound size={18} className="text-muted-foreground" />
          <p className="text-muted-foreground">
            You are{" "}
            <span className="text-foreground text-base">
              {count} <sup>{getOrdinal(count)}</sup>
            </span>{" "}
            visitor
          </p>
        </div>
      )}
    </div>
  );
};

export default VisitorCount;
