import React from 'react';
import {mount} from 'enzyme';
import { MemoryRouter, Route } from 'react-router';
import { SearchScreen } from '../../../components/search/SearchScreen';

describe('Pruebas en <SearchSrcreen />', () => {
    

    test(' debe mostrarse con los valores con defencto', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/search']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        )
        expect(wrapper).toMatchSnapshot();
    })

    test('debe mostrar a Batman y el unput con el valor del queryString', () => {
        const wrapper = mount (
            <MemoryRouter initialEntries={['/search?q=batman']}>
                <Route path="/search" component={SearchScreen} />
            </MemoryRouter>
        )

        expect(wrapper.find('input').prop('value')).toBe('batman');

    })
    
    
})
