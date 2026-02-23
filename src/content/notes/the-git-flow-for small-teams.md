---
title: "The Git flow for small teams"
tags: ["git", "workflow", "engineering", "frontend"]
draft: true
---

_I didn't suggest a textbook workflow. read everything, and choose the bits that suits._

Not a best practice, just what worked at 4 engineers with fast cycles and a client who wants one live URL to test.

### How we got here

When working **Solo.** Git was simple, almost too simple. Branch when I felt like it, push straight to main, deploy. No conflicts, no drama. Although i have `staging` branch for the client to poke around, merge to main when everything looked good.

**Two devs.** We picked different areas naturally, so overlaps were rare. Stopped pushing directly to `main` branch and used `staging` branch as a safety net.

**Four devs.** all moving fast working on same codebase. The "just coordinate verbally" approach started to crack.

### Why not an existing model?

We considered the obvious options:

- **[GitHub Flow &#x2197;](https://docs.github.com/en/get-started/using-github/github-flow)** (PRs straight to main) - no staging gate, our client need to see a live version to test.
- **[Git Flow &#x2197;](https://nvie.com/posts/a-successful-git-branching-model/)** (develop + release branches) - too ceremonial for a four-person team
- **[Trunk-Based Development &#x2197;](https://trunkbaseddevelopment.com/)** (tiny branches + feature flags - overhead we don't need)

None fit perfectly. So we shaped our own taking desired pieces and clubbing them together, simplified flow for our simple usecase.

### Branch structure

Two long-lived branches:

| Branch    | Purpose                |
| --------- | ---------------------- |
| `main`    | Production.            |
| `staging` | The client tests here. |

Everything else is short-lived:

| Type    | Naming                            | Base   |
| ------- | --------------------------------- | ------ |
| Feature | `feature/TASK-123-login-redesign` | `main` |
| Hotfix  | `hotfix/TASK-789-broken-button`   | `main` |

### Daily rhythm

1. Pull latest main: `git pull origin main`
2. If your branch is a few hours old, rebase: `git fetch && git rebase origin/main`
3. Work. Commit small and often.
4. Lint and build pass.
5. Publish feature branch.
6. Changes get reviewed, and merged to `staging`
7. client tests and approves. If not, fix, push, re-deploy.
8. Once approved, open a PR from your **feature branch** to `main`.
9. Merge to `main` - auto-deploys to production.

> We always PR feature branches to `main` at the end, not `staging` to `main`. Staging is shared and may contain other unapproved features.

The same flow works for both features branches and hotfixes.

### Staging drift

After a time `staging` drifts away from `main` with unapproved features. It becomes a version of the codebase that doesn't exist anywhere else, which makes client testing meaningless.

So we reset it. After few releases or at the start of a new sprint:

```bash
git checkout staging
git reset --hard main
git push origin staging --force
```

Anything that was in staging but hadn't made it to `main` just gets re-merged from the feature branch if needed.

---

After a month of following this workflow, we are convinced by the benifits of having a on demand preview deployments, and how having a shared staging is the point where every wrong decision in our flow is being surrounded around.

We got vercel pro, as ours is a private repo and used preview deployments, there will be no more issue of drifted staging.

> This was the state of our workflow when I am working with a team of 4.
