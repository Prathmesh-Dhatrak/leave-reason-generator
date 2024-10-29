export type TimePeriod = 'half day' | 'one day' | 'more than one day';
export type UrgencyLevel = 'less urgent' | 'medium urgency' | 'very urgent';
export type LeaveType =
  | 'Medical leave'
  | 'going out leave'
  | 'staying home leave';

export interface SubTypes {
  'Medical leave': string[];
  'going out leave': string[];
  'staying home leave': string[];
}

export interface PromptCardProps {
  title: string;
  content: string;
  promptType: string;
  onCopy: (text: string, promptType: string) => Promise<void>;
  copySuccess: string | null;
}

export interface SelectFieldProps {
  label: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (value: any) => void;
  options: Array<{ value: string; label: string }>;
  placeholder: string;
}

export interface FormState {
  timePeriod: TimePeriod | '';
  urgency: UrgencyLevel | '';
  leaveType: LeaveType | '';
  subType: string;
}
