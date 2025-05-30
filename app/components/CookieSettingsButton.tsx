'use client';

import { Button } from "@/components/ui/button"

export function CookieSettingsButton() {
  const handleClick = () => {
    // Här kan vi implementera logiken för att öppna cookie-inställningar
    alert('Cookie-inställningar öppnas här');
  };

  return (
    <Button 
      className="bg-[#003366] hover:bg-[#002244]" 
      onClick={handleClick}
    >
      Öppna cookie-inställningar
    </Button>
  );
} 