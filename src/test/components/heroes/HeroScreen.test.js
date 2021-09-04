import {  mount } from "enzyme";
import { MemoryRouter,Route } from "react-router";
import { HeroScreen } from "../../../components/heroes/HeroScreen";


describe('Pruebas en <HeroScreen />', () => {
    const history = {
        length: 10,
        push: jest.fn(),
        goBack: jest.fn()
    }
   

    test('debe mostrar el componente redirect si no hay url', () => {

       
    
        const wrapper = mount(
            <MemoryRouter initialEntries= { ['/hero'] }>
                <HeroScreen history={ history }/>
            </MemoryRouter>
    
        );

        expect(wrapper.find('Redirect').exists()).toBe(true);
    })
    
    test('debe mostrar un hero si el parametro existe y se encuentra',()=>{
        //http://localhost:3000/heroe/marvel-captain
        const wrapper = mount(
            <MemoryRouter initialEntries= { ['/heroe/marvel-captain'] }>
                <Route path="/heroe/:heroeId" component={HeroScreen}/>
            </MemoryRouter>
    
        );

        expect(wrapper.find('.list-group').exists()).toBe(true);
    })

    test('debe regresar a la pantalla anterior con PUSH', () => {

        const historyLocal = {
            length: 1,
            push: jest.fn(),
            goBack: jest.fn()
        }
        
        const wrapper = mount(
            <MemoryRouter initialEntries= { ['/heroe/marvel-captain'] }>
                <Route 
                    path="/heroe/:heroeId" 
                    component={ (props) => <HeroScreen history={historyLocal} />}
                />
            </MemoryRouter>
    
        );

        wrapper.find('button').prop('onClick')();
        
        expect(historyLocal.push).toHaveBeenCalledWith('/');
        expect(historyLocal.goBack).not.toHaveBeenCalled();


    })

    test('debe regresar a la pantalla anterior', () => {
        const wrapper = mount(
            <MemoryRouter initialEntries= { ['/heroe/marvel-captain'] }>
                <Route 
                    path="/heroe/:heroeId" 
                    component={ (props) => <HeroScreen history={history} />}
                />
            </MemoryRouter>
    
        );

        wrapper.find('button').prop('onClick')();
        
        expect(history.goBack).toHaveBeenCalled();
        expect(history.push).not.toHaveBeenCalledWith('/');

    })

    test('debe de llamar el redirect si el heroe no existe',()=>{
    
        const wrapper = mount(
            <MemoryRouter initialEntries= { ['/heroe/marvel-captain123141'] }>
                <Route 
                    path="/heroe/:heroeId" 
                    component={ (props) => <HeroScreen history={history} />}
                />
            </MemoryRouter>
    
        );

        expect(wrapper.text()).toBe('');

    })
    
    
})
