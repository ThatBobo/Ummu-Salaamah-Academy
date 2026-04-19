import "https://quran.com/widget/embed-widget.js"

export default function Index() {
  return (
    <iframe
      src="https://quran.com/embed/v1?verses=103%3A3&translations=131&mushaf=kfgqpc_v2"
      width="100%"
      data-quran-embed="true"
      allow="clipboard-write"
      frameborder="0">
    </iframe>
  );
}
