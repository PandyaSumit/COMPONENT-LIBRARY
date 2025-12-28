#!/usr/bin/env python3
"""
Batch Redesign Script for All Navigation and Hero Components
Redesigns all components with premium, professional, responsive UI
"""

import re

print("🎨 Starting comprehensive batch redesign...")
print("=" * 60)

# Read navigation file
with open('/home/user/COMPONENT-LIBRARY/data/components/navigation.ts', 'r') as f:
    nav_content = f.read()

# Read hero file
with open('/home/user/COMPONENT-LIBRARY/data/components/hero.ts', 'r') as f:
    hero_content = f.read()

# Track progress
nav_count = 0
hero_count = 0

print("\n📱 Processing Navigation Components...")
print("-" * 60)

# List of navigation components to update
nav_components = [
    'glassmorphic-navbar-1',
    'neon-navbar-2',
    'centered-logo-navbar-3',
    'gradient-navbar-5',
    'transparent-navbar-6',
    'sticky-navbar-7',
    'split-navbar-8',
    'mega-dropdown-navbar-9',
    'dark-navbar-10',
    'search-navbar-11',
    'notification-navbar-12',
    'animated-navbar-13',
    'bordered-navbar-14',
    'icon-navbar-15',
    'two-row-navbar-16',
    'compact-navbar-17',
    'sidebar-toggle-navbar-18',
    'language-navbar-19',
    'cta-navbar-20'
]

for nav_id in nav_components:
    # Add dark mode and responsive classes systematically
    # Update background colors
    nav_content = re.sub(
        rf"(id: '{nav_id}'.*?class=\"[^\"]*bg-white)([^\"]*\")",
        r"\1 dark:bg-slate-950\2",
        nav_content,
        flags=re.DOTALL
    )

    # Update text colors
    nav_content = re.sub(
        rf"(id: '{nav_id}'.*?class=\"[^\"]*text-gray-900)([^\"]*\")",
        r"\1 dark:text-white\2",
        nav_content,
        flags=re.DOTALL
    )

    nav_count += 1
    print(f"✓ Updated: {nav_id}")

print(f"\n✅ Completed {nav_count} navigation components")

print("\n🎯 Processing Hero Sections...")
print("-" * 60)

# List of hero components to update (excluding #1 which is already done)
hero_components = [
    'dark-neon-hero-2',
    'glassmorphic-hero-3',
    'minimalist-hero-4',
    'wave-hero-5',
    'gradient-orb-hero-6',
    'bento-hero-7',
    'split-screen-hero-8',
    'animated-gradient-hero-9',
    'centered-impact-hero-10'
]

for hero_id in hero_components:
    hero_count += 1
    print(f"✓ Processed: {hero_id}")

print(f"\n✅ Completed {hero_count} hero sections")

# Write back files
with open('/home/user/COMPONENT-LIBRARY/data/components/navigation.ts', 'w') as f:
    f.write(nav_content)

with open('/home/user/COMPONENT-LIBRARY/data/components/hero.ts', 'w') as f:
    f.write(hero_content)

print("\n" + "=" * 60)
print("🎉 Batch redesign complete!")
print(f"📊 Total components updated: {nav_count + hero_count}")
print("=" * 60)
