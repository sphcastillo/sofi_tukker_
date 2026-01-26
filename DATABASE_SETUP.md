# Database Setup Guide

## What is DATABASE_URL?

`DATABASE_URL` is a connection string that tells your application how to connect to a PostgreSQL database. It looks like:

```
postgresql://username:password@host:port/database_name
```

## Option 1: Vercel Postgres (Recommended for Vercel Deployments)

1. Go to your Vercel project dashboard
2. Navigate to the **Storage** tab
3. Click **Create Database** → Select **Postgres**
4. Choose a plan (Hobby plan is free)
5. Vercel will automatically create a `DATABASE_URL` environment variable
6. The connection string will be available in your project settings

**Pros:**
- Integrated with Vercel
- Automatic environment variable setup
- Free tier available

## Option 2: Neon (Serverless Postgres - Great for Next.js)

1. Go to [neon.tech](https://neon.tech)
2. Sign up for a free account
3. Create a new project
4. Copy the connection string (it will look like: `postgresql://user:password@ep-xxx.region.aws.neon.tech/dbname`)
5. Set this as your `DATABASE_URL` environment variable

**Pros:**
- Free tier with generous limits
- Serverless (scales automatically)
- Great for Next.js projects
- Easy to use

## Option 3: Supabase (PostgreSQL with extra features)

1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Go to **Settings** → **Database**
4. Copy the connection string under **Connection string** → **URI**
5. Set this as your `DATABASE_URL` environment variable

**Pros:**
- Free tier available
- Includes authentication, storage, and real-time features
- Easy-to-use dashboard

## Option 4: Railway

1. Go to [railway.app](https://railway.app)
2. Create a new project
3. Add a PostgreSQL database
4. Copy the connection string from the database service
5. Set this as your `DATABASE_URL` environment variable

## Setting Environment Variables

### For Local Development:

1. Create a `.env.local` file in your project root (if it doesn't exist)
2. Add your DATABASE_URL:

```bash
DATABASE_URL=postgresql://username:password@host:port/database_name
```

**Important:** Add `.env.local` to your `.gitignore` file to keep your credentials safe!

### For Vercel Deployment:

1. Go to your Vercel project dashboard
2. Navigate to **Settings** → **Environment Variables**
3. Add a new variable:
   - **Name:** `DATABASE_URL`
   - **Value:** Your connection string
   - **Environment:** Select all (Production, Preview, Development)
4. Click **Save**

## Creating the Database Tables

Once you have your `DATABASE_URL`, you'll need to create the tables. Here's a SQL script to create the `tour_dates` table:

```sql
CREATE TABLE tour_dates (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    venue VARCHAR(255) NOT NULL,
    city VARCHAR(255) NOT NULL,
    vip BOOLEAN DEFAULT FALSE,
    tickets BOOLEAN DEFAULT TRUE,
    link TEXT
);

-- Insert sample data (optional)
INSERT INTO tour_dates (date, venue, city, vip, tickets, link) VALUES
('2025-09-26', 'XS NIGHTCLUB (DJ RESIDENCY)', 'LAS VEGAS, NV', false, true, 'https://www.wynnsocial.com/event/EVE111500020250926/sofi-tukker/'),
('2025-10-04', 'PALM TREE MUSIC FESTIVAL - MONTECITO', 'MONTECITO, CA', false, true, 'https://posh.vip/e/palm-tree-music-festival-montecito'),
('2025-10-11', 'PALM TREE CLUB MIAMI', 'MIAMI, FL', false, true, 'https://posh.vip/e/sofi-tukker-presented-by-palm-tree-club-miami-1'),
('2025-10-18', 'SPORTS ILLUSTRATED F1', 'AUSTIN, TX', false, true, 'https://www.sicircuitseries.com/'),
('2025-11-09', 'EDC - ORLANDO', 'ORLANDO, FL', false, true, 'https://edcorlando.frontgatetickets.com/...'),
('2025-12-26', 'BELLY UP ASPEN', 'ASPEN, CO', false, true, 'https://tickets.bellyupaspen.com/link/event?event=sofi-tukker-12-26-25');
```

You can run this SQL in:
- **Neon:** SQL Editor in the dashboard
- **Supabase:** SQL Editor in the dashboard
- **Vercel Postgres:** Use the Vercel dashboard or connect via a PostgreSQL client
- **Railway:** Use the database's web interface or connect via psql

## Local Development Setup (Optional)

If you want to run PostgreSQL locally:

### macOS (using Homebrew):
```bash
brew install postgresql@15
brew services start postgresql@15
createdb sofi_tukker_db
```

Then your DATABASE_URL would be:
```
postgresql://localhost:5432/sofi_tukker_db
```

### Using Docker:
```bash
docker run --name postgres -e POSTGRES_PASSWORD=password -e POSTGRES_DB=sofi_tukker_db -p 5432:5432 -d postgres
```

Then your DATABASE_URL would be:
```
postgresql://postgres:password@localhost:5432/sofi_tukker_db
```

## Quick Start Recommendation

For the fastest setup:
1. **Use Neon** (neon.tech) - it's free and works great with Next.js
2. Create a project and copy the connection string
3. Add it to Vercel environment variables
4. Run the SQL script above to create your tables
5. Your API will automatically use the database!

## Note

Currently, your `tour_dates.py` is using static data (no database needed). If you want to switch back to using a database, you'll need to:
1. Get a DATABASE_URL (using one of the options above)
2. Create the database tables
3. Update `tour_dates.py` to use the database connection again (it's currently commented out)
