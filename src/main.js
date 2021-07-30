import { router } from './router/index.routes';

// Importing styles with sass
import './main.sass'

router(window.location.hash)

window.addEventListener('hashchange', () => {
    router(window.location.hash)
});

