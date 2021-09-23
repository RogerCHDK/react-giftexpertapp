import { shallow } from 'enzyme';
import React from 'react';
import { GifGirdItem } from "../../components/GifGirdItem";

describe('Pruebas en <GifGridItem />', () => {
    
    test('should to show the component correctly', () => {
        
        const wrapper = shallow(<GifGirdItem/>);

        expect( wrapper ).toMatchSnapshot();
    });
});