// components/ui/toaster.tsx
import { useToast } from "./use-toast";
import { X } from "lucide-react";

export function Toaster() {
  const { toasts, dismiss } = useToast();

  if (!toasts.length) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 space-y-4 w-full max-w-sm">
      {toasts.map((toast) => (
        <div
          key={toast.id}
          className={`bg-white border rounded-md shadow-lg p-4 flex items-start justify-between ${
            toast.variant === "destructive" ? "border-red-500" : "border-gray-200"
          }`}
        >
          <div>
            {toast.title && (
              <h3 className="font-medium text-gray-900">{toast.title}</h3>
            )}
            {toast.description && (
              <p className="text-sm text-gray-500 mt-1">{toast.description}</p>
            )}
          </div>
          <button
            onClick={() => dismiss(toast.id)}
            className="text-gray-400 hover:text-gray-500"
          >
            <X size={18} />
          </button>
        </div>
      ))}
    </div>
  );
}
