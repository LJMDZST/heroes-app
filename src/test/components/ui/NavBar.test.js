import React from 'react'

import { mount } from "enzyme"

import '@testing-library/jest-dom';
import { AuthContext } from '../../../auth/AuthContext'
import { NavBar } from '../../../components/ui/NavBar'
import { MemoryRouter,Router } from 'react-router'
import { types } from '../../../types/types'


describe('Pruebas en <NavBar />', () => {

    const historyMock = {
        push : jest.fn(),
        replace: jest.fn(),
        location: {},
        listen : jest.fn(),
        createHref: jest.fn()
    }

    const contextValue = {
        dispatch : jest.fn(),
        user : {
                name : 'leax',
                logged :true
            }
    }
    const wrapper = mount(
        <AuthContext.Provider value = {contextValue}>
            <MemoryRouter>
                <Router history= {historyMock}>
                    <NavBar />  
                </Router>
            </MemoryRouter>
        </AuthContext.Provider> 
    );  
    test('debe mostrarse correctamente', () => {
        
       

        expect(wrapper).toMatchSnapshot();

    })

    test('debe llamar el logout y usar history',()=>{


        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.logout
        });

        expect(historyMock.replace).toHaveBeenCalledWith('/login');
    })
    
})
