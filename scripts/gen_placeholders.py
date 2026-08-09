from PIL import Image, ImageDraw, ImageFont
import os

BASE = os.path.join(os.path.dirname(__file__), "..", "public", "images")

PALETTE = ["#1a4a2e", "#2d6a4f", "#52b788", "#3a5a40", "#264653", "#40684f"]

def font(size):
    try:
        return ImageFont.truetype(
            "/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", size
        )
    except Exception:
        return ImageFont.load_default()

def make(path, w, h, label, idx):
    color = PALETTE[idx % len(PALETTE)]
    img = Image.new("RGB", (w, h), color)
    draw = ImageDraw.Draw(img)
    # subtle diagonal accent
    draw.rectangle([0, h - h // 6, w, h], fill="#00000022")
    f = font(max(18, w // 22))
    text = label
    bbox = draw.textbbox((0, 0), text, font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((w - tw) / 2, (h - th) / 2 - bbox[1]), text, font=f, fill="#f8f7f4")
    small_f = font(max(12, w // 45))
    dim_text = f"{w}×{h} placeholder"
    bbox2 = draw.textbbox((0, 0), dim_text, font=small_f)
    tw2 = bbox2[2] - bbox2[0]
    draw.text(((w - tw2) / 2, (h - th) / 2 - bbox[1] + th + 14), dim_text, font=small_f, fill="#f8f7f4aa" if False else "#dfe8e2")
    img.save(path, quality=85)

specs = []

# Hero carousel: 4 wide banners
for i in range(1, 5):
    specs.append((f"hero/hero-{i}.jpg", 1600, 900, f"Hero Slide {i}", i))

# Home gallery preview: 8 square-ish
home_captions = [
    "Sunday Worship", "Community Outreach", "Youth Ministry", "Fellowship",
    "Prayer & Devotion", "Baptism Sunday", "Praise & Worship", "Missions",
]
for i, cap in enumerate(home_captions, start=1):
    specs.append((f"gallery/home-{i}.jpg", 600, 600, cap, i))

# Full photo gallery: 11 images, varied aspect for staggered grid
photo_sizes = [
    (800, 1000), (700, 550), (600, 750), (600, 600), (700, 900),
    (800, 600), (700, 850), (600, 750), (800, 650), (700, 900), (600, 750),
]
for i, (w, h) in enumerate(photo_sizes, start=1):
    specs.append((f"gallery/photo-{i}.jpg", w, h, f"Gallery {i}", i + 3))

# Team: 4 headshots, square
team_names = ["Pastor James", "Pastor Ruth", "Elder Samuel", "Deaconess Mary"]
for i, name in enumerate(team_names, start=1):
    specs.append((f"team/elder-{i}.jpg", 500, 500, name, i))

# About section image + about page hero
specs.append(("about/about-split.jpg", 800, 1000, "About Us", 2))
specs.append(("about/about-hero.jpg", 1600, 700, "Our Story", 5))

for rel, w, h, label, idx in specs:
    full = os.path.join(BASE, rel)
    os.makedirs(os.path.dirname(full), exist_ok=True)
    make(full, w, h, label, idx)

print(f"Generated {len(specs)} placeholder images.")
