---
id: "audiophile"
title: "Audiophile"
description: "A Fullstack E-commerce website for electronic devices for audio"
tags: ["next", "typescript"]
repoId: "audiophile-FM"
liveAt: "audiophile-fm-alvs.netlify.app"
isDraft: false
featured: true
---

![Audiophile project preview](/assets/img/audiophile-thumb.png)

### Overview

Audiophile is a e-commerce application built to explore real-world commerce flows beyond static frontend interactions. The project focuses on clean UI, structured data modeling, and realistic order lifecycles.

### Key Features

-   Browse products managed via **Sanity CMS**
-   Add / remove products from cart
-   Checkout flow with price breakdown
-   Checkout form validation

### Technical Architecture

-   Built with [Next JS](https://nextjs.org/), Typescript, and used [Tailwind CSS](https://tailwindcss.com/) for styling.
-   Content managed by [Sanity CMS](https://sanity.io/)
-   Deployed on [Netlify](https://netlify.app/)

### Future Roadmap

-   Razorpay payment integration with webhook-based verification.
-   Order creation and lifecycle management (`created → paid → shipped → delivered`)
-   Inventory tracking and stock updates
-   Authenticate via Clerk
-   Order history and order detail pages
-   Courier service integration for shipment and tracking metadata, atleast a mock implementation.
-   Transactional emails for order confirmation, shipping, and delivery updates, using react-email and resend.

### Why This Project Exists

This project is a playground to go beyond a typical Frontend Mentor implementation and is being used as a learning ground for:

-   Designing secure server-driven flows
-   Handling payments and webhooks correctly
-   Modeling real e-commerce state transitions

### Attributions

-   The designs are from a [frontend mentor challenge](https://www.frontendmentor.io/challenges/audiophile-ecommerce-website-C8cuSd_wx)

> Frontendmentor is a platform offering, some free and paywalled professional designs for frontend developers to create stunning projects to showcase in their portfolios.
