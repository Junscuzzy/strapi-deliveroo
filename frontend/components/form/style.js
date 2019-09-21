import styled from '@emotion/styled'
import { Input as BaseInputs } from 'reactstrap'

const Paper = styled.div`
  border: 1px solid lightgray;
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.2), 0 1px 1px 0 rgba(0, 0, 0, 0.14),
    0 2px 1px -1px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  margin: 48px auto;
  max-width: 450px;
  overflow: hidden;
`

const Header = styled.div`
  width: 100%;
  height: 120px;
  background-color: #2196f3;
  margin-bottom: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`

const FormWrapper = styled.div`
  padding: 10px 30px 50px 30px !important;
`

const Input = styled(BaseInputs)`
  height: 50px;
  font-size: 1.2em;
`

export { Paper, Header, FormWrapper, Input }
