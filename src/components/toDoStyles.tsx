import styled, { css } from 'styled-components/macro'

type CrossedOutTextTypes = {
  checked: boolean
}

type AddButtonTypes = {
  buttonOpacity: string | number
}

type displayValueTypes = {
  displayValue: boolean
}

export const ToDoListStyle = styled.div`
	max-width: 800px;
	margin: 0 auto;
  text-align: center;
`

export const FormStyle = styled.div`
  height: 40px;
  display: flex;
  flex-direction: column;
`

export const FormsInput = styled.input`
  width: 50%;
  margin-right: 10px;
`

export const ButtonDelList = styled.button`
	padding: 10px 15px;
	margin: 0 auto;
`

export const CheckboxInput = styled.input`
	width: 20px;
  height: 20px;
`

export const CrossedOutText = styled.p`
  ${({ checked }: CrossedOutTextTypes) => (
    checked 
      ? css`
        text-decoration: line-through;
        pointer-events: none;
      ` 
      : ''
  )}
`

export const RemoveListItem = styled.button`
  background-color: #e16b66;
`
export const AddButton = styled.button`
  &:hover {
    opacity: ${({ buttonOpacity }: AddButtonTypes) => buttonOpacity || 1};
  }
`
export const EmptyDiv = styled.div``

export const EmptyHeading = styled.h1``

export const List = styled.ul`
  margin-top: 50px;
`

export const ListItem = styled.li`
  display: ${({ displayValue }: displayValueTypes) => displayValue ? 'flex' : 'none'};
`

export const WarningDiv = styled.div`
  margin: 15px;
  color: black;
  height: 100px;
  font-size: 20px;
`

