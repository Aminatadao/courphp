

// Attendre que le HTML soit entièrement chargé
document.addEventListener("DOMContentLoaded", () => {

  // Sélection de tous les éléments à animer
  const reveals = document.querySelectorAll(".reveal");

  // Création de l'observateur d'intersection
  // Il détecte quand un élément entre dans la zone visible de l’écran
  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {

        // Si l’élément est visible à l’écran
        if (entry.isIntersecting) {

          // On ajoute la classe "active" pour déclencher l’animation CSS
          entry.target.classList.add("active");
        }
      });
    },
    {
      threshold: 0.15 // L’animation démarre quand 15% de l’élément est visible
    }
  );

  // On applique l’observateur à chaque élément
  reveals.forEach(el => observer.observe(el));

});






