// =====================================================
//  Edit EVERYTHING here. You don't need to touch anything else.
//
//  Icons: "youtube", "tiktok", "x", "github", "phone", "cube",
//         "sparkle", "mail", "link"  (or any emoji as a fallback)
// =====================================================
window.SITE_CONFIG = {
  title: "ADR1X – Links",
  lang: "en",

  // Profile
  name: "ADR1X",
  tagline: "Developer · Tech Creator",
  bio: "Developer learning cybersecurity & Python. Building with Rust, Java and Lua. Tech videos, Minecraft mods and iOS projects.",
  // GitHub avatar. A local file works too: "avatar.jpg" (put it in the repo)
  avatar: "https://avatars.githubusercontent.com/u/168263721?v=4",

  // Falling stars in the background
  stars: {
    enabled: true,
    count: 110,       // number of stars (more = denser)
    speed: 1,         // 0.5 = slow, 2 = fast
    trail: 1,         // trail length: 0 = none, 1 = normal, 2 = very long
    color: "255,255,255",
    twinkle: true
  },

  // Design
  theme: {
    mode: "dark",
    // Black & white look
    background: "radial-gradient(ellipse at 50% 0%, #242424 0%, #0a0a0a 55%, #000000 100%)",
    cardBackground: "rgba(255, 255, 255, 0.05)",
    cardHover: "rgba(255, 255, 255, 0.13)",
    text: "#ffffff",
    mutedText: "#9b9b9b",
    accent: "#ffffff",
    radius: "18px",
    blur: "7px",        // blur behind the profile box (stars stay visible as soft glows)
    avatarFilter: "grayscale(1) contrast(1.05)",   // "none" = original colors
    font: "'Space Grotesk', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif"
  },

  // Links (order = order on the page). type: "heading" adds a small title.
  links: [
    { title: "YouTube", url: "https://www.youtube.com/@tech.adr1x", icon: "youtube" },
    { title: "TikTok", url: "https://www.tiktok.com/@adr1x.editz", icon: "tiktok" },
    { title: "X / Twitter", url: "https://x.com/ItzAdr1x", icon: "x" },
    { title: "GitHub", url: "https://github.com/ItzAdr1x", icon: "github" },

    { type: "heading", title: "Projects" },
    { title: "Horizon iOS Guide", url: "https://github.com/ItzAdr1x/horizon-ios-guide", icon: "phone" },
    { title: "EnhancedParticles Mod", url: "https://github.com/ItzAdr1x/EnhancedParticles", icon: "sparkle" }
  ],

  // Optional: small round icons below the links
  socials: [],

  footer: "© 2026 ADR1X"
};