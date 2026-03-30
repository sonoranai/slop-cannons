export function EspressoCup() {
  return (
    <svg
      viewBox="0 0 320 380"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className="w-full h-full"
      style={{ opacity: 0.85 }}
    >
      {/* ═══ SAUCER ═══ */}
      <g id="saucer">
        {/* Saucer outer rim */}
        <ellipse cx="155" cy="295" rx="130" ry="42" strokeWidth="2.2" />
        {/* Saucer inner rim */}
        <ellipse cx="155" cy="292" rx="105" ry="34" strokeWidth="1.2" />
        {/* Saucer depth - bottom edge visible */}
        <path d="M25 295 C25 310, 80 330, 155 330 C230 330, 285 310, 285 295" strokeWidth="2.2" />
        {/* Saucer flat surface hatching — concentric curves */}
        <ellipse cx="155" cy="293" rx="118" ry="38" strokeWidth="0.4" opacity="0.3" />
        <ellipse cx="155" cy="293" rx="112" ry="36" strokeWidth="0.35" opacity="0.25" />
        <path d="M48 290 C48 305, 95 318, 155 318 C215 318, 262 305, 262 290" strokeWidth="0.35" opacity="0.25" />
        <path d="M55 292 C55 305, 98 316, 155 316 C212 316, 255 305, 255 292" strokeWidth="0.35" opacity="0.22" />
        <path d="M62 293 C62 304, 102 314, 155 314 C208 314, 248 304, 248 293" strokeWidth="0.35" opacity="0.2" />
        <path d="M70 294 C70 303, 105 312, 155 312 C205 312, 240 303, 240 294" strokeWidth="0.3" opacity="0.18" />
        {/* Saucer rim highlight hatching */}
        <path d="M30 295 C30 278, 85 264, 155 264 C225 264, 280 278, 280 295" strokeWidth="0.3" opacity="0.15" />
        <path d="M35 296 C35 281, 88 268, 155 268 C222 268, 275 281, 275 296" strokeWidth="0.3" opacity="0.12" />
        {/* Saucer bottom shading hatching */}
        <path d="M40 300 C40 312, 90 324, 155 324 C220 324, 270 312, 270 300" strokeWidth="0.4" opacity="0.2" />
        <path d="M50 302 C50 312, 95 322, 155 322 C215 322, 260 312, 260 302" strokeWidth="0.35" opacity="0.18" />
        <path d="M60 304 C60 312, 100 320, 155 320 C210 320, 250 312, 250 304" strokeWidth="0.3" opacity="0.15" />
      </g>

      {/* ═══ CUP BODY ═══ */}
      <g id="cup-body">
        {/* Cup body — left contour */}
        <path d="M90 270 C88 250, 84 220, 82 190 C80 170, 82 158, 88 148" strokeWidth="2.2" />
        {/* Cup body — right contour */}
        <path d="M220 270 C222 250, 226 220, 228 190 C230 170, 228 158, 222 148" strokeWidth="2.2" />
        {/* Cup base ellipse where it meets saucer */}
        <path d="M90 270 C90 280, 120 288, 155 288 C190 288, 220 280, 220 270" strokeWidth="1.5" />
        <path d="M90 270 C90 260, 120 252, 155 252 C190 252, 220 260, 220 270" strokeWidth="0.8" opacity="0.3" />

        {/* Cup body vertical hatching — curved lines following the cylinder form */}
        {/* Left side (denser = shadow) */}
        <path d="M94 265 C92 240, 88 210, 86 185 C85 170, 86 158, 90 150" strokeWidth="0.5" opacity="0.35" />
        <path d="M100 268 C98 242, 94 212, 92 185 C91 170, 92 158, 95 150" strokeWidth="0.45" opacity="0.3" />
        <path d="M106 270 C104 244, 100 214, 98 186 C97 171, 97 159, 100 150" strokeWidth="0.45" opacity="0.28" />
        <path d="M112 271 C110 245, 106 215, 104 187 C103 172, 103 160, 105 151" strokeWidth="0.4" opacity="0.25" />
        <path d="M118 272 C116 246, 112 216, 110 188 C109 173, 109 161, 110 152" strokeWidth="0.4" opacity="0.22" />
        <path d="M124 273 C122 247, 118 217, 116 189 C115 174, 115 162, 116 153" strokeWidth="0.35" opacity="0.2" />
        {/* Center (lighter) */}
        <path d="M130 274 C129 248, 126 218, 124 190 C123 175, 123 163, 124 154" strokeWidth="0.3" opacity="0.12" />
        <path d="M140 275 C139 249, 136 219, 134 190 C133 176, 133 164, 134 155" strokeWidth="0.3" opacity="0.1" />
        <path d="M155 276 C154 250, 152 220, 151 191 C150 176, 150 164, 151 155" strokeWidth="0.25" opacity="0.08" />
        <path d="M170 275 C170 249, 168 219, 167 190 C166 176, 167 164, 168 155" strokeWidth="0.3" opacity="0.1" />
        {/* Right side (medium density) */}
        <path d="M180 274 C180 248, 180 218, 180 190 C180 175, 181 163, 182 155" strokeWidth="0.3" opacity="0.15" />
        <path d="M190 273 C190 247, 192 217, 193 190 C194 175, 194 163, 194 155" strokeWidth="0.35" opacity="0.18" />
        <path d="M200 271 C201 246, 204 216, 206 189 C207 174, 207 162, 206 154" strokeWidth="0.35" opacity="0.2" />
        <path d="M208 269 C210 245, 214 215, 216 189 C218 174, 217 162, 215 153" strokeWidth="0.4" opacity="0.22" />
        <path d="M214 267 C216 244, 220 214, 222 189 C224 174, 223 162, 220 153" strokeWidth="0.4" opacity="0.25" />

        {/* Horizontal form hatching on cup body — subtle curves showing roundness */}
        <path d="M92 260 C92 252, 120 246, 155 246 C190 246, 218 252, 218 260" strokeWidth="0.3" opacity="0.1" />
        <path d="M86 230 C86 222, 116 216, 155 216 C194 216, 224 222, 224 230" strokeWidth="0.3" opacity="0.1" />
        <path d="M84 200 C84 193, 114 188, 155 188 C196 188, 226 193, 226 200" strokeWidth="0.3" opacity="0.1" />
        <path d="M84 175 C84 168, 112 163, 155 163 C198 163, 226 168, 226 175" strokeWidth="0.3" opacity="0.08" />
      </g>

      {/* ═══ CUP RIM ═══ */}
      <g id="cup-rim">
        {/* Outer rim ellipse */}
        <ellipse cx="155" cy="148" rx="68" ry="24" strokeWidth="2.2" />
        {/* Inner rim ellipse (showing rim thickness) */}
        <ellipse cx="155" cy="150" rx="60" ry="20" strokeWidth="1" />
        {/* Rim thickness shading */}
        <path d="M95 150 C95 142, 120 135, 155 135 C190 135, 215 142, 215 150" strokeWidth="0.4" opacity="0.15" />
        <path d="M99 150 C99 143, 122 137, 155 137 C188 137, 211 143, 211 150" strokeWidth="0.35" opacity="0.12" />
      </g>

      {/* ═══ COFFEE SURFACE ═══ */}
      <g id="coffee">
        {/* Dark coffee fill */}
        <ellipse cx="155" cy="152" rx="57" ry="18" fill="currentColor" opacity="0.75" stroke="none" />
        {/* Concentric spiral ripples — lighter lines on dark surface */}
        <ellipse cx="155" cy="152" rx="50" ry="15.5" strokeWidth="0.6" opacity="0.2" stroke="#FAF9F6" />
        <ellipse cx="155" cy="152" rx="43" ry="13" strokeWidth="0.5" opacity="0.2" stroke="#FAF9F6" />
        <ellipse cx="155" cy="152" rx="36" ry="10.5" strokeWidth="0.5" opacity="0.2" stroke="#FAF9F6" />
        <ellipse cx="155" cy="152" rx="29" ry="8.5" strokeWidth="0.5" opacity="0.2" stroke="#FAF9F6" />
        <ellipse cx="155" cy="152" rx="22" ry="6.5" strokeWidth="0.45" opacity="0.18" stroke="#FAF9F6" />
        <ellipse cx="155" cy="152" rx="16" ry="4.8" strokeWidth="0.4" opacity="0.16" stroke="#FAF9F6" />
        <ellipse cx="155" cy="152" rx="10" ry="3.2" strokeWidth="0.4" opacity="0.14" stroke="#FAF9F6" />
        <ellipse cx="155" cy="152" rx="5" ry="1.6" strokeWidth="0.35" opacity="0.12" stroke="#FAF9F6" />
        {/* Tiny center dot — the spiral origin */}
        <circle cx="155" cy="152" r="1.5" fill="currentColor" opacity="0.5" stroke="none" />
      </g>

      {/* ═══ HANDLE ═══ */}
      <g id="handle">
        {/* Handle outer curve */}
        <path d="M88 175 C60 170, 38 185, 35 210 C32 235, 48 258, 88 255" strokeWidth="2.2" />
        {/* Handle inner curve */}
        <path d="M90 190 C72 187, 56 196, 54 212 C52 228, 62 243, 90 240" strokeWidth="1.5" />
        {/* Handle cross-hatching for depth */}
        <path d="M85 180 C65 177, 48 188, 45 207 C42 226, 54 248, 86 248" strokeWidth="0.4" opacity="0.25" />
        <path d="M87 185 C68 182, 52 192, 49 209 C46 228, 58 246, 88 245" strokeWidth="0.4" opacity="0.2" />
        {/* Hatching across handle width */}
        <path d="M78 178 C68 176, 58 180, 72 183" strokeWidth="0.35" opacity="0.2" />
        <path d="M70 188 C58 186, 50 192, 64 196" strokeWidth="0.35" opacity="0.2" />
        <path d="M60 200 C48 200, 42 207, 55 210" strokeWidth="0.35" opacity="0.22" />
        <path d="M56 212 C42 214, 38 222, 52 224" strokeWidth="0.35" opacity="0.22" />
        <path d="M58 225 C46 228, 44 236, 58 237" strokeWidth="0.35" opacity="0.2" />
        <path d="M65 238 C54 240, 52 247, 68 248" strokeWidth="0.35" opacity="0.18" />
      </g>

      {/* ═══ STEAM ═══ */}
      <g id="steam" strokeWidth="1.5" opacity="0.5">
        {/* Left wisp */}
        <path
          d="M140 130 C132 115, 142 100, 134 85 C126 70, 138 52, 128 32"
          strokeWidth="1.8"
          opacity="0.4"
        />
        <path
          d="M140 130 C132 115, 142 100, 134 85 C126 70, 138 52, 128 32"
          strokeWidth="0.6"
          opacity="0.2"
          transform="translate(3, -2)"
        />
        {/* Right wisp */}
        <path
          d="M168 128 C178 110, 166 92, 176 74 C186 56, 172 38, 182 18"
          strokeWidth="1.8"
          opacity="0.35"
        />
        <path
          d="M168 128 C178 110, 166 92, 176 74 C186 56, 172 38, 182 18"
          strokeWidth="0.6"
          opacity="0.15"
          transform="translate(-3, -2)"
        />
        {/* Center thin wisp */}
        <path
          d="M155 132 C150 118, 158 105, 152 88 C146 72, 156 58, 150 40"
          strokeWidth="1"
          opacity="0.25"
        />
      </g>

      {/* ═══ EXTRA DETAIL — cup body shadow on saucer ═══ */}
      <g id="cup-shadow-on-saucer" opacity="0.12">
        <path d="M95 275 C95 280, 120 286, 155 286 C190 286, 215 280, 215 275" strokeWidth="1.5" />
        <path d="M100 278 C100 282, 122 287, 155 287 C188 287, 210 282, 210 278" strokeWidth="1" />
      </g>

      {/* ═══ HIGHLIGHT — left rim catch light ═══ */}
      <g id="highlight" opacity="0.06" stroke="none" fill="currentColor">
        <path d="M92 155 C92 145, 110 138, 130 138 L128 148 C110 148, 94 152, 92 155 Z" />
      </g>
    </svg>
  );
}
