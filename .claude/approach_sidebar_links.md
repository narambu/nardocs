# Approach: Sidebar Structure and Links

This is a Jekyll site using the **just-the-docs** theme (v0.11.1+).

## Core Principle

**Sidebar path = File path = URL**

Every page's sidebar hierarchy must match its filesystem location. If a page appears at `A > B > C` in the sidebar, its file must be at `a/b/c.md` and its URL will be `/a/b/c.html`.

## Hierarchy Relationships

### Parent
The `parent:` frontmatter field specifies which page is directly above in the sidebar. The value must **exactly match** the parent page's `title:`.

```yaml
title: Child Page
parent: Parent Page
```

### Grand Parent
For pages 3+ levels deep, `grand_parent:` specifies the parent's parent. Required when the parent title alone isn't unique.

```yaml
title: Deep Page
parent: Parent Page
grand_parent: Grandparent Page
```

### Children
Pages with children must have `has_children: true`. Without this, child pages won't nest under it in the sidebar.

```yaml
title: Parent Page
has_children: true
```

### Nav Order
Use `nav_order:` to control sidebar ordering. Lower numbers appear first.

### Full Frontmatter Example
```yaml
---
layout: default
title: Page Title
parent: Parent Title
grand_parent: Grandparent Title
has_children: true
nav_order: 2
---
```

## File and Folder Structure

Parent pages sit alongside their child folder:

```
parent-page.md           # title: Parent Page, has_children: true
parent-page/             # Folder named same as parent file (kebab-case)
  child1.md              # parent: Parent Page
  child2.md              # parent: Parent Page
  child2/                # Nested children
    grandchild.md        # parent: Child2, grand_parent: Parent Page
```

**Folder names** use kebab-case of the sidebar title:
- "Vertical Configuration" → `vertical-configuration/`
- "Environment Variables" → `environment-variables/`

## URL Links

Links use `.html` extension (the URL), not `.md` (the file).

### Relative Links
Count directory levels from source to target:

| From | To | Link |
|:-----|:---|:-----|
| Same folder | sibling | `sibling.html` |
| Parent folder | uncle | `../uncle.html` |
| Two levels up, then down | cousin | `../../other/cousin.html` |

### Absolute Links
Start from site root with `/`:
```
/section/subsection/page.html
```

Use absolute links for cross-section references where relative paths get unwieldy.

## Technical Challenges

### Title Collision Causes Child Duplication

just-the-docs resolves parent-child relationships by **title string matching**, not file paths.

**Problem discovered**: When two pages have the same `title:`, and both have parents with the same `title:`, child pages attach to BOTH parents.

Example:
```
Nar > Verticals > Paddle Payment Integration (has children)
Nar > FAQ > Verticals > Paddle Payment Integration (FAQ page, should have NO children)
```

The children had:
```yaml
parent: Paddle Payment Integration
grand_parent: Verticals
```

Both "Paddle Payment Integration" pages had a parent titled "Verticals", so `grand_parent: Verticals` matched both. The children appeared under the FAQ page too.

**Solution**: The `grand_parent:` field disambiguates the PARENT, not the page itself. To fix, ensure the parent pages have **unique titles**:

```
Nar > Verticals > Paddle Payment Integration
Nar > FAQ > Vertical Configuration > Paddle Payment Integration
```

Now `grand_parent: Verticals` only matches the main vertical (whose parent is "Verticals"), not the FAQ page (whose parent is "Vertical Configuration").

### Disambiguation Levels

- `parent:` — matches the parent's title
- `grand_parent:` — matches the parent's parent's title (used to disambiguate when multiple pages share the same parent title)
- `ancestor:` — matches any ancestor above the parent (for deeper disambiguation)

### Key Insight

When the same page title appears in multiple branches, check if their PARENTS also share a title. If so, rename one of the parent pages to break the collision.
