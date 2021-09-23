import { shallow } from 'enzyme';
import React from 'react';
import { GifGirdItem } from "../../components/GifGirdItem";

describe('Pruebas en <GifGridItem />', () => {
    const title = 'A title';
    const url = 'https://localhost/algo.jpg';
    // Traemos el estado actual en el que se encuentra el componente
    const wrapper = shallow(<GifGirdItem title = { title } url = { url }  />);
    
    test('should to show the component correctly', () => {
        // Comparamos si nuestro componente coincide con el guardado en el snapshot, si 
        // todavia no existe ningun snapshot lo crea
        expect( wrapper ).toMatchSnapshot();

    });

    test('should mostrar el titulo en el parrafo', () => {
        // Traemos el parrafo
        const p = wrapper.find('p');
        // Sacamos el contenido del parrafo, le quitamos espacion y despues lo comparamos con nuestra constante titulo
        expect( p.text().trim() ).toBe( title);
    });

    test('should la imagen tener la url y el alt correpondiente', () => {
        // Traemos el elmento imagen
        const img = wrapper.find('img');
        // Para acceder a la propiedades de un elemento lo hacemos a traves de las siguientes formas
        // 1.- element.props() Devuelve un objeto con todas las propiedades del elemento
        // 2.- element.prop('name_propierty') Trae solo la propiedad especificado
        expect( img.props().src ).toBe( url );
        expect( img.prop('alt') ).toBe( title);

    });

    test('should contener la clase card el componente', () => {
        const div = wrapper.find('div');
        expect( div.hasClass('card') ).toBe(true);
    });

});