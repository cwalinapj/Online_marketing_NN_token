from pathlib import Path

from dacit.docs import get_documents


def test_documents_include_investor_and_developer_pages() -> None:
    base_dir = Path(__file__).resolve().parents[1]
    documents = get_documents(base_dir)
    doc_paths = {doc.path.name for doc in documents}

    assert "investors.md" in doc_paths
    assert "developers.md" in doc_paths


def test_documents_have_titles() -> None:
    base_dir = Path(__file__).resolve().parents[1]
    documents = get_documents(base_dir)

    assert documents, "Expected documentation to be discovered"
    assert all(doc.title for doc in documents)
