# Automation plan

The site is intentionally useful before any paid integration is connected.

## Daily flow

1. Receive new leads from `/api/lead`.
2. Store them in a CRM or database through an environment-configured provider.
3. Send an immediate confirmation email.
4. Segment interest by selected business model.
5. Queue a useful follow-up sequence.
6. Refresh product/market metrics.
7. Surface qualified opportunities for a human or sales workflow.

## Revenue integrations to add

- Subscription billing
- Transactional email
- CRM/database
- Analytics
- Affiliate tracking
- Customer support
- Usage metering

The repository contains no secrets. Add provider credentials only as deployment environment variables.
