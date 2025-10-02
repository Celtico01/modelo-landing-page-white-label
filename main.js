// Este evento garante que o script só será executado após o carregamento completo do DOM.
document.addEventListener('DOMContentLoaded', () => {

  // ===================================================================================
  // Funcionalidade do Menu Hambúrguer (Navbar) para dispositivos móveis
  // ===================================================================================

  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  if ($navbarBurgers.length > 0) {
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
        const target = el.dataset.target;
        const $target = document.getElementById(target);
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
      });
    });
  }

  // ===================================================================================
  // Funcionalidade do Modal
  // ===================================================================================

  function openModal($el) {
    $el.classList.add('is-active');
    document.documentElement.classList.add('is-clipped');
  }

  function closeModal($el) {
    $el.classList.remove('is-active');
    document.documentElement.classList.remove('is-clipped');
  }

  function closeAllModals() {
    // CORRIGIDO: Removido o (||) desnecessário e incorreto
    document.querySelectorAll('.modal').forEach(($modal) => {
      closeModal($modal);
    });
  }

  // Adiciona um evento de clique nos botões para abrir um modal específico
  document.querySelectorAll('.js-modal-trigger').forEach(($trigger) => {
    const modal = $trigger.dataset.target;
    const $target = document.getElementById(modal);

    $trigger.addEventListener('click', (event) => {
      event.preventDefault();
      openModal($target);
    });
  });

  // Adiciona um evento de clique em vários elementos filhos para fechar o modal pai
  document.querySelectorAll('.modal-background,.modal-close,.modal-card-head.delete,.modal-card-foot.button.is-cancel').forEach(($close) => {
    const $target = $close.closest('.modal');

    $close.addEventListener('click', () => {
      closeModal($target);
    });
  });

  // Adiciona um evento de teclado para fechar todos os modais com a tecla "Escape"
  document.addEventListener('keydown', (event) => {
    if (event.code === 'Escape') {
      closeAllModals();
    }
  });
});