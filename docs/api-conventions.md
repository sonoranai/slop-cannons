# api conventions

REST patterns for all API work. read this before designing or modifying endpoints.

## resource naming

- plural nouns: `/users`, `/projects`, `/invoices`
- lowercase with hyphens: `/payment-methods`, not `/paymentMethods`
- nested resources for clear ownership: `/users/{id}/projects`
- no verbs in URLs: `POST /users` not `POST /create-user`
- collection vs item: `/users` (list) vs `/users/{id}` (single)

## status codes

| code | meaning | when to use |
|------|---------|-------------|
| 200 | OK | successful GET, PUT, PATCH |
| 201 | Created | successful POST that creates a resource |
| 204 | No Content | successful DELETE |
| 400 | Bad Request | invalid input, validation failure |
| 401 | Unauthorized | missing or invalid authentication |
| 403 | Forbidden | authenticated but insufficient permissions |
| 404 | Not Found | resource doesn't exist |
| 409 | Conflict | duplicate resource, state conflict |
| 422 | Unprocessable | valid syntax but semantic errors |
| 429 | Too Many Requests | rate limit exceeded |
| 500 | Internal Server Error | unexpected server failure |

## error format (RFC 7807)

```json
{
  "type": "https://api.example.com/errors/validation",
  "title": "Validation Error",
  "status": 422,
  "detail": "The email field must be a valid email address.",
  "instance": "/users",
  "errors": [
    {
      "field": "email",
      "message": "must be a valid email address",
      "code": "invalid_format"
    }
  ]
}
```

always include: `type`, `title`, `status`, `detail`. include `errors` array for field-level validation.

## pagination (cursor-based)

```json
{
  "data": [...],
  "pagination": {
    "next_cursor": "eyJpZCI6MTAwfQ==",
    "has_more": true
  }
}
```

- cursor-based over offset-based: stable under concurrent writes
- default page size: 25. max: 100
- encode cursor as opaque string (base64 of composite key)
- include `has_more` boolean — client shouldn't need to infer

## input validation

- validate at API boundaries only — once data enters the system, trust it
- use zod or similar schema validation
- reject early with clear error messages
- never validate internal function arguments (that's what types are for)

```typescript
// ✅ validate at the boundary
const CreateUserSchema = z.object({
  email: z.string().email(),
  name: z.string().min(1).max(255),
})

export async function POST(req: Request) {
  const body = CreateUserSchema.parse(await req.json())
  // body is now typed and validated — trust it downstream
}
```

## versioning

- URL path versioning: `/v1/users`, `/v2/users`
- version when breaking changes are unavoidable
- breaking changes: removing fields, changing field types, changing URL structure
- non-breaking: adding fields, adding endpoints, adding optional parameters
- support previous version for minimum 6 months after deprecation notice

## authentication

- bearer tokens in `Authorization` header: `Bearer <token>`
- API keys for server-to-server: `X-API-Key` header
- never pass credentials in URL query parameters
- short-lived access tokens (15 min) + long-lived refresh tokens
- rate limit auth endpoints aggressively (5 attempts / minute)
