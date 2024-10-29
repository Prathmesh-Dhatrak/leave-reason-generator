export const generateLeavePrompt = (
  timePeriod: string,
  urgency: string,
  leaveType: string,
  subType: string
): string => `Generate a list of 5 specific, professional reasons for requesting leave, based on the following criteria:

- **Time Period**: ${timePeriod}
- **Urgency Level**: ${urgency}
- **Leave Type**: ${leaveType}
- **Category**: ${subType}

Each reason should be:
1. Professionally worded and clear
2. Specific to the "${subType}" category within "${leaveType}"
3. Reflective of the urgency level
4. Suitable for the given time duration
5. Realistic and commonly accepted in a workplace context

Format each reason as a complete sentence suitable for a formal leave request.`;

export const generateScoringPrompt = (
  timePeriod: string,
  urgency: string,
  leaveType: string,
  subType: string
): string => `Evaluate the provided leave reasons based on these criteria:

1. **Professionalism (1-10)**: Are the reasons well-worded, formally structured, and using appropriate business language?
2. **Specificity (1-10)**: Are the reasons clearly aligned with the "${subType}" category of "${leaveType}"?
3. **Urgency Alignment (1-10)**: Do the reasons match the "${urgency}" urgency level?
4. **Time Appropriateness (1-10)**: Are the reasons fitting for a "${timePeriod}" leave duration?
5. **Workplace Acceptability (1-10)**: Would these reasons be commonly accepted in a professional setting?

For each criterion, include:
- Score (1-10)
- A brief justification
- Suggested improvement if the score is below 8

Conclude with an average score (across all criteria) and an overall improvement recommendation if necessary.`;
