import { useState, useCallback } from 'react';

interface UseToast {
  open: boolean;
  message: string;
  severity: 'success' | 'error' | 'warning' | 'info';
  showToast: (message: string, severity: 'success' | 'error' | 'warning' | 'info') => void;
  closeToast: () => void;
}

export const useToast = (): UseToast => {
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [severity, setSeverity] = useState<'success' | 'error' | 'warning' | 'info'>('success');

  const showToast = useCallback((message: string, severity: 'success' | 'error' | 'warning' | 'info') => {
    setMessage(message);
    setSeverity(severity);
    setOpen(true);
  }, []);

  const closeToast = useCallback(() => {
    setOpen(false);
  }, []);

  return {
    open,
    message,
    severity,
    showToast,
    closeToast,
  };
};
