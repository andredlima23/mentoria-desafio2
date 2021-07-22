import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    section {
        height: 100vh;
        width: 100%;
        background: lightblue;
        display: flex;

        .product-content {
            display: grid;
            text-align: center;
            height: 600px;
            background: #FFF;
            border-radius: 12px;
            padding: 12px;
        }
    }
`