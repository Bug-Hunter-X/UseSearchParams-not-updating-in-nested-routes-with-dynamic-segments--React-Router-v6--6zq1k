In React Router Dom v6, an uncommon issue arises when using nested routes with dynamic segments and the `useSearchParams` hook.  If a parent route has a dynamic segment, and a child route also uses `useSearchParams`, the child route's search parameters might not update correctly when navigating between child routes or if the parent route's dynamic segment changes.  This is because `useSearchParams` only updates when the entire URL changes, not when parameters within a specific segment are altered. This can lead to unexpected behavior and stale data.