// JavaScript code to handle the download when button is clicked
document.addEventListener('DOMContentLoaded', function() {
    var downloadBtn = document.getElementById('downloadBtn');
    
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            var link = document.createElement('a');
            link.download = 'Vasudev_Desai_Resume.docx'; // Set your desired filename here
            link.href = '/Users/sdesai/VS_workspace/resume1_portfolio/assets/docs/Vasudev_Desai_Resume.docx'; // Set your file path here
            link.click();
        });
    }
});
