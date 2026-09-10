const COURSE = [
{n:0,phase:"START HERE",title:"From spreadsheet to live dashboard",time:"10 min",outcome:"Understand the complete project and what you will build.",body:`<div class="hero-panel"><div class="hero-copy"><span class="eyebrow">AI DASHBOARD ACADEMY</span><h1>Build a live project dashboard from your own Google Sheet.</h1><p>Follow the course from raw data to a working web application. Every module produces something you will use in the final dashboard.</p><div class="hero-actions"><button class="primary" data-next="1">Start building →</button><span>20 guided modules · beginner friendly</span></div></div><img class="brand-logo" src="assets/images/orascom-logo.svg" alt="Orascom Development O-West logo"></div><div class="outcome-grid"><article><b>INPUT</b><strong>Your Google Sheet</strong><p>Use your own business data or the training dataset.</p></article><article><b>BUILD</b><strong>AI + Web + API</strong><p>AI helps you write, explain and debug the application.</p></article><article><b>OUTPUT</b><strong>Live dashboard</strong><p>A responsive dashboard connected to live data.</p></article></div><h2>The project we will build</h2><div class="architecture large"><div><b>01</b><strong>Google Sheet</strong><span>Source data</span></div><i>→</i><div><b>02</b><strong>AI analysis</strong><span>Requirements</span></div><i>→</i><div><b>03</b><strong>Web dashboard</strong><span>HTML/CSS/JS</span></div><i>→</i><div><b>04</b><strong>Apps Script</strong><span>Live JSON</span></div><i>→</i><div><b>05</b><strong>Cloudflare</strong><span>Live URL</span></div></div><div class="callout"><b>Course rule</b><p>Do not move ahead just because you copied code. At every checkpoint, your dashboard must work before continuing.</p></div>`},
{n:1,phase:"DATA FOUNDATION",title:"Create your training data source",time:"20 min",outcome:"Have a clean Google Sheet ready for AI analysis.",body:`<p>Start with one table. Keep one row per project and one column per attribute. Do not build charts yet.</p><figure class="screenshot"><img src="assets/images/google-sheet-example.svg" alt="Training Data Google Sheet screenshot"><figcaption>Use this real training-sheet example as your reference. Your own columns may be different.</figcaption></figure><div class="steps"><div><b>1</b><h3>Create or copy your Sheet</h3><p>Use your own data. If you do not have suitable data, use the course training dataset in <code>templates/sample-data/training-data.csv</code>.</p></div><div><b>2</b><h3>Keep the first row as headers</h3><p>Headers should be clear and unique. Avoid merged cells, decorative rows and multiple tables in the same range.</p></div><div><b>3</b><h3>Check the values</h3><p>Make sure percentages are percentages, costs are numeric, and dates are real dates rather than text.</p></div></div><div class="mini-check"><b>Your deliverable</b><span>A Google Sheet with one clean project table.</span></div>`},
{n:2,phase:"DATA FOUNDATION",title:"Understand what your data means",time:"25 min",outcome:"Create a data dictionary before asking AI to build anything.",body:`<p>AI can write code quickly, but bad definitions create bad dashboards. First define the meaning of each field.</p><div class="data-map"><div><b>Project</b><span>ID · Name · Contractor</span></div><div><b>Cost</b><span>Budget · Committed · Paid · Forecast</span></div><div><b>Progress</b><span>Planned % · Actual % · Delay Days</span></div><div><b>Change & Risk</b><span>Open VOs · VO Value · Open Risks · Status</span></div></div><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>I am building a professional project dashboard from this dataset.

Analyze the attached table and create a data dictionary with these columns:
1. Original column name
2. Plain-English meaning
3. Data type
4. Example value
5. Whether it should be used in a KPI, chart, filter or table
6. Any data-quality concern

Do not write code yet. If something is ambiguous, ask me a question instead of guessing.</pre></div><div class="mini-check"><b>Your deliverable</b><span>A reviewed data dictionary that you understand.</span></div>`},
{n:3,phase:"DATA FOUNDATION",title:"Improve the data structure",time:"25 min",outcome:"Know exactly what additional fields your dashboard needs.",body:`<p>Do not add columns simply because AI suggests them. Add a field only when it supports a useful decision.</p><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>Review my dataset for an executive project dashboard.

Recommend additional columns only where they enable a useful KPI, filter, calculation or management decision.

For every proposed column provide:
- Column name
- Purpose
- Data type
- Example value
- How it will be calculated or maintained
- Why it matters

Separate MUST HAVE from NICE TO HAVE.
Do not modify my data yet.</pre></div><div class="callout"><b>Example</b><p>A calculated field such as Cost Variance = Forecast Cost − Budget can be more useful than adding another manually maintained column.</p></div>`},
{n:4,phase:"AI WORKFLOW",title:"Learn the AI build workflow",time:"20 min",outcome:"Control AI instead of asking it to blindly build everything.",body:`<p>Use AI in stages. Give it context, request one task, inspect the result, test it, then continue.</p><div class="workflow"><span>Context</span><b>→</b><span>Ask</span><b>→</b><span>Review</span><b>→</b><span>Test</span><b>→</b><span>Commit</span></div><div class="prompt-compare"><div><small>AVOID</small><pre>Build my dashboard.</pre></div><div><small>USE</small><pre>I am a beginner. Here is my data and goal. First propose the dashboard structure. Do not write code until I approve it.</pre></div></div><div class="mini-check"><b>Rule</b><span>One meaningful change at a time. Keep a working version.</span></div>`},
{n:5,phase:"AI WORKFLOW",title:"Analyze your dataset with AI",time:"30 min",outcome:"Turn rows and columns into business questions.",body:`<p>Now ask AI to identify the management story hidden in the data. For a project portfolio, think cost, schedule, progress, change and risk.</p><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>Using my dataset, analyze it as a project-management portfolio.

Identify:
- the most important management questions
- useful KPIs
- useful dimensions for filtering
- trends or exceptions worth highlighting
- data-quality issues

For each KPI give the formula and explain what decision it supports.
Prioritize executive usefulness over the number of metrics.
Do not write dashboard code yet.</pre></div><div class="mini-check"><b>Your deliverable</b><span>A short list of approved management questions and KPIs.</span></div>`},
{n:6,phase:"AI WORKFLOW",title:"Design the dashboard requirements",time:"30 min",outcome:"Have a clear blueprint before generating code.",body:`<p>Convert the analysis into a dashboard specification. This is the handoff between business thinking and development.</p><div class="requirements"><div><b>KPI</b><span>What is measured?</span></div><div><b>VISUAL</b><span>How is it shown?</span></div><div><b>FILTER</b><span>How can users slice it?</span></div><div><b>ACTION</b><span>What should the user notice?</span></div></div><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>Create a dashboard requirements document from my approved KPIs.

For each item provide:
1. Name
2. Business question
3. Formula
4. Source columns
5. Visual type
6. Filters that affect it
7. Warning/threshold logic
8. Priority: Must Have / Nice to Have

Then propose a one-page executive layout.
Keep it practical and explain your reasoning.</pre></div>`},
{n:7,phase:"BUILD THE WEB",title:"HTML: build the dashboard structure",time:"30 min",outcome:"Understand and create the page structure used by your dashboard.",body:`<p>You only need the HTML concepts that appear in the project: sections, headings, buttons, tables, containers and semantic structure.</p><div class="code-explain"><div><b>HTML</b><span>What exists on the page</span></div><div><b>CSS</b><span>How it looks</span></div><div><b>JavaScript</b><span>How it behaves</span></div></div><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>I am a complete beginner.

Create the HTML skeleton for my approved dashboard requirements.
Include placeholders for:
- header
- filters
- KPI cards
- charts
- project table
- loading state
- error state

Use semantic HTML and clear class names.
Do not add styling or JavaScript yet.
Explain the structure after the code.</pre></div><div class="mini-check"><b>Test</b><span>Open the HTML file in your browser. You should see the dashboard sections, even if they are ugly.</span></div>`},
{n:8,phase:"BUILD THE WEB",title:"CSS: make it look professional",time:"35 min",outcome:"Create a clean responsive visual system.",body:`<p>Do not chase decoration. Use CSS to create hierarchy, spacing, readability and responsive behavior.</p><div class="visual-rules"><span>Clear hierarchy</span><span>Consistent spacing</span><span>Readable numbers</span><span>Responsive layout</span><span>Accessible contrast</span></div><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>Style my dashboard using the existing HTML.

Design direction:
- professional executive analytics interface
- clean typography
- restrained color palette
- clear KPI hierarchy
- responsive desktop/tablet/mobile layout
- no unnecessary gradients or decoration

Do not change the HTML structure or data logic.
Explain the main CSS decisions and give me the complete CSS.</pre></div>`},
{n:9,phase:"BUILD THE WEB",title:"JavaScript: make it work",time:"40 min",outcome:"Understand the JavaScript needed for filters, calculations and rendering.",body:`<p>JavaScript is the behavior layer. In this project it will eventually fetch JSON, calculate KPIs, render rows/charts and react to filters.</p><div class="architecture compact"><div><b>DATA</b><strong>JSON</strong></div><i>→</i><div><b>LOGIC</b><strong>Calculate</strong></div><i>→</i><div><b>UI</b><strong>Render</strong></div></div><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>Teach me the JavaScript used in my dashboard.

Explain only the concepts I need:
- variables and arrays
- objects
- functions
- map/filter/reduce
- DOM selection and updates
- event listeners
- fetch and JSON
- async/await

Use examples from my dashboard code. Do not rewrite the project.</pre></div><div class="mini-check"><b>Important</b><span>You do not need to memorize JavaScript. You need to understand what the AI-generated code is doing and how to test it.</span></div>`},
{n:10,phase:"CONNECT THE DATA",title:"Connect the Google Sheet",time:"25 min",outcome:"Prepare the Sheet for a reliable API connection.",body:`<p>The dashboard should not read a manually exported CSV every time. We want a live connector so the source remains the Google Sheet.</p><div class="data-map"><div><b>Source</b><span>Google Sheet</span></div><div><b>Connector</b><span>Apps Script</span></div><div><b>Format</b><span>JSON</span></div><div><b>Consumer</b><span>Dashboard</span></div></div><div class="callout"><b>Security reminder</b><p>Use only training/non-confidential data in a public demo. Do not expose sensitive company information or secrets in client-side code.</p></div>`},
{n:11,phase:"CONNECT THE DATA",title:"Build the Apps Script API",time:"45 min",outcome:"Create a Web App endpoint that returns your Sheet data as JSON.",body:`<p>This is the most important technical bridge in the course: Apps Script reads the Sheet and the dashboard consumes the returned JSON.</p><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>I need a Google Apps Script Web App for my dashboard.

Requirements:
- read the first sheet in my spreadsheet
- use row 1 as headers
- convert each subsequent row into an object using those headers
- return JSON from doGet()
- handle an empty sheet safely
- include clear error handling

Explain where I must put my Spreadsheet ID and Sheet name, then provide the complete Code.gs.
Do not assume my spreadsheet ID. Show me where to replace it.</pre></div><div class="mini-check"><b>Your deliverable</b><span>An Apps Script project with a testable Web App deployment.</span></div>`},
{n:12,phase:"CONNECT THE DATA",title:"Connect JavaScript to the live API",time:"40 min",outcome:"See real Google Sheet rows appear in the dashboard.",body:`<p>Now replace static sample data with live JSON. This is where the project becomes a real application.</p><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>Connect my existing dashboard JavaScript to this Apps Script JSON endpoint:
[PASTE WEB APP URL]

Requirements:
- fetch the endpoint on page load
- show a loading state
- parse and validate the JSON
- populate the dashboard
- show a useful error message if the request fails
- do not change my visual design

Explain exactly which part of the JavaScript changed and why.</pre></div><div class="test-card"><b>Browser test</b><ol><li>Open the dashboard.</li><li>Open Developer Tools → Console.</li><li>Confirm the API request succeeds.</li><li>Change one value in the Sheet.</li><li>Refresh the dashboard and verify the change appears.</li></ol></div>`},
{n:13,phase:"DASHBOARD",title:"Build KPIs and charts",time:"50 min",outcome:"Turn live data into management-ready insights.",body:`<p>Start with the approved requirements. Do not add charts just because a chart library can make them.</p><div class="kpi-grid"><div><b>Total Budget</b><span>Σ Budget</span></div><div><b>Forecast</b><span>Σ Forecast Cost</span></div><div><b>Progress</b><span>Actual vs Planned</span></div><div><b>Delayed</b><span>Projects above threshold</span></div></div><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>Using the live dataset and approved requirements, implement the KPI cards and charts.

KPIs:
[PASTE APPROVED KPI LIST]

Charts:
[PASTE APPROVED CHART LIST]

Requirements:
- calculations must use the live API data
- charts must update when filters change
- format money and percentages clearly
- do not invent data
- explain each calculation before providing the code</pre></div>`},
{n:14,phase:"DASHBOARD",title:"Add filters, search and UX states",time:"45 min",outcome:"Make the dashboard useful during real management review.",body:`<p>Good UX means the user can quickly find the project or exception that needs attention.</p><div class="requirements"><div><b>FILTERS</b><span>Project · Contractor · Status</span></div><div><b>SEARCH</b><span>Find a project</span></div><div><b>SORT</b><span>Prioritize exceptions</span></div><div><b>STATES</b><span>Loading · Error · Empty</span></div></div><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>Enhance my existing dashboard without changing the approved design.

Add:
- Project filter
- Contractor filter
- Status filter
- project search
- sortable table
- loading state
- error state
- empty state
- last updated indicator

All KPIs and charts must respond to the filters.
Make the changes modular and explain each change before the final code.</pre></div>`},
{n:15,phase:"DEPLOY",title:"Put the project in GitHub",time:"25 min",outcome:"Store a working version of your dashboard in a repository.",body:`<figure class="screenshot"><img src="assets/images/github-repository-example.svg" alt="GitHub Dashboard-Training repository screenshot"><figcaption>This is the GitHub repository used as the course example.</figcaption></figure><div class="steps"><div><b>1</b><h3>Create/clone the repository</h3><p>Use GitHub Desktop if Git commands are unfamiliar.</p></div><div><b>2</b><h3>Keep a clean structure</h3><p>Separate dashboard files, prompts, Apps Script and sample data.</p></div><div><b>3</b><h3>Commit a working version</h3><p>Use a message that explains the change, then push it to GitHub.</p></div></div><div class="mini-check"><b>Deliverable</b><span>Your dashboard source code is safely versioned and can be restored.</span></div>`},
{n:16,phase:"DEPLOY",title:"Deploy the dashboard with Cloudflare Pages",time:"30 min",outcome:"Turn your GitHub project into a live website.",body:`<p>Connect the GitHub repository to Cloudflare Pages. For a static HTML/CSS/JS dashboard, there is no framework build step required.</p><div class="architecture compact"><div><b>01</b><strong>GitHub</strong><span>Push</span></div><i>→</i><div><b>02</b><strong>Cloudflare Pages</strong><span>Build</span></div><i>→</i><div><b>03</b><strong>Live URL</strong><span>Share</span></div></div><div class="ai-prompt"><header>AI PROMPT <button class="copy">Copy</button></header><pre>Review my project structure for deployment as a static HTML/CSS/JavaScript site.

Check:
- relative file paths
- entry HTML file
- CSS/JS loading
- API URL configuration
- assets
- mobile behavior

Identify anything that could fail after deployment and tell me exactly how to test it before publishing.</pre></div>`},
{n:17,phase:"DEPLOY",title:"Maintain and improve the dashboard with AI",time:"30 min",outcome:"Learn a safe workflow for future changes.",body:`<p>Your dashboard is now a product, not a one-time file. Every change should be requested, reviewed, tested and committed.</p><div class="workflow"><span>Request</span><b>→</b><span>AI plan</span><b>→</b><span>Change</span><b>→</b><span>Test</span><b>→</b><span>Commit</span><b>→</b><span>Deploy</span></div><div class="ai-prompt"><header>MAINTENANCE PROMPT <button class="copy">Copy</button></header><pre>Modify my existing dashboard safely.

Requested change:
[DESCRIBE ONE CHANGE]

Rules:
- do not change unrelated functionality
- preserve existing calculations
- preserve the current visual design unless requested
- identify files that must change
- explain the implementation before code
- include a test checklist
- show me the exact code changes</pre></div>`},
{n:18,phase:"FINISH",title:"Real construction dashboard case study",time:"35 min",outcome:"Use the complete workflow on a realistic project portfolio.",body:`<p>Use the training portfolio to reproduce the full management view. The dataset includes budget, committed, paid, forecast, progress, delay, VOs, risks and status across 20 projects.</p><div class="case-grid"><article><b>COST</b><p>Budget vs committed vs paid vs forecast.</p></article><article><b>SCHEDULE</b><p>Planned vs actual progress and delay days.</p></article><article><b>CHANGE</b><p>Open VOs and VO exposure.</p></article><article><b>RISK</b><p>Open risks and project status.</p></article></div><div class="callout"><b>Case-study challenge</b><p>Before opening your dashboard, predict which projects deserve management attention. Then compare your reasoning with the dashboard results.</p></div>`},
{n:19,phase:"FINISH",title:"Prompt library + final capstone",time:"60–90 min",outcome:"Finish your own dashboard and leave with reusable AI prompts.",body:`<h2>Final capstone</h2><div class="capstone-list"><div>✓ Your own Google Sheet</div><div>✓ Approved data dictionary</div><div>✓ KPI & chart requirements</div><div>✓ HTML/CSS/JavaScript dashboard</div><div>✓ Apps Script JSON API</div><div>✓ Live filters and interactions</div><div>✓ GitHub repository</div><div>✓ Cloudflare deployment</div></div><div class="ai-prompt"><header>FINAL AUDIT PROMPT <button class="copy">Copy</button></header><pre>I have completed my dashboard project.

Act as a senior product manager, frontend developer and QA reviewer.
Audit the project against this checklist:

1. Data source is correct
2. API returns valid JSON
3. Dashboard loads without errors
4. KPIs are mathematically correct
5. Charts use live data
6. Filters update KPIs/charts/table
7. Search and sorting work
8. Loading/error/empty states work
9. Mobile layout works
10. No sensitive information is exposed
11. File paths work after deployment
12. GitHub contains the latest tested version

For every failure give: symptom, root cause, exact fix, and test procedure.
Do not rewrite unrelated code.</pre></div><h2>Reusable prompt library</h2><div class="prompt-library"><button class="library-copy" data-prompt="Review my dashboard and identify the single highest-impact improvement. Explain why before giving code.">Improve my dashboard</button><button class="library-copy" data-prompt="Debug this dashboard. Here is the expected behavior, actual behavior, console error and relevant code. Identify the root cause before proposing a fix.">Debug an error</button><button class="library-copy" data-prompt="Add one new KPI to my existing dashboard. Preserve all existing functionality, identify the source columns and formula, then implement and test it.">Add a KPI</button><button class="library-copy" data-prompt="Add one new filter to my existing dashboard. Make sure every dependent KPI, chart and table updates correctly.">Add a filter</button></div><div class="finish-banner"><strong>You built it.</strong><p>Your goal was not to become a programmer. Your goal was to learn a repeatable way to turn business data into a live application with AI.</p></div>`}
];
