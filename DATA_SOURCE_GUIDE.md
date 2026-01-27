# Data Source Traceability Guide

This guide helps you understand where data is coming from in your application.

## How to Trace Data Flow

### Step 1: Find the Component
Look at the component that displays the data (e.g., `SofiTukkerStore.tsx`)

### Step 2: Check the Fetch Call
Look for `fetch()` calls in `useEffect` hooks to see which API endpoint is being called.

### Step 3: Follow the API Route
Check the corresponding route file in `/app/api/[endpoint]/route.ts`

### Step 4: Identify the Source
The route file will show you:
- If it imports from a data file → **Static Data Source**
- If it fetches from another API → **API Source**
- If it queries a database → **Database Source**

---

## Current Data Sources

### ✅ Store Items (`/api/store-items`)

**Component:** `components/SofiTukkerStore.tsx`
```typescript
fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/store-items`)
```

**API Route:** `app/api/store-items/route.ts`
```typescript
import { BandStoreProducts } from "@/data/SofiTukkerStoreData";
return NextResponse.json(BandStoreProducts, ...)
```

**Data Source:** `data/SofiTukkerStoreData.ts` → **STATIC DATA** ✅

---

### ✅ Merch Products (`/api/merch-products`)

**Component:** `components/SofiTukkerMerch.tsx`
```typescript
fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/merch-products`)
```

**API Route:** `app/api/merch-products/route.ts`
```typescript
import { SofiTukkerMerchItems } from "@/data/SofiTukkerMerchData";
return NextResponse.json(SofiTukkerMerchItems, ...)
```

**Data Source:** `data/SofiTukkerMerchData.ts` → **STATIC DATA** ✅

---

### ✅ Tour Dates (`/api/tour-dates`)

**Component:** `app/tour/page.tsx`
```typescript
fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/tour-dates`)
```

**API Route:** `app/api/tour-dates/route.ts`
- Fetches from `/_py/tour-dates` (Python endpoint)

**Python Handler:** `app/api/_py/tour_dates.py`
- Contains static data in the Python file

**Data Source:** `app/api/_py/tour_dates.py` (static data) → **STATIC DATA** ✅

---

### ⚠️ Bread Goods (`/api/bread-goods`)

**Component:** `components/MusicStore.tsx`
```typescript
fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/bread-goods`)
```

**API Route:** `app/api/bread-goods/route.ts`
- Fetches from `/_py/bread-goods` (Python endpoint)

**Python Handler:** `app/api/_py/bread_goods.py`
- Tries to connect to database (requires `DATABASE_URL`)

**Data Source:** Database (if configured) or Error → **DATABASE** ⚠️

---

### ⚠️ Music Releases (`/api/music-releases`)

**Component:** (Check where it's used)
```typescript
fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/music-releases`)
```

**API Route:** `app/api/music-releases/route.ts`
- Fetches from `/_py/music-releases` (Python endpoint)

**Python Handler:** `app/api/_py/music_releases.py`
- Tries to connect to database (requires `DATABASE_URL`)

**Data Source:** Database (if configured) or Error → **DATABASE** ⚠️

---

### ⚠️ Store Items (Python) (`/_py/store-items`)

**Python Handler:** `app/api/_py/store_items.py`
- Tries to connect to database (requires `DATABASE_URL`)

**Data Source:** Database (if configured) or Error → **DATABASE** ⚠️

---

## Quick Reference: Data Flow Diagram

```
Component (UI)
    ↓ fetch()
API Route (/app/api/[endpoint]/route.ts)
    ↓
    ├─→ Static Data File (/data/*.ts) ✅ WORKING
    ├─→ Python Endpoint (/_py/*) 
    │   └─→ Static Data in Python ✅ WORKING (tour-dates)
    │   └─→ Database Query ❌ NEEDS DATABASE_URL
    └─→ External API
```

---

## How to Check Data Source in Browser

1. **Open Browser DevTools** (F12)
2. **Go to Network Tab**
3. **Filter by "Fetch/XHR"**
4. **Look for API calls** (e.g., `/api/store-items`)
5. **Click on the request** to see:
   - Request URL
   - Response data
   - Status code

---

## How to Add Comments for Clarity

You can add comments in your code to document the data source:

```typescript
// app/api/store-items/route.ts
import { BandStoreProducts } from "@/data/SofiTukkerStoreData";

export async function GET(req: Request) {
  // DATA SOURCE: Static data from /data/SofiTukkerStoreData.ts
  return NextResponse.json(BandStoreProducts, {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
```

```typescript
// components/SofiTukkerStore.tsx
useEffect(() => {
  // Fetches from: /api/store-items → /data/SofiTukkerStoreData.ts
  fetch(`${process.env.NEXT_PUBLIC_API_URL || ''}/api/store-items`)
    .then((res) => res.json())
    .then((data) => setStoreItems(data))
    .catch((err) => console.error("Failed to load store items:", err));
}, []);
```

---

## Summary

| Endpoint | Component | API Route | Data Source | Status |
|----------|-----------|-----------|-------------|--------|
| `/api/store-items` | `SofiTukkerStore.tsx` | `store-items/route.ts` | `SofiTukkerStoreData.ts` | ✅ Working |
| `/api/merch-products` | `SofiTukkerMerch.tsx` | `merch-products/route.ts` | `SofiTukkerMerchData.ts` | ✅ Working |
| `/api/tour-dates` | `tour/page.tsx` | `tour-dates/route.ts` → `/_py/tour-dates` | `tour_dates.py` (static) | ✅ Working |
| `/api/bread-goods` | `MusicStore.tsx` | `bread-goods/route.ts` → `/_py/bread-goods` | Database | ⚠️ Needs DB |
| `/api/music-releases` | (various) | `music-releases/route.ts` → `/_py/music-releases` | Database | ⚠️ Needs DB |

---

## Tips

1. **Check the import statement** in the API route file - if it imports from `/data/`, it's static data
2. **Look for `fetch()` calls** in API routes - if it fetches from `/_py/`, it's using Python
3. **Check for database imports** - if you see `psycopg` or `DATABASE_URL`, it needs a database
4. **Use browser DevTools** to see actual network requests and responses
5. **Check console logs** - components often log errors when data fetching fails
