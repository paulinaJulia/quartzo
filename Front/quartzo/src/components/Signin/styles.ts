import styled from "styled-components";

export const Container = styled.div`
    .container{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: row;
    }

    .container1 {
        width: 50%;
        background-image: radial-gradient(
            circle at 50% 50%,
            #8a9cff 0,   
            #4876e5 50%,
            #00439b 100%
        );
        box-shadow: 1px 2px 3px #ccc;
        height: 100vh;
    }
    .image{
        margin: auto;
        align-items: center;
        justify-content: center;
        display: flex; width: 100%;
        height: 100%;
    }

    .container2 {
        width: 50%;
        display: flex
        align-items: center;
        margin: auto;
        // background: red;
        height: 100vh;
    }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 50vh;
    align-items: center;
    margin: auto;
    .input{
        width: 50%;
        justify-content: center;
        margin auto;
        background: #d3d3d3;
        margin-buttom: 1rem;
    }
`;

export const Logo = styled.div``;