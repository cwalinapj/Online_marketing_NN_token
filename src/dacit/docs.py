from __future__ import annotations

from dataclasses import dataclass
from pathlib import Path


@dataclass(frozen=True)
class Document:
    path: Path
    title: str


def get_documents(base_dir: Path) -> list[Document]:
    """Return documentation entries located under base_dir/docs."""
    docs_dir = base_dir / "docs"
    if not docs_dir.exists():
        return []

    documents: list[Document] = []
    for doc_path in sorted(docs_dir.glob("*.md")):
        title = _extract_title(doc_path)
        documents.append(Document(path=doc_path, title=title))

    return documents


def _extract_title(doc_path: Path) -> str:
    """Extract the first markdown title from a file."""
    for line in doc_path.read_text(encoding="utf-8").splitlines():
        if line.startswith("# "):
            return line.replace("# ", "", 1).strip()
    return doc_path.stem.replace("-", " ").title()
