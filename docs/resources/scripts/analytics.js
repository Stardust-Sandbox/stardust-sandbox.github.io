// Dynamically create and load the remote Google Tag script
const gaScript = document.createElement('script');
gaScript.async = true;
gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-LMR6HTKPF5";
document.head.appendChild(gaScript);

// Initialize the dataLayer and gtag function
window.dataLayer = window.dataLayer || [];
function gtag()
{
    window.dataLayer.push(arguments);
}

// Configure Google Analytics
gtag('js', new Date());
gtag('config', 'G-LMR6HTKPF5');
