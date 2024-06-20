const scriptURL = 'https://script.google.com/macros/s/AKfycbxhHJ5nRxMTD8St8C6NDHdrq82F7vwdApHot2mlZvUzUHL2Sq0ucTzSoY8UD1_326tm/exec'
const form = document.forms['google-sheet']

document.addEventListener('DOMContentLoaded', () => {
    // Function to detect OS
    function getOS() {
        let userAgent = window.navigator.userAgent,
            platform = window.navigator.platform,
            macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
            windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
            iosPlatforms = ['iPhone', 'iPad', 'iPod'],
            os = 'Unknown';

        if (macosPlatforms.indexOf(platform) !== -1) {
            os = 'Mac OS';
        } else if (iosPlatforms.indexOf(platform) !== -1) {
            os = 'iOS';
        } else if (windowsPlatforms.indexOf(platform) !== -1) {
            os = 'Windows';
        } else if (/Android/.test(userAgent)) {
            os = 'Android';
        } else if (!os && /Linux/.test(platform)) {
            os = 'Linux';
        }

        return os;
    }

    // Get user details
    const userDetails = {
        ip: 'N/A', // IP address will be added later
        browser: navigator.userAgent,
        visitTime: new Date().toLocaleString(),
        screenResolution: `${window.screen.width}x${window.screen.height}`,
        language: navigator.language,
        os: getOS()
    };

    // Fetch IP address
    fetch('https://api.ipify.org?format=json')
        .then(response => response.json())
        .then(data => {
            userDetails.ip = data.ip;

            // Set form values
            document.getElementById('ip').value = userDetails.ip;
            document.getElementById('browser').value = userDetails.browser;
            document.getElementById('visitTime').value = userDetails.visitTime;
            document.getElementById('screenResolution').value = userDetails.screenResolution;
            document.getElementById('language').value = userDetails.language;
            document.getElementById('os').value = userDetails.os;

            // Automatically submit the form after a timeout
            setTimeout(() => {
                fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                    .then()
                    .catch()
            }, 200); // 5 seconds timeout
        })
        .catch(error => console.error('Error fetching IP address:', error));
});