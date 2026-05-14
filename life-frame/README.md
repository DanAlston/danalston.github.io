# Life Frame

Static prototype for an album builder focused on baby, wedding, and travel photo books.

Open `index.html` directly, or publish this folder as a static site.

## AI backend

The Server Analyze button is wired to the Zo API route:

`https://fx.zo.computer/api/life-frame/analyze-photos`

The route expects `NVIDIA_API_KEY` and calls NVIDIA NIM with:

`mistralai/mistral-large-3-675b-instruct-2512`

Uploaded photos are compressed twice in the browser: a larger copy for album preview and a small AI preview for faster multimodal analysis.
