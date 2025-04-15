// src/components/popupprovider.tsx
"use client";
import React, { createContext, useState, useContext, useEffect, useCallback } from 'react';
import { PopupContactForm } from './popupform';

// Create context
interface PopupContextType {
  showPopup: () => void;
  hidePopup: () => void;
  isPopupVisible: boolean;
}

const PopupContext = createContext<PopupContextType | undefined>(undefined);

export function usePopup() {
  const context = useContext(PopupContext);
  if (context === undefined) {
    throw new Error('usePopup must be used within a PopupProvider');
  }
  return context;
}

interface PopupProviderProps {
  children: React.ReactNode;
}

export function PopupProvider({ children }: PopupProviderProps) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [hasPopupShownInitially, setHasPopupShownInitially] = useState(false);
  const [hasPopupShownSecondTime, setHasPopupShownSecondTime] = useState(false);
  
  // Function to show popup
  const showPopup = useCallback(() => {
    setIsPopupVisible(true);
  }, []);

  // Function to hide popup
  const hidePopup = useCallback(() => {
    setIsPopupVisible(false);
  }, []);

  // Initial popup after 30 seconds
  useEffect(() => {
    if (!hasPopupShownInitially) {
      const initialTimer = setTimeout(() => {
        showPopup();
        setHasPopupShownInitially(true);
      }, 30000); // 30 seconds
      
      return () => clearTimeout(initialTimer);
    }
  }, [hasPopupShownInitially, showPopup]);

  // Show popup again after 1.5 minutes from the first showing
  useEffect(() => {
    if (hasPopupShownInitially && !hasPopupShownSecondTime) {
      const secondTimer = setTimeout(() => {
        showPopup();
        setHasPopupShownSecondTime(true);
      }, 90000); // 1.5 minutes (90 seconds)
      
      return () => clearTimeout(secondTimer);
    }
  }, [hasPopupShownInitially, hasPopupShownSecondTime, showPopup]);
  
  const value = {
    showPopup,
    hidePopup,
    isPopupVisible
  };

  return (
    <PopupContext.Provider value={value}>
      {children}
      <PopupContactForm isOpen={isPopupVisible} onClose={hidePopup} />
    </PopupContext.Provider>
  );
}