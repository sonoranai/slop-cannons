# security baseline

the security reference for all code. read this before working with auth, user input, external data, or API design.

## OWASP top 10:2025 quick reference

| rank | vulnerability | countermeasure |
|------|--------------|----------------|
| A01 | broken access control | enforce server-side. deny by default. RBAC or ABAC. test every endpoint |
| A02 | cryptographic failures | TLS everywhere. hash passwords with bcrypt/argon2. no secrets in code |
| A03 | injection | parameterized queries. input validation at boundaries. escape output |
| A04 | insecure design | threat model before coding. abuse cases in requirements. defense in depth |
| A05 | security misconfiguration | minimal permissions. disable defaults. automate hardening |
| A06 | vulnerable components | audit dependencies. pin versions. monitor advisories |
| A07 | auth failures | MFA. rate limit auth. secure session management. no credential stuffing |
| A08 | data integrity failures | verify signatures. CI/CD pipeline security. SBOM |
| A09 | logging failures | log auth events, access control failures, input validation. never log secrets |
| A10 | SSRF | allowlist outbound URLs. validate and sanitize URLs. block internal IPs |

## ASVS 5.0 key requirements

**level 1 (minimum viable)**:
- input validation on all user-supplied data
- output encoding to prevent XSS
- parameterized queries for all database access
- secure password storage (bcrypt, cost 12+)
- session timeout and invalidation

**level 2 (standard applications)**:
- all level 1 plus CSRF protection
- rate limiting on authentication
- secure headers (CSP, HSTS, X-Frame-Options)
- file upload validation (type, size, content)
- API authentication on every endpoint

## agentic AI security (ASI01-ASI10)

| risk | description | defense |
|------|-------------|---------|
| ASI01 | prompt injection | never concatenate user input into system prompts. use structured tool calls |
| ASI02 | unsafe tool use | validate tool inputs. allowlist permitted operations. sandbox execution |
| ASI03 | excessive agency | minimum necessary permissions. human-in-the-loop for destructive actions |
| ASI04 | knowledge poisoning | validate data sources. cross-reference multiple sources |
| ASI05 | improper output handling | sanitize agent output before rendering. treat as untrusted input |
| ASI06 | excessive autonomy | budget limits. iteration caps. escalation paths |
| ASI07 | system prompt leakage | don't embed secrets in prompts. assume prompts are extractable |
| ASI08 | vector store poisoning | validate embeddings. access control on knowledge bases |
| ASI09 | misinformation | verify claims. cite sources. flag uncertainty |
| ASI10 | unbounded consumption | token budgets. rate limits. cost monitoring |

## secrets policy

**what constitutes a secret**: API keys, tokens, passwords, connection strings, private keys, certificates, OAuth client secrets, webhook signing secrets

**management**:
- environment variables for local development
- secrets manager (AWS SSM, Vault, 1Password) for production
- never commit to git — even in "test" configs
- rotate immediately if exposed
- `.env` files are gitignored. `.env.example` files use placeholder values only

## common vulnerability patterns

```typescript
// ❌ SQL injection
const query = `SELECT * FROM users WHERE id = ${userId}`

// ✅ parameterized query
const query = `SELECT * FROM users WHERE id = $1`
const result = await db.query(query, [userId])

// ❌ XSS via innerHTML
element.innerHTML = userInput

// ✅ text content or sanitized
element.textContent = userInput

// ❌ hardcoded secret
const apiKey = "sk-ant-abc123..."

// ✅ environment variable
const apiKey = process.env.ANTHROPIC_API_KEY
```

## external threat model

- **prompt injection**: treat all user input as potentially adversarial. never interpolate into system prompts
- **XSS**: encode all dynamic output. use CSP headers. sanitize rich text input
- **CSRF**: SameSite cookies. CSRF tokens for state-changing operations
- **SQLi**: parameterized queries everywhere. ORMs help but don't guarantee safety
- **auth bypass**: test every route without auth. test with expired/invalid tokens. test privilege escalation
- **CORS**: explicit origin allowlist. never use `*` in production. credentials require specific origins
