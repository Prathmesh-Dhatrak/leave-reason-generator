import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Clock, AlertCircle, FileText } from 'lucide-react';
import { SelectField } from '@/components/SelectField';
import { PromptCard } from '@/components/PromptCard';
import { useLeaveForm } from '@/hooks/useLeaveForm';
import {
  generateLeavePrompt,
  generateScoringPrompt,
} from './constants/prompts';

const LeaveReasonGenerator = () => {
  const {
    formState,
    showPrompt,
    copySuccess,
    getSubTypes,
    updateField,
    copyToClipboard,
    getCompletionStatus,
    isFormComplete,
    setShowPrompt,
  } = useLeaveForm();

  return (
    <div className="space-y-8">
      <Card className="w-full bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
        <CardHeader className="border-b border-gray-100 bg-gradient-to-r from-gray-50 to-slate-100">
          <CardTitle className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="text-xl text-gray-800 font-semibold">
                Prompt Generator
              </span>
            </div>
            <span className="text-sm font-medium text-indigo-600 bg-white px-3 py-1 rounded-full shadow-sm">
              {getCompletionStatus()}
            </span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-8 p-6">
          <SelectField
            label="Time Period"
            icon={<Clock className="text-indigo-500" size={16} />}
            value={formState.timePeriod}
            onChange={(value) => updateField('timePeriod', value)}
            options={[
              { value: 'half day', label: 'Half Day' },
              { value: 'one day', label: 'One Day' },
              { value: 'more than one day', label: 'More than One Day' },
            ]}
            placeholder="Select duration of leave"
          />

          <SelectField
            label="Urgency Level"
            icon={<AlertCircle className="text-indigo-500" size={16} />}
            value={formState.urgency}
            onChange={(value) => updateField('urgency', value)}
            options={[
              { value: 'less urgent', label: 'Less Urgent' },
              { value: 'medium urgency', label: 'Medium Urgency' },
              { value: 'very urgent', label: 'Very Urgent' },
            ]}
            placeholder="Specify urgency level"
          />

          <SelectField
            label="Leave Type"
            icon={<FileText className="text-indigo-500" size={16} />}
            value={formState.leaveType}
            onChange={(value) => updateField('leaveType', value)}
            options={[
              { value: 'Medical leave', label: 'Medical Leave' },
              { value: 'going out leave', label: 'Going Out Leave' },
              { value: 'staying home leave', label: 'Staying Home Leave' },
            ]}
            placeholder="Choose leave category"
          />

          {formState.leaveType && (
            <SelectField
              label="Specific Category"
              value={formState.subType}
              onChange={(value) => updateField('subType', value)}
              options={getSubTypes().map((type) => ({
                value: type,
                label: type.charAt(0).toUpperCase() + type.slice(1),
              }))}
              placeholder="Select specific reason"
            />
          )}

          <Button
            className={`w-full h-12 text-lg font-medium transition-all duration-300 ${
              isFormComplete
                ? 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                : 'bg-gray-100 text-gray-400'
            }`}
            onClick={() => setShowPrompt(true)}
            disabled={!isFormComplete}
          >
            {!isFormComplete
              ? 'Complete All Fields to Continue'
              : 'Generate Prompts'}
          </Button>
        </CardContent>
      </Card>

      {showPrompt && (
        <div className="space-y-8">
          <PromptCard
            title="Prompt for Generating List of Reasons."
            content={generateLeavePrompt(
              formState.timePeriod,
              formState.urgency,
              formState.leaveType,
              formState.subType
            )}
            promptType="generate"
            onCopy={copyToClipboard}
            copySuccess={copySuccess}
          />

          <PromptCard
            title="Prompt for Evaluating and Scoring the Output of the Above Prompt."
            content={generateScoringPrompt(
              formState.timePeriod,
              formState.urgency,
              formState.leaveType,
              formState.subType
            )}
            promptType="score"
            onCopy={copyToClipboard}
            copySuccess={copySuccess}
          />
        </div>
      )}
    </div>
  );
};
export default LeaveReasonGenerator;
