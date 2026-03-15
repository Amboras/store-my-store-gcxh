# Agent Mistakes and Learnings

This file tracks lessons learned by agents during store generation and implementation.

## medusa-configurator

- Always verify PostgreSQL and Redis are running before configuring backend
- Check environment variables are properly loaded before testing connections
- Medusa v2 regions should be created via Admin UI or API, not in config file
- Custom modules need proper export structure to be recognized by Medusa
- Workflow steps must be properly typed to avoid runtime errors

## storefront-generator

- Always copy template first, then customize - don't generate from scratch
- Verify Medusa backend URL is correctly set in environment before testing
- Use Next.js Image component for all images to get automatic optimization
- Server components are default - only mark 'use client' when absolutely needed
- TanStack Query hooks should handle loading and error states explicitly
- Generated store directories should follow consistent naming: store-{id} or store-{slug}

## theme-customizer

- Always read current tailwind.config.ts before modifying to preserve existing config
- Apply theme consistently across all components, not just homepage
- Test responsive design after theme changes at all breakpoints
- Font imports in layout.tsx must come before usage in components
- CSS variables in globals.css should match Tailwind theme values
- Border radius changes affect both UI components and images

## General Lessons

- Always run `npm run type-check` after making changes
- Test locally before considering task complete
- Document all custom configuration in respective README files
- Keep error messages user-friendly, not technical
- Report file paths relative to project root for clarity
- When in doubt, follow existing patterns in the template

## Common Pitfalls to Avoid

- Don't skip dependency installation - it causes type errors
- Don't hardcode URLs - use environment variables
- Don't mix server and client components incorrectly
- Don't forget to restart backend after config changes
- Don't ignore TypeScript errors - they indicate real problems
- Don't generate new components when template components can be reused

---

Agents should append new learnings to their respective sections after each task.
