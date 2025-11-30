export default function Footer() {
  return (
    <footer className="border-t border-gray-200 mt-16">
      <div className="max-w-6xl mx-auto px-6 py-8 text-gray-500 text-sm">
        © {new Date().getFullYear()} AConversationAboutAI.com — All Rights Reserved.
      </div>
    </footer>
  );
}
