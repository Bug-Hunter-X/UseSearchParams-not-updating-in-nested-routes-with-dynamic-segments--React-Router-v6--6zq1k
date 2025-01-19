# React Router v6 Nested Routes `useSearchParams` Bug

This repository demonstrates a subtle bug in React Router v6 related to the `useSearchParams` hook when used within nested routes containing dynamic segments.  The issue occurs when the parent route has a dynamic segment, and a child route utilizes `useSearchParams`.  The search params in the child route may not update as expected upon navigation between child routes or changes in the parent route's dynamic segment.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install`.
3. Run `npm start`.
4. Navigate between child routes. Note the inconsistency in `useSearchParams` updates.
5. Change the parent route dynamic segment.  Observe the child route's parameters' behavior.

## Solution

The solution involves explicitly using the `navigate` function to trigger a full URL update, thus forcing `useSearchParams` to re-evaluate. The solution file, `NestedRoutesSolution.js`, demonstrates this approach.

## Additional Notes

This bug is likely related to the way React Router v6 handles URL updates and the internal mechanisms of `useSearchParams`. The solution presented provides a workaround rather than addressing the root cause of the issue.