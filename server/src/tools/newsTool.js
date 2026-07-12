export async function getCompanyNews(company) {

    try {

        console.log("Company received by GNews:", company);

        const cleanCompany = company
            .replace(/[^\w\s]/g, "")
            .trim();

        console.log("Searching GNews for:", cleanCompany);

        // Removed country restriction to support international news
        const url =
            `https://gnews.io/api/v4/search?` +
            `q=${encodeURIComponent(cleanCompany)}&` +
            `lang=en&` +
            `max=10&` +
            `apikey=${process.env.GNEWS_API_KEY}`;

        const response = await fetch(url);

        const data = await response.json();

        console.log("Status:", response.status);
        console.log("Response:", data);

        if (!response.ok) {
            console.error("GNews API Error:", data);
            // Don't throw error - return empty array instead
            return [];
        }

        if (!data.articles || data.articles.length === 0) {
            console.log("No news articles found");
            return [];
        }

        return data.articles.map(article => ({
            title: article.title,
            description: article.description,
            content: article.content,
            url: article.url,
            source: article.source.name,
            publishedAt: article.publishedAt
        }));

    } catch (error) {

        console.error("News Tool Error:", error);
        // Return empty array instead of throwing to allow analysis to continue
        return [];

    }

}