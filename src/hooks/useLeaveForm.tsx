import { useState } from 'react';
import { FormState, SubTypes } from '../types';

export const useLeaveForm = () => {
  const [formState, setFormState] = useState<FormState>({
    timePeriod: '',
    urgency: '',
    leaveType: '',
    subType: '',
  });
  const [showPrompt, setShowPrompt] = useState(false);
  const [copySuccess, setCopySuccess] = useState<string | null>(null);

  const subTypes: SubTypes = {
    'Medical leave': ['personal', 'family', 'friends'],
    'going out leave': [
      'events',
      'functions',
      'documents related work',
      'bank related work',
      'appointments',
    ],
    'staying home leave': [
      'Home maintenance',
      'Personal wellness day',
      'Study leave',
      'Work from home setup',
      'Utility service appointment',
    ],
  };

  const getSubTypes = () => {
    if (formState.leaveType && formState.leaveType in subTypes) {
      return subTypes[formState.leaveType as keyof SubTypes];
    }
    return [];
  };

  const updateField = (field: keyof FormState, value: string) => {
    setFormState((prev) => ({
      ...prev,
      [field]: value,
      ...(field === 'leaveType' ? { subType: '' } : {}),
    }));
  };

  const copyToClipboard = async (
    text: string,
    promptType: string
  ): Promise<void> => {
    try {
      await navigator.clipboard.writeText(text);
      setCopySuccess(promptType);
      setTimeout(() => setCopySuccess(null), 2000);
    } catch (err) {
      alert('Failed to copy prompt');
    }
  };

  const getCompletionStatus = () => {
    const total = 4;
    const completed = Object.values(formState).filter(Boolean).length;
    return `${completed}/${total} fields completed`;
  };

  const isFormComplete = Object.values(formState).every(Boolean);

  return {
    formState,
    showPrompt,
    copySuccess,
    getSubTypes,
    updateField,
    copyToClipboard,
    getCompletionStatus,
    isFormComplete,
    setShowPrompt,
  };
};
