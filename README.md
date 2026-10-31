# go.p3vi.com

Short links for P3 Smart Reorder WhatsApp messages (GitHub Pages, custom domain go.p3vi.com).

- `/.well-known/assetlinks.json` lets the P3 Store Android app (com.p3vi.store) open `https://go.p3vi.com/reorder-…` links directly (verified Android App Links).
- Without the app, the page forwards `go.p3vi.com/reorder-<digits>/<id>?…` to `https://www.p3vi.com/collections/reorder-<digits>/<id>?…` (query kept, so `utm_source=whatsapp` still reaches the store's tracking).
- Anything else forwards to https://www.p3vi.com/.

DNS (Wix, p3vi.com): CNAME `go` -> `p3-oss.github.io`.
