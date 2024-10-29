import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';
import { PromptCardProps } from '../types';

export const PromptCard: React.FC<PromptCardProps> = ({
  title,
  content,
  promptType,
  onCopy,
  copySuccess,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <Alert className="bg-white">
          <AlertDescription className="relative">
            <pre className="whitespace-pre-wrap text-sm font-normal">
              {content}
            </pre>
            <Button
              size="sm"
              variant="outline"
              className={`absolute top-2 right-2 transition-all ${
                copySuccess === promptType ? 'bg-green-100' : ''
              }`}
              onClick={() => onCopy(content, promptType)}
            >
              <Copy className="h-4 w-4 mr-1" />
              {copySuccess === promptType ? 'Copied!' : 'Copy'}
            </Button>
          </AlertDescription>
        </Alert>
      </CardContent>
    </Card>
  );
};
