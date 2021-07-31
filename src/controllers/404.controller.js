import view from '../views/404.view.html';
import '../styles/404styles.scss';

export const NotFound404 = () => {

    const container = document.createElement('div');
    container.classList.add('notFound');
    container.innerHTML = view;

    return container

}
