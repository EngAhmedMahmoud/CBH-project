# Ticket Breakdown

We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**

Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".

You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

# Breakdown (Solution)

## Define the problem

Given a list of agent shifts data generate a pdf report for each facility
we need:-

- Give facilities the ability to add a custom ID for each agent.
- Print this id in the PDF file.

## Changes & Cost (One hour)

- Ticket#1 DB Design changes.
- Ticket#2 Backend changes.
- Ticket#3 UI Changes.

### Database (Data Modeling) changes

- We just add a new cloumn in the agents table to save the `agentCustomId` which will be added by the facility.

#### Cost & Efforts (10 MIN)

For this change it's easy to add a new column in the agents table but there are an extra effort we should take in consideration:-

- **Data Migration** If we have old data in the database in this case we should take care of changes but this also depends on database type if it's nosql **(No cost)** but if it's a relational database in this case we can by default make this value nullable or we can run a script which updates this column with a random value then after that `facility` can easily update the value from UI.

## Backend Changes (30 MIN)

While asign agent to a facility we should send `agentCustomId` to be saved but there are two scenarios

- We need to add one validation rule: **Before saving agent which is related to specific facility we should make a validation rule before saving to check first `agentCustomId` exist before or not**
  Why? I assumed that `agentCustomId` not a unique value because may be same agent will work with different facilities.

- If we considered it as a unique value `agentCustomId` in this case we don't want to add this validation rule and for current design we will make `agentCustomId` unique value so the validation rule that we added in the first step has no meaning and extra effort (complexity) which we can avoiding it.

- Update the shifts function `getShiftsByFacility` and make sure that we are returning `agentCustomId` in the response to be **input** for the PDF file generation step.

## UI-Changes (20 MIN)

- One extra input field for `agentCustomId` for (saving & update forms done by facility) but if the agent allowed to create profile so we will not consider this in the (saving & update forms) we can also add some validation rules (length,pattern.. etc)
- Appending agentCustomId in the body of request sent to backend.
- Handle the response from backend (Saved or added successfully || This ID already exist try to use another one)

## Overall Cost (one hour)

## UAT

- As a facility I am able to assign any agent a custom ID.
- As a facility I able to see the custom id in the pdf report.
