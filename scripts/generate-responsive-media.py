"""Generate the responsive WebP and AVIF assets used by the public homepage.

The originals remain the source of truth. Run this script after replacing any
listed source image, then rebuild the static site.
"""

from pathlib import Path

from PIL import Image


ROOT = Path(__file__).resolve().parents[1]
ASSETS = ROOT / "public" / "assets"

RESPONSIVE_IMAGES = {
    "bemama_logo_mark.png": (64, 96, 128),
    "hero_planning.png": (96, 128, 160, 256),
    "hero_pregnancy.png": (96, 128, 160, 256),
    "hero_baby.png": (96, 128, 160, 256),
    "hero_child.png": (96, 128, 160, 256),
    "app_daily_plan.png": (256, 320, 400, 512),
    "app_qna_support.png": (256, 320, 400, 512),
    "app_community.png": (256, 320, 400, 512),
    "app_child_growth.png": (256, 320, 400, 512),
    "videos/bemama-care-story-01-poster.webp": (640,),
    "videos/bemama-care-story-02-poster.webp": (360,),
}

HERO_AVIF_IMAGES = (
    "hero-carousel/pregnancy-rest.png",
    "hero-carousel/pregnancy-planning.png",
    "hero-carousel/baby-care.png",
    "hero-carousel/daily-care.png",
    "hero-carousel/child-growth.png",
)


def output_path(source: Path, width: int) -> Path:
    return source.with_name(f"{source.stem}-{width}.webp")


def resize(source: Path, width: int) -> None:
    with Image.open(source) as image:
        if width >= image.width:
            raise ValueError(f"Candidate width {width} is not smaller than {source} ({image.width}px)")
        height = round(image.height * width / image.width)
        resized = image.resize((width, height), Image.Resampling.LANCZOS)
        destination = output_path(source, width)
        resized.save(destination, "WEBP", quality=80, method=6)
        print(f"{destination.relative_to(ROOT)}: {width}x{height}, {destination.stat().st_size} bytes")


def save_hero_avif(source: Path, width: int | None = None) -> None:
    with Image.open(source) as image:
        if width is not None:
            height = round(image.height * width / image.width)
            image = image.resize((width, height), Image.Resampling.LANCZOS)
            destination = source.with_name(f"{source.stem}-{width}.avif")
        else:
            destination = source.with_suffix(".avif")
        image.save(destination, "AVIF", quality=40, speed=6)
        print(f"{destination.relative_to(ROOT)}: {image.width}x{image.height}, {destination.stat().st_size} bytes")


for relative_source, widths in RESPONSIVE_IMAGES.items():
    source = ASSETS / relative_source
    if not source.exists():
        raise FileNotFoundError(source)
    for candidate_width in widths:
        resize(source, candidate_width)

for relative_source in HERO_AVIF_IMAGES:
    source = ASSETS / relative_source
    if not source.exists():
        raise FileNotFoundError(source)
    for candidate_width in (400, 640):
        save_hero_avif(source, candidate_width)
    save_hero_avif(source)
