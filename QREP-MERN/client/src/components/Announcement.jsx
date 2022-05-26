import styled from "styled-components";

const Container = styled.div`
  height: 25px;
  background-color: #219bb2;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
  
`;

const Announcement = () => {
    return (
        <Container>
            Demo Version of QREP web-site
        </Container>
    )
}

export default Announcement