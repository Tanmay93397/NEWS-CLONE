// components/AdBox.js
export default function AdBox({ text = "Sidebar Ad 300x250" }) {
  return (
    <div className="bg-yellow-100 border border-yellow-300 rounded-lg p-3 text-center text-xs font-semibold text-yellow-800">
      {text}
    </div>
  );
}
