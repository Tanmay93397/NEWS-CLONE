// components/AdBanner.js
export default function AdBanner({ text = "Your Ad Here 728x90" }) {
  return (
    <div className="w-full bg-yellow-100 border border-yellow-300 rounded-lg p-3 mb-4 text-center text-sm font-semibold text-yellow-800">
      {text}
    </div>
  );
}
