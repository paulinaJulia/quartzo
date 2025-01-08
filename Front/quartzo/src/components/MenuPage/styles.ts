import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #f9f9f9;

    header {
        margin-bottom: 20px;
        text-align: center;

        h1 {
            color: #333;
            font-size: 2rem;
        }
    }

    .options {
        display: flex;
        flex-direction: column;
        gap: 15px;

        .button {
            padding: 15px 20px;
            background-color: #0b0d17;
            color: #fff;
            font-size: 1rem;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;

            &:hover {
                background-color: #333;
            }
        }
    }
`;
