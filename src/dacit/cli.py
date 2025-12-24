from __future__ import annotations

import argparse
from pathlib import Path

from .docs import get_documents


def main() -> None:
    parser = argparse.ArgumentParser(description="List DACIT documentation pages.")
    parser.add_argument(
        "--base-dir",
        type=Path,
        default=_default_base_dir(),
        help="Repository root directory (defaults to this package root).",
    )
    args = parser.parse_args()

    documents = get_documents(args.base_dir)
    if not documents:
        print("No documentation found.")
        return

    for document in documents:
        relative_path = document.path.relative_to(args.base_dir)
        print(f"- {document.title} ({relative_path})")


def _default_base_dir() -> Path:
    return Path(__file__).resolve().parents[2]
