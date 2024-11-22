"use client";
import * as React from "react";
import { ThemePicker } from "@/components/theme-picker";
import { Button } from "@/components/ui/button";

// Styles
const styles = {
  main: "w-full h-full flex items-center justify-center overflow-hidden",
  footer: "w-full h-16 grid grid-cols-3 gap-6 px-3 flex-shrink-0 items-center justify-center",
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
        </div>
      </main>
      <footer className={styles.footer}>
        <span className="text-left"><Button variant="link">ThemePicker &copy; 2024</Button></span>
        <span className="text-center"><ThemePicker side="top" align="center" alignOffset={0} sideOffset={8} /></span>
        <span className="text-right"><Button variant="link">Made by Saul Mases</Button></span>
      </footer>
    </>
  );
}