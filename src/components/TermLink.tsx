import Link from 'next/link';
import type { ReactNode } from 'react';

interface TermLinkProps {
  href: string;
  children: ReactNode;
}

/** Visual style for auto-linked glossary terms inside entry prose. */
export function TermLink({ href, children }: TermLinkProps) {
  return (
    <Link
      href={href}
      className="border-b border-forest bg-gradient-to-b from-rule-soft to-rule-soft bg-[length:100%_0%] bg-no-repeat px-px text-forest no-underline transition-[background-size] duration-fast hover:bg-[length:100%_100%]"
    >
      {children}
    </Link>
  );
}
