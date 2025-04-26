// For the faq section

const questions = document.querySelectorAll(".faq-question");

questions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    const isOpen = answer.style.display === "block";

    // First hide all
    document.querySelectorAll(".faq-answer").forEach((a) => {
      a.style.display = "none";
    });

    // Then toggle: if it was already open, keep it closed, otherwise open
    if (!isOpen) {
      answer.style.display = "block";
    }
  });
});
