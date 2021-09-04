import { mount }  from 'enzyme';
import { MemoryRouter } from 'react-router';
import { AuthContext } from '../../auth/AuthContext';
import { DashboardRouter } from '../../routers/DashboardRouter';


describe('Pruebas en <DashboardRouters />', () => {
    

    test('debe mostrarse correctamente', () => {
        const contextValue = {
            dispatch : jest.fn(),
            user : {
                    logged :false
                }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value = {contextValue}>
                <MemoryRouter>
                    <DashboardRouter />
                </MemoryRouter>
            </AuthContext.Provider>
        );

        expect(wrapper).toMatchSnapshot();

    })
    

})
