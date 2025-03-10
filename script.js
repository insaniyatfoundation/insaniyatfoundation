document.getElementById('donateBtn').addEventListener('click', function() {
    document.getElementById('googleScanner').style.display = 'block';
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: 'smooth'
    });
});

document.getElementById('closeScanner').addEventListener('click', function() {
    document.getElementById('googleScanner').style.display = 'none';
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
// JavaScript for any dynamic interactions, if required (for example, smooth scrolling)
