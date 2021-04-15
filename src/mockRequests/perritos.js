import DogImg1 from '../assets/dogs/dog-1.png';
import DogImg2 from '../assets/dogs/dog-2.png';
import DogImg3 from '../assets/dogs/dog-3.png';
import DogImg4 from '../assets/dogs/dog-4.png';
import DogImg5 from '../assets/dogs/dog-5.png';
import DogImg6 from '../assets/dogs/dog-6.png';
import DogImg7 from '../assets/dogs/dog-7.png';
import DogImg8 from '../assets/dogs/dog-8.png';
import DogImg9 from '../assets/dogs/dog-9.png';

export const dogs = [
    { id: 1, nombre: 'Tokyo', edad: '3 meses', img: DogImg1, genero: 'Masculino' },
    { id: 2, nombre: 'Perla', edad: '5 meses', img: DogImg2, genero: 'Femenino' },
    { id: 3, nombre: 'Tommy', edad: '5 meses', img: DogImg3, genero: 'Masculino' },
    { id: 4, nombre: 'Lisboa', edad: '8 meses', img: DogImg4, genero: 'Femenino' },
    { id: 5, nombre: 'Denver', edad: '8 meses', img: DogImg5, genero: 'Masculino' },
    { id: 6, nombre: 'Cookie', edad: '3 meses', img: DogImg6, genero: 'Femenino' },
    { id: 7, nombre: 'Venezia', edad: '2 meses', img: DogImg7, genero: 'Femenino' },
    { id: 8, nombre: 'Lucia', edad: '2 meses', img: DogImg8, genero: 'Femenino' },
    { id: 9, nombre: 'Milano', edad: '2 meses', img: DogImg9, genero: 'Femenino' },
]

export const getDogs = () => dogs
// eslint-disable-next-line import/no-anonymous-default-export
export default {
    getDogs
}