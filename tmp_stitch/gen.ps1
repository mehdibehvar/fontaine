$ErrorActionPreference = 'Stop'
$out = "C:\Users\LOQ\AppData\Local\Temp\opencode\fontaine\public\herbs"

function Make-Svg([string]$name, [int]$w, [int]$h, [string]$label, [string]$sublabel) {
  $svg = @"
<svg xmlns="http://www.w3.org/2000/svg" width="$w" height="$h" viewBox="0 0 $w $h" role="img" aria-label="$label">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1c1b1b"/>
      <stop offset="100%" stop-color="#0e0e0e"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="38%" r="60%">
      <stop offset="0%" stop-color="#e9c349" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="#e9c349" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="$w" height="$h" fill="url(#bg)"/>
  <rect width="$w" height="$h" fill="url(#glow)"/>
  <g transform="translate($($w/2), $($h*0.42))" fill="none" stroke="#d4af37" stroke-opacity="0.55" stroke-width="2">
    <path d="M0 -90 C 60 -40, 60 40, 0 95 C -60 40, -60 -40, 0 -90 Z"/>
    <path d="M0 -60 C 38 -28, 38 28, 0 62 C -38 28, -38 -28, 0 -60 Z" stroke-opacity="0.35"/>
    <line x1="0" y1="-88" x2="0" y2="92"/>
  </g>
  <text x="50%" y="$($h*0.74)" fill="#e5e2e1" font-family="Playfair Display, serif" font-size="$([math]::Round($w*0.06))" text-anchor="middle">$label</text>
  <text x="50%" y="$($h*0.80)" fill="#d4af37" font-family="Inter, sans-serif" font-size="$([math]::Round($w*0.028))" letter-spacing="2" text-anchor="middle" text-transform="uppercase">$sublabel</text>
</svg>
"@
  Set-Content -LiteralPath (Join-Path $out $name) -Value $svg -Encoding UTF8
}

# Hero (wide)
Make-Svg "hero.svg" 1600 1200 "Fontaine" "Botanical Apothecary"
# Product grid (4/5)
Make-Svg "thyme.svg" 800 1000 "Whole Thyme" "Hand-Dried"
Make-Svg "borage.svg" 800 1000 "Borage Flower" "Ritual Grade"
Make-Svg "vesper.svg" 800 1000 "Vesper Blend" "Sleep Tonic"
Make-Svg "sage.svg" 800 1000 "Desert Sage" "Smudge Ritual"
# Categories (3/4)
Make-Svg "calming.svg" 800 1066 "Calming Herbs" "Lavender"
Make-Svg "digestive.svg" 800 1066 "Digestive Support" "Fennel"
Make-Svg "immune.svg" 800 1066 "Immune Rituals" "Elderberry"
# Ritual essentials (square)
Make-Svg "morning-ritual.svg" 800 800 "Morning Ritual" "Dawn Essences"
Make-Svg "apothecary-tools.svg" 800 800 "Stone Tools" "Basalt"
Make-Svg "spirits.svg" 800 800 "Spirits" "Extracts"
Make-Svg "candles.svg" 800 800 "Sanctuary" "Candles"
# Brand story (4/5)
Make-Svg "brand-story.svg" 800 1000 "Raw Sourcing" "Slow Dried"
# Testimonial avatar (square small)
Make-Svg "elena.svg" 200 200 "EV" "Curator"

# Footer payment logos (simple wordmark pills)
function Make-Pay([string]$name, [string]$word) {
  $svg = @"
<svg xmlns="http://www.w3.org/2000/svg" width="120" height="40" viewBox="0 0 120 40" role="img" aria-label="$word">
  <rect x="1" y="1" width="118" height="38" rx="6" fill="none" stroke="#99907c" stroke-opacity="0.6"/>
  <text x="50%" y="26" fill="#e5e2e1" font-family="Inter, sans-serif" font-size="14" font-weight="600" letter-spacing="1" text-anchor="middle">$word</text>
</svg>
"@
  Set-Content -LiteralPath (Join-Path $out $name) -Value $svg -Encoding UTF8
}
Make-Pay "visa.svg" "VISA"
Make-Pay "mastercard.svg" "MASTERCARD"
Make-Pay "amex.svg" "AMEX"

Write-Host "generated $((Get-ChildItem $out).Count) svg files"
