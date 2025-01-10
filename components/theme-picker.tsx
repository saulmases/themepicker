"use client";

import React from "react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Monitor, Sun, Moon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  RadioGroup,
  RadioGroupItem
} from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

interface ThemePickerProps {
  children: React.ReactNode
  side?: "top" | "right" | "bottom" | "left"
  align?: "center" | "end" | "start"
  sideOffset?: number
  alignOffset?: number
};

const colors = [
  { name: "Neutral", value: "stone", code: "bg-stone-500" },
  { name: "Cyan", value: "cyan", code: "bg-cyan-500" },
  { name: "Sky", value: "sky", code: "bg-sky-500" },
  { name: "Blue", value: "blue", code: "bg-blue-500" },
  { name: "Indigo", value: "indigo", code: "bg-indigo-500" },
  { name: "Purple", value: "purple", code: "bg-purple-500" },
  { name: "Fuchsia", value: "fuchsia", code: "bg-fuchsia-500" },
  { name: "Pink", value: "pink", code: "bg-pink-500" },
  { name: "Red", value: "red", code: "bg-red-500" },
  { name: "Orange", value: "orange", code: "bg-orange-500" },
  { name: "Yellow", value: "yellow", code: "bg-yellow-500" },
  { name: "Lime", value: "lime", code: "bg-lime-500" },
  { name: "Green", value: "green", code: "bg-green-500" },
  { name: "Emerald", value: "emerald", code: "bg-emerald-500" },
  { name: "Teal", value: "teal", code: "bg-teal-500" },
];

export const ThemePicker = ({
  children,
  side,
  align,
  sideOffset,
  alignOffset,
}: ThemePickerProps) => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [color, setColor] = useState(colors[0]);

  useEffect(() => {
    setMounted(true);
    const savedColorValue = localStorage.getItem("selectedColor") || "stone";
    const savedColor = colors.find((c) => c.value === savedColorValue) || colors[0];
    setColor(savedColor);
    document.documentElement.setAttribute("data-color", savedColor.value);
  }, []);

  const handleColorChange = (newColorValue: string) => {
    const newColor = colors.find((c) => c.value === newColorValue);
    if (newColor) {
      setColor(newColor);
      localStorage.setItem("selectedColor", newColorValue);
      document.documentElement.setAttribute("data-color", newColorValue);
    }
  };

  if (!mounted) {
    return null;
  }

  // Styles
  const styles = {
    popover: {
      content: "flex flex-col flex-wrap gap-3 items-center justify-center w-auto"
    },
    theme: {
      group: "flex flex-row gap-2",
      item: "inline-flex items-center justify-center p-0 w-8 h-8 rounded-full flex-shrink-0 cursor-pointer ring-offset-background transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&:has([data-state=checked])]:bg-muted aria-[checked=true]:bg-muted",
      icon: "w-5 h-5 cursor-pointer",
    },
    color: {
      group: "grid grid-cols-5 gap-1",
      item: "inline-flex items-center justify-center p-0 w-5 h-5 rounded-full flex-shrink-0 cursor-pointer ring-offset-background transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&:has([data-state=checked])]:bg-muted aria-[checked=true]:bg-muted",
      icon: "h-2.5 w-2.5 rounded-full flex-shrink-0 cursor-pointer",
    }
  };

  return (
    <Popover>
      <PopoverTrigger asChild>
        {children}
      </PopoverTrigger>
      <PopoverContent
        className={styles.popover.content}
        side={side}
        align={align}
        sideOffset={sideOffset}
        alignOffset={alignOffset}
      >
        <RadioGroup className={styles.theme.group}>
          <div className={styles.theme.item} aria-checked={theme === "system"} onClick={() => setTheme("system")}>
            <RadioGroupItem className="peer sr-only" value="system" id="system" />
            <Label htmlFor="system"><Monitor className={styles.theme.icon} /></Label>
          </div>
          <div className={styles.theme.item} aria-checked={theme === "light"} onClick={() => setTheme("light")}>
            <RadioGroupItem className="peer sr-only" value="light" id="light" />
            <Label htmlFor="light"><Sun className={styles.theme.icon} /></Label>
          </div>
          <div className={styles.theme.item} aria-checked={theme === "dark"} onClick={() => setTheme("dark")}>
            <RadioGroupItem className="peer sr-only" value="dark" id="dark" />
            <Label htmlFor="dark"><Moon className={styles.theme.icon} /></Label>
          </div>
        </RadioGroup>
        <RadioGroup className={styles.color.group}>
          {colors.map((c) => (
            <div className={styles.color.item}
              key={c.value}
              aria-checked={color.value === c.value}
              onClick={() => handleColorChange(c.value)}
            >
              <RadioGroupItem className="peer sr-only" value={c.code} id={c.code} />
              <Label htmlFor={c.code} className={`${styles.color.icon} ${c.code}`} />
            </div>
          ))}
        </RadioGroup>
      </PopoverContent>
    </Popover>
  )
}
