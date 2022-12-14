import styled from "styled-components";

const Display = () => {
  return(
    <VisualDisplay>
      1234567890
    </VisualDisplay>  
  );
}

const VisualDisplay = styled.div`
  width: 25vw;
  background-color: grey;
  display: flex;
  justify-content: flex-end;
  font-size: 3em;
  padding: 4px;
  border: 2px solid black;
`

export default Display;