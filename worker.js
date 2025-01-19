const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CacheTax - Tax Solutions for the Overemployed</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&display=swap" rel="stylesheet">
    <style>
    ${CSS_CONTENT}
    </style>
</head>
<body>
    <header>
        <nav>
            <div class="logo">CacheTax</div>
            <button class="cta-button coming-soon">Coming Soon</button>
        </nav>
    </header>

    <main>
        <div class="coming-soon-overlay">
            <div class="coming-soon-content">
                <h3>🚧 Coming Soon 🚧</h3>
                <p>Launching February 2025</p>
                <div class="modal-cta">
                    <a href="mailto:info@cachetax.com?subject=Join%20CacheTax%20Waitlist" class="primary-cta">Join the Waitlist</a>
                </div>
            </div>
        </div>
        <section class="hero">
            <div class="container">
                <div class="audience-tag">Overemployed Professional?</div>
                <h1>Worried About Filing<br>Your Returns This Year?</h1>
                <h2>We'll Handle Everything For You</h2>
                
                <div class="hero-stats">
                    <div class="stat">
                        <h3>$12M+</h3>
                        <p>Tax Savings<br>Last Year</p>
                    </div>
                    <div class="stat">
                        <h3>98%</h3>
                        <p>Client<br>Satisfaction</p>
                    </div>
                    <div class="stat">
                        <h3>15+</h3>
                        <p>Years of Multi-Income<br>Tax Expertise</p>
                    </div>
                </div>

                <div class="cta-section">
                    <p class="launch-info">Launching February 2025 - Just in time for tax season!</p>
                </div>
            </div>
        </section>
    </main>
</body>
</html>`;

export default {
    async fetch(request, env, ctx) {
        return new Response(html, {
            headers: {
                'content-type': 'text/html;charset=UTF-8',
                'Cache-Control': 'public, max-age=3600',
            },
        });
    },
};
