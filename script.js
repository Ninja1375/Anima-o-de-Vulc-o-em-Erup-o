document.addEventListener('DOMContentLoaded', () => {
    const lavaContainer = document.querySelector('.lava-container');
    const smokeContainer = document.querySelector('.smoke-container');
    const fireContainer = document.querySelector('.fire-container');
    const body = document.querySelector('body');

    // Criar lava em erupção
    function createLava() {
        const lava = document.createElement('div');
        lava.classList.add('lava');
        lava.style.left = `${Math.random() * 100}%`;
        lavaContainer.appendChild(lava);

        // Remover lava após animação
        setTimeout(() => {
            lava.remove();
        }, 1000);
    }

    // Criar fumaça
    function createSmoke() {
        const smoke = document.createElement('div');
        smoke.classList.add('smoke');
        smoke.style.left = `${Math.random() * 100}%`;
        smokeContainer.appendChild(smoke);

        // Remover fumaça após animação
        setTimeout(() => {
            smoke.remove();
        }, 3000);
    }

    // Criar fogo
    function createFire() {
        const fire = document.createElement('div');
        fire.classList.add('fire');
        fire.style.left = `${Math.random() * 100}%`;
        fireContainer.appendChild(fire);

        // Remover fogo após animação
        setTimeout(() => {
            fire.remove();
        }, 500);
    }

    // Criar relâmpagos
    function createLightning() {
        const lightning = document.createElement('div');
        lightning.classList.add('lightning');
        body.appendChild(lightning);

        // Remover relâmpago após animação
        setTimeout(() => {
            lightning.remove();
        }, 300);
    }

    // Intervalo para criar lava, fumaça e fogo
    setInterval(createLava, 500);
    setInterval(createSmoke, 300);
    setInterval(createFire, 200);
    setInterval(createLightning, 5000);
});
