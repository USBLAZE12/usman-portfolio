@import 'tailwindcss';
@import 'tw-animate-css';

@custom-variant dark (&:is(.dark *));

:root {
  --background: #f5f1ea;
  --foreground: #171615;

  --card: #f8f5f0;
  --card-foreground: #171615;

  --popover: #fffdf9;
  --popover-foreground: #171615;

  --primary: #8e6e4a;
  --primary-foreground: #f8f5f0;

  --secondary: #efe7df;
  --secondary-foreground: #1f1d1b;

  --muted: #efe7df;
  --muted-foreground: #615b57;

  --accent: #8e6e4a;
  --accent-foreground: #f8f5f0;

  --destructive: #b75a48;
  --destructive-foreground: #fffaf7;

  --border: rgba(23, 22, 21, 0.12);
  --input: rgba(23, 22, 21, 0.04);
  --ring: #8e6e4a;

  --radius: 0.75rem;

  --obsidian: #141312;
  --obsidian-deep: #0d0d0d;
  --bronze: #8e6e4a;
  --bronze-soft: rgba(142, 110, 74, 0.12);
  --slate-muted: #615b57;

  --emerald: #8e6e4a;
  --emerald-glow: rgba(142, 110, 74, 0.22);
}

@theme inline {
  --font-sans: 'Geist', 'Geist Fallback';
  --font-mono: 'Geist Mono', 'Geist Mono Fallback';

  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-card: var(--card);
  --color-card-foreground: var(--card-foreground);
  --color-popover: var(--popover);
  --color-popover-foreground: var(--popover-foreground);
  --color-primary: var(--primary);
  --color-primary-foreground: var(--primary-foreground);
  --color-secondary: var(--secondary);
  --color-secondary-foreground: var(--secondary-foreground);
  --color-muted: var(--muted);
  --color-muted-foreground: var(--muted-foreground);
  --color-accent: var(--accent);
  --color-accent-foreground: var(--accent-foreground);
  --color-destructive: var(--destructive);
  --color-destructive-foreground: var(--destructive-foreground);
  --color-border: var(--border);
  --color-input: var(--input);
  --color-ring: var(--ring);

  --color-obsidian: var(--obsidian);
  --color-obsidian-deep: var(--obsidian-deep);
  --color-bronze-brand: var(--bronze);
  --color-emerald-brand: var(--emerald);

  --radius-sm: calc(var(--radius) - 4px);
  --radius-md: calc(var(--radius) - 2px);
  --radius-lg: var(--radius);
  --radius-xl: calc(var(--radius) + 4px);
}

@layer base {
  * {
    @apply border-border outline-ring/50;
    box-sizing: border-box;
  }

  html,
  body {
    @apply bg-background text-foreground;
    background-color: var(--background);
    color: var(--foreground);
    min-height: 100%;
  }

  body {
    font-feature-settings: 'ss01' 1, 'cv01' 1, 'tnum' 1;
    letter-spacing: -0.01em;
    text-rendering: optimizeLegibility;
    background-image:
      linear-gradient(rgba(23, 22, 21, 0.02) 1px, transparent 1px),
      linear-gradient(90deg, rgba(23, 22, 21, 0.02) 1px, transparent 1px);
    background-size: 32px 32px;
  }

  a,
  button {
    transition:
      color 180ms ease,
      background-color 180ms ease,
      border-color 180ms ease,
      transform 180ms ease,
      box-shadow 180ms ease;
  }

  ::selection {
    background: rgba(142, 110, 74, 0.18);
    color: var(--foreground);
  }

  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
}

@layer utilities {
  .glass {
    background: rgba(255, 255, 255, 0.68);
    border: 1px solid rgba(23, 22, 21, 0.12);
    box-shadow: 0 18px 36px -26px rgba(23, 22, 21, 0.26);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px);
  }

  .glass-strong {
    background: rgba(255, 255, 255, 0.9);
    border: 1px solid rgba(23, 22, 21, 0.14);
    box-shadow: 0 24px 38px -28px rgba(23, 22, 21, 0.35);
  }

  .panel {
    background: rgba(255, 255, 255, 0.62);
    border: 1px solid rgba(23, 22, 21, 0.12);
    box-shadow: 0 18px 36px -28px rgba(23, 22, 21, 0.28);
  }

  .text-bronze-brand {
    color: var(--bronze);
  }

  .bg-bronze-brand {
    background-color: var(--bronze);
  }

  .border-bronze-brand {
    border-color: var(--bronze);
  }

  .text-emerald-brand,
  .text-emerald-brand:hover,
  .text-emerald-brand:focus {
    color: var(--bronze);
  }

  .bg-emerald-brand {
    background-color: var(--bronze);
  }

  .border-emerald-brand {
    border-color: var(--bronze);
  }

  .grid-bg {
    background-image:
      linear-gradient(rgba(23, 22, 21, 0.025) 1px, transparent 1px),
      linear-gradient(90deg, rgba(23, 22, 21, 0.025) 1px, transparent 1px);
    background-size: 52px 52px;
  }

  .noise::after {
    content: '';
    position: absolute;
    inset: 0;
    pointer-events: none;
    opacity: 0.045;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3CfeComponentTransfer%3E%3CfeFuncA type='table' tableValues='0 0.12'/%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)'/%3E%3C/svg%3E");
    mix-blend-mode: multiply;
  }

  @keyframes marquee {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-50%);
    }
  }

  .animate-marquee {
    animation: marquee 24s linear infinite;
  }
}
