# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

## Ticket-1:

### Generate a custom ID for the Agents table for the reference:

#### Acceptance Criteria:
User should be given a readable string or id to track the Agent id in the report for future reference in the report generated.

#### Implementation Details:

Generate the custom Id for the agent based on the agent first name, last name and 3 digit random generated number to be unique.

example(Agent): John Smith

Custom generated Id: JOSM345

#### Time Efforts:
This story/task requires 1 story point efforts and can be completed with a day or less.

Story point(s): 1

## Ticket-2:

### Generate PDF Report:

#### Acceptance Criteria:
User should be able to generate the report of the shits for the facility.

#### Implementation Details:

Make use of `getShiftsByFacility` and `generateReport` functions to generate a report for the facility using facility Id and `geneateReport` gives a report and this generated report need to be a PDF downloadable with formated.

#### Time Efforts:
Story point(s): 5
