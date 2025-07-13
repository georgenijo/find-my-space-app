#!/bin/bash

echo "🔍 Checking TypeScript types..."

# Run TypeScript compiler in no-emit mode
npx tsc --noEmit

if [ $? -eq 0 ]; then
  echo "✅ TypeScript check passed!"
else
  echo "❌ TypeScript check failed!"
  exit 1
fi