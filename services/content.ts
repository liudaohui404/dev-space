import { BlogPost } from '../types';

export const blogPosts: BlogPost[] = [
  {
    slug: 'getting-started-with-react-18',
    title: 'Getting Started with React 18 and TypeScript',
    date: '2023-10-15',
    author: 'Alex Dev',
    tags: ['React', 'TypeScript', 'Web Dev'],
    excerpt: 'Learn the basics of React 18, concurrent features, and how to set up a robust TypeScript environment for your next project.',
    content: `
# Getting Started with React 18

React 18 introduces significant improvements to rendering performance and developer experience. In this guide, we'll explore the key features.

## Automatic Batching

React 18 adds automatic batching for all updates, not just those in event handlers. This means fewer re-renders and better performance by default.

\`\`\`javascript
// Before React 18: only React events were batched
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React renders twice
}, 1000);

// React 18: updates inside timeouts, promises, native event handlers
// are also batched.
setTimeout(() => {
  setCount(c => c + 1);
  setFlag(f => !f);
  // React renders only once!
}, 1000);
\`\`\`

## Transitions

Transitions allow you to distinguish between urgent and non-urgent updates.

- **Urgent updates**: Typing, clicking, pressing.
- **Transition updates**: Transitioning from one view to another.

\`\`\`typescript
import { startTransition } from 'react';

// Urgent: Show what was typed
setInputValue(input);

// Mark any state updates inside as transitions
startTransition(() => {
  // Transition: Show the results
  setSearchQuery(input);
});
\`\`\`

## Conclusion

React 18 is a huge step forward. Start upgrading your apps today!
    `
  },
  {
    slug: 'why-tailwind-css',
    title: 'Why Tailwind CSS is a Game Changer',
    date: '2023-11-02',
    author: 'Sarah Design',
    tags: ['CSS', 'Tailwind', 'Design'],
    excerpt: 'Utility-first CSS frameworks might seem messy at first, but they offer unparalleled speed and consistency.',
    content: `
# The Power of Utility-First CSS

Tailwind CSS has polarized the development community, but its adoption speaks for itself.

## Speed of Development

The primary benefit is speed. You stop writing CSS files. You stop inventing class names like \`.sidebar-wrapper-inner-container\`.

> "Best practices" don't actually work. trying to name things is hard.

## Design System Constraints

Tailwind provides a constrained set of values (spacing, colors, fonts). This prevents "magic numbers" in your CSS and ensures your design remains consistent.

## Mobile First

Tailwind makes responsive design incredibly intuitive:

\`\`\`html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- Content flows based on screen size -->
</div>
\`\`\`

Give it a try on your next project!
    `
  },
  {
    slug: 'the-zen-of-programming',
    title: 'The Zen of Programming',
    date: '2023-12-10',
    author: 'Master Coder',
    tags: ['Philosophy', 'Coding'],
    excerpt: 'Programming is not just about code; it is about clarity of thought. Simplicity is better than complexity.',
    content: `
# The Zen of Programming

1. **Beautiful is better than ugly.**
2. **Explicit is better than implicit.**
3. **Simple is better than complex.**
4. **Complex is better than complicated.**
5. **Readability counts.**

## Keep it Simple

When designing a system, always strive for the simplest solution that solves the problem. Over-engineering is the enemy of maintainability.

> "Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry

Happy coding!
    `
  }
];

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};
