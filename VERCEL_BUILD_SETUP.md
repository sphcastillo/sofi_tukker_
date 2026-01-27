# Vercel Build Setup for Prisma

## Issue
`PrismaClient` is not found during build because Prisma Client hasn't been generated.

## Solution

### 1. Build Script
The `package.json` now includes `prisma generate` in the build script:
```json
"build": "prisma generate && next build"
```

### 2. Environment Variables in Vercel
You **must** set `DATABASE_URL` in your Vercel project settings:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add:
   - **Name:** `DATABASE_URL`
   - **Value:** Your PostgreSQL connection string
   - **Environment:** Select all (Production, Preview, Development)

**Note:** Even if you're not using the database yet, Prisma Client generation requires `DATABASE_URL` to be defined (it doesn't actually connect, just needs the variable).

### 3. Optional: Dummy URL for Build
If you don't have a database yet, you can use a dummy URL just for the build:
```
postgresql://user:password@localhost:5432/db
```

This won't actually connect during generation - Prisma just needs the variable to be defined.

### 4. Verify Build
After setting the environment variable, redeploy. The build should:
1. Run `prisma generate` → Creates `@prisma/client` types
2. Run `next build` → Compiles your app with Prisma types

## Local Development

To generate Prisma Client locally:

1. **Create `.env.local` file** in the project root:
   ```bash
   DATABASE_URL=postgresql://user:password@localhost:5432/db
   ```
   (Use a dummy URL if you don't have a database yet)

2. **Run:**
   ```bash
   pnpm prisma generate
   ```

3. **Restart your TypeScript server/IDE** to pick up the new types

## Troubleshooting

If you still get errors:

### Local Development:
1. Make sure `.env.local` exists with `DATABASE_URL`
2. Run `pnpm prisma generate` manually
3. Restart your IDE/TypeScript server
4. Check that `@prisma/client` is in `dependencies` (not `devDependencies`)

### Vercel Build:
1. Check that `DATABASE_URL` is set in Vercel environment variables
2. Verify `prisma generate` runs in the build logs (should see "✔ Generated Prisma Client")
3. Make sure `@prisma/client` is in `dependencies` (not `devDependencies`)
4. Check that `prisma/schema.prisma` exists and is valid
