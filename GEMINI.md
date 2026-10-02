<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Autonomous Execution & Permission Rule

- **Do Not Ask for Permission:** Execute file edits, creations, deletions, terminal commands, installations, builds, and tests autonomously without asking the user for confirmation beforehand.
- **Proactive Implementation:** Implement requested changes directly and end-to-end. Report back with the completed results and summary rather than asking for permission at each intermediate step.
- **Exceptions:** Only request confirmation or ask questions if an operation would permanently destroy untracked work/data or if user instructions are fundamentally ambiguous.
- **Integrity:** Adhere to all project standards and never rewrite published git history.
