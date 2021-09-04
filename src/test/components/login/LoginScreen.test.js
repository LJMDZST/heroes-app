import { mount } from "enzyme";
import { AuthContext } from "../../../auth/AuthContext";
import { LoginScreen } from "../../../components/login/LoginScreen";
import { types } from "../../../types/types";


describe('Pruebas en <LoginScreen/>', () => {
    const history = {
        length: 10,
        replace: jest.fn()
    }
    const contextValue = {
        dispatch : jest.fn(),
        user : {
            name : 'leax',
            logged : true
        }
    }
    const wrapper = mount(
        <AuthContext.Provider value ={ contextValue } >
            <LoginScreen history={history}/>
        </AuthContext.Provider>
        
    );
    
    test('debe de mostrarse corerctamente', () => {
        
        
        expect(wrapper).toMatchSnapshot();
    })

    test('debe realizar el dispatch y la navegacion', () => {
       
        wrapper.find('button').prop('onClick')();

        expect(contextValue.dispatch).toHaveBeenCalledWith({
            type: types.login,
            payload : {
                name :'leax'
            }
        });
        expect(history.replace).toHaveBeenCalled();


    })
    
    
})
