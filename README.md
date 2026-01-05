# Playwright API Test Framework (TypeScript)

🔧 Minimal, reusable API testing scaffold using Playwright Test and TypeScript.

## Structure
- `src/api` - API client implementation
- `src/endpoints` - Endpoint wrappers (reusable per endpoint)
- `src/payloads` - Test payloads / fixtures
- `src/utils` - Types and helpers
- `tests/api` - API test specs

## Quickstart
1. Install deps
   - npm install
   - npx playwright install

2. Copy `.env.example` to `.env` if you need to override `API_BASE_URL`.

3. Run API tests
   - npm run test:api

## How to add a new test
1. Add payloads to `src/payloads`.
2. Add endpoint wrappers in `src/endpoints`.
3. Use `ApiClient` in tests to make calls and assertions.

## Tips
- `ApiClient` centralizes headers and auth token management.
- Tests use Playwright's `request` fixture so runs are fast and isolated.

If you'd like, I can add: CI (GitHub Actions), more endpoint examples, helpers for response validation, or a test data generator. 👍
