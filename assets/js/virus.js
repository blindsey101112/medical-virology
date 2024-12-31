        function toggleSection(sectionId) {
            const section = document.getElementById(sectionId);
            section.style.display = section.style.display === "none" || section.style.display === "" ? "block" : "none";
        }

        function toggleDetail(button) {
            const detailedContent = button.previousElementSibling;
            if (detailedContent.style.display === "none" || detailedContent.style.display === "") {
                detailedContent.style.display = "block";
                button.textContent = "Show Less";
            } else {
                detailedContent.style.display = "none";
                button.textContent = "Show More";
            }
        }
