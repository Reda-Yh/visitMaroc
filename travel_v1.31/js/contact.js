document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Simule une condition d'erreur pour l'exemple (par exemple : si le champ email est vide)
        const emailField = form.querySelector('input[type="email"]');
        if (!emailField.value) {
            Swal.fire({
                title: 'Error!',
                text: 'Please provide a valid email address.',
                icon: 'error',
                confirmButtonColor: getComputedStyle(document.documentElement).getPropertyValue('--red-color').trim(),
                background: '#fff',
            });
            return;
        }

        // Si la validation est réussie, affiche SweetAlert pour succès
        Swal.fire({
            title: 'Message Sent!',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            confirmButtonColor: getComputedStyle(document.documentElement).getPropertyValue('--green-color').trim(),
            background: '#fff',
        }).then((result) => {
            if (result.isConfirmed) {
                form.submit(); // Soumet le formulaire si l'utilisateur confirme
            }
        });
    });
});
