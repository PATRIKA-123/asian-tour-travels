// ──────────────────────────────────────────────────────────────────────────
// MountainDivider — the site's signature motif.
// Layered, receding mountain ridges that echo the Himalayan foothills of the
// North East. Used to transition between sections instead of flat dividers.
// ──────────────────────────────────────────────────────────────────────────

export default function MountainDivider({ flip = false, className = '', tone = 'forest' }) {
  const palettes = {
    forest: ['#74A892', '#40916C', '#2D6A4F', '#1B4332'],
    mountain: ['#7FA8C9', '#457B9D', '#1D3557', '#152844'],
    mist: ['#E3E8E0', '#D8E0D4', '#CBD6C6', '#BCCBB6'],
  }
  const c = palettes[tone] || palettes.forest

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none w-full overflow-hidden leading-[0] ${
        flip ? 'rotate-180' : ''
      } ${className}`}
    >
      <svg
        viewBox="0 0 1440 160"
        preserveAspectRatio="none"
        className="h-[60px] w-full sm:h-[90px] md:h-[120px]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,160 L0,96 L180,52 L320,104 L520,40 L700,108 L900,56 L1100,110 L1280,64 L1440,104 L1440,160 Z"
          fill={c[0]}
          opacity="0.55"
        />
        <path
          d="M0,160 L0,116 L200,72 L380,120 L560,66 L760,124 L960,78 L1160,128 L1340,88 L1440,120 L1440,160 Z"
          fill={c[1]}
          opacity="0.7"
        />
        <path
          d="M0,160 L0,132 L240,100 L460,140 L680,98 L900,142 L1120,104 L1340,140 L1440,124 L1440,160 Z"
          fill={c[2]}
          opacity="0.85"
        />
        <path
          d="M0,160 L0,150 L300,128 L560,152 L820,130 L1080,154 L1320,134 L1440,150 L1440,160 Z"
          fill={c[3]}
        />
      </svg>
    </div>
  )
}
