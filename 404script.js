// AI disclosure: I used ChatGPT to assist troubleshooting the directories.
document.addEventListener("DOMContentLoaded", function() {
    console.log('How did you get here? Why are you reading this?')
    // Fetch the IP address from the ipify API
    fetch("https://api.ipify.org?format=json")
        .then(response => response.json())
        .then(data => {
            var ip = data.ip;
            const url = window.location.pathname;
            const split = url.split('/').filter(Boolean);

            let directory = "/";
            let file = "";

            if (split.length > 0) {
                file = split[split.length - 1]; // Get file name
            }
            if (split.length > 1) {
                directory = '/' + split.slice(0, -1).join('/'); // Get the directory
            }

            document.getElementById("line1").innerHTML = `${ip}@fishtested:~${directory}$ <span class="file">${file}</span>`;
            document.getElementById("line2").textContent = `${file}: Error 404: Not found`;
        })
        .catch(error => {
            console.error("Error:", error);
        });
});
