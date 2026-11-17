# Art direction and design decisions

## Directions considered

| Direction | Character | Strength | Trade-off |
|---|---|---|---|
| Living Atelier — selected | Warm editorial engineering studio; exact portrait, tactile objects, typographic confidence | Best connection between the existing green/ivory identity and the person behind the engineering | Needs disciplined art direction; decorative objects must not masquerade as real product evidence |
| Signal Garden | Organic branching systems, leaves, connected paths, softer layouts | Natural continuation of the green palette | Can make AI engineering feel too abstract and decorative |
| Engineering Theatre | Dramatic spatial transitions, interactive project stages, cinematic scrolling | High spectacle and memorable motion | Can delay access to content, increase motion burden, and weaken phone usability |

The selected edition borrows the theatre direction's layered entrance and the garden direction's soft organic color, while keeping a readable editorial structure.

## Portrait composition

The original 941 × 1672 transparent PNG includes substantial transparent padding. The layout deliberately sizes and positions the complete asset so the head emerges above the green arch while the torso is framed below. The face remains unobscured. A slim orbit sits behind the person; a cream nameplate sits in front. Responsive offsets are tuned at phone, tablet, and desktop widths.

No facial generation, retouching, recoloring, or replacement was used. SHA-256 of the original portrait:

`266CD71B2E06977749512DA527AD08F8B23576212FE610521A3FD225755A5651`

## Visual system

- Paper `#F3EFE5`; forest `#183E32`; sage `#BDD2B6`.
- Inter for reading; Space Grotesk for display; Instrument Serif for expressive italic phrases.
- Wide margins, fine dividers, a deliberately offset gallery, and alternating light/dark sections.
- The conceptual object illustrations use paper, glass, stone, ceramic, and brass to connect digital engineering with physical materials.
- Supporting text was darkened during review for better contrast.

## Motion choreography

1. Header and page structure are immediately available.
2. Hero copy enters over 800 ms with small staggered delays; it is not held behind a typing sequence.
3. The arch settles over 1.2 seconds; the portrait rises 28 px from 97% scale over 1.15 seconds.
4. The nameplate settles into a slight angle. The face and person do not continuously bob.
5. Fine mouse movement adds at most 4 px horizontal and 3 px vertical portrait movement; touch stays composed.
6. Section reveals run once on entry. Project images subtly enlarge on hover. The conceptual lens has a slow 8 px float.
7. System selection uses brief transitions to explain a change in diagram.

The visible motion control stops CSS animation, active reveal animations, portrait pointer transforms, and smooth scrolling. OS reduced-motion preferences are respected automatically. No scroll hijacking is used.

## Content boundaries

Source: original `lib/constants/site.ts`, `projects.ts`, `achievements.ts`, `experience.ts`, `skills.ts`, and the original research section.

All six original projects remain accessible. Smart Bin and Microplastic Detection remain concepts. The Local LLM project is described as exploration. No accuracy, adoption, deployment, employment, availability, team-size, or client claims were added. Recognition remains Createathon 2024 Winner and AI Art Biennale Organizer. The existing LinkedIn URL is preserved but has not been independently verified. Contact opens an email draft or copies the address; the site does not claim to send mail.

## Asset provenance and prompts

The two project illustrations were generated with the built-in image-generation tool in generation mode (opaque backgrounds), then copied into this worktree. They are described as concept artwork in the project notes. The microplastic lens is a purpose-built SVG illustration in the page component. No external stock images or additional framework dependencies were introduced.

### Document intelligence

Output: `public/images/studio/knowledge-art.png`.

Prompt: Create a premium editorial 3D still-life illustration for an AI engineer's portfolio project about private document intelligence. Landscape composition 3:2. A sculptural stack of thin warm ivory paper sheets and frosted translucent glass panels suspended at a very slight angle above a dark forest-green architectural plinth. A single delicate brass filament threads between three sheets, suggesting retrieval and connected knowledge. One small glass sphere catches warm light. Rich tactile surfaces, museum-quality product photography, beautiful realistic shadows, subtle film grain, soft side lighting, restrained analog-futurist mood. Palette: very dark forest green #183E32, warm ivory #F3EFE5, muted brass #BCA37F. Full-bleed background deep moss green; object occupies center-right with comfortable negative space on the left. Visually sophisticated, striking, physically grounded. No lettering, no text, no logos, no UI, no people, no robot, no neon glow, no purple, no watermark. This is conceptual project cover artwork, not a screenshot of software.

### Reunify

Output: `public/images/studio/reunify-art.png`.

Prompt: Create a premium editorial 3D still-life illustration, landscape 3:2, for an AI engineer's portfolio project about reconnecting missing people and their families. This is symbolic conceptual artwork, not an image of an actual device or product. Two graceful sculptural interlocking arch forms made from warm ivory ceramic and deep sage green stone lean toward each other on a warm pale limestone surface. A very fine brass filament traces a beautiful curve connecting the centers of the two arches. The negative space between them suggests connection and a human embrace without depicting faces or literal people. One translucent glass disc behind the arches creates a beautiful soft reflection. Art-directed museum product photography, incredibly tactile subtle textures, refined luxury editorial composition, natural warm sunlight from upper left, rich long soft shadows. Objects centered and large, plenty of quiet background. Palette warm cream #F3EFE5, sage #8DAB8C, deep forest #183E32, muted brass #BCA37F. Visually poetic, sophisticated, optimistic and architectural. NO text, NO logos, NO faces, NO people, NO UI, NO neon, NO robot, NO watermark.
