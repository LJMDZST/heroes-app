import React from 'react';
import {mount} from 'enzyme';
import { PrivateRoute } from '../../routers/PrivateRoute';
import { MemoryRouter } from 'react-router';


describe('Pruebas en <PrivateRoute />', () => {

    const props = {
        location : {
            pathname : '/marvel'
        }
    }

    Storage.prototype.setItem = jest.fn();
    
    test('debe mostrar el componente si esta autenticado y guardar el localStorage',()=>{
        // Ejemplo para evaluar los routers , se reemplaza shallow por mount
        const wrapper = mount(
            <MemoryRouter> 
                <PrivateRoute 
                    isAutenticated ={true}
                    component = {()=> <span>RUTA PRIVADA</span>}
                    {...props}
                />
            </MemoryRouter>
        );
        
        expect(wrapper.find('span').exists()).toBe(true);
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/marvel');
    })

    test('debe bloquear el componente si no esta autenticado', () => {
        
        const wrapper = mount(
            <MemoryRouter> 
                <PrivateRoute 
                    isAutenticated ={false}
                    component = {()=> <span>RUTA PRIVADA</span>}
                    {...props}
                />
            </MemoryRouter>
        );
        expect(wrapper.find('span').exists()).toBe(false);
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath','/marvel');
    })
    
})
