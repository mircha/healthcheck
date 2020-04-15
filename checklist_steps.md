## Before connecting to the system

- Verify that the system exists in Vtiger and all the relevant information is filled in
  - System Name
  - Solution
  - Warranty status/linked SO
  - Support Level
  - Under hardware, check and remember the number of host servers and libraries
- Contact the contact in the VTiger Health Check record and let him know the check is beginning
  - request a connection if a permanent one is not available

## While on the system

### MassStore
- Make sure the system is started and you can log in
- Under jobs, check that there aren't any failed workflows/transfers/transcodes (or at least not a significant number)
  - Make sure there aren't any transfers that are just stuck in waiting, especially for tape transfers
  - There aren't any restores from offline tapes
- Under status, make sure that there aren't any important errors in the past 24-48 hours
- Under Administration
  - There aren't any locations in connecting
  - All the data movers are online and running
  - Make sure all transcode engine instances are connected
  - Make sure all relevant modules are started
- Do a search for assets created since yesterday
- Do a search for instances created since yesterday
  - Above searches should not have 0 results

### Hardware/All host servers

- Connect to all servers and make sure
  - The c drive is not getting full
  - The cache drive is accessible from servers that need to have access
  - Where backup scripts exist, make sure they are properly working (the 2AM/4AM latest available backups for the databases exist)

### System Builder & System Updater

Open on the customer side: https://github.com/mircha/healthcheck/releases/latest

- Download the latest System Builder and generate a new system report
  - If not auto completed, select the correct Customer Name and System from the Start Screen
  - From the remote tab, make sure all servers are added
    - Make sure this number matches the one from VTiger
- Download and install the System Updater
  - Create the needed scheduled tasks and test
  - Run the on-demand health check report

## After disconnecting from the system

- Complete the Health Check record
  - Note if you find minor, critical issues or both
  - Write the conclusion
  - If any issues, create cases with Category: Proactive and Type: Health Check
  - If the process took over one hour (one and a half hours or more) without finding any issues, let Mircea B know about this.