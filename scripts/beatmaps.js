// Ensure you are on the page with your most-played beatmaps
(async function downloadBeatmaps() {
    // Select all anchor tags or elements containing beatmap download links
    const beatmapLinks = Array.from(document.querySelectorAll('a[href*="osu.ppy.sh/beatmapsets"]'));

    // Extract URLs
    const downloadUrls = beatmapLinks.map(link => link.href);

    // Function to download a file programmatically
    function downloadFile(url) {
        const a = document.createElement('a');
        a.href = url;
        a.download = ''; // Use default filename
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }

    console.log(`Found ${downloadUrls.length} beatmaps to download.`);
    
    for (const url of downloadUrls) {
        console.log(`Downloading: ${url}`);
        // Add '/download' at the end of the URL if needed
        const downloadUrl = url.endsWith('/download') ? url : `${url}/download`;
        downloadFile(downloadUrl);

        // Optional: Wait between downloads to avoid overwhelming the server
        await new Promise(res => setTimeout(res, 1000)); // Wait 1 second
    }

    console.log('Download process completed.');
})();
