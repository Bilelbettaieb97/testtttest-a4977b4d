import { useState, useEffect } from "react";
import { CheckCircle, X } from "lucide-react";

const notifications = [
  { name: "Sophie M.", action: "a reçu son site vitrine", city: "Paris", time: "il y a 2h" },
  { name: "Thomas L.", action: "a lancé sa boutique en ligne", city: "Lyon", time: "il y a 5h" },
  { name: "Marie D.", action: "a demandé un devis", city: "Bordeaux", time: "il y a 12h" },
  { name: "Alexandre C.", action: "a réservé un appel", city: "Marseille", time: "il y a 1j" },
  { name: "Julie B.", action: "a reçu son landing page", city: "Toulouse", time: "il y a 1j" },
  { name: "Pierre R.", action: "a doublé son trafic SEO", city: "Nantes", time: "il y a 2j" },
];

const SocialProofToast = () => {
  const [current, setCurrent] = useState(-1);
  const [isVisible, setIsVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;

    // Start after 8 seconds
    const startTimer = setTimeout(() => {
      setCurrent(0);
      setIsVisible(true);
    }, 8000);

    return () => clearTimeout(startTimer);
  }, [dismissed]);

  useEffect(() => {
    if (current < 0 || dismissed) return;

    // Hide after 5 seconds
    const hideTimer = setTimeout(() => {
      setIsVisible(false);
    }, 5000);

    // Show next after 20 seconds
    const nextTimer = setTimeout(() => {
      const next = (current + 1) % notifications.length;
      setCurrent(next);
      setIsVisible(true);
    }, 25000);

    return () => {
      clearTimeout(hideTimer);
      clearTimeout(nextTimer);
    };
  }, [current, dismissed]);

  if (dismissed || current < 0 || !isVisible) return null;

  const notification = notifications[current];

  return (
    <div className="fixed bottom-20 sm:bottom-6 left-4 sm:left-6 z-40 animate-slide-up">
      <div className="flex items-start gap-3 bg-white rounded-xl shadow-2xl border border-gray-100 p-4 pr-10 max-w-xs relative group">
        <button 
          onClick={() => setDismissed(true)} 
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 opacity-0 group-hover:opacity-100 transition-opacity p-1"
          aria-label="Fermer"
        >
          <X className="w-3 h-3" />
        </button>
        <div className="w-10 h-10 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center flex-shrink-0">
          <CheckCircle className="w-5 h-5 text-white" />
        </div>
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-900 leading-tight">
            {notification.name} <span className="font-normal text-gray-600">{notification.action}</span>
          </p>
          <p className="text-xs text-gray-500 mt-1">
            📍 {notification.city} • {notification.time}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SocialProofToast;
