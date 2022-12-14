import styled from 'styled-components'
import Button from '../button/button.component'

export const PaymentFormContainer = styled.div`
    height: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    h2 {
        margin-bottom: 1.5rem ;
    }
    hr {
        margin-bottom: 1.5rem ;
    }
    
`

export const FormContainer = styled.form`
    height: 100px;
    min-width: 500px;
    @media(max-width: 600px){
        min-width: 36rem;
    }
`

export const PaymentButton = styled(Button)`
margin-left: auto;
margin-top: 30px;
`