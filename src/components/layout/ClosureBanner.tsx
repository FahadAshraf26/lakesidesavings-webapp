import { useEffect } from "react";
import { AlertCircle } from "lucide-react";

const ClosureBanner = () => {
  const isNewYearsDayTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const month = tomorrow.getMonth(); // 0-indexed (0 = January)
    const date = tomorrow.getDate();
    return month === 0 && date === 1; // January 1st
  };

  const isClosingTomorrow = isNewYearsDayTomorrow();

  useEffect(() => {
    // Set CSS variable for banner height to adjust header position
    if (isClosingTomorrow) {
      document.documentElement.style.setProperty("--banner-height", "2.5rem");
    } else {
      document.documentElement.style.setProperty("--banner-height", "0px");
    }
  }, [isClosingTomorrow]);

  if (!isClosingTomorrow) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-amber-500 text-white py-2 px-4 text-center text-sm font-medium">
      <div className="container mx-auto flex items-center justify-center gap-2">
        <AlertCircle className="w-4 h-4" />
        <span>We will be closed tomorrow (New Year's Day). We'll be back with regular hours on Thursday!</span>
      </div>
    </div>
  );
};

export default ClosureBanner;
