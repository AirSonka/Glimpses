# AirSonka Portfolio V4

This version follows the calmer landing-page structure:

1. Sticky navigation at the top
2. One large hero photograph
3. A single horizontal Selected strip with equal-height photographs
4. Four randomly chosen Collections, each with one cover photograph

## Landing page behaviour

- The hero and Selected strip change on reload.
- Selected photographs are chosen from photos marked `Selected` and are still biased toward a visually coherent group.
- The Selected strip is deliberately level and calm: all thumbnails share one height.
- If a photo has a title, it appears only on hover on desktop.
- The four collection cards are picked randomly from your assigned Collections each time the landing page loads.
- If you have fewer than four Collections, all available Collections are shown.
- All Photos and individual Collection pages remain newest-first.

## Editing content

Open `editor.html` to edit:
- Title
- Description
- Location
- Year
- Collections
- Selected yes/no
- About and contact details

For GitHub Pages, upload the complete contents of this folder to the repository root.


## V5 layout update
- Lower, quieter sticky header.
- Selected band now uses a two-row editorial composition: one portrait sets the visual height, with 3 images above and 4 below.
- The portrait and companion photographs are still chosen from Selected and coordinated visually on each reload.

### Landing page portrait crop
The tall image in the Selected band no longer requires a portrait-oriented source photo.
AirSonka now chooses a visually compatible Selected image from the wider pool and crops it
only for the tall landing-page slot using CSS `object-fit: cover`. The original image file
is never altered, and the full photograph remains visible in the lightbox/detail view.

### V7 visual refinements
- AirSonka and the landing-page section headings now use the same clean sans-serif family as the navigation.
- Selected photographs and Collections are intentionally smaller than the AirSonka wordmark.
- The hero image now carries a quiet editable text element on the left. Edit it in `editor.html` under “Hero image text”.


### V8 header / hero treatment
The landing-page tagline is no longer placed over the changing hero photograph.
It now sits directly below **AirSonka** in the sticky header. This keeps the hero image
completely unobstructed and guarantees consistent readability regardless of the selected photo.

You can edit the tagline in `editor.html` under **Tagline below AirSonka**.

### V9 typography
The landing-page headings **SELECTED PHOTOGRAPHS** and **COLLECTIONS** are now set in uppercase with slightly increased letter spacing.
