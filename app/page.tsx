"use client";
import * as React from "react";
import { ThemePicker } from "@/components/theme-picker";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Paintbrush } from "lucide-react";

// Styles
const styles = {
  main: "w-full h-full flex items-center justify-center overflow-hidden",
  footer: "w-full h-16 grid grid-cols-1 gap-6 px-3 flex-shrink-0 items-center justify-center text-center",
};

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-0">
            <span className="text-xl font-semibold text-primary cursor-default">NextJS + Shadcn</span>
            <h1 className="text-4xl font-bold text-primary cursor-default">ThemePicker</h1>
          </div>
          <ThemePicker side="bottom" align="center" alignOffset={0} sideOffset={8}>
            <Button className="gap-2">
              <Paintbrush className="w-4 h-4" />
              <span>Customize</span>
            </Button>
          </ThemePicker>
        </div>
      </main>
      <footer className={styles.footer}>
        <Button asChild variant="link">
          <Link href="https://saulmases.com" className="text-xs font-medium text-primary">Made by saulmases.com</Link>
        </Button>
      </footer>
    </>
  );
}