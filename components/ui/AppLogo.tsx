import Image from "next/image";
import React from "react";

interface AppLogoProps {
  size?: number;
  className?: string;
  showText?: boolean;
}

export function AppLogo({ size = 36, className = "", showText = true }: AppLogoProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <Image
        src="/assets/images/logo.png"
        alt="DigiAbility Logo"
        width={size}
        height={size}
        className="flex-shrink-0 object-contain rounded-lg"
        priority
      />
      {showText && (
        <span className="font-extrabold text-lg tracking-tight text-foreground group-hover:text-primary transition-colors">
          DigiAbility
        </span>
      )}
    </div>
  );
}
export default AppLogo;
