"use client";
import { useLocale } from "@/contexts/localeProvider";
import Link, { LinkProps } from "next/link";
import React from "react";

interface LocaleLinkProps extends LinkProps {
  className?: string;
  href: string;
  children: React.ReactNode;
  autoFocus?: boolean;
  legacyBehavior?: boolean;
  passHref?: boolean;
  ref?: any;
  style?: any;
}

export default function LocaleLink({
  className,
  href,
  children,
  autoFocus = false,
  legacyBehavior = false,
  passHref = false,
  ref,
  style,
}: LocaleLinkProps) {
  const locale = useLocale();
  return (
    <Link
      style={style}
      ref={ref}
      legacyBehavior={legacyBehavior}
      passHref={passHref}
      autoFocus={autoFocus}
      href={`/${locale}/${href}`}
      className={className}
    >
      {children}
    </Link>
  );
}
