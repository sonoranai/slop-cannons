# testing strategy

when to use which test type. read this before writing any tests.

## test pyramid

```
        ╱╲
       ╱ e2e ╲          few — critical user journeys only
      ╱────────╲
     ╱ integration ╲    moderate — API routes, DB queries, service boundaries
    ╱────────────────╲
   ╱    unit tests     ╲  many — pure logic, transformations, utilities
  ╱──────────────────────╲
```

## when to unit test

- pure functions with no side effects
- utility functions and transformations
- business logic calculations
- state management reducers
- validation functions
- data formatting and parsing

**characteristics**: fast (<10ms), no I/O, no network, no database. mock nothing — if you need to mock, it's probably an integration test.

## when to integration test

- API route handlers (request → response)
- database queries and migrations
- service-to-service communication
- authentication and authorization flows
- middleware chains
- file processing pipelines

**characteristics**: may use real database (test instance), may hit real services (in test mode), slower than unit tests. use test fixtures and factories, not mocks of the thing you're testing.

## when to e2e test

- critical user journeys: signup → onboard → first action
- payment flows: cart → checkout → confirmation
- authentication: login → session → logout
- destructive operations: delete account, cancel subscription
- cross-browser concerns: forms, navigation, accessibility

**characteristics**: slowest. use playwright. test user behavior, not implementation. prefer `getByRole` and `getByText` over test-ids. run in CI on every PR.

## coverage expectations

| domain | unit | integration | e2e |
|--------|------|-------------|-----|
| business logic | 90%+ | — | — |
| API routes | — | 80%+ | critical paths |
| UI components | behavior tests | — | critical journeys |
| utilities | 95%+ | — | — |
| auth flows | — | 90%+ | login/logout/signup |

## test-driven development protocol

the default workflow for all feature work:

1. **red** — write a failing test that describes the desired behavior
2. **green** — write the minimum code to make the test pass
3. **refactor** — clean up without changing behavior. tests still pass

do NOT skip the red phase. a test that never failed might not test what you think.

## what not to test

- third-party library internals (test your usage, not their code)
- CSS styling (use visual regression for critical layouts)
- trivial getters/setters
- framework boilerplate
- implementation details that could change without affecting behavior

## testing anti-patterns

- **mocking the thing you're testing** — if you mock the database in a database test, you're testing your mocks
- **snapshot abuse** — snapshot tests for anything larger than a data structure become change detectors, not correctness checks
- **test-per-method** — test behaviors, not methods. one behavior might touch multiple methods
- **flaky tolerance** — a flaky test is worse than no test. fix it or delete it
- **coverage theater** — 100% coverage with meaningless assertions is worse than 70% with thoughtful tests
