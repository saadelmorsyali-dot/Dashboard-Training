const COURSE = [
{n:0,phase:'START HERE',title:'From Google Sheet to a live dashboard',time:'10 min',outcome:'Understand the exact project you will complete.',body:`<div class="hero-panel"><div class="hero-copy"><span class="eyebrow">AI DASHBOARD ACADEMY</span><h1>Build a professional live dashboard with AI.</h1><p>You start with a Google Sheet, use ChatGPT to build the HTML dashboard, connect GitHub, add your live Sheet endpoint, and publish the finished dashboard through Cloudflare.</p><div class="hero-actions"><button class="primary" data-next="1">Start building →</button><span>20 guided modules · beginner friendly</span></div></div><img class="brand-logo" src="assets/images/orascom-logo.png" alt="Orascom Development logo"></div><div class="architecture large"><div><b>01</b><strong>Google Sheet</strong><span>Your data</span></div><i>→</i><div><b>02</b><strong>ChatGPT</strong><span>Build & edit</span></div><i>→</i><div><b>03</b><strong>GitHub</strong><span>Store & version</span></div><i>→</i><div><b>04</b><strong>Apps Script</strong><span>Live data link</span></div><i>→</i><div><b>05</b><strong>Cloudflare</strong><span>Public URL</span></div></div><div class="outcome-grid"><article><b>INPUT</b><strong>Your spreadsheet</strong><p>Use your own business data.</p></article><article><b>AI BUILD</b><strong>HTML dashboard</strong><p>ChatGPT writes and improves the website.</p></article><article><b>OUTPUT</b><strong>Live website</strong><p>A public dashboard connected to your Sheet.</p></article></div><div class="callout"><b>Course rule</b><p>Every module must produce a real project result. Do not move ahead with a broken dashboard.</p></div>`},
{n:1,phase:'YOUR DATA',title:'Prepare your Google Sheet',time:'20 min',outcome:'Have a clean data table ready to give to AI.',body:`<p>Start with the spreadsheet you actually want to turn into a dashboard. One row should represent one record or project, and the first row should contain clear column names.</p><figure class="screenshot"><img src="assets/images/training-data-sheet.png" alt="Actual Google Sheet training data"><figcaption>Your actual training-sheet screenshot. Use your own data in the same way.</figcaption></figure><div class="steps"><div><b>1</b><h3>Choose your data</h3><p>Use your own business/project data or the training dataset supplied with the course.</p></div><div><b>2</b><h3>Clean the headers</h3><p>Keep one header row. Avoid merged cells, decorative rows and multiple unrelated tables.</p></div><div><b>3</b><h3>Check the values</h3><p>Make sure numbers, percentages and dates are stored consistently.</p></div><div><b>4</b><h3>Keep confidential data out</h3><p>For a public training dashboard, use dummy or approved non-confidential information.</p></div></div><div class="mini-check"><b>Checkpoint</b><span>You can point to your header row and explain what every important column means.</span></div>`},
{n:2,phase:'GITHUB',title:'Create your GitHub account',time:'15 min',outcome:'Have a GitHub account ready to store your dashboard.',body:`<p>GitHub is the workspace where your dashboard files will live. You do not need to become a software engineer or learn Git theory first.</p><div class="steps"><div><b>1</b><h3>Create your account</h3><p>Go to GitHub and create an account using your email.</p></div><div><b>2</b><h3>Verify your email</h3><p>Complete GitHub's account verification.</p></div><div><b>3</b><h3>Open your profile</h3><p>Make sure you can see your GitHub username and profile.</p></div></div><div class="callout"><b>Simple definition</b><p>Think of GitHub as the online folder and version history for your dashboard project.</p></div><div class="mini-check"><b>Checkpoint</b><span>You can sign in to GitHub and open your profile.</span></div>`},
{n:3,phase:'GITHUB',title:'Create your dashboard repository',time:'20 min',outcome:'Create the repository that will contain your website.',body:`<p>A repository is the project folder on GitHub. Create one specifically for your dashboard.</p><figure class="screenshot"><img src="assets/images/github-repository.png" alt="Actual GitHub repository screenshot"><figcaption>Your actual GitHub screenshot. Use it as the visual reference while creating and navigating your repository.</figcaption></figure><div class="steps"><div><b>1</b><h3>Click New repository</h3><p>From GitHub, choose to create a new repository.</p></div><div><b>2</b><h3>Name it clearly</h3><p>Example: <code>construction-dashboard</code>. Avoid spaces when possible.</p></div><div><b>3</b><h3>Choose visibility</h3><p>Use Public only when the data and dashboard are approved for public access. Otherwise use Private where appropriate.</p></div><div><b>4</b><h3>Create the repository</h3><p>Open the new repository and confirm that you are in the correct project.</p></div></div><div class="mini-check"><b>Checkpoint</b><span>You have a repository URL and know where your dashboard files will be stored.</span></div>`},
{n:4,phase:'GITHUB + CHATGPT',title:'Connect ChatGPT to GitHub',time:'25 min',outcome:'Give ChatGPT the ability to work with your repository.',body:`<p>This is one of the most important skills in the course. Instead of copying code manually, connect your GitHub account so ChatGPT can work with the repository.</p><div class="workflow"><span>Connect GitHub</span><b>→</b><span>Select repository</span><b>→</b><span>Ask ChatGPT to inspect</span><b>→</b><span>Test a safe change</span></div><div class="ai-prompt"><header>FIRST TEST PROMPT <button class="copy">Copy</button></header><pre>I have connected my GitHub account to ChatGPT.

Please access my dashboard repository and confirm:
1. The repository name
2. The current files
3. The default branch

Do not modify anything yet.
If you cannot access the repository, tell me exactly what permission or connection step is missing.</pre></div><div class="mini-check"><b>Checkpoint</b><span>ChatGPT can identify your repository without you pasting the code manually.</span></div>`},
{n:5,phase:'AI BUILD',title:'Give ChatGPT your Sheet and dashboard brief',time:'25 min',outcome:'Turn your business request into a clear dashboard specification.',body:`<p>Attach your spreadsheet or a suitable export/screenshot and explain what the dashboard is for. Do not ask AI to blindly build everything before it understands the data.</p><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>I have attached my Google Sheet and a screenshot of the data.

I want to turn this into a professional business dashboard in HTML.

First analyze the data and propose:
- the most useful KPIs
- the most useful charts
- filters and search options
- the most useful table columns
- important warnings or exceptions
- a professional one-page layout

Do not write code yet.
Do not invent fields or values.
If something is unclear, ask me before proceeding.</pre></div><div class="mini-check"><b>Deliverable</b><span>An approved dashboard plan that you understand.</span></div>`},
{n:6,phase:'AI BUILD',title:'Ask ChatGPT to create the HTML dashboard',time:'35 min',outcome:'Generate the first working dashboard file.',body:`<p>Once the requirements are clear, ask ChatGPT to create the website. The goal is a complete HTML file that can be placed in your GitHub repository.</p><div class="ai-prompt"><header>BUILD PROMPT <button class="copy">Copy</button></header><pre>Using the attached data, screenshot and approved dashboard requirements, create my dashboard as a professional responsive HTML website.

Requirements:
- use HTML, CSS and JavaScript
- use the actual data structure
- do not invent data
- include KPI cards, charts, filters and a clear project table where appropriate
- make it responsive for desktop and mobile
- include loading, error and empty states
- keep the code in a single index.html for the first version

I am a beginner, so explain the important parts after the code.
Do not connect live data yet; use the provided sample data for this first version.</pre></div><div class="callout"><b>Why start static?</b><p>It lets you confirm the design before introducing the live data connection.</p></div>`},
{n:7,phase:'GITHUB WORKFLOW',title:'Push the dashboard to GitHub with ChatGPT',time:'20 min',outcome:'Put your first real dashboard into your repository.',body:`<p>Do not manually copy a large HTML file if your GitHub connection is working. Ask ChatGPT to push the file into the repository.</p><div class="ai-prompt"><header>PUSH PROMPT <button class="copy">Copy</button></header><pre>Push the completed dashboard to my connected GitHub repository.

Create or replace:
index.html

Use the existing repository and default branch.
Do not delete unrelated files.
After the change, tell me exactly which files were created or modified.</pre></div><div class="steps"><div><b>1</b><h3>Open GitHub</h3><p>Refresh the repository after ChatGPT confirms the push.</p></div><div><b>2</b><h3>Open index.html</h3><p>Check that the file is actually present.</p></div><div><b>3</b><h3>Inspect the commit</h3><p>See what changed and when.</p></div></div><div class="mini-check"><b>Checkpoint</b><span>Your repository contains the dashboard HTML and a recent commit.</span></div>`},
{n:8,phase:'TEST + EDIT',title:'View the dashboard and request your first edits',time:'30 min',outcome:'Learn the repeatable AI editing loop.',body:`<p>This is the core workflow you will use throughout the course and after graduation.</p><div class="workflow"><span>View</span><b>→</b><span>Describe issue</span><b>→</b><span>AI edits</span><b>→</b><span>Push</span><b>→</b><span>View again</span></div><div class="ai-prompt"><header>EDIT PROMPT <button class="copy">Copy</button></header><pre>Review the current dashboard in my GitHub repository.

Make these changes only:
- improve the KPI card spacing
- make the project table easier to scan
- improve mobile responsiveness
- keep all existing data and functionality

Do not redesign unrelated sections.
After making the changes, push the updated files to GitHub and summarize what changed.</pre></div><div class="callout"><b>Golden rule</b><p>Make controlled changes. Test after every meaningful change so you always know what caused a problem.</p></div>`},
{n:9,phase:'TEST + EDIT',title:'Build your personal AI editing workflow',time:'25 min',outcome:'Learn how to improve the dashboard without manually coding.',body:`<p>You can now use plain language to improve the project. Good prompts describe the desired result, constraints and what must not change.</p><div class="prompt-compare"><div><small>WEAK</small><pre>Make it better.</pre></div><div><small>STRONG</small><pre>Keep the current layout and data. Add a contractor filter, keep all existing charts, improve the table spacing, and make the filter work on every KPI and chart. Push the changes to GitHub after testing.</pre></div></div><div class="ai-prompt"><header>SAFE EDIT PROMPT <button class="copy">Copy</button></header><pre>Before editing, inspect the current GitHub files and explain what you intend to change.

Then make only the requested change:
[DESCRIBE ONE CHANGE]

Do not remove existing functionality.
Do not invent data.
Push the tested result to GitHub and list the files changed.</pre></div>`},
{n:10,phase:'LIVE DATA',title:'Create the Google Apps Script Web App link',time:'25 min',outcome:'Generate the live URL that connects your Sheet to the dashboard.',body:`<p>Apps Script is not a programming subject in this course. It is simply the bridge that gives your Google Sheet a URL the dashboard can read.</p><div class="architecture compact"><div><b>SOURCE</b><strong>Google Sheet</strong></div><i>→</i><div><b>BRIDGE</b><strong>Apps Script</strong></div><i>→</i><div><b>URL</b><strong>Web App</strong></div></div><div class="steps"><div><b>1</b><h3>Open Apps Script</h3><p>Open the Apps Script project associated with your Sheet.</p></div><div><b>2</b><h3>Use the course template</h3><p>Use the provided Apps Script template. You do not need to learn Apps Script programming.</p></div><div><b>3</b><h3>Deploy as Web App</h3><p>Follow the deployment prompts and choose the access setting appropriate for your approved training data.</p></div><div><b>4</b><h3>Copy the Web App URL</h3><p>Your only important output from this module is the live Web App URL.</p></div></div><div class="callout"><b>Important</b><p>The course is not asking you to become an Apps Script developer. Your job here is simply to obtain the live data URL.</p></div>`},
{n:11,phase:'LIVE DATA',title:'Add the Apps Script URL to your HTML',time:'25 min',outcome:'Replace static dashboard data with your live Sheet connection.',body:`<p>This is the key connection step. Give ChatGPT the Web App URL and ask it to update your existing dashboard.</p><div class="ai-prompt"><header>LIVE CONNECTION PROMPT <button class="copy">Copy</button></header><pre>Update my existing dashboard in the GitHub repository.

My Google Apps Script Web App URL is:
[PASTE YOUR WEB APP URL]

Replace the static sample-data loading with live JSON data from this URL.

Requirements:
- fetch the data when the dashboard loads
- show a loading state
- handle API errors clearly
- render the same KPIs, charts, filters and table using the live data
- do not change the visual design unnecessarily
- keep the dashboard responsive

Test the connection and push the updated HTML to GitHub.
Tell me exactly what changed.</pre></div><div class="mini-check"><b>Checkpoint</b><span>Your HTML contains the Apps Script URL and the dashboard loads real Sheet data.</span></div>`},
{n:12,phase:'LIVE DATA',title:'Prove that the dashboard is synchronized',time:'20 min',outcome:'Confirm that Sheet changes appear in the dashboard.',body:`<p>Now prove the live connection instead of assuming it works.</p><div class="steps"><div><b>1</b><h3>Record a value</h3><p>Choose one safe test value in your Google Sheet.</p></div><div><b>2</b><h3>Change it</h3><p>Change the value in the Sheet.</p></div><div><b>3</b><h3>Refresh</h3><p>Refresh your dashboard.</p></div><div><b>4</b><h3>Verify</h3><p>Confirm that the new value appears without editing the HTML data manually.</p></div></div><div class="test-card"><b>Success condition</b><p>Google Sheet → Apps Script URL → HTML dashboard. A change in the source is reflected after the dashboard retrieves the data again.</p></div><div class="ai-prompt"><header>IF IT DOES NOT UPDATE <button class="copy">Copy</button></header><pre>My dashboard is not showing the latest Google Sheet data.

Inspect the current GitHub dashboard code and help me diagnose the live data connection.
Check:
- Apps Script URL
- fetch request
- JSON parsing
- field names
- rendering logic
- browser console errors

Do not rewrite the whole dashboard until you identify the likely cause.</pre></div>`},
{n:13,phase:'DASHBOARD QUALITY',title:'Add and refine KPIs, charts and tables',time:'40 min',outcome:'Turn the live data into useful management information.',body:`<p>Now that the data is live, improve the dashboard around decisions rather than decoration.</p><div class="kpi-grid"><div><b>Cost</b><span>Budget · Committed · Forecast</span></div><div><b>Progress</b><span>Planned vs Actual</span></div><div><b>Schedule</b><span>Delay Days</span></div><div><b>Change</b><span>Open VOs · VO Value</span></div></div><div class="ai-prompt"><header>FEATURE PROMPT <button class="copy">Copy</button></header><pre>Using the live data already connected to my dashboard, implement these approved dashboard features:

KPIs:
[PASTE KPI LIST]

Charts:
[PASTE CHART LIST]

Table fields:
[PASTE TABLE LIST]

Requirements:
- use live API data
- calculations must be based on actual fields
- charts and KPIs must respond to filters
- format percentages and money clearly
- do not invent data
- preserve the existing professional design
- test before pushing to GitHub.</pre></div>`},
{n:14,phase:'DASHBOARD QUALITY',title:'Add filters, search and user-friendly states',time:'35 min',outcome:'Make the dashboard practical for daily use.',body:`<p>A dashboard becomes useful when users can quickly narrow the information they need.</p><div class="requirements"><div><b>FILTER</b><span>Contractor / Project / Status</span></div><div><b>SEARCH</b><span>Find a project quickly</span></div><div><b>SORT</b><span>Prioritize delays or cost issues</span></div><div><b>STATES</b><span>Loading / Error / Empty</span></div></div><div class="ai-prompt"><header>UX PROMPT <button class="copy">Copy</button></header><pre>Improve the existing live dashboard by adding:
- project search
- contractor filter
- status filter
- sortable project table
- clear loading state
- useful API error state
- empty-data state
- last-updated indicator

All existing KPIs and charts must continue to work and respond to the filters.
Do not remove functionality. Push the tested changes to GitHub.</pre></div>`},
{n:15,phase:'GITHUB',title:'Use GitHub as your dashboard workspace',time:'30 min',outcome:'Understand commits, versions and the AI edit cycle.',body:`<p>GitHub becomes the central workspace for your dashboard. Every meaningful AI change should leave a history that you can inspect.</p><div class="workflow"><span>Request</span><b>→</b><span>AI edits</span><b>→</b><span>Commit</span><b>→</b><span>Review</span><b>→</b><span>Test</span></div><div class="ai-prompt"><header>VERSION-SAFE PROMPT <button class="copy">Copy</button></header><pre>Before changing my dashboard, inspect the current repository and preserve the working functionality.

Make this change:
[DESCRIBE CHANGE]

After editing:
1. Check for obvious HTML/CSS/JavaScript errors.
2. Push the changes to GitHub.
3. Tell me which files changed.
4. Explain how I can verify the change in the browser.
5. Do not modify unrelated functionality.</pre></div><div class="mini-check"><b>Checkpoint</b><span>You can open a commit in GitHub and understand that it represents a version of your dashboard.</span></div>`},
{n:16,phase:'CLOUDFLARE',title:'Connect GitHub to Cloudflare Pages',time:'30 min',outcome:'Publish your GitHub dashboard as a public website.',body:`<p>GitHub stores the project. Cloudflare Pages publishes it as a website with a URL that you can share.</p><div class="architecture compact"><div><b>CODE</b><strong>GitHub</strong></div><i>→</i><div><b>DEPLOY</b><strong>Cloudflare Pages</strong></div><i>→</i><div><b>LIVE</b><strong>Public URL</strong></div></div><div class="steps"><div><b>1</b><h3>Create/sign in to Cloudflare</h3><p>Use your Cloudflare account.</p></div><div><b>2</b><h3>Create a Pages project</h3><p>Choose the option to connect an existing GitHub repository.</p></div><div><b>3</b><h3>Select your repository</h3><p>Select the dashboard repository you built in this course.</p></div><div><b>4</b><h3>Deploy</h3><p>Complete the deployment settings and publish the site.</p></div></div><div class="mini-check"><b>Checkpoint</b><span>Cloudflare gives you a working web address that opens your dashboard.</span></div>`},
{n:17,phase:'CLOUDFLARE + AI',title:'Understand automatic updates',time:'20 min',outcome:'Know how an AI edit travels from GitHub to your live website.',body:`<p>Once Cloudflare is connected to GitHub, your workflow becomes extremely simple.</p><div class="architecture large"><div><b>01</b><strong>Ask AI</strong><span>Edit dashboard</span></div><i>→</i><div><b>02</b><strong>GitHub</strong><span>New commit</span></div><i>→</i><div><b>03</b><strong>Cloudflare</strong><span>Build/deploy</span></div><i>→</i><div><b>04</b><strong>Live URL</strong><span>Updated site</span></div></div><div class="ai-prompt"><header>MAINTENANCE PROMPT <button class="copy">Copy</button></header><pre>Update my dashboard in the connected GitHub repository.

Requested change:
[DESCRIBE CHANGE]

Keep the existing live Google Sheet connection intact.
Do not remove current KPIs, charts or filters.
Test the change, push it to GitHub, and tell me what I should check on the live Cloudflare URL.</pre></div>`},
{n:18,phase:'CASE STUDY',title:'Real construction project dashboard',time:'45 min',outcome:'Apply the complete process to a project-management portfolio.',body:`<p>Use the course construction dataset as a worked example. The goal is an executive portfolio view that answers cost, progress, schedule, change and risk questions.</p><div class="data-map"><div><b>PROJECT</b><span>Name · Contractor · Status</span></div><div><b>COST</b><span>Budget · Committed · Paid · Forecast</span></div><div><b>PROGRESS</b><span>Planned % · Actual %</span></div><div><b>CONTROL</b><span>Delay · VOs · Risks</span></div></div><div class="ai-prompt"><header>CASE STUDY PROMPT <button class="copy">Copy</button></header><pre>Build a construction project portfolio dashboard from my attached dataset.

The executive user needs to understand:
- total portfolio budget
- committed and paid amounts
- forecast exposure
- planned vs actual progress
- delayed projects
- open variations and VO value
- open risks
- contractor and project status

Create a clear executive layout with useful filters.
Use only the supplied data.
First explain the dashboard design, then build it.
After approval, push the dashboard to my GitHub repository.</pre></div>`},
{n:19,phase:'FINAL CAPSTONE',title:'Build, publish and maintain your own dashboard',time:'60–90 min',outcome:'Finish with a live dashboard you can share and continue improving with AI.',body:`<p>This is your final project. Start with your own Google Sheet and complete the entire workflow without skipping the checkpoints.</p><div class="requirements"><div><b>01</b><span>Google Sheet prepared</span></div><div><b>02</b><span>GitHub repository connected</span></div><div><b>03</b><span>HTML dashboard built</span></div><div><b>04</b><span>Apps Script URL connected</span></div><div><b>05</b><span>Live data verified</span></div><div><b>06</b><span>Cloudflare URL published</span></div></div><div class="ai-prompt"><header>FINAL AUDIT PROMPT <button class="copy">Copy</button></header><pre>Audit my complete dashboard project in GitHub.

Check:
- HTML structure
- CSS responsiveness
- JavaScript errors
- live Apps Script data connection
- KPI calculations
- charts
- filters and search
- loading/error/empty states
- mobile behavior
- unnecessary hard-coded data
- GitHub project structure

Do not change anything yet.
Give me a prioritized list of issues and improvements.
Then ask me which item I want you to fix first.</pre></div><h2>Your reusable AI workflow</h2><div class="architecture large"><div><b>DATA</b><strong>Google Sheet</strong></div><i>→</i><div><b>AI</b><strong>ChatGPT</strong></div><i>→</i><div><b>CODE</b><strong>GitHub</strong></div><i>→</i><div><b>LIVE DATA</b><strong>Apps Script</strong></div><i>→</i><div><b>WEB</b><strong>Cloudflare</strong></div></div><div class="callout"><b>Graduation standard</b><p>You are finished when someone can open your Cloudflare URL, see your dashboard, and the dashboard can retrieve the latest approved data from your Google Sheet.</p></div><h2>Prompt library</h2><div class="ai-prompt"><header>BUILD FROM SCRATCH <button class="copy">Copy</button></header><pre>Analyze my attached Google Sheet and screenshot. Propose a professional dashboard first. After I approve it, build the HTML dashboard and push it to my connected GitHub repository. Do not invent data.</pre></div><div class="ai-prompt"><header>EDIT <button class="copy">Copy</button></header><pre>Inspect my current GitHub dashboard. Make only this change: [CHANGE]. Preserve all existing data connections and functionality. Test it and push the update to GitHub.</pre></div><div class="ai-prompt"><header>DEBUG <button class="copy">Copy</button></header><pre>My dashboard has this problem: [PROBLEM]. Inspect the current GitHub code first. Identify the likely cause before changing anything. Then fix only the root cause, test it, and push the result.</pre></div><div class="ai-prompt"><header>LIVE DATA <button class="copy">Copy</button></header><pre>Connect my existing dashboard to this Apps Script Web App URL: [URL]. Replace static data with live JSON, preserve the current design, handle loading and errors, test the connection, and push the update to GitHub.</pre></div><div class="ai-prompt"><header>FINAL IMPROVEMENT <button class="copy">Copy</button></header><pre>Review my live dashboard as a senior product designer and project manager. Identify the five highest-value improvements to usability, decision-making and visual clarity. Do not change anything yet.</pre></div>`}
];
